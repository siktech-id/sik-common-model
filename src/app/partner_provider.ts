export enum PARTNER_PROVIDER_TYPE {
  HOSPITAL = 'hospital',
  CLINIC = 'clinic',
  LABORATORY = 'laboratory',
  DENTAL = 'dental',
  OPTICS = 'optics',
  PHARMACY = 'pharmacy',
}

export enum PARTNER_PROVIDER_STATUS {
  PREFERRED = 'preferred',
  NON_PREFERRED = 'non-preferred',
  BLACKLISTED = 'blacklisted'
}

export enum  PARTNER_PROVIDER_PAYMENT_STATUS{
  MATCH = 'MATCH',
  NOT_MATCH = 'NOT_MATCH',
  UNCLEAR = 'UNCLEAR',
  PENDING = 'PENDING'
}