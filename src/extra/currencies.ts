const currencies = [
  {
    name: "United Arab Emirates Dirham",
    code: "AED",
    displayName: "United Arab Emirates Dirham - (AED)",
  },
  {
    name: "Afghan Afghani",
    code: "AFN",
    displayName: "Afghan Afghani - (AFN)",
  },
  {
    name: "Albanian Lek",
    code: "ALL",
    displayName: "Albanian Lek - (ALL)",
  },
  {
    name: "Armenian Dram",
    code: "AMD",
    displayName: "Armenian Dram - (AMD)",
  },
  {
    name: "Netherlands Antillean Guilder",
    code: "ANG",
    displayName: "Netherlands Antillean Guilder - (ANG)",
  },
  {
    name: "Angolan Kwanza",
    code: "AOA",
    displayName: "Angolan Kwanza - (AOA)",
  },
  {
    name: "Argentine Peso",
    code: "ARS",
    displayName: "Argentine Peso - (ARS)",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
    displayName: "Australian Dollar - (AUD)",
  },
  {
    name: "Aruban Florin",
    code: "AWG",
    displayName: "Aruban Florin - (AWG)",
  },
  {
    name: "Azerbaijani Manat",
    code: "AZN",
    displayName: "Azerbaijani Manat - (AZN)",
  },
  {
    name: "Bosnia-Herzegovina Convertible Mark",
    code: "BAM",
    displayName: "Bosnia-Herzegovina Convertible Mark - (BAM)",
  },
  {
    name: "Barbadian Dollar",
    code: "BBD",
    displayName: "Barbadian Dollar - (BBD)",
  },
  {
    name: "Bangladeshi Taka",
    code: "BDT",
    displayName: "Bangladeshi Taka - (BDT)",
  },
  {
    name: "Bulgarian Lev",
    code: "BGN",
    displayName: "Bulgarian Lev - (BGN)",
  },
  {
    name: "Bahraini Dinar",
    code: "BHD",
    displayName: "Bahraini Dinar - (BHD)",
  },
  {
    name: "Burundian Franc",
    code: "BIF",
    displayName: "Burundian Franc - (BIF)",
  },
  {
    name: "Bermudan Dollar",
    code: "BMD",
    displayName: "Bermudan Dollar - (BMD)",
  },
  {
    name: "Brunei Dollar",
    code: "BND",
    displayName: "Brunei Dollar - (BND)",
  },
  {
    name: "Bolivian Boliviano",
    code: "BOB",
    displayName: "Bolivian Boliviano - (BOB)",
  },
  {
    name: "Brazilian Real",
    code: "BRL",
    displayName: "Brazilian Real - (BRL)",
  },
  {
    name: "Bahamian Dollar",
    code: "BSD",
    displayName: "Bahamian Dollar - (BSD)",
  },
  { name: "Bitcoin", code: "BTC", displayName: "Bitcoin - (BTC)" },
  {
    name: "Bhutanese Ngultrum",
    code: "BTN",
    displayName: "Bhutanese Ngultrum - (BTN)",
  },
  {
    name: "Botswanan Pula",
    code: "BWP",
    displayName: "Botswanan Pula - (BWP)",
  },
  {
    name: "Belarusian Ruble",
    code: "BYN",
    displayName: "Belarusian Ruble - (BYN)",
  },
  {
    name: "Belize Dollar",
    code: "BZD",
    displayName: "Belize Dollar - (BZD)",
  },
  {
    name: "Canadian Dollar",
    code: "CAD",
    displayName: "Canadian Dollar - (CAD)",
  },
  {
    name: "Congolese Franc",
    code: "CDF",
    displayName: "Congolese Franc - (CDF)",
  },
  {
    name: "Swiss Franc",
    code: "CHF",
    displayName: "Swiss Franc - (CHF)",
  },
  {
    name: "Chilean Unit of Account (UF)",
    code: "CLF",
    displayName: "Chilean Unit of Account (UF) - (CLF)",
  },
  {
    name: "Chilean Peso",
    code: "CLP",
    displayName: "Chilean Peso - (CLP)",
  },
  {
    name: "Chinese Yuan (Offshore)",
    code: "CNH",
    displayName: "Chinese Yuan (Offshore) - (CNH)",
  },
  {
    name: "Chinese Yuan",
    code: "CNY",
    displayName: "Chinese Yuan - (CNY)",
  },
  {
    name: "Colombian Peso",
    code: "COP",
    displayName: "Colombian Peso - (COP)",
  },
  {
    name: "Costa Rican Colón",
    code: "CRC",
    displayName: "Costa Rican Colón - (CRC)",
  },
  {
    name: "Cuban Convertible Peso",
    code: "CUC",
    displayName: "Cuban Convertible Peso - (CUC)",
  },
  { name: "Cuban Peso", code: "CUP", displayName: "Cuban Peso - (CUP)" },
  {
    name: "Cape Verdean Escudo",
    code: "CVE",
    displayName: "Cape Verdean Escudo - (CVE)",
  },
  {
    name: "Czech Republic Koruna",
    code: "CZK",
    displayName: "Czech Republic Koruna - (CZK)",
  },
  {
    name: "Djiboutian Franc",
    code: "DJF",
    displayName: "Djiboutian Franc - (DJF)",
  },
  {
    name: "Danish Krone",
    code: "DKK",
    displayName: "Danish Krone - (DKK)",
  },
  {
    name: "Dominican Peso",
    code: "DOP",
    displayName: "Dominican Peso - (DOP)",
  },
  {
    name: "Algerian Dinar",
    code: "DZD",
    displayName: "Algerian Dinar - (DZD)",
  },
  {
    name: "Egyptian Pound",
    code: "EGP",
    displayName: "Egyptian Pound - (EGP)",
  },
  {
    name: "Eritrean Nakfa",
    code: "ERN",
    displayName: "Eritrean Nakfa - (ERN)",
  },
  {
    name: "Ethiopian Birr",
    code: "ETB",
    displayName: "Ethiopian Birr - (ETB)",
  },
  { name: "Euro", code: "EUR", displayName: "Euro - (EUR)" },
  {
    name: "Fijian Dollar",
    code: "FJD",
    displayName: "Fijian Dollar - (FJD)",
  },
  {
    name: "Falkland Islands Pound",
    code: "FKP",
    displayName: "Falkland Islands Pound - (FKP)",
  },
  {
    name: "British Pound Sterling",
    code: "GBP",
    displayName: "British Pound Sterling - (GBP)",
  },
  {
    name: "Georgian Lari",
    code: "GEL",
    displayName: "Georgian Lari - (GEL)",
  },
  {
    name: "Guernsey Pound",
    code: "GGP",
    displayName: "Guernsey Pound - (GGP)",
  },
  {
    name: "Ghanaian Cedi",
    code: "GHS",
    displayName: "Ghanaian Cedi - (GHS)",
  },
  {
    name: "Gibraltar Pound",
    code: "GIP",
    displayName: "Gibraltar Pound - (GIP)",
  },
  {
    name: "Gambian Dalasi",
    code: "GMD",
    displayName: "Gambian Dalasi - (GMD)",
  },
  {
    name: "Guinean Franc",
    code: "GNF",
    displayName: "Guinean Franc - (GNF)",
  },
  {
    name: "Guatemalan Quetzal",
    code: "GTQ",
    displayName: "Guatemalan Quetzal - (GTQ)",
  },
  {
    name: "Guyanaese Dollar",
    code: "GYD",
    displayName: "Guyanaese Dollar - (GYD)",
  },
  {
    name: "Hong Kong Dollar",
    code: "HKD",
    displayName: "Hong Kong Dollar - (HKD)",
  },
  {
    name: "Honduran Lempira",
    code: "HNL",
    displayName: "Honduran Lempira - (HNL)",
  },
  {
    name: "Croatian Kuna",
    code: "HRK",
    displayName: "Croatian Kuna - (HRK)",
  },
  {
    name: "Haitian Gourde",
    code: "HTG",
    displayName: "Haitian Gourde - (HTG)",
  },
  {
    name: "Hungarian Forint",
    code: "HUF",
    displayName: "Hungarian Forint - (HUF)",
  },
  {
    name: "Indonesian Rupiah",
    code: "IDR",
    displayName: "Indonesian Rupiah - (IDR)",
  },
  {
    name: "Israeli New Sheqel",
    code: "ILS",
    displayName: "Israeli New Sheqel - (ILS)",
  },
  { name: "Manx pound", code: "IMP", displayName: "Manx pound - (IMP)" },
  {
    name: "Indian Rupee",
    code: "INR",
    displayName: "Indian Rupee - (INR)",
  },
  {
    name: "Iraqi Dinar",
    code: "IQD",
    displayName: "Iraqi Dinar - (IQD)",
  },
  {
    name: "Iranian Rial",
    code: "IRR",
    displayName: "Iranian Rial - (IRR)",
  },
  {
    name: "Icelandic Króna",
    code: "ISK",
    displayName: "Icelandic Króna - (ISK)",
  },
  {
    name: "Jersey Pound",
    code: "JEP",
    displayName: "Jersey Pound - (JEP)",
  },
  {
    name: "Jamaican Dollar",
    code: "JMD",
    displayName: "Jamaican Dollar - (JMD)",
  },
  {
    name: "Jordanian Dinar",
    code: "JOD",
    displayName: "Jordanian Dinar - (JOD)",
  },
  {
    name: "Japanese Yen",
    code: "JPY",
    displayName: "Japanese Yen - (JPY)",
  },
  {
    name: "Kenyan Shilling",
    code: "KES",
    displayName: "Kenyan Shilling - (KES)",
  },
  {
    name: "Kyrgystani Som",
    code: "KGS",
    displayName: "Kyrgystani Som - (KGS)",
  },
  {
    name: "Cambodian Riel",
    code: "KHR",
    displayName: "Cambodian Riel - (KHR)",
  },
  {
    name: "Comorian Franc",
    code: "KMF",
    displayName: "Comorian Franc - (KMF)",
  },
  {
    name: "North Korean Won",
    code: "KPW",
    displayName: "North Korean Won - (KPW)",
  },
  {
    name: "South Korean Won",
    code: "KRW",
    displayName: "South Korean Won - (KRW)",
  },
  {
    name: "Kuwaiti Dinar",
    code: "KWD",
    displayName: "Kuwaiti Dinar - (KWD)",
  },
  {
    name: "Cayman Islands Dollar",
    code: "KYD",
    displayName: "Cayman Islands Dollar - (KYD)",
  },
  {
    name: "Kazakhstani Tenge",
    code: "KZT",
    displayName: "Kazakhstani Tenge - (KZT)",
  },
  {
    name: "Laotian Kip",
    code: "LAK",
    displayName: "Laotian Kip - (LAK)",
  },
  {
    name: "Lebanese Pound",
    code: "LBP",
    displayName: "Lebanese Pound - (LBP)",
  },
  {
    name: "Sri Lankan Rupee",
    code: "LKR",
    displayName: "Sri Lankan Rupee - (LKR)",
  },
  {
    name: "Liberian Dollar",
    code: "LRD",
    displayName: "Liberian Dollar - (LRD)",
  },
  {
    name: "Lesotho Loti",
    code: "LSL",
    displayName: "Lesotho Loti - (LSL)",
  },
  {
    name: "Libyan Dinar",
    code: "LYD",
    displayName: "Libyan Dinar - (LYD)",
  },
  {
    name: "Moroccan Dirham",
    code: "MAD",
    displayName: "Moroccan Dirham - (MAD)",
  },
  {
    name: "Moldovan Leu",
    code: "MDL",
    displayName: "Moldovan Leu - (MDL)",
  },
  {
    name: "Malagasy Ariary",
    code: "MGA",
    displayName: "Malagasy Ariary - (MGA)",
  },
  {
    name: "Macedonian Denar",
    code: "MKD",
    displayName: "Macedonian Denar - (MKD)",
  },
  {
    name: "Myanma Kyat",
    code: "MMK",
    displayName: "Myanma Kyat - (MMK)",
  },
  {
    name: "Mongolian Tugrik",
    code: "MNT",
    displayName: "Mongolian Tugrik - (MNT)",
  },
  {
    name: "Macanese Pataca",
    code: "MOP",
    displayName: "Macanese Pataca - (MOP)",
  },
  {
    name: "Mauritanian Ouguiya",
    code: "MRU",
    displayName: "Mauritanian Ouguiya - (MRU)",
  },
  {
    name: "Mauritian Rupee",
    code: "MUR",
    displayName: "Mauritian Rupee - (MUR)",
  },
  {
    name: "Maldivian Rufiyaa",
    code: "MVR",
    displayName: "Maldivian Rufiyaa - (MVR)",
  },
  {
    name: "Malawian Kwacha",
    code: "MWK",
    displayName: "Malawian Kwacha - (MWK)",
  },
  {
    name: "Mexican Peso",
    code: "MXN",
    displayName: "Mexican Peso - (MXN)",
  },
  {
    name: "Malaysian Ringgit",
    code: "MYR",
    displayName: "Malaysian Ringgit - (MYR)",
  },
  {
    name: "Mozambican Metical",
    code: "MZN",
    displayName: "Mozambican Metical - (MZN)",
  },
  {
    name: "Namibian Dollar",
    code: "NAD",
    displayName: "Namibian Dollar - (NAD)",
  },
  {
    name: "Nigerian Naira",
    code: "NGN",
    displayName: "Nigerian Naira - (NGN)",
  },
  {
    name: "Nicaraguan Córdoba",
    code: "NIO",
    displayName: "Nicaraguan Córdoba - (NIO)",
  },
  {
    name: "Norwegian Krone",
    code: "NOK",
    displayName: "Norwegian Krone - (NOK)",
  },
  {
    name: "Nepalese Rupee",
    code: "NPR",
    displayName: "Nepalese Rupee - (NPR)",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
    displayName: "New Zealand Dollar - (NZD)",
  },
  { name: "Omani Rial", code: "OMR", displayName: "Omani Rial - (OMR)" },
  {
    name: "Panamanian Balboa",
    code: "PAB",
    displayName: "Panamanian Balboa - (PAB)",
  },
  {
    name: "Peruvian Nuevo Sol",
    code: "PEN",
    displayName: "Peruvian Nuevo Sol - (PEN)",
  },
  {
    name: "Papua New Guinean Kina",
    code: "PGK",
    displayName: "Papua New Guinean Kina - (PGK)",
  },
  {
    name: "Philippine Peso",
    code: "PHP",
    displayName: "Philippine Peso - (PHP)",
  },
  {
    name: "Pakistani Rupee",
    code: "PKR",
    displayName: "Pakistani Rupee - (PKR)",
  },
  {
    name: "Polish Zloty",
    code: "PLN",
    displayName: "Polish Zloty - (PLN)",
  },
  {
    name: "Paraguayan Guarani",
    code: "PYG",
    displayName: "Paraguayan Guarani - (PYG)",
  },
  {
    name: "Qatari Rial",
    code: "QAR",
    displayName: "Qatari Rial - (QAR)",
  },
  {
    name: "Romanian Leu",
    code: "RON",
    displayName: "Romanian Leu - (RON)",
  },
  {
    name: "Serbian Dinar",
    code: "RSD",
    displayName: "Serbian Dinar - (RSD)",
  },
  {
    name: "Russian Ruble",
    code: "RUB",
    displayName: "Russian Ruble - (RUB)",
  },
  {
    name: "Rwandan Franc",
    code: "RWF",
    displayName: "Rwandan Franc - (RWF)",
  },
  {
    name: "Saudi Riyal",
    code: "SAR",
    displayName: "Saudi Riyal - (SAR)",
  },
  {
    name: "Solomon Islands Dollar",
    code: "SBD",
    displayName: "Solomon Islands Dollar - (SBD)",
  },
  {
    name: "Seychellois Rupee",
    code: "SCR",
    displayName: "Seychellois Rupee - (SCR)",
  },
  {
    name: "Sudanese Pound",
    code: "SDG",
    displayName: "Sudanese Pound - (SDG)",
  },
  {
    name: "Swedish Krona",
    code: "SEK",
    displayName: "Swedish Krona - (SEK)",
  },
  {
    name: "Singapore Dollar",
    code: "SGD",
    displayName: "Singapore Dollar - (SGD)",
  },
  {
    name: "Saint Helena Pound",
    code: "SHP",
    displayName: "Saint Helena Pound - (SHP)",
  },
  {
    name: "Sierra Leonean Leone",
    code: "SLL",
    displayName: "Sierra Leonean Leone - (SLL)",
  },
  {
    name: "Somali Shilling",
    code: "SOS",
    displayName: "Somali Shilling - (SOS)",
  },
  {
    name: "Surinamese Dollar",
    code: "SRD",
    displayName: "Surinamese Dollar - (SRD)",
  },
  {
    name: "South Sudanese Pound",
    code: "SSP",
    displayName: "South Sudanese Pound - (SSP)",
  },
  {
    name: "São Tomé and Príncipe Dobra (pre-2018)",
    code: "STD",
    displayName: "São Tomé and Príncipe Dobra (pre-2018) - (STD)",
  },
  {
    name: "São Tomé and Príncipe Dobra",
    code: "STN",
    displayName: "São Tomé and Príncipe Dobra - (STN)",
  },
  {
    name: "Salvadoran Colón",
    code: "SVC",
    displayName: "Salvadoran Colón - (SVC)",
  },
  {
    name: "Syrian Pound",
    code: "SYP",
    displayName: "Syrian Pound - (SYP)",
  },
  {
    name: "Swazi Lilangeni",
    code: "SZL",
    displayName: "Swazi Lilangeni - (SZL)",
  },
  { name: "Thai Baht", code: "THB", displayName: "Thai Baht - (THB)" },
  {
    name: "Tajikistani Somoni",
    code: "TJS",
    displayName: "Tajikistani Somoni - (TJS)",
  },
  {
    name: "Turkmenistani Manat",
    code: "TMT",
    displayName: "Turkmenistani Manat - (TMT)",
  },
  {
    name: "Tunisian Dinar",
    code: "TND",
    displayName: "Tunisian Dinar - (TND)",
  },
  {
    name: "Tongan Pa'anga",
    code: "TOP",
    displayName: "Tongan Pa'anga - (TOP)",
  },
  {
    name: "Turkish Lira",
    code: "TRY",
    displayName: "Turkish Lira - (TRY)",
  },
  {
    name: "Trinidad and Tobago Dollar",
    code: "TTD",
    displayName: "Trinidad and Tobago Dollar - (TTD)",
  },
  {
    name: "New Taiwan Dollar",
    code: "TWD",
    displayName: "New Taiwan Dollar - (TWD)",
  },
  {
    name: "Tanzanian Shilling",
    code: "TZS",
    displayName: "Tanzanian Shilling - (TZS)",
  },
  {
    name: "Ukrainian Hryvnia",
    code: "UAH",
    displayName: "Ukrainian Hryvnia - (UAH)",
  },
  {
    name: "Ugandan Shilling",
    code: "UGX",
    displayName: "Ugandan Shilling - (UGX)",
  },
  {
    name: "United States Dollar",
    code: "USD",
    displayName: "United States Dollar - (USD)",
  },
  {
    name: "Uruguayan Peso",
    code: "UYU",
    displayName: "Uruguayan Peso - (UYU)",
  },
  {
    name: "Uzbekistan Som",
    code: "UZS",
    displayName: "Uzbekistan Som - (UZS)",
  },
  {
    name: "Venezuelan Bolívar Fuerte (Old)",
    code: "VEF",
    displayName: "Venezuelan Bolívar Fuerte (Old) - (VEF)",
  },
  {
    name: "Venezuelan Bolívar Soberano",
    code: "VES",
    displayName: "Venezuelan Bolívar Soberano - (VES)",
  },
  {
    name: "Vietnamese Dong",
    code: "VND",
    displayName: "Vietnamese Dong - (VND)",
  },
  {
    name: "Vanuatu Vatu",
    code: "VUV",
    displayName: "Vanuatu Vatu - (VUV)",
  },
  {
    name: "Samoan Tala",
    code: "WST",
    displayName: "Samoan Tala - (WST)",
  },
  {
    name: "CFA Franc BEAC",
    code: "XAF",
    displayName: "CFA Franc BEAC - (XAF)",
  },
  {
    name: "Silver Ounce",
    code: "XAG",
    displayName: "Silver Ounce - (XAG)",
  },
  { name: "Gold Ounce", code: "XAU", displayName: "Gold Ounce - (XAU)" },
  {
    name: "East Caribbean Dollar",
    code: "XCD",
    displayName: "East Caribbean Dollar - (XCD)",
  },
  {
    name: "Special Drawing Rights",
    code: "XDR",
    displayName: "Special Drawing Rights - (XDR)",
  },
  {
    name: "CFA Franc BCEAO",
    code: "XOF",
    displayName: "CFA Franc BCEAO - (XOF)",
  },
  {
    name: "Palladium Ounce",
    code: "XPD",
    displayName: "Palladium Ounce - (XPD)",
  },
  { name: "CFP Franc", code: "XPF", displayName: "CFP Franc - (XPF)" },
  {
    name: "Platinum Ounce",
    code: "XPT",
    displayName: "Platinum Ounce - (XPT)",
  },
  {
    name: "Yemeni Rial",
    code: "YER",
    displayName: "Yemeni Rial - (YER)",
  },
  {
    name: "South African Rand",
    code: "ZAR",
    displayName: "South African Rand - (ZAR)",
  },
  {
    name: "Zambian Kwacha",
    code: "ZMW",
    displayName: "Zambian Kwacha - (ZMW)",
  },
  {
    name: "Zimbabwean Dollar",
    code: "ZWL",
    displayName: "Zimbabwean Dollar - (ZWL)",
  },
];

export default currencies;
