export interface currencyCountriesInfo {
  code: string;
  name: string;
  symbol: string;
  rate: number;
  countries: CountriesInformation[];
}

export interface CountriesInformation {
  value: string;
  label: string;
  distanceFactor: number;
  taxRate: number;
}

export interface CountryTaxInfo {
  country: string;
  code: string;
  vatRate: number; // VAT/GST rate in decimal (e.g., 0.19 for 19%)
  dutyRate: number; // Duty rate in decimal
  deMinimisDuty: number; // De minimis threshold for duty in USD
  deMinimisVAT: number; // De minimis threshold for VAT/GST in USD
  hasImportFees: boolean; // Whether the country applies additional import processing fees
}

export interface CountryTaxInfo {
  country: string;
  code: string;
  vatRate: number; // VAT/GST rate in decimal (e.g., 0.19 for 19%)
  dutyRate: number; // Duty rate in decimal
  deMinimisDuty: number; // De minimis threshold for duty in USD
  deMinimisVAT: number; // De minimis threshold for VAT/GST in USD
  hasImportFees: boolean; // Whether the country applies additional import processing fees
}

export interface PaymentSubmissionData {
  cardDetails: CreditCard;
  amount: number;
  billingAddress?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  customerInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface CreditCard {
  number: string;
  expirationDate: string;
  cvv: string;
  issuer: string;
}

export interface Payment {
  id: string;
  amount: number;
  status: PaymentStatus;
  email: string;
  date: Date;
  cardDetails?: Partial<CreditCard>;
  error?: string;
}

export type PaymentStatus =
  | "success"
  | "pending"
  | "failed"
  | "processing"
  | "refunded";

export type CurrencyCode = string;

export type Currency = {
  code: CurrencyCode;
  name: string;
  rate: number;
};

export interface CurrencyContextType {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  calculateImportFee: (value: number, countryCode: string) => number;
  getImportTaxBreakdown: (
    subtotal: number,
    country: string
  ) => {
    duty: number;
    vat: number;
    total: number;
    subtotal: number;
    grandTotal: number;
  };
  calculateImportTaxes: (
    subtotal: number,
    country: string
  ) => {
    dutyAmount: number;
    vatAmount: number;
    totalImportCharges: number;
    appliedDuty: boolean;
    appliedVAT: boolean;
  };

  // Currency conversion
  convertAmount: (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) => number;
  formatCurrency: (amount: number, currencyCode: string) => string;

  // Currency rates management
  updateExchangeRate: (currencyCode: string, newRate: number) => void;
  getExchangeRate: (currencyCode: string) => number;

  // Currency validation
  isCurrencySupported: (currencyCode: string) => boolean;
  getAvailableCurrencies: () => Currency[];

  // Currency info
  getCurrencySymbol: (currencyCode: string) => string;
  getCurrencyName: (currencyCode: string) => string;

  getTaxInfoByCountryCode: (countryCode: string) => CountryTaxInfo | undefined;
  getTaxInfoByCountryName: (countryName: string) => CountryTaxInfo | undefined;
  getTaxInfoByCurrencyCode: (
    currencyCode: string
  ) => CountryTaxInfo | undefined;
  getTaxInfoByCurrencyName: (
    currencyName: string
  ) => CountryTaxInfo | undefined;
  getTaxInfoByCurrency: (currency: Currency) => CountryTaxInfo | undefined;
  getTaxInfoByCountry: (country: string) => CountryTaxInfo | undefined;

  // Last updated timestamp
  lastRatesUpdate: Date | null;
}
