export declare enum MEDICAL_RECORD_TYPE {
    INPATIENT = "inpatient",
    OUTPATIENT = "outpatient",
    MATERNITY = "maternity",
    DENTAL = "dental",
    OPTICAL = "optical",
    WELLNESS = "wellness",
    TRAVEL = "travel"
}
export declare enum MEDICAL_RECORD_TREATMENT_TYPE {
    ELECTIVE = "elective",
    EMERGENCY = "emergency"
}
export declare enum MEDICAL_PROCEDURES_TYPE {
    PROPAEDEUTIC = "propaedeutic",
    DIAGNOSTIC = "diagnostic",
    THERAPEUTIC = "therapeutic",
    SURGICAL = "surgical",
    ASSESSMENT = "assessment",
    ADMINISTRATION = "administration",
    ANESTHESIA = "anesthesia"
}
export declare enum MEDICAL_PROCEDURES_SUB_TYPE {
    SYMPTOM = "symptom",
    VITAL_SIGNS = "vital_signs",
    BLOOD_TEST = "blood_test",
    CT_SCAN = "ct_scan",
    MRI_SCAN = "mri_scan",
    FINAL_DIAGNOSE = "final_diagnose",
    GENERAL_CHECK_UP = "general_check_up",
    GENERAL_SURGERY = "general_surgery",
    ESTIMATE_CHARGE = "estimate_charge",
    ASSESSMENT = "assessment",
    ROOM_AND_BOARD = "room_and_board"
}
export declare enum MEDICAL_PROCEDURE_DETAILS_TYPE {
    TEMPERATURE = "temperature",
    SYSTOLIC_PRESSURE = "systolic_pressure",
    DIASTOLIC_PRESSURE = "diastolic_pressure",
    PULSE = "pulse",
    RESPIRATORY = "respiratory",
    RESULT = "result",
    DOCUMENT = "document"
}
export declare enum CLAIM_PAYMENT_TYPE {
    CASHLESS = "cashless",
    REIMBURSE = "reimburse",
    QRIS = "qris"
}
export declare enum MEDICAL_RECORD_DOCUMENT_CATEGORY {
    INVOICE = "invoice",
    DOCTOR_NOTE = "doctor_note",
    PRESCRIPTION = "prescription",
    SUPPORT_DOCUMENT = "support_document",
    SYSTEM = "system"
}
export declare const MEDICAL_RECORD_DOCUMENT_SUB_CATEGORY: {
    invoice: {
        INVOICE_FINAL: string;
        INVOICE_PROFORMA: string;
        INVOICE_PARTIAL: string;
        INVOICE_RECEIPT: string;
    };
    doctor_note: {
        TREATMENT_NOTES: string;
        MEDICAL_RESUME: string;
        REFERRAL: string;
        LML: string;
        LMH: string;
        LMA: string;
        OTHER: string;
    };
    prescription: {
        PRESCRIPTION_ORIGINAL: string;
        PRESCRIPTION_COPY: string;
        OTHER: string;
    };
    support_document: {
        LAB_TEST_USG: string;
        PERSONAL_INFORMATION_KTP: string;
        PERSONAL_INFORMATION_KARTU_ASURANSI: string;
        PERSONAL_INFORMATION_KK: string;
        PERSONAL_INFORMATION_KIA: string;
        PERSONAL_INFORMATION_PASPOR: string;
        PERSONAL_INFORMATION_BPJS: string;
        PERSONAL_INFORMATION_OTHER_ID: string;
        DEATH_CERTIFICATE: string;
        GENERAL_TREATMENT_ADMINISTRATION_FORM_KAMAR: string;
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOG_AWAL: string;
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOG_AKHIR: string;
        GENERAL_TREATMENT_ADMINISTRATION_SPJP_LOR: string;
        GENERAL_TREATMENT_ADMINISTRATION_CONSENT_FORM: string;
        OTHER: string;
    };
    system: {
        FINAL_DOCUMENT: string;
    };
};
export declare enum MEDICAL_RECORD_CREATED_FROM {
    USER = "user",
    FLORYN = "floryn",
    INTOOLS = "intools",
    NIMBUS = "nimbus",
    THIRD_PARTY = "third-party",
    BULK_DEDUCTION = "bulk-deduction"
}
//# sourceMappingURL=medical.d.ts.map