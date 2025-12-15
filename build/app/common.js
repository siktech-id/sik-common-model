"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISBURSEMENT_STATUS = exports.INSURANCE_MAPPING_CATEGORY = exports.FILE_PROTOCOL = exports.SUPPORTED_LANGUAGES = exports.SCHEDULE_NOTIF_PLATFORM = exports.PLAN_ANNUAL_LIMIT_TYPE = exports.PUSH_NOTIF_CHANNELS = exports.AUTHORIZE_CARD_TYPE = exports.BENEFIT_DEDUCTION_CHARGE_TYPE = exports.BENEFIT_DEDUCTION_ACTION = exports.CLAIM_PROVIDER = exports.PLAN_CATEGORY = exports.BENEFIT_DEDUCTION_TYPE = exports.SUBSCRIPTION_TYPE = exports.SUBSCRIPTION_STATUS = exports.Channel = exports.MIMETYPE = exports.ServiceName = void 0;
var ServiceName;
(function (ServiceName) {
    ServiceName["BACKOFFICE"] = "rey-backoffice";
    ServiceName["AUTH"] = "rey-auth";
    ServiceName["NOTIFICATION"] = "rey-notification";
    ServiceName["PURCHASE"] = "rey-purchase";
    ServiceName["CATALOG"] = "rey-catalog";
    ServiceName["FILE_GENERATOR"] = "rey-file-generator";
    ServiceName["CLAIM"] = "rey-claim";
    ServiceName["EHR"] = "rey-ehr";
    ServiceName["CHAT_BACKEND"] = "rey-chat-backend";
    ServiceName["FDS"] = "rey-fds";
    ServiceName["PRODUCT"] = "rey-product";
    ServiceName["ENTERPRISE"] = "rey-enterprise";
    ServiceName["ROCKET"] = "rey-rocket";
    ServiceName["ANALYTICS"] = "rey-analytics";
    ServiceName["REWARD"] = "rey-ward";
    ServiceName["PROVIDER"] = "rey-provider";
    ServiceName["TOOLS"] = "rey-tools";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));
