"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAN_TYPE = exports.BenefitCheckState = exports.BenefitCode = exports.PackageName = exports.ProductName = void 0;
var ProductName;
(function (ProductName) {
    ProductName["NALAR_SELF_DIAGNOSE"] = "Nalar Self Diagnose";
    ProductName["MEDICAL_PRESCRIPTION"] = "Medical Prescription";
    ProductName["OFFLINE_CONSULTATION"] = "Offline Consultation General Practicioner";
    ProductName["LIFE_INSURANCE"] = "Life Insurance";
    ProductName["IN_PATIENT_CASH_PLAN"] = "In-patient Cash Plan";
})(ProductName = exports.ProductName || (exports.ProductName = {}));
var PackageName;
(function (PackageName) {
    PackageName["BASIC"] = "basic-plan";
    PackageName["STANDARD"] = "standard-plan";
    PackageName["PREMIUM"] = "premium-plan";
})(PackageName = exports.PackageName || (exports.PackageName = {}));
var BenefitCode;
(function (BenefitCode) {
    BenefitCode["TELECONSULTATION"] = "TLC";
    BenefitCode["ONLINE_DRUGS"] = "ODG";
    BenefitCode["AREA_OF_COVER"] = "AOC";
    BenefitCode["DIAGNOSTIC"] = "DNT";
    BenefitCode["EMERGENCY_OUTPATIENT"] = "EMR";
    BenefitCode["DRUGS"] = "DGS";
    BenefitCode["F2F_GP"] = "FGP";
    BenefitCode["F2F_SP"] = "FSP";
    BenefitCode["ANNUAL_LIMIT"] = "ANN";
    BenefitCode["HOSPITALIZATION"] = "HOC";
    BenefitCode["ROOM_AND_BOARD"] = "RBO";
    BenefitCode["OPERATING_THEATRE"] = "OTC";
    BenefitCode["NURSING"] = "NDD";
    BenefitCode["SURGEON_AND_ANAESTHETIST"] = "SAC";
    BenefitCode["INTENSIVE_CARE_UNIT"] = "ICC";
    BenefitCode["IMAGING"] = "CXT";
    BenefitCode["SURGERY"] = "SGS";
    BenefitCode["MISCELLANEOUS"] = "MIS";
    BenefitCode["PRE_AND_POST_HOSPITALIZATION"] = "PPH";
    BenefitCode["PRE_HOSPITALIZATION"] = "PRH";
    BenefitCode["POST_HOSPITALIZATION"] = "POH";
    BenefitCode["THERAPY"] = "PTT";
    BenefitCode["MINOR_SURGERY"] = "SGM";
    BenefitCode["AMBULANCE"] = "AMB";
    BenefitCode["CANCER_KIDNEY_DIALYSIS"] = "CKD";
    BenefitCode["CASH_BENEFIT"] = "COV";
    BenefitCode["SUB_ANNUAL_LIMIT"] = "SNN";
    BenefitCode["NURSE_AT_HOME"] = "HNN";
    BenefitCode["DENTAL_CARE"] = "DEN";
    BenefitCode["EYE_CARE"] = "EYE";
    BenefitCode["VACCINATION"] = "VAK";
    BenefitCode["HEALTH_CHECK"] = "MCU";
    BenefitCode["LABOUR_AND_DELIVERY"] = "DLV";
    BenefitCode["PRE_AND_POST_DELIVERY"] = "PPD";
    BenefitCode["NORMAL_DELIVERY"] = "CDB";
    BenefitCode["CHILDBIRTH_COMPLICATION"] = "CBY";
    BenefitCode["NEWBORN_BABY"] = "BBY";
    BenefitCode["REY_CARD"] = "RCD";
    BenefitCode["SHORT_PERIOD"] = "SPR";
    BenefitCode["MEDIUM_PERIOD"] = "MPR";
    BenefitCode["LONG_PERIOD"] = "LPR";
    BenefitCode["INPATIENT_EXCESS"] = "IPE";
    BenefitCode["INPATIENT_ALLOWANCE"] = "IAL";
    BenefitCode["ONLINE_NUTRITIONIST"] = "NUT";
})(BenefitCode = exports.BenefitCode || (exports.BenefitCode = {}));
var BenefitCheckState;
(function (BenefitCheckState) {
    BenefitCheckState["ERROR"] = "error";
    BenefitCheckState["OK"] = "ok";
})(BenefitCheckState = exports.BenefitCheckState || (exports.BenefitCheckState = {}));
exports.PLAN_TYPE = {
    COMPLETE_CARE: 'inpatient-complete',
    CRITICAL_CARE: 'inpatient-critical',
    ACCIDENT_CARE: 'inpatient-accident',
    OUTPATIENT_CARE: 'outpatient',
    INPATIENT_ENTERPRISE_CARE: 'inpatient-enterprise',
    OUTPATIENT_ENTERPRISE_CARE: 'outpatient-enterprise',
    DOW_ENTERPRISE_CARE: 'dow-enterprise',
    DOW_ENTERPRISE_DENTAL: 'dow-enterprise-dental',
    DOW_ENTERPRISE_WELLNESS: 'dow-enterprise-wellness',
    DOW_ENTERPRISE_OPTIC: 'dow-enterprise-optical',
    MATERNITY_ENTERPRISE_CARE: 'maternity-enterprise',
    MEMBERSHIP: 'membership',
    ONE_TIME_PRODUCT: 'onetime',
    INPATIENT_ALLOWANCE_WORLDWIDE: 'inpatient-allowance-worldwide',
    INPATIENT_ALLOWANCE_INDONESIA: 'inpatient-allowance-indonesia',
    MEMBERSHIP_NUTRITIONIST: 'membership-nutritionist',
};
