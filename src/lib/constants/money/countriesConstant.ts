import { currencyCountriesInfo } from "@/lib/interfaces&types/money";

export const currencyCountries: currencyCountriesInfo[] = [
  // United States Dollar (USD)
  {
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    rate: 1,
    // Distance factor: 0 for US, and sample values for territories or countries using USD.
    countries: [
      {
        value: "USA",
        label: "United States",
        distanceFactor: 0,
        taxRate: 0,
      },
      {
        value: "ASM",
        label: "American Samoa",
        distanceFactor: 0.2,
        taxRate: 0.1,
      },
      {
        value: "GUM",
        label: "Guam",
        distanceFactor: 0.4,
        taxRate: 0,
      },
      {
        value: "MNP",
        label: "Northern Mariana Islands",
        distanceFactor: 0.4,
        taxRate: 0,
      },
      {
        value: "PRI",
        label: "Puerto Rico",
        distanceFactor: 0.2,
        taxRate: 0,
      },
      {
        value: "VIR",
        label: "U.S. Virgin Islands",
        distanceFactor: 0.2,
        taxRate: 0,
      },
      {
        value: "BES",
        label: "Bonaire, Sint Eustatius, and Saba",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "ECU",
        label: "Ecuador",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "SLV",
        label: "El Salvador",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "PLW",
        label: "Palau",
        distanceFactor: 0.3,
        taxRate: 0,
      },
      {
        value: "MHL",
        label: "Marshall Islands",
        distanceFactor: 0.3,
        taxRate: 0,
      },
      {
        value: "FSM",
        label: "Federated States of Micronesia",
        distanceFactor: 0.3,
        taxRate: 0,
      },
      {
        value: "VGB",
        label: "British Virgin Islands",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "TCA",
        label: "Turks and Caicos Islands",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "TLS",
        label: "Timor-Leste",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "ZWE",
        label: "Zimbabwe",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Canadian Dollar (CAD)
  {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "CA$",
    rate: 1.35,
    countries: [
      {
        value: "CAN",
        label: "Canada",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  // Australian Dollar (AUD)
  {
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    rate: 1.51,
    countries: [
      {
        value: "AUS",
        label: "Australia",
        distanceFactor: 0.1,
        taxRate: 0.1,
      },
      {
        value: "CXR",
        label: "Christmas Island",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "CCK",
        label: "Cocos (Keeling) Islands",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "NRU",
        label: "Nauru",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "NFK",
        label: "Norfolk Island",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "HMD",
        label: "Heard Island and McDonald Islands",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Euro (EUR)
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    rate: 0.92,
    countries: [
      {
        value: "FRA",
        label: "France",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "DEU",
        label: "Germany",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "ITA",
        label: "Italy",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "ESP",
        label: "Spain",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "NLD",
        label: "Netherlands",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "GRC",
        label: "Greece",
        distanceFactor: 0.9,
        taxRate: 0,
      },
      {
        value: "AUT",
        label: "Austria",
        distanceFactor: 0.7,
        taxRate: 0.2,
      },
      {
        value: "BEL",
        label: "Belgium",
        distanceFactor: 0.7,
        taxRate: 0.21,
      },
      {
        value: "HRV",
        label: "Croatia",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "CYP",
        label: "Cyprus",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "EST",
        label: "Estonia",
        distanceFactor: 0.9,
        taxRate: 0,
      },
      {
        value: "FIN",
        label: "Finland",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "IRL",
        label: "Ireland",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "LVA",
        label: "Latvia",
        distanceFactor: 0.9,
        taxRate: 0,
      },
      {
        value: "LTU",
        label: "Lithuania",
        distanceFactor: 0.9,
        taxRate: 0,
      },
      {
        value: "LUX",
        label: "Luxembourg",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "MLT",
        label: "Malta",
        distanceFactor: 0.9,
        taxRate: 0,
      },
      {
        value: "PRT",
        label: "Portugal",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "SVK",
        label: "Slovakia",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "SVN",
        label: "Slovenia",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "AND",
        label: "Andorra",
        distanceFactor: 0.8,
        taxRate: 0.045,
      },
      {
        value: "MCO",
        label: "Monaco",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "SMR",
        label: "San Marino",
        distanceFactor: 0.8,
        taxRate: 0,
      },
      {
        value: "VAT",
        label: "Vatican City",
        distanceFactor: 0.8,
        taxRate: 0,
      },
    ],
  },
  // British Pound Sterling (GBP)
  {
    code: "GBP",
    name: "British Pound Sterling",
    symbol: "£",
    rate: 0.78,
    countries: [
      {
        value: "GBR",
        label: "United Kingdom",
        distanceFactor: 0.6,
        taxRate: 0,
      },
      {
        value: "BAT",
        label: "British Antarctic Territory",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "BIOT",
        label: "British Indian Ocean Territory",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "FLK",
        label: "Falkland Islands",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "GIB",
        label: "Gibraltar",
        distanceFactor: 0.6,
        taxRate: 0,
      },
      {
        value: "GGY",
        label: "Guernsey",
        distanceFactor: 0.6,
        taxRate: 0,
      },
      {
        value: "IMN",
        label: "Isle of Man",
        distanceFactor: 0.6,
        taxRate: 0,
      },
      {
        value: "JEY",
        label: "Jersey",
        distanceFactor: 0.6,
        taxRate: 0,
      },
      {
        value: "SHH",
        label: "Saint Helena, Ascension, and Tristan da Cunha",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "SGS",
        label: "South Georgia and the South Sandwich Islands",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Japanese Yen (JPY)
  {
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    rate: 149.82,
    countries: [
      {
        value: "JPN",
        label: "Japan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Chinese Yuan (CNY)
  {
    code: "CNY",
    name: "Chinese Yuan Renminbi",
    symbol: "¥",
    rate: 7.23,
    countries: [
      {
        value: "CHN",
        label: "China",
        distanceFactor: 0.8,
        taxRate: 0,
      },
    ],
  },
  // Indian Rupee (INR)
  {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    rate: 83.14,
    countries: [
      {
        value: "IND",
        label: "India",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Brazilian Real (BRL)
  {
    code: "BRL",
    name: "Brazilian Real",
    symbol: "R$",
    rate: 5.14,
    countries: [
      {
        value: "BRA",
        label: "Brazil",
        distanceFactor: 0.9,
        taxRate: 0,
      },
    ],
  },
  // South African Rand (ZAR)
  {
    code: "ZAR",
    name: "South African Rand",
    symbol: "R",
    rate: 18.33,
    countries: [
      {
        value: "ZAF",
        label: "South Africa",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Mexican Peso (MXN)
  {
    code: "MXN",
    name: "Mexican Peso",
    symbol: "MX$",
    rate: 16.87,
    countries: [
      {
        value: "MEX",
        label: "Mexico",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  // South Korean Won (KRW)
  {
    code: "KRW",
    name: "South Korean Won",
    symbol: "₩",
    rate: 1335.97,
    countries: [
      {
        value: "KOR",
        label: "South Korea",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Singapore Dollar (SGD)
  {
    code: "SGD",
    name: "Singapore Dollar",
    symbol: "S$",
    rate: 1.34,
    countries: [
      {
        value: "SGP",
        label: "Singapore",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // New Zealand Dollar (NZD)
  {
    code: "NZD",
    name: "New Zealand Dollar",
    symbol: "NZ$",
    rate: 1.63,
    countries: [
      {
        value: "NZL",
        label: "New Zealand",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Swiss Franc (CHF)
  {
    code: "CHF",
    name: "Swiss Franc",
    symbol: "CHF",
    rate: 0.88,
    countries: [
      {
        value: "CHE",
        label: "Switzerland",
        distanceFactor: 0.7,
        taxRate: 0,
      },
      {
        value: "LIE",
        label: "Liechtenstein",
        distanceFactor: 0.7,
        taxRate: 0,
      },
    ],
  },
  // Swedish Krona (SEK)
  {
    code: "SEK",
    name: "Swedish Krona",
    symbol: "kr",
    rate: 10.45,
    countries: [
      {
        value: "SWE",
        label: "Sweden",
        distanceFactor: 0.8,
        taxRate: 0,
      },
    ],
  },
  // Norwegian Krone (NOK)
  {
    code: "NOK",
    name: "Norwegian Krone",
    symbol: "kr",
    rate: 10.59,
    countries: [
      {
        value: "NOR",
        label: "Norway",
        distanceFactor: 0.9,
        taxRate: 0,
      },
    ],
  },
  // Danish Krone (DKK)
  {
    code: "DKK",
    name: "Danish Krone",
    symbol: "kr",
    rate: 6.87,
    countries: [
      {
        value: "DNK",
        label: "Denmark",
        distanceFactor: 0.9,
        taxRate: 0,
      },
    ],
  },
  // Russian Ruble (RUB)
  {
    code: "RUB",
    name: "Russian Ruble",
    symbol: "₽",
    rate: 90.86,
    countries: [
      {
        value: "RUS",
        label: "Russia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "ABK",
        label: "Abkhazia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
      {
        value: "SOS",
        label: "South Ossetia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // United Arab Emirates Dirham (AED)
  {
    code: "AED",
    name: "United Arab Emirates Dirham",
    symbol: "د.إ",
    rate: 3.67,
    countries: [
      {
        value: "ARE",
        label: "United Arab Emirates",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Chilean Peso (CLP)
  {
    code: "CLP",
    name: "Chilean Peso",
    symbol: "$",
    rate: 800,
    countries: [
      {
        value: "CHL",
        label: "Chile",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Czech Koruna (CZK)
  {
    code: "CZK",
    name: "Czech Koruna",
    symbol: "Kč",
    rate: 22,
    countries: [
      {
        value: "CZE",
        label: "Czech Republic",
        distanceFactor: 0.9,
        taxRate: 0,
      },
    ],
  },
  // Hong Kong Dollar (HKD)
  {
    code: "HKD",
    name: "Hong Kong Dollar",
    symbol: "HK$",
    rate: 7.8,
    countries: [
      {
        value: "HKG",
        label: "Hong Kong",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Hungarian Forint (HUF)
  {
    code: "HUF",
    name: "Hungarian Forint",
    symbol: "Ft",
    rate: 370,
    countries: [
      {
        value: "HUN",
        label: "Hungary",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Indonesian Rupiah (IDR)
  {
    code: "IDR",
    name: "Indonesian Rupiah",
    symbol: "Rp",
    rate: 15000,
    countries: [
      {
        value: "IDN",
        label: "Indonesia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Israeli New Shekel (ILS)
  {
    code: "ILS",
    name: "Israeli New Shekel",
    symbol: "₪",
    rate: 3.5,
    countries: [
      {
        value: "ISR",
        label: "Israel",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Malaysian Ringgit (MYR)
  {
    code: "MYR",
    name: "Malaysian Ringgit",
    symbol: "RM",
    rate: 4.5,
    countries: [
      {
        value: "MYS",
        label: "Malaysia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Pakistani Rupee (PKR)
  {
    code: "PKR",
    name: "Pakistani Rupee",
    symbol: "₨",
    rate: 280,
    countries: [
      {
        value: "PAK",
        label: "Pakistan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Philippine Peso (PHP)
  {
    code: "PHP",
    name: "Philippine Peso",
    symbol: "₱",
    rate: 50,
    countries: [
      {
        value: "PHL",
        label: "Philippines",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Polish Zloty (PLN)
  {
    code: "PLN",
    name: "Polish Zloty",
    symbol: "zł",
    rate: 4.2,
    countries: [
      {
        value: "POL",
        label: "Poland",
        distanceFactor: 0.8,
        taxRate: 0,
      },
    ],
  },
  // Saudi Riyal (SAR)
  {
    code: "SAR",
    name: "Saudi Riyal",
    symbol: "﷼",
    rate: 3.75,
    countries: [
      {
        value: "SAU",
        label: "Saudi Arabia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // New Taiwan Dollar (TWD)
  {
    code: "TWD",
    name: "New Taiwan Dollar",
    symbol: "NT$",
    rate: 30,
    countries: [
      {
        value: "TWN",
        label: "Taiwan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Turkish Lira (TRY)
  {
    code: "TRY",
    name: "Turkish Lira",
    symbol: "₺",
    rate: 19,
    countries: [
      {
        value: "TUR",
        label: "Turkey",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  // Additional missing currencies from the select component:
  {
    code: "AFN",
    name: "Afghan Afghani",
    symbol: "؋",
    rate: 87.0,
    countries: [
      {
        value: "AFG",
        label: "Afghanistan",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "ALL",
    name: "Albanian Lek",
    symbol: "L",
    rate: 107.0,
    countries: [
      {
        value: "ALB",
        label: "Albania",
        distanceFactor: 0.1,
        taxRate: 0.2,
      },
    ],
  },
  {
    code: "DZD",
    name: "Algerian Dinar",
    symbol: "د.ج",
    rate: 140.0,
    countries: [
      {
        value: "DZA",
        label: "Algeria",
        distanceFactor: 0.1,
        taxRate: 0.19,
      },
    ],
  },
  {
    code: "AOA",
    name: "Angolan Kwanza",
    symbol: "Kz",
    rate: 500.0,
    countries: [
      {
        value: "AGO",
        label: "Angola",
        distanceFactor: 0.2,
        taxRate: 0.14,
      },
    ],
  },
  {
    code: "ARS",
    name: "Argentine Peso",
    symbol: "$",
    rate: 140.0,
    countries: [
      {
        value: "ARG",
        label: "Argentina",
        distanceFactor: 0.1,
        taxRate: 0.21,
      },
    ],
  },
  {
    code: "AMD",
    name: "Armenian Dram",
    symbol: "֏",
    rate: 480.0,
    countries: [
      {
        value: "ARM",
        label: "Armenia",
        distanceFactor: 0.1,
        taxRate: 0.2,
      },
    ],
  },
  {
    code: "AWG",
    name: "Aruban Florin",
    symbol: "ƒ",
    rate: 2.0,
    countries: [
      {
        value: "ABW",
        label: "Aruba",
        distanceFactor: 0.1,
        taxRate: 0.07,
      },
    ],
  },
  {
    code: "AZN",
    name: "Azerbaijani Manat",
    symbol: "₼",
    rate: 1.7,
    countries: [
      {
        value: "AZE",
        label: "Azerbaijan",
        distanceFactor: 0.1,
        taxRate: 0.18,
      },
    ],
  },
  {
    code: "BSD",
    name: "Bahamian Dollar",
    symbol: "$",
    rate: 1,
    countries: [
      {
        value: "BHS",
        label: "Bahamas",
        distanceFactor: 0.3,
        taxRate: 0.1,
      },
    ],
  },
  {
    code: "BHD",
    name: "Bahraini Dinar",
    symbol: "BHD",
    rate: 0.38,
    countries: [
      {
        value: "BHR",
        label: "Bahrain",
        distanceFactor: 0.1,
        taxRate: 0.1,
      },
    ],
  },
  {
    code: "BDT",
    name: "Bangladeshi Taka",
    symbol: "৳",
    rate: 107.0,
    countries: [
      {
        value: "BGD",
        label: "Bangladesh",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BBD",
    name: "Barbadian Dollar",
    symbol: "$",
    rate: 2.0,
    countries: [
      {
        value: "BRB",
        label: "Barbados",
        distanceFactor: 0.1,
        taxRate: 0.175,
      },
    ],
  },
  {
    code: "BYN",
    name: "Belarusian Ruble",
    symbol: "Br",
    rate: 2.5,
    countries: [
      {
        value: "BLR",
        label: "Belarus",
        distanceFactor: 0.1,
        taxRate: 0.2,
      },
    ],
  },
  {
    code: "BZD",
    name: "Belize Dollar",
    symbol: "$",
    rate: 2.0,
    countries: [
      {
        value: "BLZ",
        label: "Belize",
        distanceFactor: 0.8,
        taxRate: 0.125,
      },
    ],
  },
  {
    code: "BMD",
    name: "Bermudan Dollar",
    symbol: "$",
    rate: 1,
    countries: [
      {
        value: "BMU",
        label: "Bermuda",
        distanceFactor: 0.5,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BTN",
    name: "Bhutanese Ngultrum",
    symbol: "Nu.",
    rate: 74.0,
    countries: [
      {
        value: "BTN",
        label: "Bhutan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BOB",
    name: "Bolivian Boliviano",
    symbol: "Bs.",
    rate: 6.9,
    countries: [
      {
        value: "BOL",
        label: "Bolivia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BAM",
    name: "Bosnia-Herzegovina Convertible Mark",
    symbol: "KM",
    rate: 1.8,
    countries: [
      {
        value: "BIH",
        label: "Bosnia and Herzegovina",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BWP",
    name: "Botswana Pula",
    symbol: "P",
    rate: 12.0,
    countries: [
      {
        value: "BWA",
        label: "Botswana",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BND",
    name: "Brunei Dollar",
    symbol: "$",
    rate: 1.35,
    countries: [
      {
        value: "BRN",
        label: "Brunei",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BGN",
    name: "Bulgarian Lev",
    symbol: "лв",
    rate: 1.8,
    countries: [
      {
        value: "BGR",
        label: "Bulgaria",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "BIF",
    name: "Burundian Franc",
    symbol: "FBu",
    rate: 2000,
    countries: [
      {
        value: "BDI",
        label: "Burundi",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "XPF",
    name: "CFP Franc",
    symbol: "₣",
    rate: 100,
    countries: [
      {
        value: "PYF",
        label: "French Polynesia",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KHR",
    name: "Cambodian Riel",
    symbol: "៛",
    rate: 4100,
    countries: [
      {
        value: "KHM",
        label: "Cambodia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "CVE",
    name: "Cape Verdean Escudo",
    symbol: "Esc",
    rate: 100,
    countries: [
      {
        value: "CPV",
        label: "Cape Verde",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KYD",
    name: "Cayman Islands Dollar",
    symbol: "$",
    rate: 0.83,
    countries: [
      {
        value: "CYM",
        label: "Cayman Islands",
        distanceFactor: 0.5,
        taxRate: 0,
      },
    ],
  },
  {
    code: "XAF",
    name: "Central African CFA Franc",
    symbol: "F.CFA",
    rate: 600,
    countries: [
      {
        value: "XAF",
        label: "Central African region",
        distanceFactor: 2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "COP",
    name: "Colombian Peso",
    symbol: "$",
    rate: 4000,
    countries: [
      {
        value: "COL",
        label: "Colombia",
        distanceFactor: 0.6,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KMF",
    name: "Comorian Franc",
    symbol: "FC",
    rate: 450,
    countries: [
      {
        value: "COM",
        label: "Comoros",
        distanceFactor: 28,
        taxRate: 0,
      },
    ],
  },
  {
    code: "CDF",
    name: "Congolese Franc",
    symbol: "FC",
    rate: 2000,
    countries: [
      {
        value: "COD",
        label: "DR Congo",
        distanceFactor: 30,
        taxRate: 0,
      },
    ],
  },
  {
    code: "CRC",
    name: "Costa Rican Colón",
    symbol: "₡",
    rate: 500,
    countries: [
      {
        value: "CRI",
        label: "Costa Rica",
        distanceFactor: 0.4,
        taxRate: 0,
      },
    ],
  },
  {
    code: "CUP",
    name: "Cuban Peso",
    symbol: "₱",
    rate: 25,
    countries: [
      {
        value: "CUB",
        label: "Cuba",
        distanceFactor: 0.3,
        taxRate: 0,
      },
    ],
  },
  {
    code: "DJF",
    name: "Djiboutian Franc",
    symbol: "Fdj",
    rate: 177,
    countries: [
      {
        value: "DJI",
        label: "Djibouti",
        distanceFactor: 30,
        taxRate: 0,
      },
    ],
  },
  {
    code: "DOP",
    name: "Dominican Peso",
    symbol: "$",
    rate: 56,
    countries: [
      {
        value: "DOM",
        label: "Dominican Republic",
        distanceFactor: 0.4,
        taxRate: 0,
      },
    ],
  },
  {
    code: "XCD",
    name: "East Caribbean Dollar",
    symbol: "EC$",
    rate: 2.7,
    countries: [
      {
        value: "DMA",
        label: "Eastern Caribbean",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "EGP",
    name: "Egyptian Pound",
    symbol: "E£",
    rate: 30,
    countries: [
      {
        value: "EGY",
        label: "Egypt",
        distanceFactor: 0.9,
        taxRate: 0,
      },
    ],
  },
  {
    code: "ETB",
    name: "Ethiopian Birr",
    symbol: "Br",
    rate: 50,
    countries: [
      {
        value: "ETH",
        label: "Ethiopia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "FJD",
    name: "Fijian Dollar",
    symbol: "$",
    rate: 2.2,
    countries: [
      {
        value: "FJI",
        label: "Fiji",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GMD",
    name: "Gambian Dalasi",
    symbol: "D",
    rate: 51,
    countries: [
      {
        value: "GMB",
        label: "Gambia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GEL",
    name: "Georgian Lari",
    symbol: "₾",
    rate: 2.8,
    countries: [
      {
        value: "GEO",
        label: "Georgia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GHS",
    name: "Ghanaian Cedi",
    symbol: "₵",
    rate: 12,
    countries: [
      {
        value: "GHA",
        label: "Ghana",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GTQ",
    name: "Guatemalan Quetzal",
    symbol: "Q",
    rate: 7.7,
    countries: [
      {
        value: "GTM",
        label: "Guatemala",
        distanceFactor: 0.5,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GNF",
    name: "Guinean Franc",
    symbol: "FG",
    rate: 9800,
    countries: [
      {
        value: "GIN",
        label: "Guinea",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "GYD",
    name: "Guyanese Dollar",
    symbol: "$",
    rate: 210,
    countries: [
      {
        value: "GUY",
        label: "Guyana",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "HTG",
    name: "Haitian Gourde",
    symbol: "G",
    rate: 105,
    countries: [
      {
        value: "HTI",
        label: "Haiti",
        distanceFactor: 0.4,
        taxRate: 0,
      },
    ],
  },
  {
    code: "HNL",
    name: "Honduran Lempira",
    symbol: "L",
    rate: 24,
    countries: [
      {
        value: "HND",
        label: "Honduras",
        distanceFactor: 0.4,
        taxRate: 0,
      },
    ],
  },
  {
    code: "ISK",
    name: "Icelandic Króna",
    symbol: "kr",
    rate: 140,
    countries: [
      {
        value: "ISL",
        label: "Iceland",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "IRR",
    name: "Iranian Rial",
    symbol: "﷼",
    rate: 42000,
    countries: [
      {
        value: "IRN",
        label: "Iran",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "IQD",
    name: "Iraqi Dinar",
    symbol: "ع.د",
    rate: 1460,
    countries: [
      {
        value: "IRQ",
        label: "Iraq",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "JMD",
    name: "Jamaican Dollar",
    symbol: "J$",
    rate: 155,
    countries: [
      {
        value: "JAM",
        label: "Jamaica",
        distanceFactor: 0.6,
        taxRate: 0,
      },
    ],
  },
  {
    code: "JOD",
    name: "Jordanian Dinar",
    symbol: "JD",
    rate: 0.71,
    countries: [
      {
        value: "JOR",
        label: "Jordan",
        distanceFactor: 0.7,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KZT",
    name: "Kazakhstani Tenge",
    symbol: "₸",
    rate: 470,
    countries: [
      {
        value: "KAZ",
        label: "Kazakhstan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    symbol: "KSh",
    rate: 110,
    countries: [
      {
        value: "KEN",
        label: "Kenya",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KWD",
    name: "Kuwaiti Dinar",
    symbol: "KD",
    rate: 0.3,
    countries: [
      {
        value: "KWT",
        label: "Kuwait",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "KGS",
    name: "Kyrgyzstani Som",
    symbol: "KGS",
    rate: 84,
    countries: [
      {
        value: "KGZ",
        label: "Kyrgyzstan",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LAK",
    name: "Laotian Kip",
    symbol: "₭",
    rate: 17000,
    countries: [
      {
        value: "LAO",
        label: "Laos",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LBP",
    name: "Lebanese Pound",
    symbol: "ل.ل",
    rate: 15000,
    countries: [
      {
        value: "LBN",
        label: "Lebanon",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LSL",
    name: "Lesotho Loti",
    symbol: "L",
    rate: 15,
    countries: [
      {
        value: "LSO",
        label: "Lesotho",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LRD",
    name: "Liberian Dollar",
    symbol: "$",
    rate: 150,
    countries: [
      {
        value: "LBR",
        label: "Liberia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LYD",
    name: "Libyan Dinar",
    symbol: "LD",
    rate: 4.5,
    countries: [
      {
        value: "LBY",
        label: "Libya",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MOP",
    name: "Macanese Pataca",
    symbol: "MOP$",
    rate: 8,
    countries: [
      {
        value: "MAC",
        label: "Macau",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MKD",
    name: "Macedonian Denar",
    symbol: "ден",
    rate: 55,
    countries: [
      {
        value: "MKD",
        label: "North Macedonia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MGA",
    name: "Malagasy Ariary",
    symbol: "Ar",
    rate: 4100,
    countries: [
      {
        value: "MDG",
        label: "Madagascar",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MWK",
    name: "Malawian Kwacha",
    symbol: "MK",
    rate: 820,
    countries: [
      {
        value: "MWI",
        label: "Malawi",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MVR",
    name: "Maldivian Rufiyaa",
    symbol: "Rf",
    rate: 15,
    countries: [
      {
        value: "MDV",
        label: "Maldives",
        distanceFactor: 2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MRU",
    name: "Mauritanian Ouguiya",
    symbol: "UM",
    rate: 36,
    countries: [
      {
        value: "MRT",
        label: "Mauritania",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MUR",
    name: "Mauritian Rupee",
    symbol: "₨",
    rate: 43,
    countries: [
      {
        value: "MUS",
        label: "Mauritius",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MDL",
    name: "Moldovan Leu",
    symbol: "L",
    rate: 18,
    countries: [
      {
        value: "MDA",
        label: "Moldova",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MAD",
    name: "Moroccan Dirham",
    symbol: "DH",
    rate: 9,
    countries: [
      {
        value: "MAR",
        label: "Morocco",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MZN",
    name: "Mozambican Metical",
    symbol: "Mt",
    rate: 63,
    countries: [
      {
        value: "MOZ",
        label: "Mozambique",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "MMK",
    name: "Myanmar Kyat",
    symbol: "K",
    rate: 2100,
    countries: [
      {
        value: "MMR",
        label: "Myanmar",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "NAD",
    name: "Namibian Dollar",
    symbol: "$",
    rate: 15,
    countries: [
      {
        value: "NAM",
        label: "Namibia",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "NPR",
    name: "Nepalese Rupee",
    symbol: "रु",
    rate: 130,
    countries: [
      {
        value: "NPL",
        label: "Nepal",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "ANG",
    name: "Netherlands Antillean Guilder",
    symbol: "ƒ",
    rate: 1.79,
    countries: [
      {
        value: "ANT",
        label: "Netherlands Antilles",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "NIO",
    name: "Nicaraguan Córdoba",
    symbol: "C$",
    rate: 35,
    countries: [
      {
        value: "NIC",
        label: "Nicaragua",
        distanceFactor: 0.5,
        taxRate: 0,
      },
    ],
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    symbol: "₦",
    rate: 460,
    countries: [
      {
        value: "NGA",
        label: "Nigeria",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "OMR",
    name: "Omani Rial",
    symbol: "OMR",
    rate: 0.38,
    countries: [
      {
        value: "OMN",
        label: "Oman",
        distanceFactor: 26,
        taxRate: 0,
      },
    ],
  },
  {
    code: "PAB",
    name: "Panamanian Balboa",
    symbol: "B/.",
    rate: 1,
    countries: [
      {
        value: "PAN",
        label: "Panama",
        distanceFactor: 0.5,
        taxRate: 0,
      },
    ],
  },
  {
    code: "PGK",
    name: "Papua New Guinean Kina",
    symbol: "K",
    rate: 3.5,
    countries: [
      {
        value: "PNG",
        label: "Papua New Guinea",
        distanceFactor: 28,
        taxRate: 0,
      },
    ],
  },
  {
    code: "PYG",
    name: "Paraguayan Guarani",
    symbol: "₲",
    rate: 8000,
    countries: [
      {
        value: "PRY",
        label: "Paraguay",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "PEN",
    name: "Peruvian Sol",
    symbol: "S/",
    rate: 3.5,
    countries: [
      {
        value: "PER",
        label: "Peru",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SBD",
    name: "Solomon Islands Dollar",
    symbol: "$",
    rate: 7,
    countries: [
      {
        value: "SLB",
        label: "Solomon Islands",
        distanceFactor: 32,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SOS",
    name: "Somali Shilling",
    symbol: "Sh",
    rate: 570,
    countries: [
      {
        value: "SOM",
        label: "Somalia",
        distanceFactor: 30,
        taxRate: 0,
      },
    ],
  },
  {
    code: "VES",
    name: "Sovereign Bolivar",
    symbol: "Bs.S",
    rate: 20000000,
    countries: [
      {
        value: "VEN",
        label: "Venezuela",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SDR",
    name: "Special Drawing Rights",
    symbol: "SDR",
    rate: 1,
    countries: [
      {
        value: "SDR",
        label: "IMF SDR",
        distanceFactor: 0,
        taxRate: 0,
      },
    ],
  },
  {
    code: "LKR",
    name: "Sri Lankan Rupee",
    symbol: "Rs",
    rate: 370,
    countries: [
      {
        value: "LKA",
        label: "Sri Lanka",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SDG",
    name: "Sudanese Pound",
    symbol: "LS",
    rate: 600,
    countries: [
      {
        value: "SDN",
        label: "Sudan",
        distanceFactor: 24,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SRD",
    name: "Surinamese Dollar",
    symbol: "$",
    rate: 22,
    countries: [
      {
        value: "SUR",
        label: "Suriname",
        distanceFactor: 26,
        taxRate: 0,
      },
    ],
  },
  {
    code: "SZL",
    name: "Swazi Lilangeni",
    symbol: "E",
    rate: 15,
    countries: [
      {
        value: "SWZ",
        label: "Eswatini",
        distanceFactor: 24,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TJS",
    name: "Tajikistani Somoni",
    symbol: "SM",
    rate: 11,
    countries: [
      {
        value: "TJK",
        label: "Tajikistan",
        distanceFactor: 28,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TZS",
    name: "Tanzanian Shilling",
    symbol: "TSh",
    rate: 2300,
    countries: [
      {
        value: "TZA",
        label: "Tanzania",
        distanceFactor: 26,
        taxRate: 0,
      },
    ],
  },
  {
    code: "THB",
    name: "Thai Baht",
    symbol: "฿",
    rate: 33,
    countries: [
      {
        value: "THA",
        label: "Thailand",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TOP",
    name: "Tongan Paʻanga",
    symbol: "T$",
    rate: 2.3,
    countries: [
      {
        value: "TON",
        label: "Tonga",
        distanceFactor: 35,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TTD",
    name: "Trinidad & Tobago Dollar",
    symbol: "$",
    rate: 6.8,
    countries: [
      {
        value: "TTO",
        label: "Trinidad and Tobago",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TND",
    name: "Tunisian Dinar",
    symbol: "د.ت",
    rate: 3,
    countries: [
      {
        value: "TUN",
        label: "Tunisia",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "TMT",
    name: "Turkmenistani Manat",
    symbol: "m",
    rate: 3.5,
    countries: [
      {
        value: "TKM",
        label: "Turkmenistan",
        distanceFactor: 30,
        taxRate: 0,
      },
    ],
  },
  {
    code: "UGX",
    name: "Ugandan Shilling",
    symbol: "USh",
    rate: 3700,
    countries: [
      {
        value: "UGA",
        label: "Uganda",
        distanceFactor: 35,
        taxRate: 0,
      },
    ],
  },
  {
    code: "UAH",
    name: "Ukrainian Hryvnia",
    symbol: "₴",
    rate: 27,
    countries: [
      {
        value: "UKR",
        label: "Ukraine",
        distanceFactor: 0.2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "UYU",
    name: "Uruguayan Peso",
    symbol: "$",
    rate: 40,
    countries: [
      {
        value: "URY",
        label: "Uruguay",
        distanceFactor: 0.1,
        taxRate: 0,
      },
    ],
  },
  {
    code: "UZS",
    name: "Uzbekistani Som",
    symbol: "so'm",
    rate: 11000,
    countries: [
      {
        value: "UZB",
        label: "Uzbekistan",
        distanceFactor: 2,
        taxRate: 0,
      },
    ],
  },
  {
    code: "VND",
    name: "Vietnamese dong",
    symbol: "₫",
    rate: 23000,
    countries: [
      {
        value: "VNM",
        label: "Vietnam",
        distanceFactor: 22,
        taxRate: 0,
      },
    ],
  },
  {
    code: "XOF",
    name: "West African CFA Franc",
    symbol: "F.CFA",
    rate: 600,
    countries: [
      {
        value: "XOF",
        label: "West African region",
        distanceFactor: 40,
        taxRate: 0,
      },
    ],
  },
  {
    code: "YER",
    name: "Yemeni Rial",
    symbol: "﷼",
    rate: 250,
    countries: [
      {
        value: "YEM",
        label: "Yemen",
        distanceFactor: 28,
        taxRate: 0,
      },
    ],
  },
  {
    code: "ZMW",
    name: "Zambian Kwacha",
    symbol: "ZK",
    rate: 20,
    countries: [
      {
        value: "ZMB",
        label: "Zambia",
        distanceFactor: 30,
        taxRate: 0,
      },
    ],
  },
];
