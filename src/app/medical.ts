export enum MEDICAL_RECORD_TYPE {
    INPATIENT = 'inpatient',
    OUTPATIENT = 'outpatient',
    MATERNITY = 'maternity',
    DENTAL = 'dental',
    OPTICAL = 'optical',
    WELLNESS = 'wellness',
    TRAVEL = 'travel'
}

export enum MEDICAL_RECORD_TREATMENT_TYPE {
    ELECTIVE = 'elective',
    EMERGENCY = 'emergency'
}

export enum MEDICAL_PROCEDURES_TYPE {
    PROPAEDEUTIC = 'propaedeutic',
    DIAGNOSTIC = 'diagnostic',
    THERAPEUTIC = 'therapeutic',
    SURGICAL = 'surgical',
    ASSESSMENT = 'assessment',
    ADMINISTRATION = 'administration',
    ANESTHESIA = 'anesthesia'
}

export enum MEDICAL_PROCEDURES_SUB_TYPE {
    SYMPTOM = 'symptom',
    VITAL_SIGNS = 'vital_signs',
    BLOOD_TEST = 'blood_test',
    CT_SCAN = 'ct_scan',
    MRI_SCAN = 'mri_scan',
    FINAL_DIAGNOSE = 'final_diagnose',
    GENERAL_CHECK_UP = 'general_check_up',
    GENERAL_SURGERY = 'general_surgery',
    ESTIMATE_CHARGE = 'estimate_charge',
    ASSESSMENT = 'assessment',
    ROOM_AND_BOARD = 'room_and_board'
}

export enum MEDICAL_PROCEDURE_DETAILS_TYPE {
    TEMPERATURE = 'temperature',
    SYSTOLIC_PRESSURE = 'systolic_pressure',
    DIASTOLIC_PRESSURE = 'diastolic_pressure',
    PULSE = 'pulse',
    RESPIRATORY = 'respiratory',
    RESULT = 'result',
    DOCUMENT = 'document'
}

export enum CLAIM_PAYMENT_TYPE {
    CASHLESS = 'cashless',
    REIMBURSE = 'reimburse',
    QRIS = 'qris'
}

export enum MEDICAL_RECORD_DOCUMENT_CATEGORY {
    INVOICE = 'invoice',
    DOCTOR_NOTE = 'doctor_note',
    PRESCRIPTION = 'prescription',
    SUPPORT_DOCUMENT = 'support_document',
    SYSTEM = 'system',
}

export const MEDICAL_RECORD_DOCUMENT_SUB_CATEGORY = {
    [MEDICAL_RECORD_DOCUMENT_CATEGORY.INVOICE]: {
        INVOICE_FINAL: 'invoice_final',
        INVOICE_PROFORMA: 'invoice_proforma',
        INVOICE_PARTIAL: 'invoice_partial',
        INVOICE_RECEIPT: 'invoice_receipt'
    },

    [MEDICAL_RECORD_DOCUMENT_CATEGORY.DOCTOR_NOTE]: {
        TREATMENT_NOTES: 'treatment_notes',
        MEDICAL_RESUME: 'medical_resume',
        REFERRAL: 'referral',
        LML: 'lml',
        LMH: 'lmh',
        LMA: 'lma',
        OTHER: 'other',
    },

    [MEDICAL_RECORD_DOCUMENT_CATEGORY.PRESCRIPTION]: {
        PRESCRIPTION_ORIGINAL: 'prescription_original',
        PRESCRIPTION_COPY: 'prescription_copy',
        OTHER: 'other',
    },

    [MEDICAL_RECORD_DOCUMENT_CATEGORY.SUPPORT_DOCUMENT]: {
        LAB_TEST_USG: 'lab_test_usg',
        PERSONAL_INFORMATION_KTP: 'personal_information_ktp',
        PERSONAL_INFORMATION_KARTU_ASURANSI: 'personal_information_kartu_asuransi',
        PERSONAL_INFORMATION_KK: 'personal_information_kk',
        PERSONAL_INFORMATION_KIA: 'personal_information_kia',
        PERSONAL_INFORMATION_PASPOR: 'personal_information_paspor',
        PERSONAL_INFORMATION_BPJS: 'personal_information_bpjs',
        PERSONAL_INFORMATION_OTHER_ID: 'personal_information_other_id',
        DEATH_CERTIFICATE: 'death_certificate',
        GENERAL_TREATMENT_ADMINISTRATION_FORM_KAMAR: 'general_treatment_administration_form_kamar',
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOG_AWAL: 'general_treatment_administration_spjp_log_awal',
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOG_AKHIR: 'general_treatment_administration_spjp_log_akhir',
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOR: 'general_treatment_administration_spjp_lor',
        GENERAL_TREATMENT_ADMINISTRATION_CONSENT_FORM: 'general_treatment_administration_consent_form',
        OTHER: 'other'
    },

    [MEDICAL_RECORD_DOCUMENT_CATEGORY.SYSTEM]: {
        FINAL_DOCUMENT: 'final_document',
    }
};

export enum MEDICAL_RECORD_CREATED_FROM {
    USER = 'user',
    FLORYN = 'floryn',
    INTOOLS = 'intools',
    NIMBUS = 'nimbus',
    THIRD_PARTY = 'third-party',
    BULK_DEDUCTION = 'bulk-deduction',
}
