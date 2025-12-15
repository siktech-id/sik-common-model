"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionBenefitCheck = void 0;
const app_1 = require("../app");
const BENEFIT_SKIP_PER_VISIT = [
    app_1.BenefitCode.ROOM_AND_BOARD,
    app_1.BenefitCode.LONG_PERIOD,
    app_1.BenefitCode.MEDIUM_PERIOD,
    app_1.BenefitCode.SHORT_PERIOD,
    app_1.BenefitCode.CASH_BENEFIT,
    app_1.BenefitCode.NURSE_AT_HOME,
    app_1.BenefitCode.INPATIENT_ALLOWANCE
];
const checkAnnualLimit = ({ limit, limit_used: limitUsed, amount, limit_type: limitType }, benefit, isReySaldo = false) => {
    const errorMessage = {
        annualExceedMsg: "plan annual limit exceed" /* PLAN_ANNUAL_EXCEED */,
        annualOutOfLimitMsg: "plan annual limit out of limit" /* PLAN_ANNUAL_OUT_OF_LIMIT */,
        familyAnnualExceedMsg: "plan annual limit exceed" /* PLAN_ANNUAL_EXCEED */,
        familyAnnualOutOfLimitMsg: "plan annual limit out of limit" /* PLAN_ANNUAL_OUT_OF_LIMIT */
    };
    if (isReySaldo) {
        errorMessage.annualExceedMsg = "reysaldo annual limit exceed" /* REYSALDO_ANNUAL_EXCEED */;
        errorMessage.annualOutOfLimitMsg = "reysaldo annual limit out of limit" /* REYSALDO_ANNUAL_OUT_OF_LIMIT */;
        errorMessage.familyAnnualExceedMsg = "reysaldo family annual limit exceed" /* REYSALDO_FAMILY_ANNUAL_EXCEED */;
        errorMessage.familyAnnualOutOfLimitMsg = "reysaldo family annual limit out of limit" /* REYSALDO_FAMILY_ANNUAL_OUT_OF_LIMIT */;
    }
    if (Number(limit) === Number(limitUsed)) {
        return {
            state: app_1.BenefitCheckState.ERROR,
            message: limitType === app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY ? errorMessage.familyAnnualExceedMsg : errorMessage.annualExceedMsg,
            data: benefit
        };
    }
    if (Number(amount) && (Number(limit) < Number(amount) + Number(limitUsed))) {
        return {
            state: app_1.BenefitCheckState.ERROR,
            message: limitType === app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY ? errorMessage.familyAnnualOutOfLimitMsg : errorMessage.annualOutOfLimitMsg,
            data: benefit
        };
    }
    if (Number(amount) && (Number(amount) + Number(limitUsed) < 0)) {
        return {
            state: app_1.BenefitCheckState.ERROR,
            message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
            data: benefit
        };
    }
    return null;
};
const subscriptionBenefitCheck = ({ code, subscription, amount, times, detailId, enterpriseMember, action = app_1.BENEFIT_DEDUCTION_ACTION.DEDUCTION }) => {
    let subscriptionDetail;
    let benefits;
    if (!detailId) {
        benefits = subscription.details
            .map((detail) => detail.benefits.map((detailBenefit) => (Object.assign(Object.assign({}, detailBenefit), { plan_code: detail.product_plan_code }))))
            .reduce((prev, curr) => {
            return prev.concat(curr);
        });
    }
    else {
        const detail = subscription.details.find((item) => item.id === detailId);
        if (!detail) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "user does not have the specific benefit" /* NOT_EXIST */,
                data: null
            };
        }
        benefits = detail.benefits.map((detailBenefit) => (Object.assign(Object.assign({}, detailBenefit), { plan_code: detail.product_plan_code })));
    }
    if (!amount)
        amount = 0;
    /** get slug of benefit code */
    const benefit = benefits === null || benefits === void 0 ? void 0 : benefits.find((item) => item.slug.startsWith(code));
    const benefitCode = benefit === null || benefit === void 0 ? void 0 : benefit.slug.substring(0, 3);
    /** check is benefit exist */
    if (!benefit) {
        return {
            state: app_1.BenefitCheckState.ERROR,
            message: "user does not have the specific benefit" /* NOT_EXIST */,
            data: null
        };
    }
    /** find subscription detail based on id */
    if (!detailId) {
        subscriptionDetail = subscription.details.find(detail => (detail.product_plan_code === benefit.plan_code));
    }
    else {
        subscriptionDetail = subscription.details.find(detail => (detail.id === detailId) && (detail.product_plan_code === benefit.plan_code));
    }
    if (enterpriseMember) {
        const { family_limit: familyAnnualLimit, family_limit_used: familyAnnualLimitUsed, limit: annualLimit, limit_used: annualLimitUsed } = enterpriseMember;
        if (action === app_1.BENEFIT_DEDUCTION_ACTION.ADDITION) {
            if ((Number(annualLimit) && Number(annualLimitUsed) + Number(amount) < 0) || (Number(familyAnnualLimit) && Number(familyAnnualLimitUsed) + Number(amount) < 0)) {
                return {
                    state: app_1.BenefitCheckState.ERROR,
                    message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                    data: benefit
                };
            }
            return {
                state: app_1.BenefitCheckState.OK,
                message: "benefit can be used" /* SUCCESS */,
                data: benefit
            };
        }
        if (Number(familyAnnualLimit) && !Number(annualLimit)) {
            benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY;
            benefit.deductable_amount = Math.min(Number(amount), Number(familyAnnualLimit) - Number(familyAnnualLimitUsed));
            const result = checkAnnualLimit({ limit: familyAnnualLimit, limit_used: familyAnnualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY }, benefit, true);
            if (result)
                return result;
        }
        else if (Number(annualLimit) && Number(familyAnnualLimit)) {
            /** get the lowest value between individual and family */
            const isIndividualLowerThanFamily = (Number(familyAnnualLimit) - Number(familyAnnualLimitUsed)) > (Number(annualLimit) - Number(annualLimitUsed));
            if (isIndividualLowerThanFamily) {
                benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL;
                benefit.deductable_amount = Math.min(Number(amount), Number(annualLimit) - Number(annualLimitUsed));
                const result = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL }, benefit, true);
                if (result)
                    return result;
            }
            else {
                benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY;
                benefit.deductable_amount = Math.min(Number(amount), Number(familyAnnualLimit) - Number(familyAnnualLimitUsed));
                const annualResult = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL }, benefit, true);
                if (annualResult)
                    return annualResult;
                const familyResult = checkAnnualLimit({ limit: familyAnnualLimit, limit_used: familyAnnualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY }, benefit, true);
                if (familyResult)
                    return familyResult;
            }
        }
        else if (Number(annualLimit) && !Number(familyAnnualLimit)) {
            benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL;
            benefit.deductable_amount = Math.min(Number(amount), Number(annualLimit) - Number(annualLimitUsed));
            const result = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL }, benefit, true);
            if (result)
                return result;
        }
    }
    const { annual_limit_type: annualLimitType, family_annual_limit: familyAnnualLimit, family_annual_limit_used: familyAnnualLimitUsed, annual_limit: annualLimit, annual_limit_used: annualLimitUsed, plan_group_limit: planGroupLimit, plan_group_limit_used: planGroupLimitUsed, plan_group_tag: planGroupTag } = subscriptionDetail;
    if (action === app_1.BENEFIT_DEDUCTION_ACTION.ADDITION) {
        if (benefit.times_used + Number(times) < 0 || (Number(benefit.annual_limit) && Number(benefit.annual_limit_used) + Number(amount) < 0)) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                data: benefit
            };
        }
        if ((Number(annualLimit) && Number(annualLimitUsed) + Number(amount) < 0)) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                data: benefit
            };
        }
        if ((Number(familyAnnualLimit) && Number(familyAnnualLimitUsed) + Number(amount) < 0)) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                data: benefit
            };
        }
        return {
            state: app_1.BenefitCheckState.OK,
            message: "benefit can be used" /* SUCCESS */,
            data: benefit
        };
    }
    if (annualLimitType === app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY && Number(familyAnnualLimit)) {
        benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY;
        benefit.deductable_amount = Math.min(Number(amount), Number(familyAnnualLimit) - Number(familyAnnualLimitUsed));
        if (planGroupTag && planGroupLimit) {
            benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
        }
        const result = checkAnnualLimit({ limit: familyAnnualLimit, limit_used: familyAnnualLimitUsed, amount, limit_type: annualLimitType }, benefit);
        if (result)
            return result;
    }
    else if (annualLimitType === app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL_FAMILY && (Number(annualLimit) && Number(familyAnnualLimit))) {
        /** get the lowest value between individual and family */
        const isIndividualLowerThanFamily = (Number(familyAnnualLimit) - Number(familyAnnualLimitUsed)) > (Number(annualLimit) - Number(annualLimitUsed));
        if (isIndividualLowerThanFamily) {
            benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL;
            benefit.deductable_amount = Math.min(Number(amount), Number(annualLimit) - Number(annualLimitUsed));
            if (planGroupTag && planGroupLimit) {
                benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
            }
            const result = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL }, benefit);
            if (result)
                return result;
        }
        else {
            benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY;
            benefit.deductable_amount = Math.min(Number(amount), Number(familyAnnualLimit) - Number(familyAnnualLimitUsed));
            if (planGroupTag && planGroupLimit) {
                benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
            }
            const annualResult = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL }, benefit);
            if (annualResult)
                return annualResult;
            const familyResult = checkAnnualLimit({ limit: familyAnnualLimit, limit_used: familyAnnualLimitUsed, amount, limit_type: app_1.PLAN_ANNUAL_LIMIT_TYPE.FAMILY }, benefit);
            if (familyResult)
                return familyResult;
        }
    }
    else if (Number(annualLimit)) {
        benefit.deduct_limit_type = app_1.PLAN_ANNUAL_LIMIT_TYPE.INDIVIDUAL;
        benefit.deductable_amount = Math.min(Number(amount), Number(annualLimit) - Number(annualLimitUsed));
        if (planGroupTag && planGroupLimit) {
            benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
        }
        const result = checkAnnualLimit({ limit: annualLimit, limit_used: annualLimitUsed, amount, limit_type: annualLimitType }, benefit);
        if (result)
            return result;
    }
    /** check benefit quota... */
    if (Number(benefit.annual_limit)) {
        benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(amount), Number(benefit.annual_limit) - Number(benefit.annual_limit_used));
        if (planGroupTag && planGroupLimit) {
            benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
        }
        if (Number(benefit.annual_limit) === Number(benefit.annual_limit_used)) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "benefit annual limit exceed" /* BENEFIT_ANNUAL_EXCEED */,
                data: benefit
            };
        }
        if (Number(amount) && Number(benefit.annual_limit_used) + Number(amount) > Number(benefit.annual_limit)) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "benefit annual limit out of limit" /* BENEFIT_ANNUAL_OUT_OF_LIMIT */,
                data: benefit
            };
        }
        if (Number(amount) && Number(benefit.annual_limit_used) + Number(amount) < 0) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                data: benefit
            };
        }
    }
    if (!BENEFIT_SKIP_PER_VISIT.includes(benefitCode) && Number(amount) && Number(benefit.per_visit_limit)) {
        const visitLimit = Number(times) ? Number(benefit.per_visit_limit) * Number(times) : Number(benefit.per_visit_limit);
        benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(amount), visitLimit);
        if (planGroupTag && planGroupLimit) {
            benefit.deductable_amount = Math.min(Number(benefit.deductable_amount), Number(planGroupLimit) - Number(planGroupLimitUsed));
        }
        const isOutOfVisitLimit = visitLimit < Number(amount);
        if (isOutOfVisitLimit) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "user reach limit per usage" /* BENEFIT_PER_VISIT_OUT_OF_LIMIT */,
                data: benefit
            };
        }
    }
    if (Number(benefit.times)) {
        if (times && benefit.times < times + benefit.times_used) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "benefit usage out of limit" /* BENEFIT_USAGE_OUT_OF_LIMIT */,
                data: benefit
            };
        }
        if (times && (times + benefit.times_used) < 0) {
            return {
                state: app_1.BenefitCheckState.ERROR,
                message: "ending value must be greater than zero" /* ENDING_VALUE_GREATER_THAN_ZERO */,
                data: benefit
            };
        }
    }
    if (benefit.parent) {
        return exports.subscriptionBenefitCheck({
            code: benefit.parent,
            subscription,
            amount,
            times,
            detailId,
            enterpriseMember,
            action
        });
    }
    return {
        state: app_1.BenefitCheckState.OK,
        message: "benefit can be used" /* SUCCESS */,
        data: benefit
    };
};
exports.subscriptionBenefitCheck = subscriptionBenefitCheck;
