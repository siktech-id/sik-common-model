
export interface Context {
    user_id: number;
    email: string;
    name: string;
}

export enum ServiceName {
    BACKOFFICE = 'rey-backoffice',
    AUTH = 'rey-auth',
    NOTIFICATION = 'rey-notification',
    PURCHASE = 'rey-purchase',
    CATALOG = 'rey-catalog',
    FILE_GENERATOR = 'rey-file-generator',
    CLAIM = 'rey-claim',
    EHR = 'rey-ehr',
    CHAT_BACKEND = 'rey-chat-backend',
    FDS = 'rey-fds',
    PRODUCT = 'rey-product',
    ENTERPRISE = 'rey-enterprise',
    ROCKET = 'rey-rocket',
    ANALYTICS = 'rey-analytics',
    REWARD = 'rey-ward',
    PROVIDER = 'rey-provider',
    TOOLS = 'rey-tools'
}

export enum MIMETYPE {
    APPLICATION_PDF = 'application/pdf',
    TEXT_CSV = 'text/csv',
    IMAGE_JPG = 'image/jpg',
    IMAGE_JPEG = 'image/jpeg',
    EXCEL_XLS = 'application/vnd.ms-excel',
    EXCEL_XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    TEXT_PLAIN = 'text/plain',
    IMAGE_PNG = 'image/png',
    WORD_DOC = 'application/msword',
    WORD_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    APPLICATION_CFB = 'application/x-cfb',
}

export enum Channel {
    B2B = 'B2B',
    B2C = 'B2C'
}

export enum SUBSCRIPTION_STATUS {
    DRAFT = 'draft',
    WAITING_FIRST_PAYMENT = 'waiting_first_payment',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    TERMINATED = 'terminated',
    PENDING = 'pending',
}

export enum SUBSCRIPTION_TYPE {
    INDIVIDUAL_2020 = 'individual-2020',
    INDIVIDUAL_2022 = 'individual-2022',
    FAMILY_2022 = 'family-2022',
    PARTNERSHIP = 'partnership',
    INDIVIDUAL_B2B = 'B2B',
    FAMILY_B2B = 'family-B2B'
}

export enum BENEFIT_DEDUCTION_TYPE {
    STANDARD = 'standard',
    EX_GRATIA = 'ex-gratia',
    REYSALDO = 'reysaldo',
    REYSALDO_LITE = 'reysaldo-lite',
    REYSALDO_LITE_PRO = 'reysaldo-lite-pro'
}

export enum PLAN_CATEGORY {
    ASO = 'ASO',
    INSURANCE = 'insurance'
}

export enum CLAIM_PROVIDER {
    SYNTECH = 'syntech',
    REY = 'rey',
    MEDLINX = 'medlinx'
}

export enum BENEFIT_DEDUCTION_ACTION {
    DEDUCTION = 'deduction',
    ADDITION = 'addition'
}

export enum BENEFIT_DEDUCTION_CHARGE_TYPE {
    STANDARD = 'standard',
    EXCESS = 'excess'
}

export enum AUTHORIZE_CARD_TYPE {
    EXACT = 'exact',
    UPPER_LOWER_LIMIT = 'upper-lower-limit',
    UPPER_LIMIT = 'upper-limit'
}

export enum PUSH_NOTIF_CHANNELS {
    WEB = 'web',
    APP = 'app',
    ALL = 'all',
}

export enum PLAN_ANNUAL_LIMIT_TYPE {
    INDIVIDUAL = 'individual',
    FAMILY = 'family',
    INDIVIDUAL_FAMILY = 'individual-family'
}

export enum SCHEDULE_NOTIF_PLATFORM {
    WEBAPP = 'webapp',//web, ios, android
    // SMS = 'sms',
    // WHATSAPP = 'whatsapp',
    // EMAIL = 'email'
}

export enum SUPPORTED_LANGUAGES {
    ID = 'id-ID',
    EN = 'en-EN'
}

export enum FILE_PROTOCOL {
    SFTP = 'sftp',
    S3 = 's3'
}

export enum INSURANCE_MAPPING_CATEGORY {
    BENEFIT_CODE = 'benefit_code',
    BENEFIT_DESCRIPTION = 'benefit_description',
    MEMBER_ID = 'member_id',
    PLAN_ID = 'plan_id',
    CORPORATE_NAME = 'corporate_name',
    CORPORATE_CODE = 'corporate_code',
    PRODUCT_TYPE = 'product_type',
    POLICY_NUMBER = 'policy_number',
    ORG_POLICY_NUMBER = 'org_policy_number'
}

export enum DISBURSEMENT_STATUS {
    PENDING = 'pending',
    CREATED = 'created',
    VERIFYING = 'verifying',
    VERIFIED = 'verified',
    VERIFICATION_FAILED = 'verification_failed',
    COMPLETED = 'completed',
    SUCCESS = 'success',
    FAILED = 'failed',
    EXPIRED = 'expired',
    CANCELLED = 'cancelled'
}

export type FileProtocol = FILE_PROTOCOL