/// <reference types="node" />
import { BENEFIT_DEDUCTION_ACTION, BENEFIT_DEDUCTION_TYPE, FileProtocol, PLAN_ANNUAL_LIMIT_TYPE, SCHEDULE_NOTIF_PLATFORM } from '../app';
export interface SendEmailPayload {
    template: string;
    parameters: {
        [s: string]: string;
    };
    recipient: {
        email: string;
        name: string;
    };
    cc?: {
        email: string;
        name: string;
    };
    attachments?: [
        {
            ContentType: string;
            FileName: string;
            Base64Content: string;
        }
    ];
}
export interface SendEmailV2Payload {
    code: string;
    language: string;
    to: string[];
    parameters?: Record<string, string>;
    subject_parameters?: Record<string, string>;
    cc?: string[];
    attachments?: {
        ContentType: string;
        Filename: string;
        Base64Content: string;
    }[];
    previous_log_id?: string;
}
export interface SendPushNotifPayload {
    code: string;
    parameters: Record<string, string>;
    user_id: number;
    language: string;
    save?: boolean;
    data?: Record<string, string>;
    previous_log_id?: string;
    channel?: string;
}
export interface SendBroadcastNotifPayload {
    code: string;
    parameters: Record<string, string>;
    language: string;
    topic: string;
    data?: Record<string, string>;
    previous_log_id?: string;
    channel?: string;
}
export interface SyncFitnessDataPayload {
    user_id: number;
    trailing_days: number;
}
export interface SendMessagePayload {
    code: string;
    phone_number: string;
    language: string;
    channel: string;
    parameters: string[];
    additional_parameters?: string[];
    previous_log_id?: string;
    metadata?: Record<string, any>;
}
export interface UpdateUserPayload {
    id: number;
    fullname: string;
    email?: string;
    phone_number: string;
    gender: number;
    dob: Date;
    is_verified?: boolean;
    card_no?: string;
    is_adult?: boolean;
    parent_id?: number | null;
    phone_verified?: boolean;
    email_verified?: boolean;
    gdf_id?: string;
    is_consented?: boolean;
    consent_document_id?: string;
    is_vip?: boolean;
    is_testing?: boolean;
    addresses?: AddressPayload[];
    member_id?: string;
    member_card_number?: string;
    tpa_member_card_number?: TpaMemberCardNumber;
    language?: string;
}
export interface TpaMemberCardNumber {
    [key: string]: string;
}
export interface SendAlertPayload {
    status: string;
    text: string;
    fields: Array<{
        title: string;
        value: string;
        [s: string]: any;
    }>;
    channel?: string;
    with_trace?: boolean;
}
export interface SyncTerraFitnessDataPayload {
    user_id: number;
    terra_user_id: string;
    provider: string;
}
export interface GenerateFileOptions {
    bucket_name: string;
    folder: string;
    userId?: number;
    extension?: string;
    provider?: string;
}
export interface GenerateFilePayload {
    type: string;
    file_type: string;
    reference_id: string;
    code: string;
    params: Record<string, string>;
    options: GenerateFileOptions;
    is_public: boolean;
}
export interface FileGeneratedPayload {
    type: string;
    reference_id: string;
    upload_id: string;
    is_public: boolean;
    metadata?: Record<string, any>;
}
export interface SubscriptionUpdatedPayload {
    id: string;
    user_id: number;
    package_id: number;
    name: string;
    recurring_month: number;
    price: number;
    qty: number;
    status: string;
    start_date: string;
    end_date: string;
    is_paid: boolean;
    group_id?: string;
    type: string;
    role: string;
    deleted_at: string | null;
    details: SubscriptionDetailPayload[];
    subscription_start_date: string;
    subscription_end_date: string;
    is_one_time: boolean;
    snapshot?: any;
    group?: SubsriptionGroupUpdatedPayload;
    relation: string;
    is_vip: boolean;
    currency: string;
}
export interface SubsriptionGroupUpdatedPayload {
    id: string;
    user_id: number;
    is_paid: boolean;
    ref_group_id: string;
    price: number;
    start_date: string;
    end_date: string;
    type: string;
    subscription_type: string;
    organization_code: string;
    deleted_at: string | null;
    currency: string;
}
export interface SubscriptionDetailPayload {
    id: string;
    subscription_id: string;
    name: string;
    product_id: number;
    qty: number;
    qty_used: number;
    product_plan_code: string;
    product_plan_type: string;
    annual_limit: number;
    annual_limit_used: number;
    benefits: SubscriptionDetailBenefitPayload[];
    category: string;
    insurance_type: string;
    waiting_period?: number;
    coverage_period: number;
    is_waiting_period: boolean;
    subscription_start_date: string;
    subscription_end_date: string;
    co_payment: boolean;
    co_payment_percentage: number;
    status: string;
    expired_date?: string;
    age?: number;
    join_date?: string;
    insurance_tag?: string;
    family_annual_limit: number;
    family_annual_limit_used: number;
    annual_limit_type: PLAN_ANNUAL_LIMIT_TYPE;
    termination_date?: string;
    currency: string;
    plan_group_limit?: number;
    plan_group_limit_used?: number;
    plan_group_tag?: string;
}
export interface SubscriptionBenefitMetadata {
    name_id: string;
    description_id: string;
}
export interface SubscriptionDetailBenefitPayload {
    id: string;
    name: string;
    slug: string;
    per_visit_limit: number;
    annual_limit: number;
    annual_limit_used: number;
    times: number;
    times_used: number;
    parent?: string;
    description: string;
    metadata: SubscriptionBenefitMetadata | null;
    deduct_limit_type: PLAN_ANNUAL_LIMIT_TYPE;
    deductable_amount: number;
}
export interface DeductionSubscriptionBenefitPayload {
    subscription_id: string;
    benefit_code: string;
    amount: number;
    times?: number;
    idempotency_key: string;
    deduction_type?: string;
    action?: string;
    charge_type?: string;
    subscription_detail_id?: string;
    metadata?: SubscriptionBenefitAdjustmentMetadata;
}
export interface EnterpriseMember {
    id: string;
    limit: number;
    limit_used: number;
    family_limit: number;
    family_limit_used: number;
}
export interface BenefitCheckPayload {
    code: string;
    subscription: SubscriptionUpdatedPayload;
    amount?: number;
    times?: number;
    detailId?: string;
    enterpriseMember?: EnterpriseMember;
    action?: BENEFIT_DEDUCTION_ACTION.ADDITION | BENEFIT_DEDUCTION_ACTION.DEDUCTION;
}
export interface KycFinishedPayload {
    user_id: number;
    status: string;
    is_requested_from_primary: boolean;
}
export interface SubscriptionTerminatedPayload {
    user_id: number;
    subscription_id: string;
    card_no: string;
    phone: string;
    name: string;
    with_termination_period: boolean;
    product_types?: string[];
    is_partial_termination?: boolean;
}
export interface FdsTerminatedPayload {
    user_id: number;
    card_no: string;
    name: string;
    with_termination_period: boolean;
    product_types: string[];
}
export interface ChangeRequestPayload {
    type: string;
    user_id: number;
    prev_value: string;
    next_value: string;
    send_notification?: boolean;
}
export interface CreateSubscriptionGuardian {
    name: string;
    relation: string;
    email: string;
    phone: string | null;
}
export interface CreateSubscriptionAccount {
    name: string;
    role: string;
    email: string | null;
    card_no: string;
    phone_no: string | null;
    birthdate: string;
    occupation: string | null;
    gender: string;
    relation: string;
}
export interface CreateSubscriptionAddress {
    address: string;
    postal_code: string;
    sub_district_id: number;
    city_address?: string;
    district_address?: string;
    sub_district_address?: string;
    sub_district_address_id?: number;
    full_domicile?: string;
    postal_code_domicile?: string;
    province_domicile?: string;
    province_address?: string;
    district_domicile?: string;
    sub_district_domicile?: string;
    sub_district_code?: string;
    city_domicile?: string;
}
export interface CreateSubscriptionUser {
    guardian: CreateSubscriptionGuardian | null;
    account: CreateSubscriptionAccount;
    domicile_address: CreateSubscriptionAddress | null;
    card_address: CreateSubscriptionAddress | null;
    is_maternity: boolean;
    is_dow: boolean;
    is_dow_optic: boolean;
    is_dow_dental: boolean;
    is_dow_wellness: boolean;
    start_date: string | null;
    employee_email: string | null;
    is_vip: boolean;
    external_id?: string;
    external_policy_number?: string;
    payor_code?: string;
}
export interface CreateSubscriptionPayload {
    users: CreateSubscriptionUser[];
    cohort_code: string;
    channel: string;
    recurring_month: number;
    organization_code: string;
    metadata: Record<string, any>;
    status?: string;
}
export interface TopupCoinsPayload {
    user_id: number;
    type: string;
    value: number;
    date?: string;
    custom_attributes?: string;
}
export interface SubscriptionBenefitAdjustmentMetadata {
    origin: string;
    created_by: string;
    notes?: string;
}
export interface SubscriptionBenefitAdjustmentPayload {
    action?: string;
    idempotency_key: string;
    subscription_id: string;
    benefit_code: string;
    amount: number;
    times?: number;
    metadata?: SubscriptionBenefitAdjustmentMetadata;
    charge_type?: string;
    deduction_type?: string;
}
export interface FeatureFlagUpdatedPayload {
    action: 'update' | 'delete';
    data: {
        key: string;
        value: boolean;
        bypass?: number[];
        active_at?: string;
    };
}
export interface FeatureFlagAckPayload {
    action: 'update' | 'delete';
    service: string;
    feature_flag: {
        key: string;
        value: boolean;
        bypass?: number[];
        active_at?: string;
    };
}
export interface EnrollmentStartedPayload {
    recMode: string;
    recType: string;
    payorID: string;
    memberID: string;
    mappingID: string;
    smiid: string;
    corporateID: string;
    nik: string;
    division: string;
    branchCode: string;
    bankInfo: string;
    language: string;
    typeOfWork: string;
    race: string;
    policyNumber?: string;
    subPolicyNumber: string;
    maritalStatus: string;
    relationship: string;
    effectiveDate: string;
    expiryDate: string;
    iU1: string;
    iU2: string;
    iU3: string;
    iU4: string;
    iU5: string;
    iU6: string;
    iU7: string;
    iU8: string;
    iU9: string;
    iU10: string;
    iU11: string;
    iU12: string;
    iU13: string;
    iU14: string;
    iU15: string;
    iU16: string;
    memberName: string;
    add1: string;
    add2: string;
    add3: string;
    add4: string;
    city: string;
    state: string;
    postCode: string;
    telephoneOffice: string;
    telephoneRes: string;
    telephoneMobile: string;
    nric: string;
    passportNo: string;
    passportCountry: string;
    dateOfBirth: string;
    dateTerminated: string;
    sex: string;
    planCode: string;
    employmentStatus: string;
    termDate: string;
    preExisting: string;
    remarks: string;
    memberSince: string;
    memberSuspended: string;
    renewalActivationDate: string;
    optionMode: string;
    token: string;
    validEffExpDate: string;
    validFamily: string;
    validFamilyExists: string;
    validRecType: string;
    polEffDate: string;
    polExpDate: string;
}
export interface EnrollmentUpdatedPayload {
    user_id: number;
    policy_number: string;
    enrollment_status: string;
    ref_member_id?: string;
    ids?: string[];
}
export interface AuthorizeCardPayload {
    user_id: number;
    authorization_type?: string;
    card_id?: string;
    is_notification_skipped?: boolean;
    plan_code?: string;
    is_from_cron?: boolean;
}
export interface B2BOcrPayload {
    user_id: number;
    files: string;
}
export interface PaymentLinkAuth {
    refresh_token: string;
    valid_until: Date;
    user_id: number;
}
export interface RequestDelayCardPayload {
    user_id: number;
}
export interface EnrollmentTerminatedPayload {
    user_id: number;
}
export interface EmployeeSubscription {
    id: string;
    user_id: number;
    role: string;
    is_maternity?: boolean;
    is_dow?: boolean;
    custom_attributes?: {
        is_maternity?: boolean;
        is_dow_optic?: boolean;
        is_dow_dental?: boolean;
        is_dow_wellness?: boolean;
    };
}
export interface CreateEmployeePayload {
    families_subscription: EmployeeSubscription[];
    employee_subscription: EmployeeSubscription | null;
    cohort_id: string;
    employee_user: UpdateUserPayload;
    is_one_time: boolean;
}
export interface OrganizationUpdatedPayload {
    id: string;
    name: string;
    code: string;
    description?: string;
    pic_name: string;
    pic_email: string;
    pic_phone: string;
    partnership_start_date?: string;
    partnership_end_date?: string;
    size?: string;
    industry: string;
    payment_terms: string;
    relationship: string;
    current_deposit: number;
    minimum_deposit: number;
    block_percentage: number;
    comment: string;
    policy_number?: string;
}
export interface OrganizationDeductedPayload {
    organization_client_id: string;
    subscription_id: string;
    user_id: number;
    amount: number;
    benefit_code: string;
    deduction_type: BENEFIT_DEDUCTION_TYPE;
}
export interface ClaimSyncPayload {
    claim_number: string;
    payment_type?: string;
    bank_branch?: string;
    bank_account_name?: string;
    bank_account_number?: string;
    bank_code?: string;
    status?: string;
    doctor_sip?: string;
    doctor_name?: string;
    amount?: number;
}
export interface UserDoctorUpdatedPayload {
    id: number;
    name: string;
    display_name: string;
    email: string;
}
export interface EnrollmentAddressPayload {
    address: string;
    district: string;
    sub_district: string;
    city: string;
    province: string;
    postal_code: string;
}
export interface EnrollmentUserPayload {
    id: number;
    fullname: string;
    phone_number: string;
    dob: string;
    gender: number;
    card_no: string;
    address: EnrollmentAddressPayload;
}
export interface EnrollmentStartedPolicies {
    id: string;
    policy_number: string;
    policy_number_home: string;
    start_date: string;
    end_date: string;
    type: string;
    plan_code: string;
}
export interface ZaiEnrollmentMetadata {
    member_id_unique: string;
    member_id_home: string;
    policy_number: string;
    coverage_id: string;
    plan_id: string;
}
export interface EnrollmentStartedMetadata {
    [key: string]: Record<string, any>;
    zai: ZaiEnrollmentMetadata;
}
export interface EnrollmentStartedV2Payload {
    enrollment_type: string;
    provider: string;
    ids: string[];
    plan_codes: string[];
    role: string;
    relation: string;
    subscription_start_date: string;
    subscription_end_date: string;
    start_date: string;
    end_date: string;
    policy_number: string;
    policy_number_home: string;
    user: EnrollmentUserPayload;
    primary_user_id?: number;
    organization_code?: string;
    is_birthday?: boolean;
    policies?: EnrollmentStartedPolicies[];
    metadata?: EnrollmentStartedMetadata;
}
export interface DocumentSignedPayload {
    type: string;
    user_id: string;
    reference_id: string;
    upload_id: string;
}
export interface AnalyticsUserProfilePayload {
    user_id: number;
    name?: string;
    email?: string;
    age?: string;
    gender?: string;
    phone?: string;
    created_at?: string;
}
export declare enum Platform {
    Android = "ANDROID",
    Ios = "IOS",
    Web = "WEB"
}
export declare enum AnalyticsEventType {
    UserProfile = "user-profile",
    UserCustom = "user-custom",
    UserPlatform = "user-platform",
    UserEvent = "user-event"
}
export interface AnalyticsUserCustomPayload {
    user_id: number;
    add?: {
        [s: string]: string | number | boolean;
    };
    remove?: string[];
}
export interface AnalyticsUserPlatformPayload {
    user_id: number;
    platforms: {
        platform: Platform;
        active: boolean;
    }[];
}
export interface AnalyticsUserEventPayload {
    user_id: number;
    event_name: string;
    attributes: Record<string, any>;
    created_at?: string;
}
export interface SendAnalyticsEventPayload {
    type: AnalyticsEventType;
    payload: AnalyticsUserProfilePayload | AnalyticsUserCustomPayload | AnalyticsUserPlatformPayload | AnalyticsUserEventPayload;
}
export interface AppointmentUpdatedPayload {
    id: string;
    consultation_id: string;
    user_id: number;
    type: string;
}
export interface ConsultationUpdatedPayload {
    id: string;
    ticket_id?: number | null;
    user_id: number;
    ref_id: string;
}
export interface PartnerProvider {
    id: string;
    partner_id: number;
    ref_id: number;
    name: string;
    address: string;
    province: string;
    city: string;
    location: Record<any, any>;
}
export interface MedicalRecordUpdatedPayload {
    id: string;
    entity_id: string;
    entity_type: string;
    user_id: number;
    partner_provider_id: string;
    medical_number: string;
    type: string;
    payment_type: string;
    status: string;
    provider?: PartnerProvider;
    start_date: string;
    end_date: string;
    organization_code?: string;
}
export interface MedicalChargeUpdatedPayload {
    id: string;
    medical_record_id: string;
    amount: number;
    amount_covered: number;
    amount_excess: number;
    excess_deduction_type: string;
    benefit_code: string;
    currency?: string;
}
export interface MedicalProcedureUpdatedPayload {
    id: string;
    medical_record_id: string;
    sub_type: string;
    diagnose: string;
}
export interface PrescriptionUpdatedPayload {
    id: number;
    consultation_id: string;
}
export interface CronPayload {
    scheduleName: string;
}
export interface SyncPayload {
    sync_action_name: string;
    ids?: string[];
    status?: string;
}
export interface ShortenUrlPayload {
    url: string;
    code: string;
    expired_at?: string;
}
export interface UserLocation {
    longitude: number;
    latitude: number;
}
export interface UserAddressUpdatedPayload {
    id: number;
    user_id: number;
    postal_code: string;
    address: string;
    type: string;
    version: string;
    location?: UserLocation;
}
export interface WhatsAppChatroomPayload {
    id: number;
}
export interface WhatsAppMessagePayload {
    id: number;
}
export interface FileDocument {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    is_protected?: boolean;
}
export interface CreateMedicalRecordPayload {
    user_id: number;
    ref_id?: string;
    partner_provider_id: string;
    type: string;
    payment_type: string;
    status: string;
    guardian_name: string;
    guardian_phone: string;
    start_date: string;
    end_date: string;
    estimate_stay: number;
    estimate_charge: number;
    is_consented: boolean;
    is_pre_existing: boolean;
    is_network: boolean;
    initial_diagnosis: string;
    initial_procedure_plan: string;
    latitude: number;
    longitude: number;
    provider?: PartnerProvider;
    updated_by: string;
    previous_ref_id?: string;
    charges?: string;
    payment?: string;
    treatment_type?: string;
    plan_code?: string;
    organization_code?: string;
    organization_name?: string;
    files: Array<FileDocument>;
    is_booked?: boolean;
    ref_partner_provider_id?: string;
    claim_provider?: string;
    doctor_name?: string;
    doctor_specialty?: string;
    time?: string;
    created_from?: string;
}
export interface UpdateUserLocationPayload {
    user_id: number;
    type: string;
    location: UserLocation;
}
export interface UserAddressesUpdatedPayload {
    user_id: number;
    addresses: AddressPayload[];
}
export interface AddressPayload {
    id: number;
    user_id?: number;
    postal_code: string;
    address: string;
    type: string;
    version: string;
    location?: UserLocation;
    province: ProvinceProperties;
    city: CityProperties;
    district: DistrictProperties;
    subdistrict: SubdistrictProperties;
}
export interface ProvinceProperties {
    id: number;
    name: string;
}
export interface CityProperties {
    id: number;
    name: string;
    province_id: number;
}
export interface DistrictProperties {
    id: number;
    name: string;
    city_id: number;
}
export interface SubdistrictProperties {
    id: number;
    name: string;
    district_id: number;
}
export interface UpdatePartnerProviderContact {
    name: string;
    division: string;
    fax_number: string;
    phone_number: string;
}
export interface UpdatePartnerProvider {
    id: string;
    partner_id: number;
    ref_id?: number;
    name?: string;
    address?: string;
    province?: string;
    city?: string;
    postal_code?: string;
    latitude?: number;
    longitude?: number;
    contact?: UpdatePartnerProviderContact[];
    email?: string[];
    metadata?: Record<string, any>;
    payments?: UpdatePartnerProviderPayment[];
    type?: string;
    status?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
export interface UpdatePartnerProviderPayment {
    id: string;
    partner_provider_id: string;
    type: string;
    bank_code: string;
    bank_code_prefix?: string;
    bank_branch?: string;
    bank_account_name: string;
    bank_account_number: string;
    status?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
export declare enum ExternalRewardAction {
    ENROLL = "enroll",
    DISENROLL = "disenroll",
    REENROLL = "reenroll"
}
export interface ProcessExternalRewardPayload {
    id: string;
    action: ExternalRewardAction;
}
export interface MergeAnalyticsUserPayload {
    user_id: number;
    merged_id: string;
}
export interface RewardPendingPayload {
    user_id: number;
}
export interface SubmitBulkRewardUserPayload {
    user_id: number | null;
    email: string | null;
    phone_no: string | null;
    type: string;
    coins: number;
    comment: string;
    reward_user_id: number;
    date: Date;
    fullname: string;
}
export interface SubmitBulkPendingRequestPayload extends CreateSubscriptionPayload {
    employee_name?: string;
    group_id?: string;
}
export interface SubmitBulkUploadPayload {
    type: 'reward' | 'subscription';
    data: SubmitBulkPendingRequestPayload | SubmitBulkRewardUserPayload;
}
export interface CreateDisbursementPayload {
    user_id: number;
    provider: 'xendit' | 'monit';
    ref_id: string;
    external_id: string;
    amount?: number;
    qris_string?: string;
    email_bcc?: string[];
    email_cc?: string[];
    email_to?: string[];
    created_by: string;
    description?: string;
    notes?: string;
    status: string;
    bank_code: string;
    bank_account_name?: string;
    bank_account_number?: string;
}
export interface SubscriptionDetailBenefitDeductionPayload {
    id: string;
    name: string;
    slug: string;
    per_visit_limit: number;
    annual_limit: number;
    annual_limit_used: number;
    times: number;
    times_used: number;
    parent?: string;
    description: string;
    metadata: SubscriptionBenefitMetadata | null;
    plan_code: string;
    deduct_limit_type: PLAN_ANNUAL_LIMIT_TYPE;
    deductable_amount: number;
}
interface GoogleAnalyticsEventPayload {
    [key: string]: string | number | boolean | GoogleAnalyticsEventPayload | Array<GoogleAnalyticsEventPayload>;
}
export declare enum GoogleAnalyticsClientType {
    WEB = "WEB",
    MOBILE = "MOBILE"
}
export interface SendGoogleMeasurementEventPayload {
    pseudo_id?: string;
    client_type: GoogleAnalyticsClientType;
    user_id: number;
    events: {
        name: string;
        params: GoogleAnalyticsEventPayload;
    }[];
}
export interface RegisterUserAnalyticClientPayload {
    pseudo_id: string;
    user_id: number;
    client_type: GoogleAnalyticsClientType;
}
export interface RegisterUserNotificationTokenPayload {
    user_id: number;
    token: string;
    platform: string;
}
export interface ReactivateOrganizationPayload {
    organization_client_id: string;
}
export interface MergeFilePayload {
    file_ids: string[];
    filename: string;
    auto_suffix?: boolean;
    folder: string;
    bucket_name?: string;
    file_extension?: string;
    type: string;
    reference_id: string;
    protocol?: FileProtocol;
    credentials?: {
        host: string;
        port: number;
        username: string;
        password: string;
        client: string;
    };
}
export interface ScheduledNotifPayload {
    reference_type: string;
    reference_id: string;
    user_id: number;
    notifs: ScheduledNotifPayloadItem[];
}
export interface ScheduledNotifPayloadItem {
    platform: SCHEDULE_NOTIF_PLATFORM;
    template_code: string;
    variables?: Record<string, string>;
    cta?: Record<string, string>;
    time_to_send: Date;
    destination?: string;
    language: string;
}
export interface QiscusWebhookReceivedPayload {
    agent_name: string;
    role: string;
    type: string;
    content: string;
    created_at: string;
    thread_id: string;
    bot_active?: boolean;
}
export interface UpdateOrganizationStatus {
    code: string;
}
export interface CreatePartnerProviderPayment {
    id?: string;
    partner_provider_id?: string;
    type: string;
    bank_code: string;
    bank_code_prefix: string;
    bank_branch: string;
    bank_account_name: string;
    bank_account_number: string;
    status?: string;
}
export interface CreatePartnerProviderPayload {
    ref_id?: string;
    name: string;
    address: string;
    province: string;
    postal_code: string;
    city: string;
    latitude: number;
    longitude: number;
    contact: UpdatePartnerProviderContact[];
    email: string[];
    metadata: Record<string, string>;
    payments?: CreatePartnerProviderPayment[];
    status?: string;
    type?: string;
}
export interface UpdatePartnerProviderDataPayload {
    ref_id?: string;
    name?: string;
    address?: string;
    province?: string;
    postal_code?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    contact?: UpdatePartnerProviderContact[];
    email?: string[];
    metadata?: Record<string, string>;
    payments?: UpdatePartnerProviderPayment[];
    status?: string;
    type?: string;
}
export interface UpdatePartnerProviderPayload {
    id: string;
    data: UpdatePartnerProviderDataPayload;
}
export interface DeletePartnerProviderPayload {
    id: string;
}
export interface DeletePartnerProviderPaymentPayload {
    id: string;
}
export interface UpdatePartnerProviderPaymentStatusPayload {
    bank_account_number: string;
    bank_account_holder: string;
    bank_code: string;
    reference_id: string;
    status: string;
}
export interface DisbursementPayload {
    id: string;
    ref_id: string;
    user_id: number;
    amount: number;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    external_id: string;
    provider: string;
    bank_code: string;
    bank_account_name: string;
    bank_account_number: string;
    description: string;
    notes: string;
    created_by: string;
    email_to: string;
    email_cc: string;
    email_bcc: string;
    qris_string: string;
    is_locked: string;
}
export interface PartnerProviderUpdatedPayload {
    partner_provider_id: string;
    data?: UpdatePartnerProvider;
    is_hard_deleted: boolean;
}
export interface DeleteDashboardUserPayload {
    id: number;
}
export interface CreateDashboardUserPayload {
    partner_provider_id: string;
    role_id: number;
    status: string;
}
export interface UpdateDashboardUserPayload {
    id: number;
    role_id?: number;
    status?: string;
}
export interface SendRenderedPushNotifPayload {
    user_id: number;
    title: string;
    content: string;
    data?: Record<string, string>;
}
export interface Subscription {
    id: string;
    user_id: number;
    name: string;
    package_id?: number;
    price: number;
    snapshot: any;
    qty: number;
    recurring_month: number;
    start_date: Date;
    end_date: Date;
    status: string;
    is_paid: boolean;
    group_id?: string;
    type: string;
    role: string;
    relation: string;
}
export interface EnrollmentReportPayload {
    user_id: number;
    fullname: string;
    dob: string;
    member_card_no: string;
    payor: string;
    user: {
        card_no?: string;
    };
    subscription: Subscription;
    group_meta: {
        organization_code: string;
        organization_name: string;
        organization_policy_number: string;
    };
}
export interface InsuranceMappingUpdatedPayload {
    id: string;
    client: string;
    category: string;
    rey_code: string;
    client_code: string;
    source: string;
}
export interface CreateAndReviseMedicalRecordFromBulkPayload {
    medical_bulk_item_id: string;
    is_revision?: boolean;
}
export interface SendBulkMedicalRecordReport {
    medical_bulk_record_id?: string;
}
export declare enum Pharmacy {
    K24 = "k24"
}
export interface DrugWebhookPayload {
    minimum_order_qty: number;
    minimum_order_unit: string;
    product_id: string;
    pharmacy?: Pharmacy;
}
export {};
//# sourceMappingURL=payloads.d.ts.map