var MIMETYPE;
(function (MIMETYPE) {
    MIMETYPE["APPLICATION_PDF"] = "application/pdf";
    MIMETYPE["TEXT_CSV"] = "text/csv";
    MIMETYPE["IMAGE_JPG"] = "image/jpg";
    MIMETYPE["IMAGE_JPEG"] = "image/jpeg";
    MIMETYPE["EXCEL_XLS"] = "application/vnd.ms-excel";
    MIMETYPE["EXCEL_XLSX"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    MIMETYPE["TEXT_PLAIN"] = "text/plain";
    MIMETYPE["IMAGE_PNG"] = "image/png";
    MIMETYPE["WORD_DOC"] = "application/msword";
    MIMETYPE["WORD_DOCX"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    MIMETYPE["APPLICATION_CFB"] = "application/x-cfb";
})(MIMETYPE = exports.MIMETYPE || (exports.MIMETYPE = {}));
var Channel;
(function (Channel) {
    Channel["B2B"] = "B2B";
    Channel["B2C"] = "B2C";
})(Channel = exports.Channel || (exports.Channel = {}));
var SUBSCRIPTION_STATUS;
(function (SUBSCRIPTION_STATUS) {
    SUBSCRIPTION_STATUS["DRAFT"] = "draft";
    SUBSCRIPTION_STATUS["WAITING_FIRST_PAYMENT"] = "waiting_first_payment";
    SUBSCRIPTION_STATUS["ACTIVE"] = "active";
    SUBSCRIPTION_STATUS["INACTIVE"] = "inactive";
    SUBSCRIPTION_STATUS["TERMINATED"] = "terminated";
    SUBSCRIPTION_STATUS["PENDING"] = "pending";
})(SUBSCRIPTION_STATUS = exports.SUBSCRIPTION_STATUS || (exports.SUBSCRIPTION_STATUS = {}));
var SUBSCRIPTION_TYPE;
(function (SUBSCRIPTION_TYPE) {
    SUBSCRIPTION_TYPE["INDIVIDUAL_2020"] = "individual-2020";
    SUBSCRIPTION_TYPE["INDIVIDUAL_2022"] = "individual-2022";
    SUBSCRIPTION_TYPE["FAMILY_2022"] = "family-2022";
    SUBSCRIPTION_TYPE["PARTNERSHIP"] = "partnership";
    SUBSCRIPTION_TYPE["INDIVIDUAL_B2B"] = "B2B";
    SUBSCRIPTION_TYPE["FAMILY_B2B"] = "family-B2B";
})(SUBSCRIPTION_TYPE = exports.SUBSCRIPTION_TYPE || (exports.SUBSCRIPTION_TYPE = {}));
var BENEFIT_DEDUCTION_TYPE;
(function (BENEFIT_DEDUCTION_TYPE) {
    BENEFIT_DEDUCTION_TYPE["STANDARD"] = "standard";
    BENEFIT_DEDUCTION_TYPE["EX_GRATIA"] = "ex-gratia";
    BENEFIT_DEDUCTION_TYPE["REYSALDO"] = "reysaldo";
    BENEFIT_DEDUCTION_TYPE["REYSALDO_LITE"] = "reysaldo-lite";
    BENEFIT_DEDUCTION_TYPE["REYSALDO_LITE_PRO"] = "reysaldo-lite-pro";
})(BENEFIT_DEDUCTION_TYPE = exports.BENEFIT_DEDUCTION_TYPE || (exports.BENEFIT_DEDUCTION_TYPE = {}));
var PLAN_CATEGORY;
(function (PLAN_CATEGORY) {
    PLAN_CATEGORY["ASO"] = "ASO";
    PLAN_CATEGORY["INSURANCE"] = "insurance";
})(PLAN_CATEGORY = exports.PLAN_CATEGORY || (exports.PLAN_CATEGORY = {}));
var CLAIM_PROVIDER;
(function (CLAIM_PROVIDER) {
    CLAIM_PROVIDER["SYNTECH"] = "syntech";
    CLAIM_PROVIDER["REY"] = "rey";
    CLAIM_PROVIDER["MEDLINX"] = "medlinx";
})(CLAIM_PROVIDER = exports.CLAIM_PROVIDER || (exports.CLAIM_PROVIDER = {}));
var BENEFIT_DEDUCTION_ACTION;
(function (BENEFIT_DEDUCTION_ACTION) {
    BENEFIT_DEDUCTION_ACTION["DEDUCTION"] = "deduction";
    BENEFIT_DEDUCTION_ACTION["ADDITION"] = "addition";
})(BENEFIT_DEDUCTION_ACTION = exports.BENEFIT_DEDUCTION_ACTION || (exports.BENEFIT_DEDUCTION_ACTION = {}));
var BENEFIT_DEDUCTION_CHARGE_TYPE;
(function (BENEFIT_DEDUCTION_CHARGE_TYPE) {
    BENEFIT_DEDUCTION_CHARGE_TYPE["STANDARD"] = "standard";
    BENEFIT_DEDUCTION_CHARGE_TYPE["EXCESS"] = "excess";
})(BENEFIT_DEDUCTION_CHARGE_TYPE = exports.BENEFIT_DEDUCTION_CHARGE_TYPE || (exports.BENEFIT_DEDUCTION_CHARGE_TYPE = {}));
var AUTHORIZE_CARD_TYPE;
(function (AUTHORIZE_CARD_TYPE) {
    AUTHORIZE_CARD_TYPE["EXACT"] = "exact";
    AUTHORIZE_CARD_TYPE["UPPER_LOWER_LIMIT"] = "upper-lower-limit";
    AUTHORIZE_CARD_TYPE["UPPER_LIMIT"] = "upper-limit";
})(AUTHORIZE_CARD_TYPE = exports.AUTHORIZE_CARD_TYPE || (exports.AUTHORIZE_CARD_TYPE = {}));
var PUSH_NOTIF_CHANNELS;
(function (PUSH_NOTIF_CHANNELS) {
    PUSH_NOTIF_CHANNELS["WEB"] = "web";
    PUSH_NOTIF_CHANNELS["APP"] = "app";
    PUSH_NOTIF_CHANNELS["ALL"] = "all";
})(PUSH_NOTIF_CHANNELS = exports.PUSH_NOTIF_CHANNELS || (exports.PUSH_NOTIF_CHANNELS = {}));
var PLAN_ANNUAL_LIMIT_TYPE;
(function (PLAN_ANNUAL_LIMIT_TYPE) {
    PLAN_ANNUAL_LIMIT_TYPE["INDIVIDUAL"] = "individual";
    PLAN_ANNUAL_LIMIT_TYPE["FAMILY"] = "family";
    PLAN_ANNUAL_LIMIT_TYPE["INDIVIDUAL_FAMILY"] = "individual-family";
})(PLAN_ANNUAL_LIMIT_TYPE = exports.PLAN_ANNUAL_LIMIT_TYPE || (exports.PLAN_ANNUAL_LIMIT_TYPE = {}));
var SCHEDULE_NOTIF_PLATFORM;
(function (SCHEDULE_NOTIF_PLATFORM) {
    SCHEDULE_NOTIF_PLATFORM["WEBAPP"] = "webapp";
    // SMS = 'sms',
    // WHATSAPP = 'whatsapp',
    // EMAIL = 'email'
})(SCHEDULE_NOTIF_PLATFORM = exports.SCHEDULE_NOTIF_PLATFORM || (exports.SCHEDULE_NOTIF_PLATFORM = {}));
var SUPPORTED_LANGUAGES;
(function (SUPPORTED_LANGUAGES) {
    SUPPORTED_LANGUAGES["ID"] = "id-ID";
    SUPPORTED_LANGUAGES["EN"] = "en-EN";
})(SUPPORTED_LANGUAGES = exports.SUPPORTED_LANGUAGES || (exports.SUPPORTED_LANGUAGES = {}));
var FILE_PROTOCOL;
(function (FILE_PROTOCOL) {
    FILE_PROTOCOL["SFTP"] = "sftp";
    FILE_PROTOCOL["S3"] = "s3";
})(FILE_PROTOCOL = exports.FILE_PROTOCOL || (exports.FILE_PROTOCOL = {}));
var INSURANCE_MAPPING_CATEGORY;
(function (INSURANCE_MAPPING_CATEGORY) {
    INSURANCE_MAPPING_CATEGORY["BENEFIT_CODE"] = "benefit_code";
    INSURANCE_MAPPING_CATEGORY["BENEFIT_DESCRIPTION"] = "benefit_description";
    INSURANCE_MAPPING_CATEGORY["MEMBER_ID"] = "member_id";
    INSURANCE_MAPPING_CATEGORY["PLAN_ID"] = "plan_id";
    INSURANCE_MAPPING_CATEGORY["CORPORATE_NAME"] = "corporate_name";
    INSURANCE_MAPPING_CATEGORY["CORPORATE_CODE"] = "corporate_code";
    INSURANCE_MAPPING_CATEGORY["PRODUCT_TYPE"] = "product_type";
    INSURANCE_MAPPING_CATEGORY["POLICY_NUMBER"] = "policy_number";
    INSURANCE_MAPPING_CATEGORY["ORG_POLICY_NUMBER"] = "org_policy_number";
})(INSURANCE_MAPPING_CATEGORY = exports.INSURANCE_MAPPING_CATEGORY || (exports.INSURANCE_MAPPING_CATEGORY = {}));
var DISBURSEMENT_STATUS;
(function (DISBURSEMENT_STATUS) {
    DISBURSEMENT_STATUS["PENDING"] = "pending";
    DISBURSEMENT_STATUS["CREATED"] = "created";
    DISBURSEMENT_STATUS["VERIFYING"] = "verifying";
    DISBURSEMENT_STATUS["VERIFIED"] = "verified";
    DISBURSEMENT_STATUS["VERIFICATION_FAILED"] = "verification_failed";
    DISBURSEMENT_STATUS["COMPLETED"] = "completed";
    DISBURSEMENT_STATUS["SUCCESS"] = "success";
    DISBURSEMENT_STATUS["FAILED"] = "failed";
    DISBURSEMENT_STATUS["EXPIRED"] = "expired";
    DISBURSEMENT_STATUS["CANCELLED"] = "cancelled";
})(DISBURSEMENT_STATUS = exports.DISBURSEMENT_STATUS || (exports.DISBURSEMENT_STATUS = {}));
