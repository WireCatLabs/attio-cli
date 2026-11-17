// GENERATED. DO NOT EDIT.
// Source: spec/attio/, checked against provenance.json
// Run: pnpm generate

export type Status = {
  id: {
    /** The ID of the workspace */
    workspace_id: string
    /** The ID of the object */
    object_id: string
    /** The ID of the attribute */
    attribute_id: string
    /** The ID of the status */
    status_id: string
  }
  /** The title of the status */
  title: string
  /** Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. */
  is_archived: boolean
  /** Whether arriving at this status triggers a celebration effect in the UI */
  celebration_enabled: boolean
  /** Target time for a record to spend in given status expressed as a ISO-8601 duration string */
  target_time_in_status: string | null
}

export type SelectOption = {
  id: {
    /** The ID of the workspace */
    workspace_id: string
    /** The ID of the object */
    object_id: string
    /** The ID of the attribute */
    attribute_id: string
    /** The ID of the select option */
    option_id: string
  }
  /** The title of the select option */
  title: string
  /** Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. */
  is_archived: boolean
}

/** A union of possible value types, as required in request bodies. */
export type InputValue =
  | {
      /** The type of the referenced actor. Currently, only workspace members can be written into actor reference attributes. [Read more information on actor types here](/docs/actors). */
      referenced_actor_type: "workspace-member"
      /** The ID of the referenced Actor. */
      referenced_actor_id: string
    }
  | {
      /** Workspace member actors can be referenced by email address as well as actor ID. */
      workspace_member_email_address: string
    }
  | {
      /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
      value: boolean
    }
  | {
      /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
      currency_value: number
    }
  | {
      /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
      value: string
    }
  | {
      /** The full domain of the website. */
      domain?: string
    }
  | {
      /** An email address string */
      email_address?: string
    }
  | {
      /** A UUID or slug to identify the object that the referenced record belongs to. */
      target_object: string
      /** A UUID to identify the referenced record. */
      target_record_id: string
    }
  | {
      /** A UUID or slug to identify the object that the referenced record belongs to. */
      target_object: string
      /** In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record). */
      "[slug_or_id_of_matching_attribute]": Array<
        | {
            /** The full domain of the website. */
            domain?: string
          }
        | {
            /** An email address string */
            email_address?: string
          }
        | {
            /** Numbers are persisted as 64 bit floats. */
            value?: number
          }
        | {
            /** The raw, original phone number, as inputted. */
            original_phone_number?: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code?:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
          }
        | {
            /** A raw text field. Values are limited to 10MB. */
            value?: string
          }
      >
    }
  | {
      /** The type of interaction e.g. calendar or email. */
      interaction_type: "activity" | "email" | "meeting" | "calendar-event"
      /** When the interaction occurred. */
      interacted_at: string
      /** The actor that created this value. */
      owner_actor: {
        /** An ID to identify the actor. */
        id?: string | null
        /** The type of actor. [Read more information on actor types here](/docs/actors). */
        type?: "api-token" | "workspace-member" | "system" | "app" | null
      }
    }
  | {
      /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_1: string | null
      /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_2: string | null
      /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_3: string | null
      /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_4: string | null
      /** The town, neighborhood or area the location is in. */
      locality: string | null
      /** The state, county, province or region that the location is in. */
      region: string | null
      /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      postcode: string | null
      /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
      country_code:
        | "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "AN"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "SS"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | "BQ"
        | "KP"
        | "SX"
        | "XK"
        | "AC"
        | null
      /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      latitude: string | null
      /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      longitude: string | null
    }
  | {
      /** Numbers are persisted as 64 bit floats. */
      value: number
    }
  | {
      /** The first name. */
      first_name?: string
      /** The last name. */
      last_name?: string
      /** The full name. */
      full_name?: string
    }
  | {
      /** A phone number which is either a) prefixed with a country code (e.g. `+44....`) or b) a local number, where `country_code` is specified in addition. */
      original_phone_number: string
      /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. Optional if `original_phone_number` includes a country code prefix. */
      country_code?:
        | "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "AN"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "SS"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | "BQ"
        | "KP"
        | "SX"
        | "XK"
        | "AC"
        | null
    }
  | {
      /** The UUID or status title identifying the selected status. */
      status: string
    }
  | {
      /** A number between 0 and 5 (inclusive) to represent a star rating. */
      value: number
    }
  | {
      /** The UUID or select option title identifying the selected select option. */
      option: string
    }
  | {
      /** A raw text field. Values are limited to 10MB. */
      value: string
    }
  | {
      /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
      value: string
    }

/** A union of possible value types, as returned in response bodies. */
export type OutputValue =
  | {
      /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
      referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
      /** The ID of the referenced actor. */
      referenced_actor_id: string | null
      /** The attribute type of the value. */
      attribute_type: "actor-reference"
    }
  | {
      /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
      value: boolean
      /** The attribute type of the value. */
      attribute_type: "checkbox"
    }
  | {
      /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
      currency_value: number
      /** The ISO4217 currency code representing the currency that the value is stored in. */
      currency_code?:
        | "ARS"
        | "AUD"
        | "BRL"
        | "BGN"
        | "CAD"
        | "CLP"
        | "CNY"
        | "COP"
        | "CZK"
        | "DKK"
        | "EGP"
        | "EUR"
        | "FJD"
        | "GHS"
        | "HKD"
        | "HUF"
        | "ISK"
        | "INR"
        | "IDR"
        | "ILS"
        | "JPY"
        | "KES"
        | "KRW"
        | "MYR"
        | "MXN"
        | "NTD"
        | "NZD"
        | "NGN"
        | "NOK"
        | "OMR"
        | "XPF"
        | "PEN"
        | "PHP"
        | "PLN"
        | "GBP"
        | "QAR"
        | "RWF"
        | "SAR"
        | "SGD"
        | "ZAR"
        | "SEK"
        | "CHF"
        | "THB"
        | "TRY"
        | "AED"
        | "UYU"
        | "USD"
        | null
      /** The attribute type of the value. */
      attribute_type: "currency"
    }
  | {
      /** The attribute type of the value. */
      attribute_type: "date"
      /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
      value: string
    }
  | {
      domain: string
      root_domain: string
      /** The attribute type of the value. */
      attribute_type: "domain"
    }
  | {
      original_email_address: string
      email_address: string
      email_domain: string
      email_root_domain: string
      email_local_specifier: string
      /** The attribute type of the value. */
      attribute_type: "email-address"
    }
  | {
      /** A slug identifying the object that the referenced record belongs to. */
      target_object: string
      /** A UUID to identify the referenced record. */
      target_record_id: string
      /** The attribute type of the value. */
      attribute_type: "record-reference"
    }
  | {
      /** The type of interaction e.g. calendar or email. */
      interaction_type: "activity" | "email" | "meeting" | "calendar-event"
      /** When the interaction occurred. */
      interacted_at: string
      /** The actor that created this value. */
      owner_actor: {
        /** An ID to identify the actor. */
        id?: string | null
        /** The type of actor. [Read more information on actor types here](/docs/actors). */
        type?: "api-token" | "workspace-member" | "system" | "app" | null
      }
      /** The attribute type of the value. */
      attribute_type: "interaction"
    }
  | {
      /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_1: string | null
      /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_2: string | null
      /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_3: string | null
      /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
      line_4: string | null
      /** The town, neighborhood or area the location is in. */
      locality: string | null
      /** The state, county, province or region that the location is in. */
      region: string | null
      /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      postcode: string | null
      /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
      country_code:
        | "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "AN"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "SS"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | "BQ"
        | "KP"
        | "SX"
        | "XK"
        | "AC"
        | null
      /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      latitude: string | null
      /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
      longitude: string | null
      /** The attribute type of the value. */
      attribute_type: "location"
    }
  | {
      /** Numbers are persisted as 64 bit floats. */
      value: number
      /** The attribute type of the value. */
      attribute_type: "number"
    }
  | {
      /** The first name. */
      first_name: string
      /** The last name. */
      last_name: string
      /** The full name. */
      full_name: string
      /** The attribute type of the value. */
      attribute_type: "personal-name"
    }
  | {
      /** The raw, original phone number, as inputted. */
      original_phone_number: string
      /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
      country_code:
        | "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "AN"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "SS"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | "BQ"
        | "KP"
        | "SX"
        | "XK"
        | "AC"
      phone_number: string
      /** The attribute type of the value. */
      attribute_type: "phone-number"
    }
  | {
      /** The UUID identifying the selected status. */
      status: string
      /** The attribute type of the value. */
      attribute_type: "status"
    }
  | {
      status: Status
      /** The attribute type of the value. */
      attribute_type: "status"
    }
  | {
      /** A number between 0 and 5 (inclusive) to represent a star rating. */
      value: number
      /** The attribute type of the value. */
      attribute_type: "rating"
    }
  | {
      /** The UUID identifying the selected select option. */
      option: string
      /** The attribute type of the value. */
      attribute_type: "select"
    }
  | {
      option: SelectOption
      /** The attribute type of the value. */
      attribute_type: "select"
    }
  | {
      /** A raw text field. Values are limited to 10MB. */
      value: string
      /** The attribute type of the value. */
      attribute_type: "text"
    }
  | {
      /** The attribute type of the value. */
      attribute_type: "timestamp"
      /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
      value: string
    }

export type Activity = {
  id: {
    /** A UUID to identify the workspace this activity belongs to. */
    workspace_id: string
    /** A UUID to identify the activity. */
    activity_id: string
  }
  /** A unique, human-readable slug to access the activity through URLs and API calls. Formatted in snake case. */
  api_slug: string
  /** The singular form of the activity's name. */
  singular_noun: string
  /** The plural form of the activity's name. */
  plural_noun: string
  /** The schemas this activity directly extends, which supply its inherited attributes. */
  extends: Array<{
    /** A UUID to identify the schema. */
    schema_id: string
    /** The human-readable slug of the schema. */
    schema_slug: string
  }>
  /** `true` when Attio defines the activity, `false` when it's a custom activity. */
  is_system_activity: boolean
  /** When the activity was created. */
  created_at: string
}

export type Attribute = {
  id: {
    /** A UUID representing the workspace this attribute belongs to. */
    workspace_id: string
    /** A UUID to identify the object or list that this attribute belongs to */
    object_id: string
    /** A UUID to identify this attribute. */
    attribute_id: string
  }
  /** A title for the attribute, to be displayed across the app. */
  title: string
  /** A text description of the attribute. */
  description: string | null
  /** A unique slug for the attribute for use in API responses and URLs. Formatted in snake case. */
  api_slug: string
  /** The type of the attribute. */
  type:
    | "text"
    | "number"
    | "checkbox"
    | "currency"
    | "date"
    | "timestamp"
    | "rating"
    | "status"
    | "select"
    | "record-reference"
    | "actor-reference"
    | "location"
    | "domain"
    | "email-address"
    | "phone-number"
    | "interaction"
    | "personal-name"
  /** `true` if this is an Attio system-defined attribute, `false` if defined by a user or non-Attio system. */
  is_system_attribute: boolean
  /** Whether or not this attribute can be written to. It is `false` for protected system attributes, which are usually enriched by Attio. It is also `false` for formula attributes, whose values are calculated automatically. */
  is_writable: boolean
  /** When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`. */
  is_required: boolean
  /** Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data. */
  is_unique: boolean
  /** Whether or not this attribute can have multiple values. Multiselect is only available on some value types. */
  is_multiselect: boolean
  /** Whether this attribute has a default value enabled. Must be `true` when `is_required` is `true`. */
  is_default_value_enabled: boolean
  /** Whether this attribute has been archived. Archived attributes are hidden from most UI, but can be restored either over the API or in workspace settings. See the [guide on archiving and deleting](/docs/archiving-vs-deleting)for more information. */
  is_archived: boolean
  /** The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. */
  default_value:
    | (
        | {
            type: "dynamic"
            template: "current-user" | string | string
          }
        | {
            type: "static"
            template: Array<OutputValue>
          }
      )
    | null
  /** If this attribute is related to another attribute, this is an object that includes an `id` property that identifies the other attribute. `null` means no relationship exists. See [the help center](https://attio.com/help/reference/managing-your-data/attributes#relationship-attributes) for more details about relationship attributes. */
  relationship: {
    id: {
      /** A UUID representing the workspace this attribute belongs to. */
      workspace_id: string
      /** A UUID to identify the object or list that this attribute belongs to */
      object_id: string
      /** A UUID to identify this attribute. */
      attribute_id: string
    }
    /** The slug of the object that the related attribute belongs to. */
    object_slug: string
    /** The title of the related attribute. */
    title: string
    /** The API slug identifying the related attribute. */
    api_slug: string
    /** Whether the related attribute supports selecting multiple values. Combined with the parent attribute's `is_multiselect`, this determines the relationship type: both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent `false` + related `true` = one-to-many, both `true` = many-to-many. */
    is_multiselect: boolean
  } | null
  /** When this attribute was created. */
  created_at: string
  /** Additional, type-dependent configuration for the attribute. */
  config: {
    /** Configuration available for attributes of type "currency". */
    currency: {
      /** The ISO4217 code representing the currency that values for this attribute should be stored in. */
      default_currency_code:
        | "ARS"
        | "AUD"
        | "BRL"
        | "BGN"
        | "CAD"
        | "CLP"
        | "CNY"
        | "COP"
        | "CZK"
        | "DKK"
        | "EGP"
        | "EUR"
        | "FJD"
        | "GHS"
        | "HKD"
        | "HUF"
        | "ISK"
        | "INR"
        | "IDR"
        | "ILS"
        | "JPY"
        | "KES"
        | "KRW"
        | "MYR"
        | "MXN"
        | "NTD"
        | "NZD"
        | "NGN"
        | "NOK"
        | "OMR"
        | "XPF"
        | "PEN"
        | "PHP"
        | "PLN"
        | "GBP"
        | "QAR"
        | "RWF"
        | "SAR"
        | "SGD"
        | "ZAR"
        | "SEK"
        | "CHF"
        | "THB"
        | "TRY"
        | "AED"
        | "UYU"
        | "USD"
        | null
      /** How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$". */
      display_type: "code" | "name" | "narrowSymbol" | "symbol" | null
    }
    /** Configuration available for attributes of type "record-reference". */
    record_reference: {
      /** A list of UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types. */
      allowed_object_ids: Array<string> | null
    }
  }
}

export type ListView = {
  id: {
    /** A UUID identifying the workspace this view belongs to. */
    workspace_id: string
    /** A UUID identifying the list this view belongs to. */
    list_id: string
    /** A UUID identifying this view. Use this value as `filter_view_id` when listing entries. */
    view_id: string
  }
  /** The title of the view shown in the Attio app. */
  title: string
  /** When the view was created. */
  created_at: string
}

export type List = {
  id: {
    /** A UUID to identify the workspace this list belongs to. */
    workspace_id: string
    /** A UUID to identify this list. */
    list_id: string
  }
  /** A human-readable slug for use in URLs and responses. */
  api_slug: string
  /** The name of the list, as viewed in the UI. */
  name: string
  /** A UUID or slug to identify the allowed object type for records added to this list. All new Lists are expected to have exactly one parent object. However, some legacy lists may have multiple allowed parents so the return type of this field is an array. */
  parent_object: Array<string>
  /** The level of access granted to all members of the workspace for this list. `null` values represent a private list that only grants access to specific workspace members via the `workspace_member_access` property. */
  workspace_access: "full-access" | "read-and-write" | "read-only" | null
  /** The level of access granted to specific workspace members for this list. An empty array represents a list that has granted access to no workspace members. */
  workspace_member_access: Array<{
    /** A UUID to identify the workspace member to grant access to. */
    workspace_member_id: string
    /** The level of access to the list. */
    level: "full-access" | "read-and-write" | "read-only"
  }>
  /** The actor which created this list. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** When the list was created. */
  created_at: string
}

export type ApiObject = {
  id: {
    /** A UUID to identify the workspace this object belongs to. */
    workspace_id: string
    /** A UUID to identify the object. */
    object_id: string
  }
  /** A unique, human-readable slug to access the object through URLs and API calls. Formatted in snake case. */
  api_slug: string | null
  /** The singular form of the object's name. */
  singular_noun: string | null
  /** The plural form of the object's name. */
  plural_noun: string | null
  /** When the object was created. */
  created_at: string
}

export type ObjectView = {
  id: {
    /** A UUID identifying the workspace this view belongs to. */
    workspace_id: string
    /** A UUID identifying the object this view belongs to. */
    object_id: string
    /** A UUID identifying this view. Use this value as `filter_view_id` when listing records. */
    view_id: string
  }
  /** The title of the view shown in the Attio app. */
  title: string
  /** When the view was created. */
  created_at: string
}

export type ViewObjectAttributeRef = {
  /** A slug or ID of the object that the reference of the previous attribute points to. It is required because a reference can allow several objects. */
  object: string
  /** A slug or ID of an attribute of this object. */
  attribute: string
}

/** A slug or ID of an attribute of the view's object, or an array that follows record references. The array starts with a slug or ID of an attribute of the view's object. Each later item is an `{object, attribute}` pair. Use a slug or ID, not an array, for a single attribute. Responses use IDs only. */
export type ViewAttributePath = string | Array<unknown>

/** A condition on one attribute. */
export type ViewFilterCondition = {
  attribute: ViewAttributePath
  /** The field of the attribute. If omitted, the default field of the attribute type is used. */
  field?: string
  /** The operator. `in` takes a non-empty array and matches when one `eq` condition with one of its values matches. Responses never contain `in`. */
  op:
    | "eq"
    | "not_eq"
    | "lt"
    | "gt"
    | "contains"
    | "not_contains"
    | "starts_with"
    | "ends_with"
    | "empty"
    | "not_empty"
    | "entered"
    | "not_entered"
    | "in"
  /** The value. Its shape depends on the attribute type, the field and the operator: | Attribute type | Field | Operators | Value | | --- | --- | --- | --- | | `text` | `value` (default) | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `text` | `value` (default) | `empty`, `not_empty` | No value | | `number` | `value` (default) | `eq`, `not_eq`, `lt`, `gt` | A number | | `number` | `value` (default) | `empty`, `not_empty` | No value | | `rating` | `value` (default) | `eq`, `not_eq`, `lt`, `gt` | A number | | `rating` | `value` (default) | `empty`, `not_empty` | No value | | `checkbox` | `value` (default) | `eq` | `true` or `false` | | `select` | `option` (default) | `eq`, `not_eq`, `lt`, `gt` | A select option ID or title | | `select` | `option` (default) | `empty`, `not_empty` | No value | | `status` | `status` (default) | `eq`, `not_eq` | A status ID or title | | `status` | `status` (default) | `entered`, `not_entered` | `{"status": <status ID or title>}` with exactly one of `after` or `before`, each an ISO 8601 timestamp or `{"relative": <ISO 8601 duration>}` with one unit of years, months, weeks, days, hours, minutes or seconds, e.g. `-PT12H` | | `status` | `status` (default) | `empty`, `not_empty` | No value | | `actor-reference` | `referenced_actor_id` (default) | `eq`, `not_eq` | A workspace member ID, or `{"current_member": true}` | | `actor-reference` | `referenced_actor_id` (default) | `empty`, `not_empty` | No value | | `actor-reference` | `referenced_actor_type` | `eq`, `not_eq` | An actor type, such as `workspace-member` or `api-token` | | `actor-reference` | `referenced_actor_team_id` | `eq`, `not_eq` | A team ID | | `currency` | `currency_value` (default) | `eq`, `not_eq`, `lt`, `gt` | A number | | `currency` | `currency_value` (default) | `empty`, `not_empty` | No value | | `date` | `value` (default) | `eq`, `not_eq` | A date in the format `YYYY-MM-DD` | | `date` | `value` (default) | `lt`, `gt` | A date in the format `YYYY-MM-DD`, or `{"relative": <ISO 8601 duration>}` with one unit of years, months, weeks or days, e.g. `-P30D` | | `date` | `value` (default) | `empty`, `not_empty` | No value | | `timestamp` | `value` (default) | `eq`, `not_eq` | An ISO 8601 timestamp | | `timestamp` | `value` (default) | `lt`, `gt` | An ISO 8601 timestamp, or `{"relative": <ISO 8601 duration>}` with one unit of years, months, weeks, days, hours, minutes or seconds, e.g. `-PT12H` | | `timestamp` | `value` (default) | `empty`, `not_empty` | No value | | `record-reference` | `target_record_id` (default) | `eq`, `not_eq` | `{"target_object": <object slug or ID>, "target_record_id": <record ID>}` | | `record-reference` | `target_object` | `eq`, `not_eq` | An object slug or ID | | `record-reference` | `target_record_id` (default) | `empty`, `not_empty` | No value | | `interaction` | `interacted_at` (default) | `lt`, `gt` | An ISO 8601 timestamp, or `{"relative": <ISO 8601 duration>}` with one unit of years, months, weeks, days, hours, minutes or seconds, e.g. `-PT12H` | | `interaction` | `interacted_at` (default) | `empty`, `not_empty` | No value | | `interaction` | `owner_member_id` | `eq`, `not_eq` | A workspace member ID, or `{"current_member": true}` | | `interaction` | `owner_member_id` | `empty`, `not_empty` | No value | | `interaction` | `referenced_actor_team_id` | `eq`, `not_eq` | A team ID | | `location` | `locality` | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `location` | `locality` | `empty`, `not_empty` | No value | | `location` | `region` | `eq`, `not_eq`, `contains`, `not_contains` | A non-empty string | | `location` | `region` | `empty`, `not_empty` | No value | | `location` | `postcode` | `eq`, `not_eq`, `contains`, `not_contains` | A non-empty string | | `location` | `postcode` | `empty`, `not_empty` | No value | | `location` | `country_code` | `eq`, `not_eq` | An ISO 3166-1 alpha-2 country code | | `location` | `country_code` | `empty`, `not_empty` | No value | | `domain` | `domain` (default) | `eq`, `not_eq` | A domain or URL, e.g. `example.com` | | `domain` | `domain` (default) | `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `domain` | `domain` (default) | `empty`, `not_empty` | No value | | `email-address` | `email_address` (default) | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `email-address` | `email_address` (default) | `empty`, `not_empty` | No value | | `email-address` | `email_domain` | `eq`, `not_eq`, `contains`, `not_contains` | A non-empty string | | `phone-number` | `phone_number` (default) | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `phone-number` | `phone_number` (default) | `empty`, `not_empty` | No value | | `phone-number` | `country_code` | `eq`, `not_eq` | An ISO 3166-1 alpha-2 country code | | `phone-number` | `country_code` | `empty`, `not_empty` | No value | | `personal-name` | `full_name` (default) | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `personal-name` | `full_name` (default) | `empty`, `not_empty` | No value | | `personal-name` | `first_name` | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `personal-name` | `first_name` | `empty`, `not_empty` | No value | | `personal-name` | `last_name` | `eq`, `not_eq`, `contains`, `not_contains`, `starts_with`, `ends_with` | A non-empty string | | `personal-name` | `last_name` | `empty`, `not_empty` | No value | */
  value?: unknown
}

/** A condition, or a group of filters of which all (`and`) or at least one (`or`) must match. */
export type ViewFilter =
  | ViewFilterCondition
  | {
      and: Array<ViewFilter>
    }
  | {
      or: Array<ViewFilter>
    }

/** A sort on one attribute. */
export type ViewSort = {
  attribute: ViewAttributePath
  /** The field to sort by. If omitted, the default field of the attribute type is used. A record reference cannot be sorted directly; sort by a path to an attribute of the referenced record. | Attribute type | Fields | | --- | --- | | `text` | `value` (default) | | `number` | `value` (default) | | `checkbox` | `value` (default) | | `date` | `value` (default) | | `timestamp` | `value` (default) | | `rating` | `value` (default) | | `currency` | `currency_value` (default) | | `select` | `option` (default) | | `status` | `status` (default), `active_from` | | `personal-name` | `first_name`, `last_name`, `full_name` (default) | | `location` | `locality`, `region`, `country_code` | | `domain` | `domain` (default) | | `email-address` | `email_address` (default) | | `phone-number` | `phone_number` (default) | | `actor-reference` | `referenced_actor_id` (default) | | `interaction` | `interacted_at` (default), `owner_member_id` | */
  field?: string
  direction: "asc" | "desc"
}

/** An attribute that the view shows. */
export type ViewAttribute = {
  attribute: ViewAttributePath
  /** The field of the attribute that the column shows. */
  field?: string
  /** The column title. If omitted, the column shows the title of the attribute. */
  title?: string
  /** The calculation that the column footer of a table view shows, on the field that the column shows. Omitted when the column has none. Not allowed on a kanban view, which uses `kanban.aggregation`. In an update, an omitted aggregation keeps the aggregation of a column with the same attribute and field, and `null` removes it. Each field can count and give the percentage of records where it is empty or not empty. `sum`, `mean`, `min` and `max` are only for number, currency and rating attributes. */
  aggregation?:
    | "count_empty"
    | "count_not_empty"
    | "percent_empty"
    | "percent_not_empty"
    | "sum"
    | "mean"
    | "max"
    | "min"
    | null
}

/** The calculation that the footer of each column of the board shows. `null` when the board has none. */
export type ViewKanbanAggregation = {
  attribute: ViewAttributePath
  /** The field to aggregate. If omitted, the default field of the attribute type is used. Location and interaction attributes need a field. */
  field?: string
  /** The calculation. Each field can count and give the percentage of records where it is empty or not empty. `sum`, `mean`, `min` and `max` are only for number, currency and rating attributes. */
  type: "count_empty" | "count_not_empty" | "percent_empty" | "percent_not_empty" | "sum" | "mean" | "max" | "min"
}

export type ObjectViewWithDefinition = {
  id: {
    /** A UUID identifying the workspace this view belongs to. */
    workspace_id: string
    /** A UUID identifying the object this view belongs to. */
    object_id: string
    /** A UUID identifying this view. Use this value as `filter_view_id` when listing records. */
    view_id: string
  }
  /** The title of the view shown in the Attio app. */
  title: string
  /** When the view was created. */
  created_at: string
  /** How the view shows records. */
  type: "table" | "kanban"
  /** The filter of the view. `null` when the view shows all records. */
  filter?: ViewFilter
  /** The sorts, in order. */
  sorts: Array<ViewSort>
  /** The attributes that the view shows, in display order. */
  attributes: Array<ViewAttribute>
  /** The settings of a kanban view. Omitted for table views. */
  kanban?: {
    status_attribute: ViewAttributePath
    /** Whether the board shows a column for the records that have no status. */
    show_no_status_column: boolean
    /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. */
    attribute_label_display: "icon" | "text"
    aggregation: {
      attribute: ViewAttributePath
      /** The field to aggregate. If omitted, the default field of the attribute type is used. Location and interaction attributes need a field. */
      field?: string
      /** The calculation. Each field can count and give the percentage of records where it is empty or not empty. `sum`, `mean`, `min` and `max` are only for number, currency and rating attributes. */
      type: "count_empty" | "count_not_empty" | "percent_empty" | "percent_not_empty" | "sum" | "mean" | "max" | "min"
    }
  }
  /** The title and slug of each attribute and object ID in the view, and the title of each option, status and team ID in the filter values. The view only uses IDs, so that it does not change when a slug changes. */
  metadata: {
    [key: string]: {
      kind: "attribute" | "object" | "option" | "status" | "team"
      title: string
      api_slug: string | null
    }
  }
}

export type ListViewWithDefinition = {
  id: {
    /** A UUID identifying the workspace this view belongs to. */
    workspace_id: string
    /** A UUID identifying the list this view belongs to. */
    list_id: string
    /** A UUID identifying this view. Use this value as `filter_view_id` when listing entries. */
    view_id: string
  }
  /** The title of the view shown in the Attio app. */
  title: string
  /** When the view was created. */
  created_at: string
  /** How the view shows records. */
  type: "table" | "kanban"
  /** The filter of the view. `null` when the view shows all records. */
  filter?: ViewFilter
  /** The sorts, in order. */
  sorts: Array<ViewSort>
  /** The attributes that the view shows, in display order. */
  attributes: Array<ViewAttribute>
  /** The settings of a kanban view. Omitted for table views. */
  kanban?: {
    status_attribute: ViewAttributePath
    /** Whether the board shows a column for the records that have no status. */
    show_no_status_column: boolean
    /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. */
    attribute_label_display: "icon" | "text"
    aggregation: {
      attribute: ViewAttributePath
      /** The field to aggregate. If omitted, the default field of the attribute type is used. Location and interaction attributes need a field. */
      field?: string
      /** The calculation. Each field can count and give the percentage of records where it is empty or not empty. `sum`, `mean`, `min` and `max` are only for number, currency and rating attributes. */
      type: "count_empty" | "count_not_empty" | "percent_empty" | "percent_not_empty" | "sum" | "mean" | "max" | "min"
    }
  }
  /** The title and slug of each attribute and object ID in the view, and the title of each option, status and team ID in the filter values. The view only uses IDs, so that it does not change when a slug changes. */
  metadata: {
    [key: string]: {
      kind: "attribute" | "object" | "option" | "status" | "team"
      title: string
      api_slug: string | null
    }
  }
}

export type WorkspaceMember = {
  id: {
    /** The ID of the workspace the workspace member belongs to. */
    workspace_id: string
    /** The ID of the workspace member. */
    workspace_member_id: string
  }
  /** The first name of the user. */
  first_name: string
  /** The last name of the user. */
  last_name: string
  /** A URL to the user's avatar image. */
  avatar_url: string | null
  /** The user's email address. */
  email_address: string
  /** When the workspace member was created. */
  created_at: string
  /** Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members. */
  access_level: "admin" | "member" | "suspended"
}

export type Comment = {
  id: {
    /** The ID of the workspace the comment belongs to. */
    workspace_id: string
    /** The ID of the comment. */
    comment_id: string
  }
  /** The ID of the thread the comment belongs to. */
  thread_id: string
  /** A plaintext representation of the content of the comment. References to workspace members are cast into email addresses, all other stylistic elements are removed. */
  content_plaintext: string
  /** The entry the comment belongs to, `null` for comments on records. */
  entry: {
    /** The ID of the entry the comment belongs to. */
    entry_id: string
    /** The ID of the list the entry belongs to. */
    list_id: string
  } | null
  /** The record the comment belongs to. */
  record: {
    /** The ID of the record the comment belongs to. */
    record_id: string
    /** The ID of the object the record belongs to. */
    object_id: string
  }
  /** Whether the comment is resolved. */
  resolved_at: string | null
  /** The actor that resolved this comment. */
  resolved_by: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** When the note was created. */
  created_at: string
  /** Who wrote this comment. Note that the API provides the ability for API tokens to write comments on behalf of other actors. */
  author: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
}

export type Email = {
  id: {
    /** The ID of the workspace the email belongs to. */
    workspace_id: string
    /** The ID of the mailbox this copy of the email was read from. A single email sent to several people in your workspace is stored once per mailbox; this endpoint returns one entry per email, so the returned `mailbox_id` identifies whichever copy was readable. */
    mailbox_id: string
    /** The ID of the Attio email. */
    email_id: string
  }
  /** Timestamp representing when the email was sent, taken from the email's own headers rather than from when Attio imported it. */
  sent_at: string
  /** Whether the email was sent from your workspace or received by it. */
  direction: "inbound" | "outbound"
  /** The subject line of the email. This is `null` when the email has no subject or is from a mailbox shared as metadata only. */
  subject_line: string | null
  /** The participants on the email. Note that `bcc` participants are realistically only present on outbound email: inbound messages do not disclose the other recipients' blind copies, so an absent `bcc` participant is not evidence that there was none. */
  participants: Array<{
    /** The role this participant had on the email. */
    role: "from" | "reply-to" | "to" | "cc" | "bcc"
    /** The normalized email address of the participant. */
    email_address: string
    /** The domain of the participant's email address. */
    email_domain: string
    /** The participant's name as it appeared on the email, when the email provided one. */
    name: string | null
  }>
  /** The person and company records whose email addresses or domains match this email's participants. Unlike meetings, this link is derived when you make the request rather than stored, so it reflects your records as they are now: creating a person record today will make older emails start reporting it. */
  linked_records: Array<{
    /** The slug of the object the linked record belongs to. */
    object_slug: string
    /** The ID of the object the linked record belongs to. */
    object_id: string
    /** The ID of the linked record. */
    record_id: string
  }>
}

export type File = {
  id: {
    /** The ID of the workspace the file belongs to. */
    workspace_id: string
    /** The ID of the file entry. */
    file_id: string
  }
  /** The ID of the object the record belongs to. */
  object_id: string
  /** The slug of the object the record belongs to. */
  object_slug: string
  /** The ID of the record the file is linked to. */
  record_id: string
  /** The storage provider for this file entry. */
  storage_provider: "attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
  /** The actor that created this file entry. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** Timestamp representing when the file entry was created. */
  created_at: string
  /** The type of file entry. */
  file_type: "file"
  /** The name of the file. */
  name: string
  /** The content type of the file. */
  content_type: string | null
  /** The size of the file in bytes. */
  content_size: number | null
  /** The ID of the parent folder, or null if this is a top-level file. */
  parent_folder_id: string | null
}

export type Folder = {
  id: {
    /** The ID of the workspace the file belongs to. */
    workspace_id: string
    /** The ID of the file entry. */
    file_id: string
  }
  /** The ID of the object the record belongs to. */
  object_id: string
  /** The slug of the object the record belongs to. */
  object_slug: string
  /** The ID of the record the file is linked to. */
  record_id: string
  /** The storage provider for this file entry. */
  storage_provider: "attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
  /** The actor that created this file entry. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** Timestamp representing when the file entry was created. */
  created_at: string
  /** The type of file entry. */
  file_type: "folder"
  /** The name of the folder. */
  name: string
  /** The ID of the parent folder, or null if this is a top-level folder. */
  parent_folder_id: string | null
}

export type ConnectedFile = {
  id: {
    /** The ID of the workspace the file belongs to. */
    workspace_id: string
    /** The ID of the file entry. */
    file_id: string
  }
  /** The ID of the object the record belongs to. */
  object_id: string
  /** The slug of the object the record belongs to. */
  object_slug: string
  /** The ID of the record the file is linked to. */
  record_id: string
  /** The storage provider for this file entry. */
  storage_provider: "attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
  /** The actor that created this file entry. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** Timestamp representing when the file entry was created. */
  created_at: string
  /** The type of file entry. */
  file_type: "connected-file"
  /** The file ID in the external storage provider. */
  external_provider_file_id: string
  /** Microsoft drive ID. This field is only populated for `microsoft-onedrive` entries. */
  microsoft_drive_id: string | null
}

export type ConnectedFolder = {
  id: {
    /** The ID of the workspace the file belongs to. */
    workspace_id: string
    /** The ID of the file entry. */
    file_id: string
  }
  /** The ID of the object the record belongs to. */
  object_id: string
  /** The slug of the object the record belongs to. */
  object_slug: string
  /** The ID of the record the file is linked to. */
  record_id: string
  /** The storage provider for this file entry. */
  storage_provider: "attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
  /** The actor that created this file entry. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** Timestamp representing when the file entry was created. */
  created_at: string
  /** The type of file entry. */
  file_type: "connected-folder"
  /** The file ID in the external storage provider. */
  external_provider_file_id: string
  /** Microsoft drive ID. This field is only populated for `microsoft-onedrive` entries. */
  microsoft_drive_id: string | null
}

export type Meeting = {
  id: {
    /** The ID of the workspace the meeting belongs to. */
    workspace_id: string
    /** The ID of the Attio meeting. */
    meeting_id: string
  }
  /** The title of the meeting. */
  title: string
  /** The description of the meeting. */
  description: string
  /** Whether or not the meeting is an all day event. All day events may span multiple days. */
  is_all_day: boolean
  start:
    | {
        /** If a non-all day event, a datetime representing when the meeting starts. Datetimes are formatted as UTC if no timezone is available. If a timezone is available, the datetime will offset using the specified timezone. */
        datetime: string
        /** The IANA timezone in which the meeting starts, if available. */
        timezone: string | null
      }
    | {
        /** If an all day event, a date representing when the meeting starts. */
        date: string
      }
  end:
    | {
        /** A datetime representing when the meeting ends. All day meetings will return a date whereas non-all day meetings will return a datetime. Datetimes do not include timezone information; please refer to `timezone` for timezone information. Following iCalendar RFC 5545, the `end_at` property is exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one day meeting on June 3rd would have an `end_at` of June 4th, not June 3rd; a one hour meeting starting at 14:00 would have an `end_at` of 15:00, not 14:00. */
        datetime: string
        /** The IANA timezone in which the meeting ends, if available. */
        timezone: string | null
      }
    | {
        /** If an all day event, a date representing when the meeting ends. */
        date: string
      }
  participants: Array<{
    /** The status of the individual meeting participant. */
    status: "accepted" | "tentative" | "declined" | "pending"
    /** Whether or not the participant is the organizer of the meeting. */
    is_organizer: boolean
    /** The normalized email address of the meeting participant. */
    email_address: string | null
    /** The participant's name. This is only set when the name was explicitly provided when the participant was created. It is null for any participant identified by an email address — including workspace members and person records — whose display names are not resolved into this field. */
    name: string | null
  }>
  /** A list of records that are linked to the meeting. Participants with matching person records are automatically linked to the meeting but other records may also be linked explicitly. */
  linked_records: Array<{
    /** The slug of the object the meeting linked record belongs to. */
    object_slug: string
    /** The ID of the object the meeting linked record belongs to. */
    object_id: string
    /** The ID of the meeting linked record. */
    record_id: string
  }>
  /** Timestamp representing when the meeting was created. */
  created_at: string
  /** The actor that created this meeting. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
}

export type Note = {
  id: {
    /** The ID of the workspace the note belongs to. */
    workspace_id: string
    /** The ID of the note. */
    note_id: string
  }
  /** The slug or ID of the parent object the note belongs to. */
  parent_object: string
  /** The ID of the parent record the note belongs to. */
  parent_record_id: string
  /** The note title. The title is plaintext only and has no formatting. */
  title: string
  /** The ID of the meeting associated with this note, or null if no meeting is associated. */
  meeting_id: string | null
  /** The plaintext representation of the note content. The line feed character `\n` represents new lines within the note content. */
  content_plaintext: string
  /** The markdown representation of the note content. Supports a subset of markdown features including: - Headings (levels 1-3 only with `#`, `##`, `###`) - Unordered lists (`-`, `*`, `+`) - Ordered lists (`1.`, `2.`, etc.) - Text styling: `**bold**`, `*italic*`, `~~strikethrough~~`, `==highlighted==` - Links: `[link text](https://example.com)` Note that note images are not returned as part of the markdown API representation. */
  content_markdown: string
  /** An array of records or workspace members that are @-tagged in the note content. */
  tags: Array<
    | {
        /** The type of entity tagged in the note. Can be either 'workspace-member' or 'record' */
        type: "workspace-member"
        /** The ID of the workspace member that is tagged in the note. */
        workspace_member_id: string
      }
    | {
        /** The type of entity tagged in the note. Can be either 'workspace-member' or 'record' */
        type: "record"
        /** The slug or ID of the object that the tagged record belongs to. */
        object: string
        /** The ID of the record that is tagged in the note. */
        record_id: string
      }
  >
  /** The actor that created this note. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** When the note was created. */
  created_at: string
}

export type Task = {
  id: {
    /** The ID of the workspace the task belongs to. */
    workspace_id: string
    /** The ID of the task. */
    task_id: string
  }
  /** The plaintext representation of the task content. Inline linked records will appear as "@record name" and are returned in the `linked_records` property. */
  content_plaintext: string
  /** The deadline date of the task. Returned as an ISO 8601 timestamp. */
  deadline_at: string | null
  /** Whether the task has been completed. */
  is_completed: boolean
  /** When the task was completed, or null if it has not been completed. */
  completed_at: string | null
  /** Records linked to the task. Creating record links within task content text is not possible via the API at present. */
  linked_records: Array<{
    /** The ID of the parent object the task refers to. At present, only `people` and `companies` are supported. */
    target_object_id: string
    /** The ID of the parent record the task refers to. */
    target_record_id: string
  }>
  /** Workspace members assigned to this task. */
  assignees: Array<{
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
    /** The ID of the workspace member actor assigned to this task. */
    referenced_actor_id: string
  }>
  /** The actor that created this task. */
  created_by_actor: {
    /** An ID to identify the actor. */
    id?: string | null
    /** The type of actor. [Read more information on actor types here](/docs/actors). */
    type?: "api-token" | "workspace-member" | "system" | "app" | null
  }
  /** When the task was created. */
  created_at: string
}

export type Thread = {
  id: {
    /** The ID of the workspace the thread belongs to. */
    workspace_id: string
    /** The ID of the thread. */
    thread_id: string
  }
  /** When the thread was created. */
  created_at: string
  /** The requested page of comments in the thread, sorted by `created_at`, oldest first. Keep paginating for as long as a `next_cursor` is returned. */
  comments: Array<Comment>
}

export type ThreadSummary = {
  id: {
    /** The ID of the workspace the thread belongs to. */
    workspace_id: string
    /** The ID of the thread. */
    thread_id: string
  }
  /** When the thread was created. */
  created_at: string
  /** An array of comments in the thread, sorted by `created_at`. This array may be truncated: check `has_more_comments`. */
  comments: Array<Comment>
  /** Whether the thread holds comments beyond those returned in `comments`. When `true`, use [Get a thread and its comments](/rest-api/endpoint-reference/threads/get-a-thread-and-its-comments) to page through every comment in the thread. */
  has_more_comments: boolean
}

/** Success */
export type GetV2ObjectsResponse = {
  data: Array<ApiObject>
}

export type PostV2ObjectsRequest = {
  data: {
    /** A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case. */
    api_slug: string
    /** The singular form of the object's name. */
    singular_noun: string
    /** The plural form of the object's name. */
    plural_noun: string
  }
}

/** Success */
export type PostV2ObjectsResponse = {
  data: ApiObject
}

/** Success */
export type GetV2ObjectsByObjectResponse = {
  data: ApiObject
}

export type PatchV2ObjectsByObjectRequest = {
  data: {
    /** A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case. */
    api_slug?: string
    /** The singular form of the object's name. */
    singular_noun?: string
    /** The plural form of the object's name. */
    plural_noun?: string
  }
}

/** Success */
export type PatchV2ObjectsByObjectResponse = {
  data: ApiObject
}

/** Success */
export type DeleteV2ObjectsByObjectResponse = Record<string, unknown>

/** Success */
export type GetV2ObjectsByObjectViewsResponse = {
  data: Array<ObjectView>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2ObjectsByObjectViewsRequest = {
  data: {
    /** The title of the view. */
    title: string
    /** How the view shows records. */
    type: "table" | "kanban"
    /** The filter of the view. Omitted or `null` to show all records. */
    filter?: ViewFilter | null
    /** The sorts, in order. Omitted for no sorts. */
    sorts?: Array<ViewSort>
    /** The attributes that the view shows, in display order. Omitted for no attributes, as a new view in the app has. */
    attributes?: Array<ViewAttribute>
    /** The settings of a kanban view. Required for kanban views and not allowed for table views. */
    kanban?: {
      /** The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry. */
      status_attribute: ViewAttributePath
      /** Whether the board shows a column for the records that have no status. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      show_no_status_column?: boolean
      /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      attribute_label_display?: "icon" | "text"
      /** The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      aggregation?: ViewKanbanAggregation | null
    }
  }
}

/** Success */
export type PostV2ObjectsByObjectViewsResponse = {
  data: ObjectViewWithDefinition
}

/** Success */
export type GetV2ObjectsByObjectViewsByViewIdResponse = {
  data: ObjectViewWithDefinition
}

export type PatchV2ObjectsByObjectViewsByViewIdRequest = {
  data: {
    /** The title of the view. */
    title?: string
    /** How the view shows records. A change to `kanban` requires `kanban.status_attribute`. A change to `table` removes the kanban settings. */
    type?: "table" | "kanban"
    /** The filter of the view, which replaces the current filter. `null` to show all records. */
    filter?: ViewFilter | null
    /** The sorts, in order, which replace the current sorts. */
    sorts?: Array<ViewSort>
    /** The attributes that the view shows, in display order, which replace the current attributes. A shown attribute with the same attribute and field keeps its column width and display settings, and its aggregation when it omits `aggregation`. */
    attributes?: Array<ViewAttribute>
    /** The kanban settings to change. A change of the type to kanban requires `status_attribute`. Not allowed for table views. */
    kanban?: {
      /** The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry. */
      status_attribute?: ViewAttributePath
      /** Whether the board shows a column for the records that have no status. If omitted, the setting stays as it is. */
      show_no_status_column?: boolean
      /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting stays as it is. */
      attribute_label_display?: "icon" | "text"
      /** The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting stays as it is. */
      aggregation?: ViewKanbanAggregation | null
    }
  }
}

/** Success */
export type PatchV2ObjectsByObjectViewsByViewIdResponse = {
  data: ObjectViewWithDefinition
}

/** Success */
export type DeleteV2ObjectsByObjectViewsByViewIdResponse = Record<string, unknown>

/** Success */
export type GetV2ActivitiesResponse = {
  data: Array<Activity>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2ActivitiesRequest = {
  data: {
    /** A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case. */
    api_slug: string
    /** The singular form of the activity's name. */
    singular_noun: string
    /** The plural form of the activity's name. */
    plural_noun: string
    /** The schema the new activity extends, which supplies its inherited attributes. One of `activities`, `interactions`, `calls` or `emails`. */
    extends: "activities" | "interactions" | "calls" | "emails"
  }
}

/** Success */
export type PostV2ActivitiesResponse = {
  data: Activity
}

/** Success */
export type GetV2ActivitiesByActivityResponse = {
  data: Activity
}

export type PatchV2ActivitiesByActivityRequest = {
  data: {
    /** A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case. */
    api_slug?: string
    /** The singular form of the activity's name. */
    singular_noun?: string
    /** The plural form of the activity's name. */
    plural_noun?: string
  }
}

/** Success */
export type PatchV2ActivitiesByActivityResponse = {
  data: Activity
}

/** Success */
export type DeleteV2ActivitiesByActivityResponse = Record<string, unknown>

/** Success */
export type GetV2ByTargetByIdentifierAttributesResponse = {
  data: Array<Attribute>
}

export type PostV2ByTargetByIdentifierAttributesRequest = {
  data: {
    /** The name of the attribute. The title will be visible across Attio's UI. */
    title: string
    /** A text description for the attribute. */
    description: string | null
    /** A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case. */
    api_slug: string
    /** The type of the attribute. This value affects the possible `config` values. */
    type:
      | "text"
      | "number"
      | "checkbox"
      | "currency"
      | "date"
      | "timestamp"
      | "rating"
      | "status"
      | "select"
      | "record-reference"
      | "actor-reference"
      | "location"
      | "domain"
      | "email-address"
      | "phone-number"
    /** When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`. */
    is_required: boolean
    /** Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data. */
    is_unique: boolean
    /** Whether or not this attribute can have multiple values. Multiselect is only available on some value types. */
    is_multiselect: boolean
    /** The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects. */
    default_value?:
      | (
          | {
              type: "dynamic"
              template: "current-user" | string | string
            }
          | {
              type: "static"
              template: Array<InputValue>
            }
        )
      | null
    /** Optional relationship configuration. When provided, creates a bidirectional relationship between two objects. Can only be used with attributes of type "record-reference". If `config.record_reference.allowed_objects` is also provided, it must contain only the relationship object. */
    relationship?: {
      /** The slug or UUID of the object to create the reverse relationship attribute on. */
      object: string
      /** The title for the reverse relationship attribute. */
      title: string
      /** The API slug for the reverse relationship attribute. */
      api_slug: string
      /** Whether the related attribute supports selecting multiple values. Combined with the parent attribute's `is_multiselect`, this determines the relationship type: both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent `false` + related `true` = one-to-many, both `true` = many-to-many. */
      is_multiselect: boolean
    } | null
    config: {
      /** Configuration available for attributes of type "currency". */
      currency?: {
        /** The ISO4217 code representing the currency that values for this attribute should be stored in. */
        default_currency_code:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
        /** How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$". */
        display_type: "code" | "name" | "narrowSymbol" | "symbol"
      }
      /** Configuration available for attributes of type "record-reference". */
      record_reference?: {
        /** A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object. */
        allowed_objects: Array<string>
      }
    }
  }
}

/** Success */
export type PostV2ByTargetByIdentifierAttributesResponse = {
  data: Attribute
}

/** Success */
export type GetV2ByTargetByIdentifierAttributesByAttributeResponse = {
  data: Attribute
}

export type PatchV2ByTargetByIdentifierAttributesByAttributeRequest = {
  data: {
    /** The name of the attribute. The title will be visible across Attio's UI. */
    title?: string
    /** A text description for the attribute. */
    description?: string | null
    /** A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case. */
    api_slug?: string
    /** When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`. */
    is_required?: boolean
    /** Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data. */
    is_unique?: boolean
    /** The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects. */
    default_value?:
      | (
          | {
              type: "dynamic"
              template: "current-user" | string | string
            }
          | {
              type: "static"
              template: Array<InputValue>
            }
        )
      | null
    /** Additional, type-dependent configuration for the attribute. */
    config?: {
      /** Configuration available for attributes of type "currency". */
      currency?: {
        /** The ISO4217 code representing the currency that values for this attribute should be stored in. */
        default_currency_code:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
        /** How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$". */
        display_type: "code" | "name" | "narrowSymbol" | "symbol"
      }
      /** Configuration available for attributes of type "record-reference". */
      record_reference?: {
        /** A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object. */
        allowed_objects: Array<string>
      }
    }
    /** Whether the attribute has been archived or not. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. */
    is_archived?: boolean
  }
}

/** Success */
export type PatchV2ByTargetByIdentifierAttributesByAttributeResponse = {
  data: Attribute
}

/** Success */
export type GetV2ByTargetByIdentifierAttributesByAttributeOptionsResponse = {
  data: Array<SelectOption>
}

export type PostV2ByTargetByIdentifierAttributesByAttributeOptionsRequest = {
  data: {
    /** The Title of the select option */
    title: string
  }
}

/** Success */
export type PostV2ByTargetByIdentifierAttributesByAttributeOptionsResponse = {
  data: SelectOption
}

export type PatchV2ByTargetByIdentifierAttributesByAttributeOptionsByOptionRequest = {
  data: {
    /** The Title of the select option */
    title?: string
    /** Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. */
    is_archived?: boolean
  }
}

/** Success */
export type PatchV2ByTargetByIdentifierAttributesByAttributeOptionsByOptionResponse = {
  data: SelectOption
}

/** Success */
export type GetV2ByTargetByIdentifierAttributesByAttributeStatusesResponse = {
  data: Array<Status>
}

export type PostV2ByTargetByIdentifierAttributesByAttributeStatusesRequest = {
  data: {
    /** The Title of the status */
    title: string
    /** Whether arriving at this status triggers a celebration effect */
    celebration_enabled?: boolean
    /** Target time for a record to spend in given status expressed as a ISO-8601 duration string */
    target_time_in_status?: string | null
  }
}

/** Success */
export type PostV2ByTargetByIdentifierAttributesByAttributeStatusesResponse = {
  data: Status
}

export type PatchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatusRequest = {
  data: {
    /** The Title of the status */
    title?: string
    /** Whether arriving at this status triggers a celebration effect */
    celebration_enabled?: boolean
    /** Target time for a record to spend in given status expressed as a ISO-8601 duration string */
    target_time_in_status?: string | null
    /** Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. */
    is_archived?: boolean
  }
}

/** Success */
export type PatchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatusResponse = {
  data: Status
}

export type PostV2ObjectsByObjectRecordsQueryRequest = {
  /** An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  filter?: Record<string, unknown>
  /** UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view. */
  filter_view_id?: string
  /** An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  sorts?: Array<
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** A slug or ID to identify the attribute to sort by. */
        attribute: string
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`. */
        path: Array<Array<string | string>>
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
  >
  /** The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination). */
  limit?: number
  /** The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination). */
  offset?: number
}

/** Success */
export type PostV2ObjectsByObjectRecordsQueryResponse = {
  data: Array<{
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }>
}

export type PostV2ObjectsByObjectRecordsRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PostV2ObjectsByObjectRecordsResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ObjectsByObjectRecordsRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ObjectsByObjectRecordsResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type GetV2ObjectsByObjectRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ObjectsByObjectRecordsByRecordIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ObjectsByObjectRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PatchV2ObjectsByObjectRecordsByRecordIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PatchV2ObjectsByObjectRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this record belongs to. */
      workspace_id: string
      /** A UUID identifying the object this record belongs to. */
      object_id: string
      /** A UUID identifying this record. */
      record_id: string
    }
    /** When this record was created. */
    created_at: string
    /** A URL that links directly to the record page in the Attio web application. */
    web_url: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type DeleteV2ObjectsByObjectRecordsByRecordIdResponse = Record<string, unknown>

export type PostV2ObjectsByObjectRecordsMergeRequest = {
  data: {
    /** The ID of the record to keep values from. Where both records have a value for the same attribute, the primary record's value takes precedence. */
    primary_record_id: string
    /** The ID of the record to merge into the primary record. Its values are only kept where the primary record has no value for that attribute. */
    secondary_record_id: string
  }
}

/** Success */
export type PostV2ObjectsByObjectRecordsMergeResponse = {
  data: {
    /** The ID of the merged record. This is a new ID, which will usually match neither of the records supplied in the request. */
    new_record_id: string
  }
}

/** Success */
export type GetV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse = {
  data: Array<
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
        referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
        /** The ID of the referenced actor. */
        referenced_actor_id: string | null
        /** The attribute type of the value. */
        attribute_type: "actor-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
        value: boolean
        /** The attribute type of the value. */
        attribute_type: "checkbox"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
        currency_value: number
        /** The ISO4217 currency code representing the currency that the value is stored in. */
        currency_code?:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
          | null
        /** The attribute type of the value. */
        attribute_type: "currency"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "date"
        /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
        value: string
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        domain: string
        root_domain: string
        /** The attribute type of the value. */
        attribute_type: "domain"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        original_email_address: string
        email_address: string
        email_domain: string
        email_root_domain: string
        email_local_specifier: string
        /** The attribute type of the value. */
        attribute_type: "email-address"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A slug identifying the object that the referenced record belongs to. */
        target_object: string
        /** A UUID to identify the referenced record. */
        target_record_id: string
        /** The attribute type of the value. */
        attribute_type: "record-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of interaction e.g. calendar or email. */
        interaction_type: "activity" | "email" | "meeting" | "calendar-event"
        /** When the interaction occurred. */
        interacted_at: string
        /** The actor that created this value. */
        owner_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "interaction"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_1: string | null
        /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_2: string | null
        /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_3: string | null
        /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_4: string | null
        /** The town, neighborhood or area the location is in. */
        locality: string | null
        /** The state, county, province or region that the location is in. */
        region: string | null
        /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        postcode: string | null
        /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
          | null
        /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        latitude: string | null
        /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        longitude: string | null
        /** The attribute type of the value. */
        attribute_type: "location"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** Numbers are persisted as 64 bit floats. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first name. */
        first_name: string
        /** The last name. */
        last_name: string
        /** The full name. */
        full_name: string
        /** The attribute type of the value. */
        attribute_type: "personal-name"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The raw, original phone number, as inputted. */
        original_phone_number: string
        /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
        phone_number: string
        /** The attribute type of the value. */
        attribute_type: "phone-number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        status: Status
        /** The attribute type of the value. */
        attribute_type: "status"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A number between 0 and 5 (inclusive) to represent a star rating. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "rating"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        option: SelectOption
        /** The attribute type of the value. */
        attribute_type: "select"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A raw text field. Values are limited to 10MB. */
        value: string
        /** The attribute type of the value. */
        attribute_type: "text"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "timestamp"
        /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
        value: string
      }
  >
}

export type PutV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesRequest = {
  data: {
    /** The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request. */
    values: Array<{
      /** The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
      value: Record<string, unknown> | string | number | boolean
      /** An RFC 3339 timestamp for when this value became active. May not be in the future. */
      active_from: string
      /** An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration. */
      active_until: string | null
    }>
    /** Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request. */
    replace_history: true
  }
}

/** Success */
export type PutV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse = {
  data: Array<
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
        referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
        /** The ID of the referenced actor. */
        referenced_actor_id: string | null
        /** The attribute type of the value. */
        attribute_type: "actor-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
        value: boolean
        /** The attribute type of the value. */
        attribute_type: "checkbox"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
        currency_value: number
        /** The ISO4217 currency code representing the currency that the value is stored in. */
        currency_code?:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
          | null
        /** The attribute type of the value. */
        attribute_type: "currency"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "date"
        /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
        value: string
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        domain: string
        root_domain: string
        /** The attribute type of the value. */
        attribute_type: "domain"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        original_email_address: string
        email_address: string
        email_domain: string
        email_root_domain: string
        email_local_specifier: string
        /** The attribute type of the value. */
        attribute_type: "email-address"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A slug identifying the object that the referenced record belongs to. */
        target_object: string
        /** A UUID to identify the referenced record. */
        target_record_id: string
        /** The attribute type of the value. */
        attribute_type: "record-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of interaction e.g. calendar or email. */
        interaction_type: "activity" | "email" | "meeting" | "calendar-event"
        /** When the interaction occurred. */
        interacted_at: string
        /** The actor that created this value. */
        owner_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "interaction"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_1: string | null
        /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_2: string | null
        /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_3: string | null
        /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_4: string | null
        /** The town, neighborhood or area the location is in. */
        locality: string | null
        /** The state, county, province or region that the location is in. */
        region: string | null
        /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        postcode: string | null
        /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
          | null
        /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        latitude: string | null
        /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        longitude: string | null
        /** The attribute type of the value. */
        attribute_type: "location"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** Numbers are persisted as 64 bit floats. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first name. */
        first_name: string
        /** The last name. */
        last_name: string
        /** The full name. */
        full_name: string
        /** The attribute type of the value. */
        attribute_type: "personal-name"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The raw, original phone number, as inputted. */
        original_phone_number: string
        /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
        phone_number: string
        /** The attribute type of the value. */
        attribute_type: "phone-number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        status: Status
        /** The attribute type of the value. */
        attribute_type: "status"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A number between 0 and 5 (inclusive) to represent a star rating. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "rating"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        option: SelectOption
        /** The attribute type of the value. */
        attribute_type: "select"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A raw text field. Values are limited to 10MB. */
        value: string
        /** The attribute type of the value. */
        attribute_type: "text"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "timestamp"
        /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
        value: string
      }
  >
}

/** Success */
export type GetV2ObjectsByObjectRecordsByRecordIdEntriesResponse = {
  data: Array<{
    /** A UUID identifying the list that this record is in. */
    list_id: string
    /** A human-readable slug for the list for use in URLs and responses. */
    list_api_slug: string
    /** A UUID identifying this entry on the list. */
    entry_id: string
    /** When this entry was created. */
    created_at: string
  }>
}

export type PostV2ObjectsRecordsSearchRequest = {
  /** Query string to search for. An empty string returns a default set of results. */
  query: string
  /** The maximum number of results to return. Defaults to 25. */
  limit?: number
  /** Specifies which objects to filter results by. At least one object must be specified. Accepts object slugs or IDs. */
  objects: Array<string>
  /** Specifies the context in which to perform the search. Use 'workspace' to return all search results or specify a workspace member to limit results to what one specific person in your workspace can see. */
  request_as:
    | {
        type: "workspace"
      }
    | {
        type: "workspace-member"
        workspace_member_id: string
      }
    | {
        type: "workspace-member"
        email_address: string
      }
}

/** Success */
export type PostV2ObjectsRecordsSearchResponse = {
  data: Array<
    | {
        id: {
          /** A UUID identifying the workspace this record belongs to. */
          workspace_id: string
          /** A UUID identifying the object this record belongs to. */
          object_id: string
          /** A UUID identifying this record. */
          record_id: string
        }
        /** A human-readable label for the record. Present on records from all objects. */
        record_text: string
        /** The image for the record. */
        record_image: string | null
        /** The slug of the object this record belongs to. */
        object_slug: string
      }
    | {
        id: {
          /** A UUID identifying the workspace this record belongs to. */
          workspace_id: string
          /** A UUID identifying the object this record belongs to. */
          object_id: string
          /** A UUID identifying this record. */
          record_id: string
        }
        /** A human-readable label for the record. Present on records from all objects. */
        record_text: string
        /** The image for the record. */
        record_image: string | null
        /** The slug of the object this record belongs to. */
        object_slug: "people"
        /** The person's email addresses. */
        email_addresses: Array<string>
        /** The person's phone numbers. */
        phone_numbers: Array<string>
      }
    | {
        id: {
          /** A UUID identifying the workspace this record belongs to. */
          workspace_id: string
          /** A UUID identifying the object this record belongs to. */
          object_id: string
          /** A UUID identifying this record. */
          record_id: string
        }
        /** A human-readable label for the record. Present on records from all objects. */
        record_text: string
        /** The image for the record. */
        record_image: string | null
        /** The slug of the object this record belongs to. */
        object_slug: "companies"
        /** The company's domains. */
        domains: Array<string>
      }
  >
}

export type PostV2ActivitiesByActivityRecordsQueryRequest = {
  /** An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  filter?: Record<string, unknown>
  /** An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  sorts?: Array<
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** A slug or ID to identify the attribute to sort by. */
        attribute: string
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`. */
        path: Array<Array<string | string>>
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
  >
  /** The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination). */
  limit?: number
  /** The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination). */
  offset?: number
}

/** Success */
export type PostV2ActivitiesByActivityRecordsQueryResponse = {
  data: Array<{
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }>
}

export type PostV2ActivitiesByActivityRecordsRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PostV2ActivitiesByActivityRecordsResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ActivitiesByActivityRecordsRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ActivitiesByActivityRecordsResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type GetV2ActivitiesByActivityRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ActivitiesByActivityRecordsByRecordIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ActivitiesByActivityRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PatchV2ActivitiesByActivityRecordsByRecordIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PatchV2ActivitiesByActivityRecordsByRecordIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this activity record belongs to. */
      workspace_id: string
      /** A UUID identifying the activity this record belongs to. */
      activity_id: string
      /** A UUID identifying this activity record. */
      record_id: string
    }
    /** When this activity record was created. */
    created_at: string
    /** A record type with an attribute `api_slug` as the key, and an array of value objects as the values. */
    values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type DeleteV2ActivitiesByActivityRecordsByRecordIdResponse = Record<string, unknown>

export type PostV2SqlRequest = {
  /** The SQL query to be executed. Use `$name` placeholders to reference values from `parameters` instead of inlining them into the query. */
  sql: string
  parameters?: Record<string, unknown>
}

/** Success */
export type PostV2SqlResponse = {
  data: {
    rows: Array<{ [key: string]: unknown }>
  }
}

/** Success */
export type GetV2ListsResponse = {
  data: Array<List>
}

export type PostV2ListsRequest = {
  data: {
    /** The human-readable name of the list. */
    name: string
    /** A unique, human-readable slug to access the list through API calls. Should be formatted in snake case. */
    api_slug: string
    /** A UUID or slug to identify the allowed object type for records added to this list. */
    parent_object: string
    /** The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members. */
    workspace_access: "full-access" | "read-and-write" | "read-only" | null
    /** The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members. */
    workspace_member_access: Array<{
      /** A UUID to identify the workspace member to grant access to. */
      workspace_member_id: string
      /** The level of access to the list. */
      level: "full-access" | "read-and-write" | "read-only"
    }>
  }
}

/** Success */
export type PostV2ListsResponse = {
  data: List
}

/** Success */
export type GetV2ListsByListResponse = {
  data: List
}

export type PatchV2ListsByListRequest = {
  data: {
    /** The human-readable name of the list. */
    name?: string
    /** A unique, human-readable slug to access the list through API calls. Should be formatted in snake case. */
    api_slug?: string
    /** The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members. */
    workspace_access?: "full-access" | "read-and-write" | "read-only" | null
    /** The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members. */
    workspace_member_access?: Array<{
      /** A UUID to identify the workspace member to grant access to. */
      workspace_member_id: string
      /** The level of access to the list. */
      level: "full-access" | "read-and-write" | "read-only"
    }>
  }
}

/** Success */
export type PatchV2ListsByListResponse = {
  data: List
}

/** Success */
export type GetV2ListsByListViewsResponse = {
  data: Array<ListView>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2ListsByListViewsRequest = {
  data: {
    /** The title of the view. */
    title: string
    /** How the view shows records. */
    type: "table" | "kanban"
    /** The filter of the view. Omitted or `null` to show all records. */
    filter?: ViewFilter | null
    /** The sorts, in order. Omitted for no sorts. */
    sorts?: Array<ViewSort>
    /** The attributes that the view shows, in display order. Omitted for no attributes, as a new view in the app has. */
    attributes?: Array<ViewAttribute>
    /** The settings of a kanban view. Required for kanban views and not allowed for table views. */
    kanban?: {
      /** The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry. */
      status_attribute: ViewAttributePath
      /** Whether the board shows a column for the records that have no status. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      show_no_status_column?: boolean
      /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      attribute_label_display?: "icon" | "text"
      /** The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`. */
      aggregation?: ViewKanbanAggregation | null
    }
  }
}

/** Success */
export type PostV2ListsByListViewsResponse = {
  data: ListViewWithDefinition
}

/** Success */
export type GetV2ListsByListViewsByViewIdResponse = {
  data: ListViewWithDefinition
}

export type PatchV2ListsByListViewsByViewIdRequest = {
  data: {
    /** The title of the view. */
    title?: string
    /** How the view shows records. A change to `kanban` requires `kanban.status_attribute`. A change to `table` removes the kanban settings. */
    type?: "table" | "kanban"
    /** The filter of the view, which replaces the current filter. `null` to show all records. */
    filter?: ViewFilter | null
    /** The sorts, in order, which replace the current sorts. */
    sorts?: Array<ViewSort>
    /** The attributes that the view shows, in display order, which replace the current attributes. A shown attribute with the same attribute and field keeps its column width and display settings, and its aggregation when it omits `aggregation`. */
    attributes?: Array<ViewAttribute>
    /** The kanban settings to change. A change of the type to kanban requires `status_attribute`. Not allowed for table views. */
    kanban?: {
      /** The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry. */
      status_attribute?: ViewAttributePath
      /** Whether the board shows a column for the records that have no status. If omitted, the setting stays as it is. */
      show_no_status_column?: boolean
      /** How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting stays as it is. */
      attribute_label_display?: "icon" | "text"
      /** The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting stays as it is. */
      aggregation?: ViewKanbanAggregation | null
    }
  }
}

/** Success */
export type PatchV2ListsByListViewsByViewIdResponse = {
  data: ListViewWithDefinition
}

/** Success */
export type DeleteV2ListsByListViewsByViewIdResponse = Record<string, unknown>

export type PostV2ListsByListEntriesQueryRequest = {
  /** An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  filter?: Record<string, unknown>
  /** UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view. */
  filter_view_id?: string
  /** An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting). */
  sorts?: Array<
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** A slug or ID to identify the attribute to sort by. */
        attribute: string
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
    | {
        /** The direction to sort the results by. */
        direction: "asc" | "desc"
        /** You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`. */
        path: Array<Array<string | string>>
        /** Which field on the value to sort by e.g. "last_name" on a name value. */
        field?: string
      }
  >
  /** The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination). */
  limit?: number
  /** The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination). */
  offset?: number
}

/** Success */
export type PostV2ListsByListEntriesQueryResponse = {
  data: Array<{
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }>
}

export type PostV2ListsByListEntriesRequest = {
  data: {
    /** A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the added parent record belongs to. */
    parent_object: string
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    entry_values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PostV2ListsByListEntriesResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ListsByListEntriesRequest = {
  data: {
    /** A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the added parent record belongs to. */
    parent_object: string
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    entry_values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ListsByListEntriesResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type GetV2ListsByListEntriesByEntryIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PutV2ListsByListEntriesByEntryIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    entry_values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PutV2ListsByListEntriesByEntryIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

export type PatchV2ListsByListEntriesByEntryIdRequest = {
  data: {
    /** An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
    entry_values: { [key: string]: Array<unknown> }
  }
}

/** Success */
export type PatchV2ListsByListEntriesByEntryIdResponse = {
  data: {
    id: {
      /** A UUID identifying the workspace this entry belongs to. */
      workspace_id: string
      /** A UUID identifying the list this entry is in. */
      list_id: string
      /** A UUID identifying this entry. */
      entry_id: string
    }
    /** A UUID identifying the record that is parent of the list entry. */
    parent_record_id: string
    /** A UUID or slug identifying the object that the parent record belongs to. */
    parent_object: string
    /** When this entry was created. */
    created_at: string
    /** A list of attribute values for the list entry (not attribute values for its parent record). */
    entry_values: {
      [key: string]: Array<
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
            referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
            /** The ID of the referenced actor. */
            referenced_actor_id: string | null
            /** The attribute type of the value. */
            attribute_type: "actor-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
            value: boolean
            /** The attribute type of the value. */
            attribute_type: "checkbox"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
            currency_value: number
            /** The ISO4217 currency code representing the currency that the value is stored in. */
            currency_code?:
              | "ARS"
              | "AUD"
              | "BRL"
              | "BGN"
              | "CAD"
              | "CLP"
              | "CNY"
              | "COP"
              | "CZK"
              | "DKK"
              | "EGP"
              | "EUR"
              | "FJD"
              | "GHS"
              | "HKD"
              | "HUF"
              | "ISK"
              | "INR"
              | "IDR"
              | "ILS"
              | "JPY"
              | "KES"
              | "KRW"
              | "MYR"
              | "MXN"
              | "NTD"
              | "NZD"
              | "NGN"
              | "NOK"
              | "OMR"
              | "XPF"
              | "PEN"
              | "PHP"
              | "PLN"
              | "GBP"
              | "QAR"
              | "RWF"
              | "SAR"
              | "SGD"
              | "ZAR"
              | "SEK"
              | "CHF"
              | "THB"
              | "TRY"
              | "AED"
              | "UYU"
              | "USD"
              | null
            /** The attribute type of the value. */
            attribute_type: "currency"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "date"
            /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
            value: string
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            domain: string
            root_domain: string
            /** The attribute type of the value. */
            attribute_type: "domain"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            original_email_address: string
            email_address: string
            email_domain: string
            email_root_domain: string
            email_local_specifier: string
            /** The attribute type of the value. */
            attribute_type: "email-address"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A slug identifying the object that the referenced record belongs to. */
            target_object: string
            /** A UUID to identify the referenced record. */
            target_record_id: string
            /** The attribute type of the value. */
            attribute_type: "record-reference"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The type of interaction e.g. calendar or email. */
            interaction_type: "activity" | "email" | "meeting" | "calendar-event"
            /** When the interaction occurred. */
            interacted_at: string
            /** The actor that created this value. */
            owner_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "interaction"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_1: string | null
            /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_2: string | null
            /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_3: string | null
            /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
            line_4: string | null
            /** The town, neighborhood or area the location is in. */
            locality: string | null
            /** The state, county, province or region that the location is in. */
            region: string | null
            /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            postcode: string | null
            /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
              | null
            /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            latitude: string | null
            /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
            longitude: string | null
            /** The attribute type of the value. */
            attribute_type: "location"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** Numbers are persisted as 64 bit floats. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The first name. */
            first_name: string
            /** The last name. */
            last_name: string
            /** The full name. */
            full_name: string
            /** The attribute type of the value. */
            attribute_type: "personal-name"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The raw, original phone number, as inputted. */
            original_phone_number: string
            /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
            country_code:
              | "AF"
              | "AX"
              | "AL"
              | "DZ"
              | "AS"
              | "AD"
              | "AO"
              | "AI"
              | "AQ"
              | "AG"
              | "AR"
              | "AM"
              | "AW"
              | "AU"
              | "AT"
              | "AZ"
              | "BS"
              | "BH"
              | "BD"
              | "BB"
              | "BY"
              | "BE"
              | "BZ"
              | "BJ"
              | "BM"
              | "BT"
              | "BO"
              | "BA"
              | "BW"
              | "BV"
              | "BR"
              | "IO"
              | "BN"
              | "BG"
              | "BF"
              | "BI"
              | "KH"
              | "CM"
              | "CA"
              | "CV"
              | "KY"
              | "CF"
              | "TD"
              | "CL"
              | "CN"
              | "CX"
              | "CC"
              | "CO"
              | "KM"
              | "CG"
              | "CD"
              | "CK"
              | "CR"
              | "CI"
              | "HR"
              | "CU"
              | "CW"
              | "CY"
              | "CZ"
              | "DK"
              | "DJ"
              | "DM"
              | "DO"
              | "EC"
              | "EG"
              | "SV"
              | "GQ"
              | "ER"
              | "EE"
              | "ET"
              | "FK"
              | "FO"
              | "FJ"
              | "FI"
              | "FR"
              | "GF"
              | "PF"
              | "TF"
              | "GA"
              | "GM"
              | "GE"
              | "DE"
              | "GH"
              | "GI"
              | "GR"
              | "GL"
              | "GD"
              | "GP"
              | "GU"
              | "GT"
              | "GG"
              | "GN"
              | "GW"
              | "GY"
              | "HT"
              | "HM"
              | "VA"
              | "HN"
              | "HK"
              | "HU"
              | "IS"
              | "IN"
              | "ID"
              | "IR"
              | "IQ"
              | "IE"
              | "IM"
              | "IL"
              | "IT"
              | "JM"
              | "JP"
              | "JE"
              | "JO"
              | "KZ"
              | "KE"
              | "KI"
              | "KR"
              | "KW"
              | "KG"
              | "LA"
              | "LV"
              | "LB"
              | "LS"
              | "LR"
              | "LY"
              | "LI"
              | "LT"
              | "LU"
              | "MO"
              | "MK"
              | "MG"
              | "MW"
              | "MY"
              | "MV"
              | "ML"
              | "MT"
              | "MH"
              | "MQ"
              | "MR"
              | "MU"
              | "YT"
              | "MX"
              | "FM"
              | "MD"
              | "MC"
              | "MN"
              | "ME"
              | "MS"
              | "MA"
              | "MZ"
              | "MM"
              | "NA"
              | "NR"
              | "NP"
              | "NL"
              | "AN"
              | "NC"
              | "NZ"
              | "NI"
              | "NE"
              | "NG"
              | "NU"
              | "NF"
              | "MP"
              | "NO"
              | "OM"
              | "PK"
              | "PW"
              | "PS"
              | "PA"
              | "PG"
              | "PY"
              | "PE"
              | "PH"
              | "PN"
              | "PL"
              | "PT"
              | "PR"
              | "QA"
              | "RE"
              | "RO"
              | "RU"
              | "RW"
              | "BL"
              | "SH"
              | "KN"
              | "LC"
              | "MF"
              | "PM"
              | "VC"
              | "WS"
              | "SM"
              | "ST"
              | "SA"
              | "SN"
              | "SS"
              | "RS"
              | "SC"
              | "SL"
              | "SG"
              | "SK"
              | "SI"
              | "SB"
              | "SO"
              | "ZA"
              | "GS"
              | "ES"
              | "LK"
              | "SD"
              | "SR"
              | "SJ"
              | "SZ"
              | "SE"
              | "CH"
              | "SY"
              | "TW"
              | "TJ"
              | "TZ"
              | "TH"
              | "TL"
              | "TG"
              | "TK"
              | "TO"
              | "TT"
              | "TN"
              | "TR"
              | "TM"
              | "TC"
              | "TV"
              | "UG"
              | "UA"
              | "AE"
              | "GB"
              | "US"
              | "UM"
              | "UY"
              | "UZ"
              | "VU"
              | "VE"
              | "VN"
              | "VG"
              | "VI"
              | "WF"
              | "EH"
              | "YE"
              | "ZM"
              | "ZW"
              | "BQ"
              | "KP"
              | "SX"
              | "XK"
              | "AC"
            phone_number: string
            /** The attribute type of the value. */
            attribute_type: "phone-number"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            status: Status
            /** The attribute type of the value. */
            attribute_type: "status"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A number between 0 and 5 (inclusive) to represent a star rating. */
            value: number
            /** The attribute type of the value. */
            attribute_type: "rating"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            option: SelectOption
            /** The attribute type of the value. */
            attribute_type: "select"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** A raw text field. Values are limited to 10MB. */
            value: string
            /** The attribute type of the value. */
            attribute_type: "text"
          }
        | {
            /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
            active_from: string
            /** The point in time at which this value was deactivated. If `null`, the value is active. */
            active_until: string | null
            /** The actor that created this value. */
            created_by_actor: {
              /** An ID to identify the actor. */
              id?: string | null
              /** The type of actor. [Read more information on actor types here](/docs/actors). */
              type?: "api-token" | "workspace-member" | "system" | "app" | null
            }
            /** The attribute type of the value. */
            attribute_type: "timestamp"
            /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
            value: string
          }
      >
    }
  }
}

/** Success */
export type DeleteV2ListsByListEntriesByEntryIdResponse = Record<string, unknown>

/** Success */
export type GetV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse = {
  data: Array<
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
        referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
        /** The ID of the referenced actor. */
        referenced_actor_id: string | null
        /** The attribute type of the value. */
        attribute_type: "actor-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
        value: boolean
        /** The attribute type of the value. */
        attribute_type: "checkbox"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
        currency_value: number
        /** The ISO4217 currency code representing the currency that the value is stored in. */
        currency_code?:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
          | null
        /** The attribute type of the value. */
        attribute_type: "currency"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "date"
        /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
        value: string
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        domain: string
        root_domain: string
        /** The attribute type of the value. */
        attribute_type: "domain"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        original_email_address: string
        email_address: string
        email_domain: string
        email_root_domain: string
        email_local_specifier: string
        /** The attribute type of the value. */
        attribute_type: "email-address"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A slug identifying the object that the referenced record belongs to. */
        target_object: string
        /** A UUID to identify the referenced record. */
        target_record_id: string
        /** The attribute type of the value. */
        attribute_type: "record-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of interaction e.g. calendar or email. */
        interaction_type: "activity" | "email" | "meeting" | "calendar-event"
        /** When the interaction occurred. */
        interacted_at: string
        /** The actor that created this value. */
        owner_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "interaction"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_1: string | null
        /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_2: string | null
        /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_3: string | null
        /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_4: string | null
        /** The town, neighborhood or area the location is in. */
        locality: string | null
        /** The state, county, province or region that the location is in. */
        region: string | null
        /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        postcode: string | null
        /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
          | null
        /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        latitude: string | null
        /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        longitude: string | null
        /** The attribute type of the value. */
        attribute_type: "location"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** Numbers are persisted as 64 bit floats. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first name. */
        first_name: string
        /** The last name. */
        last_name: string
        /** The full name. */
        full_name: string
        /** The attribute type of the value. */
        attribute_type: "personal-name"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The raw, original phone number, as inputted. */
        original_phone_number: string
        /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
        phone_number: string
        /** The attribute type of the value. */
        attribute_type: "phone-number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        status: Status
        /** The attribute type of the value. */
        attribute_type: "status"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A number between 0 and 5 (inclusive) to represent a star rating. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "rating"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        option: SelectOption
        /** The attribute type of the value. */
        attribute_type: "select"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A raw text field. Values are limited to 10MB. */
        value: string
        /** The attribute type of the value. */
        attribute_type: "text"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "timestamp"
        /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
        value: string
      }
  >
}

export type PutV2ListsByListEntriesByEntryIdAttributesByAttributeValuesRequest = {
  data: {
    /** The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request. */
    values: Array<{
      /** The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types). */
      value: Record<string, unknown> | string | number | boolean
      /** An RFC 3339 timestamp for when this value became active. May not be in the future. */
      active_from: string
      /** An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration. */
      active_until: string | null
    }>
    /** Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request. */
    replace_history: true
  }
}

/** Success */
export type PutV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse = {
  data: Array<
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of the referenced actor. [Read more information on actor types here](/docs/actors). */
        referenced_actor_type: "api-token" | "workspace-member" | "system" | "app"
        /** The ID of the referenced actor. */
        referenced_actor_id: string | null
        /** The attribute type of the value. */
        attribute_type: "actor-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. */
        value: boolean
        /** The attribute type of the value. */
        attribute_type: "checkbox"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A numerical representation of the currency value. A decimal with a max of 4 decimal places. */
        currency_value: number
        /** The ISO4217 currency code representing the currency that the value is stored in. */
        currency_code?:
          | "ARS"
          | "AUD"
          | "BRL"
          | "BGN"
          | "CAD"
          | "CLP"
          | "CNY"
          | "COP"
          | "CZK"
          | "DKK"
          | "EGP"
          | "EUR"
          | "FJD"
          | "GHS"
          | "HKD"
          | "HUF"
          | "ISK"
          | "INR"
          | "IDR"
          | "ILS"
          | "JPY"
          | "KES"
          | "KRW"
          | "MYR"
          | "MXN"
          | "NTD"
          | "NZD"
          | "NGN"
          | "NOK"
          | "OMR"
          | "XPF"
          | "PEN"
          | "PHP"
          | "PLN"
          | "GBP"
          | "QAR"
          | "RWF"
          | "SAR"
          | "SGD"
          | "ZAR"
          | "SEK"
          | "CHF"
          | "THB"
          | "TRY"
          | "AED"
          | "UYU"
          | "USD"
          | null
        /** The attribute type of the value. */
        attribute_type: "currency"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "date"
        /** A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31". */
        value: string
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        domain: string
        root_domain: string
        /** The attribute type of the value. */
        attribute_type: "domain"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        original_email_address: string
        email_address: string
        email_domain: string
        email_root_domain: string
        email_local_specifier: string
        /** The attribute type of the value. */
        attribute_type: "email-address"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A slug identifying the object that the referenced record belongs to. */
        target_object: string
        /** A UUID to identify the referenced record. */
        target_record_id: string
        /** The attribute type of the value. */
        attribute_type: "record-reference"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The type of interaction e.g. calendar or email. */
        interaction_type: "activity" | "email" | "meeting" | "calendar-event"
        /** When the interaction occurred. */
        interacted_at: string
        /** The actor that created this value. */
        owner_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "interaction"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_1: string | null
        /** The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_2: string | null
        /** The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_3: string | null
        /** The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls. */
        line_4: string | null
        /** The town, neighborhood or area the location is in. */
        locality: string | null
        /** The state, county, province or region that the location is in. */
        region: string | null
        /** The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        postcode: string | null
        /** The ISO 3166-1 alpha-2 country code for the country this location is in. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
          | null
        /** The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        latitude: string | null
        /** The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.} */
        longitude: string | null
        /** The attribute type of the value. */
        attribute_type: "location"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** Numbers are persisted as 64 bit floats. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The first name. */
        first_name: string
        /** The last name. */
        last_name: string
        /** The full name. */
        full_name: string
        /** The attribute type of the value. */
        attribute_type: "personal-name"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The raw, original phone number, as inputted. */
        original_phone_number: string
        /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
        country_code:
          | "AF"
          | "AX"
          | "AL"
          | "DZ"
          | "AS"
          | "AD"
          | "AO"
          | "AI"
          | "AQ"
          | "AG"
          | "AR"
          | "AM"
          | "AW"
          | "AU"
          | "AT"
          | "AZ"
          | "BS"
          | "BH"
          | "BD"
          | "BB"
          | "BY"
          | "BE"
          | "BZ"
          | "BJ"
          | "BM"
          | "BT"
          | "BO"
          | "BA"
          | "BW"
          | "BV"
          | "BR"
          | "IO"
          | "BN"
          | "BG"
          | "BF"
          | "BI"
          | "KH"
          | "CM"
          | "CA"
          | "CV"
          | "KY"
          | "CF"
          | "TD"
          | "CL"
          | "CN"
          | "CX"
          | "CC"
          | "CO"
          | "KM"
          | "CG"
          | "CD"
          | "CK"
          | "CR"
          | "CI"
          | "HR"
          | "CU"
          | "CW"
          | "CY"
          | "CZ"
          | "DK"
          | "DJ"
          | "DM"
          | "DO"
          | "EC"
          | "EG"
          | "SV"
          | "GQ"
          | "ER"
          | "EE"
          | "ET"
          | "FK"
          | "FO"
          | "FJ"
          | "FI"
          | "FR"
          | "GF"
          | "PF"
          | "TF"
          | "GA"
          | "GM"
          | "GE"
          | "DE"
          | "GH"
          | "GI"
          | "GR"
          | "GL"
          | "GD"
          | "GP"
          | "GU"
          | "GT"
          | "GG"
          | "GN"
          | "GW"
          | "GY"
          | "HT"
          | "HM"
          | "VA"
          | "HN"
          | "HK"
          | "HU"
          | "IS"
          | "IN"
          | "ID"
          | "IR"
          | "IQ"
          | "IE"
          | "IM"
          | "IL"
          | "IT"
          | "JM"
          | "JP"
          | "JE"
          | "JO"
          | "KZ"
          | "KE"
          | "KI"
          | "KR"
          | "KW"
          | "KG"
          | "LA"
          | "LV"
          | "LB"
          | "LS"
          | "LR"
          | "LY"
          | "LI"
          | "LT"
          | "LU"
          | "MO"
          | "MK"
          | "MG"
          | "MW"
          | "MY"
          | "MV"
          | "ML"
          | "MT"
          | "MH"
          | "MQ"
          | "MR"
          | "MU"
          | "YT"
          | "MX"
          | "FM"
          | "MD"
          | "MC"
          | "MN"
          | "ME"
          | "MS"
          | "MA"
          | "MZ"
          | "MM"
          | "NA"
          | "NR"
          | "NP"
          | "NL"
          | "AN"
          | "NC"
          | "NZ"
          | "NI"
          | "NE"
          | "NG"
          | "NU"
          | "NF"
          | "MP"
          | "NO"
          | "OM"
          | "PK"
          | "PW"
          | "PS"
          | "PA"
          | "PG"
          | "PY"
          | "PE"
          | "PH"
          | "PN"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "RE"
          | "RO"
          | "RU"
          | "RW"
          | "BL"
          | "SH"
          | "KN"
          | "LC"
          | "MF"
          | "PM"
          | "VC"
          | "WS"
          | "SM"
          | "ST"
          | "SA"
          | "SN"
          | "SS"
          | "RS"
          | "SC"
          | "SL"
          | "SG"
          | "SK"
          | "SI"
          | "SB"
          | "SO"
          | "ZA"
          | "GS"
          | "ES"
          | "LK"
          | "SD"
          | "SR"
          | "SJ"
          | "SZ"
          | "SE"
          | "CH"
          | "SY"
          | "TW"
          | "TJ"
          | "TZ"
          | "TH"
          | "TL"
          | "TG"
          | "TK"
          | "TO"
          | "TT"
          | "TN"
          | "TR"
          | "TM"
          | "TC"
          | "TV"
          | "UG"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UM"
          | "UY"
          | "UZ"
          | "VU"
          | "VE"
          | "VN"
          | "VG"
          | "VI"
          | "WF"
          | "EH"
          | "YE"
          | "ZM"
          | "ZW"
          | "BQ"
          | "KP"
          | "SX"
          | "XK"
          | "AC"
        phone_number: string
        /** The attribute type of the value. */
        attribute_type: "phone-number"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        status: Status
        /** The attribute type of the value. */
        attribute_type: "status"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A number between 0 and 5 (inclusive) to represent a star rating. */
        value: number
        /** The attribute type of the value. */
        attribute_type: "rating"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        option: SelectOption
        /** The attribute type of the value. */
        attribute_type: "select"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** A raw text field. Values are limited to 10MB. */
        value: string
        /** The attribute type of the value. */
        attribute_type: "text"
      }
    | {
        /** The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. */
        active_from: string
        /** The point in time at which this value was deactivated. If `null`, the value is active. */
        active_until: string | null
        /** The actor that created this value. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** The attribute type of the value. */
        attribute_type: "timestamp"
        /** A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z". */
        value: string
      }
  >
}

/** Success */
export type GetV2WorkspaceMembersResponse = {
  data: Array<WorkspaceMember>
}

/** Success */
export type GetV2WorkspaceMembersByWorkspaceMemberIdResponse = {
  data: WorkspaceMember
}

/** Success */
export type GetV2NotesResponse = {
  data: Array<Note>
}

export type PostV2NotesRequest = {
  data: {
    /** The ID or slug of the parent object the note belongs to. */
    parent_object: string
    /** The ID of the parent record the note belongs to. */
    parent_record_id: string
    /** The note title. The title is plaintext only and has no formatting. */
    title: string
    /** Specify the format for the note's content. Choose from: - `plaintext`: Standard text format where `\n` signifies a new line. - `markdown`: Enables rich text formatting using a subset of Markdown syntax: - **Headings**: Levels 1-3 (`#`, `##`, `###`). - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`). - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`). - **Links**: Standard Markdown links (`[link text](https://example.com)`). *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.* */
    format: "plaintext" | "markdown"
    /** The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note. */
    content: string
    /** `created_at` will default to the current time. However, if you wish to backdate a note for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed. */
    created_at?: string
    /** An optional ID to associate this note with a meeting. If provided, the meeting must exist. Use `null` to explicitly set no meeting association. */
    meeting_id?: string | null
  }
}

/** Success */
export type PostV2NotesResponse = {
  data: Note
}

/** Success */
export type GetV2NotesByNoteIdResponse = {
  data: Note
}

export type PatchV2NotesByNoteIdRequest = {
  data: {
    /** The note title. The title is plaintext only and has no formatting. */
    title?: string
    /** Specify the format for the note's content. Choose from: - `plaintext`: Standard text format where `\n` signifies a new line. - `markdown`: Enables rich text formatting using a subset of Markdown syntax: - **Headings**: Levels 1-3 (`#`, `##`, `###`). - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`). - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`). - **Links**: Standard Markdown links (`[link text](https://example.com)`). *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.* */
    format?: "plaintext" | "markdown"
    /** The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note. */
    content?: string
  }
}

/** Success */
export type PatchV2NotesByNoteIdResponse = {
  data: Note
}

/** Success */
export type DeleteV2NotesByNoteIdResponse = Record<string, unknown>

/** Success */
export type GetV2TasksResponse = {
  data: Array<Task>
}

export type PostV2TasksRequest = {
  data: {
    /** The text content of the task, in the format specified by the `format` property. A max length of 2000 characters is enforced. */
    content: string
    /** The format of the task content to be created. Rich text formatting, links and @references are not supported. */
    format: "plaintext"
    /** The deadline of the task, in ISO 8601 format. */
    deadline_at: string | null
    /** Whether the task has been completed. */
    is_completed: boolean
    /** Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present. */
    linked_records:
      | Array<string>
      | Array<
          | {
              /** The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.` */
              target_object: string
              /** The ID of the parent record the task refers to. */
              target_record_id: string
            }
          | {
              /** A UUID or slug to identify the object that the referenced record belongs to. */
              target_object: string
              /** In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record). */
              "[slug_or_id_of_matching_attribute]": Array<
                | {
                    /** The full domain of the website. */
                    domain?: string
                  }
                | {
                    /** An email address string */
                    email_address?: string
                  }
                | {
                    /** Numbers are persisted as 64 bit floats. */
                    value?: number
                  }
                | {
                    /** The raw, original phone number, as inputted. */
                    original_phone_number?: string
                    /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
                    country_code?:
                      | "AF"
                      | "AX"
                      | "AL"
                      | "DZ"
                      | "AS"
                      | "AD"
                      | "AO"
                      | "AI"
                      | "AQ"
                      | "AG"
                      | "AR"
                      | "AM"
                      | "AW"
                      | "AU"
                      | "AT"
                      | "AZ"
                      | "BS"
                      | "BH"
                      | "BD"
                      | "BB"
                      | "BY"
                      | "BE"
                      | "BZ"
                      | "BJ"
                      | "BM"
                      | "BT"
                      | "BO"
                      | "BA"
                      | "BW"
                      | "BV"
                      | "BR"
                      | "IO"
                      | "BN"
                      | "BG"
                      | "BF"
                      | "BI"
                      | "KH"
                      | "CM"
                      | "CA"
                      | "CV"
                      | "KY"
                      | "CF"
                      | "TD"
                      | "CL"
                      | "CN"
                      | "CX"
                      | "CC"
                      | "CO"
                      | "KM"
                      | "CG"
                      | "CD"
                      | "CK"
                      | "CR"
                      | "CI"
                      | "HR"
                      | "CU"
                      | "CW"
                      | "CY"
                      | "CZ"
                      | "DK"
                      | "DJ"
                      | "DM"
                      | "DO"
                      | "EC"
                      | "EG"
                      | "SV"
                      | "GQ"
                      | "ER"
                      | "EE"
                      | "ET"
                      | "FK"
                      | "FO"
                      | "FJ"
                      | "FI"
                      | "FR"
                      | "GF"
                      | "PF"
                      | "TF"
                      | "GA"
                      | "GM"
                      | "GE"
                      | "DE"
                      | "GH"
                      | "GI"
                      | "GR"
                      | "GL"
                      | "GD"
                      | "GP"
                      | "GU"
                      | "GT"
                      | "GG"
                      | "GN"
                      | "GW"
                      | "GY"
                      | "HT"
                      | "HM"
                      | "VA"
                      | "HN"
                      | "HK"
                      | "HU"
                      | "IS"
                      | "IN"
                      | "ID"
                      | "IR"
                      | "IQ"
                      | "IE"
                      | "IM"
                      | "IL"
                      | "IT"
                      | "JM"
                      | "JP"
                      | "JE"
                      | "JO"
                      | "KZ"
                      | "KE"
                      | "KI"
                      | "KR"
                      | "KW"
                      | "KG"
                      | "LA"
                      | "LV"
                      | "LB"
                      | "LS"
                      | "LR"
                      | "LY"
                      | "LI"
                      | "LT"
                      | "LU"
                      | "MO"
                      | "MK"
                      | "MG"
                      | "MW"
                      | "MY"
                      | "MV"
                      | "ML"
                      | "MT"
                      | "MH"
                      | "MQ"
                      | "MR"
                      | "MU"
                      | "YT"
                      | "MX"
                      | "FM"
                      | "MD"
                      | "MC"
                      | "MN"
                      | "ME"
                      | "MS"
                      | "MA"
                      | "MZ"
                      | "MM"
                      | "NA"
                      | "NR"
                      | "NP"
                      | "NL"
                      | "AN"
                      | "NC"
                      | "NZ"
                      | "NI"
                      | "NE"
                      | "NG"
                      | "NU"
                      | "NF"
                      | "MP"
                      | "NO"
                      | "OM"
                      | "PK"
                      | "PW"
                      | "PS"
                      | "PA"
                      | "PG"
                      | "PY"
                      | "PE"
                      | "PH"
                      | "PN"
                      | "PL"
                      | "PT"
                      | "PR"
                      | "QA"
                      | "RE"
                      | "RO"
                      | "RU"
                      | "RW"
                      | "BL"
                      | "SH"
                      | "KN"
                      | "LC"
                      | "MF"
                      | "PM"
                      | "VC"
                      | "WS"
                      | "SM"
                      | "ST"
                      | "SA"
                      | "SN"
                      | "SS"
                      | "RS"
                      | "SC"
                      | "SL"
                      | "SG"
                      | "SK"
                      | "SI"
                      | "SB"
                      | "SO"
                      | "ZA"
                      | "GS"
                      | "ES"
                      | "LK"
                      | "SD"
                      | "SR"
                      | "SJ"
                      | "SZ"
                      | "SE"
                      | "CH"
                      | "SY"
                      | "TW"
                      | "TJ"
                      | "TZ"
                      | "TH"
                      | "TL"
                      | "TG"
                      | "TK"
                      | "TO"
                      | "TT"
                      | "TN"
                      | "TR"
                      | "TM"
                      | "TC"
                      | "TV"
                      | "UG"
                      | "UA"
                      | "AE"
                      | "GB"
                      | "US"
                      | "UM"
                      | "UY"
                      | "UZ"
                      | "VU"
                      | "VE"
                      | "VN"
                      | "VG"
                      | "VI"
                      | "WF"
                      | "EH"
                      | "YE"
                      | "ZM"
                      | "ZW"
                      | "BQ"
                      | "KP"
                      | "SX"
                      | "XK"
                      | "AC"
                      | null
                  }
                | {
                    /** A raw text field. Values are limited to 10MB. */
                    value?: string
                  }
              >
            }
        >
    /** Workspace members assigned to this task. */
    assignees: Array<
      | {
          /** The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors). */
          referenced_actor_type: "workspace-member"
          /** The ID of the actor assigned to this task. */
          referenced_actor_id: string
        }
      | {
          /** Workspace member actors can be referenced by email address as well as actor ID. */
          workspace_member_email_address: string
        }
    >
  }
}

/** Success */
export type PostV2TasksResponse = {
  data: Task
}

/** Success */
export type GetV2TasksByTaskIdResponse = {
  data: Task
}

export type PatchV2TasksByTaskIdRequest = {
  data: {
    /** The deadline of the task, in ISO 8601 format. */
    deadline_at?: string | null
    /** Whether the task has been completed. */
    is_completed?: boolean
    /** Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present. */
    linked_records?:
      | Array<string>
      | Array<
          | {
              /** The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.` */
              target_object: string
              /** The ID of the parent record the task refers to. */
              target_record_id: string
            }
          | {
              /** A UUID or slug to identify the object that the referenced record belongs to. */
              target_object: string
              /** In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record). */
              "[slug_or_id_of_matching_attribute]": Array<
                | {
                    /** The full domain of the website. */
                    domain?: string
                  }
                | {
                    /** An email address string */
                    email_address?: string
                  }
                | {
                    /** Numbers are persisted as 64 bit floats. */
                    value?: number
                  }
                | {
                    /** The raw, original phone number, as inputted. */
                    original_phone_number?: string
                    /** The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. */
                    country_code?:
                      | "AF"
                      | "AX"
                      | "AL"
                      | "DZ"
                      | "AS"
                      | "AD"
                      | "AO"
                      | "AI"
                      | "AQ"
                      | "AG"
                      | "AR"
                      | "AM"
                      | "AW"
                      | "AU"
                      | "AT"
                      | "AZ"
                      | "BS"
                      | "BH"
                      | "BD"
                      | "BB"
                      | "BY"
                      | "BE"
                      | "BZ"
                      | "BJ"
                      | "BM"
                      | "BT"
                      | "BO"
                      | "BA"
                      | "BW"
                      | "BV"
                      | "BR"
                      | "IO"
                      | "BN"
                      | "BG"
                      | "BF"
                      | "BI"
                      | "KH"
                      | "CM"
                      | "CA"
                      | "CV"
                      | "KY"
                      | "CF"
                      | "TD"
                      | "CL"
                      | "CN"
                      | "CX"
                      | "CC"
                      | "CO"
                      | "KM"
                      | "CG"
                      | "CD"
                      | "CK"
                      | "CR"
                      | "CI"
                      | "HR"
                      | "CU"
                      | "CW"
                      | "CY"
                      | "CZ"
                      | "DK"
                      | "DJ"
                      | "DM"
                      | "DO"
                      | "EC"
                      | "EG"
                      | "SV"
                      | "GQ"
                      | "ER"
                      | "EE"
                      | "ET"
                      | "FK"
                      | "FO"
                      | "FJ"
                      | "FI"
                      | "FR"
                      | "GF"
                      | "PF"
                      | "TF"
                      | "GA"
                      | "GM"
                      | "GE"
                      | "DE"
                      | "GH"
                      | "GI"
                      | "GR"
                      | "GL"
                      | "GD"
                      | "GP"
                      | "GU"
                      | "GT"
                      | "GG"
                      | "GN"
                      | "GW"
                      | "GY"
                      | "HT"
                      | "HM"
                      | "VA"
                      | "HN"
                      | "HK"
                      | "HU"
                      | "IS"
                      | "IN"
                      | "ID"
                      | "IR"
                      | "IQ"
                      | "IE"
                      | "IM"
                      | "IL"
                      | "IT"
                      | "JM"
                      | "JP"
                      | "JE"
                      | "JO"
                      | "KZ"
                      | "KE"
                      | "KI"
                      | "KR"
                      | "KW"
                      | "KG"
                      | "LA"
                      | "LV"
                      | "LB"
                      | "LS"
                      | "LR"
                      | "LY"
                      | "LI"
                      | "LT"
                      | "LU"
                      | "MO"
                      | "MK"
                      | "MG"
                      | "MW"
                      | "MY"
                      | "MV"
                      | "ML"
                      | "MT"
                      | "MH"
                      | "MQ"
                      | "MR"
                      | "MU"
                      | "YT"
                      | "MX"
                      | "FM"
                      | "MD"
                      | "MC"
                      | "MN"
                      | "ME"
                      | "MS"
                      | "MA"
                      | "MZ"
                      | "MM"
                      | "NA"
                      | "NR"
                      | "NP"
                      | "NL"
                      | "AN"
                      | "NC"
                      | "NZ"
                      | "NI"
                      | "NE"
                      | "NG"
                      | "NU"
                      | "NF"
                      | "MP"
                      | "NO"
                      | "OM"
                      | "PK"
                      | "PW"
                      | "PS"
                      | "PA"
                      | "PG"
                      | "PY"
                      | "PE"
                      | "PH"
                      | "PN"
                      | "PL"
                      | "PT"
                      | "PR"
                      | "QA"
                      | "RE"
                      | "RO"
                      | "RU"
                      | "RW"
                      | "BL"
                      | "SH"
                      | "KN"
                      | "LC"
                      | "MF"
                      | "PM"
                      | "VC"
                      | "WS"
                      | "SM"
                      | "ST"
                      | "SA"
                      | "SN"
                      | "SS"
                      | "RS"
                      | "SC"
                      | "SL"
                      | "SG"
                      | "SK"
                      | "SI"
                      | "SB"
                      | "SO"
                      | "ZA"
                      | "GS"
                      | "ES"
                      | "LK"
                      | "SD"
                      | "SR"
                      | "SJ"
                      | "SZ"
                      | "SE"
                      | "CH"
                      | "SY"
                      | "TW"
                      | "TJ"
                      | "TZ"
                      | "TH"
                      | "TL"
                      | "TG"
                      | "TK"
                      | "TO"
                      | "TT"
                      | "TN"
                      | "TR"
                      | "TM"
                      | "TC"
                      | "TV"
                      | "UG"
                      | "UA"
                      | "AE"
                      | "GB"
                      | "US"
                      | "UM"
                      | "UY"
                      | "UZ"
                      | "VU"
                      | "VE"
                      | "VN"
                      | "VG"
                      | "VI"
                      | "WF"
                      | "EH"
                      | "YE"
                      | "ZM"
                      | "ZW"
                      | "BQ"
                      | "KP"
                      | "SX"
                      | "XK"
                      | "AC"
                      | null
                  }
                | {
                    /** A raw text field. Values are limited to 10MB. */
                    value?: string
                  }
              >
            }
        >
    /** Workspace members assigned to this task. */
    assignees?: Array<
      | {
          /** The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors). */
          referenced_actor_type: "workspace-member"
          /** The ID of the actor assigned to this task. */
          referenced_actor_id: string
        }
      | {
          /** Workspace member actors can be referenced by email address as well as actor ID. */
          workspace_member_email_address: string
        }
    >
  }
}

/** Success */
export type PatchV2TasksByTaskIdResponse = {
  data: Task
}

/** Success */
export type DeleteV2TasksByTaskIdResponse = Record<string, unknown>

/** Success */
export type GetV2ThreadsResponse = {
  data: Array<Thread>
}

/** Success */
export type GetV2ThreadsByThreadIdResponse = {
  data: Thread
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2CommentsRequest = {
  data:
    | {
        /** The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported. */
        format: "plaintext"
        /** The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links. */
        content: string
        /** The workspace member who wrote this comment. Note that other types of actors are not currently supported. */
        author: {
          type: "workspace-member"
          id: string
        }
        /** `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed. */
        created_at?: string
        /** If responding to an existing thread, this would be the ID of that thread. */
        thread_id: string
      }
    | {
        /** The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported. */
        format: "plaintext"
        /** The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links. */
        content: string
        /** The workspace member who wrote this comment. Note that other types of actors are not currently supported. */
        author: {
          type: "workspace-member"
          id: string
        }
        /** `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed. */
        created_at?: string
        record: {
          /** If creating a top-level comment on a record, this is the slug or ID of that object. */
          object: string
          /** If creating a top-level comment on a record, this is the ID of that record. */
          record_id: string
        }
      }
    | {
        /** The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported. */
        format: "plaintext"
        /** The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links. */
        content: string
        /** The workspace member who wrote this comment. Note that other types of actors are not currently supported. */
        author: {
          type: "workspace-member"
          id: string
        }
        /** `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed. */
        created_at?: string
        entry: {
          /** If creating a top-level comment on a list entry, this is the slug or ID of that list. */
          list: string
          /** If creating a top-level comment on a list entry, this is the ID of that entry. */
          entry_id: string
        }
      }
}

/** Success */
export type PostV2CommentsResponse = {
  data: Comment
}

/** Success */
export type GetV2CommentsByCommentIdResponse = {
  data: Comment
}

/** Success */
export type DeleteV2CommentsByCommentIdResponse = Record<string, unknown>

/** Success */
export type GetV2EmailsResponse = {
  data: Array<Email>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2SequencesUnsubscribedEmailsRequest = {
  data: {
    /** The email addresses to add to the unsubscribe list. A maximum of 1000 email addresses can be provided per request. Email addresses are normalized before they are stored. */
    email_addresses: Array<string>
  }
}

/** Success */
export type PostV2SequencesUnsubscribedEmailsResponse = {
  data: Array<{
    /** The normalized email address on the unsubscribe list. */
    email_address: string
    /** When the email address was added to the unsubscribe list. */
    created_at: string
  }>
}

/** Success */
export type GetV2WorkspaceBlocklistAddressesResponse = {
  data: Array<{
    /** The normalized email address or domain. It is the address's key on the workspace blocklist. */
    address: string
    /** Whether the address is an email address or a domain. */
    address_type: "email_address" | "domain"
    /** `protected`: emails and calendar events are hidden unless at least one participant is not on the workspace blocklist. `blocked`: they are hidden even when other participants are included. */
    enforcement_level: "protected" | "blocked"
    /** When the address was given its current enforcement level. */
    created_at: string
  }>
  pagination: {
    next_cursor: string | null
  }
}

export type PutV2WorkspaceBlocklistAddressesRequest = {
  data: {
    /** The addresses to set and the enforcement level each should have. A maximum of 500 addresses can be provided per request. The same address may not appear with two different enforcement levels. */
    addresses: Array<{
      /** An email address or a domain. Attio works out which one it is. Email addresses are trimmed and lowercased, and their host must be a valid domain. Domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed; subdomains are kept. Single labels (`acme`), bare public suffixes (`com`), unknown suffixes, IP addresses, wildcards and values over 253 characters are rejected. */
      address: string
      /** `protected`: emails and calendar events are hidden unless at least one participant is not on the workspace blocklist. `blocked`: they are hidden even when other participants are included. */
      enforcement_level: "protected" | "blocked"
    }>
  }
}

/** Success */
export type PutV2WorkspaceBlocklistAddressesResponse = {
  data: Array<{
    /** The normalized email address or domain. It is the address's key on the workspace blocklist. */
    address: string
    /** Whether the address is an email address or a domain. */
    address_type: "email_address" | "domain"
    /** `protected`: emails and calendar events are hidden unless at least one participant is not on the workspace blocklist. `blocked`: they are hidden even when other participants are included. */
    enforcement_level: "protected" | "blocked"
    /** When the address was given its current enforcement level. */
    created_at: string
  }>
}

/** Success */
export type DeleteV2WorkspaceBlocklistAddressesByAddressResponse = Record<string, unknown>

/** Success */
export type GetV2MeetingsResponse = {
  data: Array<Meeting>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2MeetingsRequest = {
  data: {
    /** The title of the meeting. */
    title: string
    /** The description of the meeting. */
    description: string
    /** When the meeting starts. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings. */
    start:
      | {
          /** An ISO 8601 datetime indicating when a non-all day meeting starts. */
          datetime: string
          /** The IANA timezone the meeting starts in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC. */
          timezone?: string | null
        }
      | {
          /** An ISO 8601 date indicating when an all day meeting starts. */
          date: string
        }
    /** When the meeting ends. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings. */
    end:
      | {
          /** An ISO 8601 datetime indicating when a non-all day meeting ends. Note that this value is exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one hour meeting starting at 14:00 would end at 15:00, not 15:59:59. */
          datetime: string
          /** The IANA timezone the meeting ends in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC. */
          timezone?: string | null
        }
      | {
          /** An ISO 8601 date indicating when an all day meeting ends. Note that dates are exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one day meeting on June 3rd would end on June 4th, not June 3rd. */
          date: string
        }
    /** Whether or not the meeting is an all day event. All day events may span multiple days. When true, start and end must use date format. When false, start and end must use datetime with timezone format. */
    is_all_day: boolean
    participants: Array<{
      /** The email address of the participant. New person records and companies will automatically be created based upon the email address values provided. If omitted, a name must be provided instead. */
      email_address?: string
      /** Whether or not the participant is the organizer of the meeting. */
      is_organizer: boolean | "true" | "false"
      /** The status of the individual meeting participant. */
      status: "accepted" | "tentative" | "declined" | "pending"
      /** The name of the participant. Required when no email_address is provided. Participants without an email do not create person or company records. */
      name?: string
    }>
    /** A list of records to link to the meeting. Each record is specified by its object (slug or UUID) and record ID (UUID). Attio will automatically link the meeting participants' companies to the meeting; this behavior is asynchronous. */
    linked_records?: Array<{
      /** The slug or UUID of the object that the record being linked belongs to. */
      object: string
      /** The UUID of the record being linked. */
      record_id: string
    }>
  }
}

/** Success */
export type PostV2MeetingsResponse = {
  data: Meeting
}

/** Success */
export type GetV2MeetingsByMeetingIdResponse = {
  data: Meeting
}

export type PutV2MeetingsByMeetingIdRequest = {
  data: {
    linked_records: Array<{
      /** The slug or UUID of the object that the record being linked belongs to. */
      object: string
      /** The UUID of the record being linked. */
      record_id: string
    }>
  }
}

/** Success */
export type PutV2MeetingsByMeetingIdResponse = {
  data: Meeting
}

export type PatchV2MeetingsByMeetingIdRequest = {
  data: {
    linked_records: Array<{
      /** The slug or UUID of the object that the record being linked belongs to. */
      object: string
      /** The UUID of the record being linked. */
      record_id: string
    }>
  }
}

/** Success */
export type PatchV2MeetingsByMeetingIdResponse = {
  data: Meeting
}

/** Success */
export type DeleteV2MeetingsByMeetingIdResponse = Record<string, unknown>

/** Success */
export type GetV2MeetingsByMeetingIdCallRecordingsResponse = {
  data: Array<{
    id: {
      /** The ID of the workspace this call recording belongs to. */
      workspace_id: string
      /** The ID of the meeting associated with this call recording. */
      meeting_id: string
      /** The call recording ID of the call recording. */
      call_recording_id: string
    }
    /** The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`. */
    status: "processing" | "completed" | "failed"
    /** A URL that links directly to the call recording in the Attio web application. */
    web_url: string
    /** The actor that created this call recording. */
    created_by_actor: {
      /** An ID to identify the actor. */
      id?: string | null
      /** The type of actor. [Read more information on actor types here](/docs/actors). */
      type?: "api-token" | "workspace-member" | "system" | "app" | null
    }
    /** The timestamp of when the call recording was created. */
    created_at: string
  }>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2MeetingsByMeetingIdCallRecordingsRequest = {
  data: {
    /** A publicly accessible URL to a video file of the call recording. Attio will download the video from this URL asynchronously. This field is optional — a call recording can be created with only a `transcript` and no video. **Requirements:** - **Protocol:** The URL must use the `https` protocol. - **File type:** The file must be a `.mp4` file. - **File size:** The file must not exceed 1GB in size. - **Accessibility:** For the request to be accepted, the URL must be publicly accessible. Attio will make a `HEAD` request to the URL to verify its accessibility and retrieve file metadata. The response to this request must include a `Content-Length` header. */
    video_url?: string
    /** The call recording's transcript. It must contain at least one transcript segment. */
    transcript: Array<{
      /** The spoken text for this segment of the transcript. */
      speech: string
      /** The start time of this speech segment in seconds. */
      start_time: number
      /** The end time of this speech segment in seconds. */
      end_time: number
      speaker: {
        /** The name of the speaker. */
        name: string
        /** The email address of the speaker. */
        email_address?: string
      }
    }>
  }
}

/** Success */
export type PostV2MeetingsByMeetingIdCallRecordingsResponse = {
  data: {
    id: {
      /** The ID of the workspace this call recording belongs to. */
      workspace_id: string
      /** The ID of the meeting associated with this call recording. */
      meeting_id: string
      /** The call recording ID of the call recording. */
      call_recording_id: string
    }
    /** The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`. */
    status: "processing" | "completed" | "failed"
    /** A URL that links directly to the call recording in the Attio web application. */
    web_url: string
    /** The actor that created this call recording. */
    created_by_actor: {
      /** An ID to identify the actor. */
      id?: string | null
      /** The type of actor. [Read more information on actor types here](/docs/actors). */
      type?: "api-token" | "workspace-member" | "system" | "app" | null
    }
    /** The timestamp of when the call recording was created. */
    created_at: string
  }
}

/** Success */
export type GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse = {
  data: {
    id: {
      /** The ID of the workspace this call recording belongs to. */
      workspace_id: string
      /** The ID of the meeting associated with this call recording. */
      meeting_id: string
      /** The call recording ID of the call recording. */
      call_recording_id: string
    }
    /** The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`. */
    status: "processing" | "completed" | "failed"
    /** A URL that links directly to the call recording in the Attio web application. */
    web_url: string
    /** The actor that created this call recording. */
    created_by_actor: {
      /** An ID to identify the actor. */
      id?: string | null
      /** The type of actor. [Read more information on actor types here](/docs/actors). */
      type?: "api-token" | "workspace-member" | "system" | "app" | null
    }
    /** The timestamp of when the call recording was created. */
    created_at: string
    /** A short-lived URL for downloading the call recording's video. This is only available for call recordings captured by the Attio call recorder: it is always `null` for call recordings created through the API. The URL expires one hour after this response was generated. You can call this endpoint again to get a fresh URL. */
    video_url: string | null
    /** The transcript for this call recording, `null` if no transcript is available. */
    transcript: {
      /** The transcript segments with speech, timing, and speaker information. */
      segments: Array<{
        /** The spoken text for this segment of the transcript. */
        speech: string
        /** The start time of this speech segment in seconds, measured from the start of the recording. */
        start_time: number
        /** The end time of this speech segment in seconds, measured from the start of the recording. */
        end_time: number
        /** The speaker of this transcript segment. */
        speaker: {
          /** The name of the speaker. */
          name: string
        }
      }>
      /** The raw transcript of the call recording. */
      raw_transcript: string
    } | null
  }
}

/** Success */
export type DeleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse = Record<string, unknown>

/** Success */
export type GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscriptResponse = {
  data: {
    id: {
      /** The ID of the workspace this transcript belongs to. */
      workspace_id: string
      /** The ID of the meeting associated with this transcript. */
      meeting_id: string
      /** The ID of the call recording this transcript belongs to. */
      call_recording_id: string
    }
    /** The transcript segments with speech, timing, and speaker information. */
    transcript: Array<{
      /** The spoken text for this segment of the transcript. */
      speech: string
      /** The start time of this speech segment in seconds, measured from the start of the recording. */
      start_time: number
      /** The end time of this speech segment in seconds, measured from the start of the recording. */
      end_time: number
      /** The speaker of this transcript segment. */
      speaker: {
        /** The name of the speaker. */
        name: string
      }
    }>
    /** The raw transcript of the call recording. */
    raw_transcript: string
    /** A URL that links directly to the call recording transcript in the Attio web application. */
    web_url: string
  }
  pagination: {
    next_cursor: string | null
  }
}

/** Success */
export type GetV2FilesResponse = {
  data: Array<File | Folder | ConnectedFile | ConnectedFolder>
  pagination: {
    next_cursor: string | null
  }
}

export type PostV2FilesRequest =
  | {
      /** The object slug or ID. */
      object: string
      /** The ID of the record to create the file entry on. */
      record_id: string
      /** Creates a native Attio folder entry. */
      file_type: "folder"
      /** The folder name. */
      name: string
      /** Optional parent folder ID. Omit to create a top-level folder. */
      parent_folder_id?: string
    }
  | {
      /** The object slug or ID. */
      object: string
      /** The ID of the record to create the file entry on. */
      record_id: string
      /** The external storage provider. */
      storage_provider: "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
      /** The ID of the file or folder in the external storage provider. */
      external_provider_file_id: string
      /** Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`. */
      microsoft_drive_id?: string | null
      /** Creates a connected folder entry. */
      file_type: "connected-folder"
    }
  | {
      /** The object slug or ID. */
      object: string
      /** The ID of the record to create the file entry on. */
      record_id: string
      /** The external storage provider. */
      storage_provider: "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
      /** The ID of the file or folder in the external storage provider. */
      external_provider_file_id: string
      /** Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`. */
      microsoft_drive_id?: string | null
      /** Creates a connected file entry. */
      file_type: "connected-file"
    }

/** Success */
export type PostV2FilesResponse = {
  data: Folder | ConnectedFile | ConnectedFolder
}

export type PostV2FilesUploadRequest = {
  /** The file to upload. */
  file: string
  /** The object slug or ID. */
  object: string
  /** The ID of the record to upload the file to. */
  record_id: string
  /** Optional parent folder ID. Omit to upload to the root folder. */
  parent_folder_id?: string
}

/** Created */
export type PostV2FilesUploadResponse = {
  data: File
}

/** Success */
export type GetV2FilesByFileIdResponse = {
  data:
    | File
    | {
        id: {
          /** The ID of the workspace the file belongs to. */
          workspace_id: string
          /** The ID of the file entry. */
          file_id: string
        }
        /** The ID of the object the record belongs to. */
        object_id: string
        /** The slug of the object the record belongs to. */
        object_slug: string
        /** The ID of the record the file is linked to. */
        record_id: string
        /** The storage provider for this file entry. */
        storage_provider: "attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive"
        /** The actor that created this file entry. */
        created_by_actor: {
          /** An ID to identify the actor. */
          id?: string | null
          /** The type of actor. [Read more information on actor types here](/docs/actors). */
          type?: "api-token" | "workspace-member" | "system" | "app" | null
        }
        /** Timestamp representing when the file entry was created. */
        created_at: string
        /** The type of file entry. */
        file_type: "folder"
        /** The name of the folder. */
        name: string
        /** The ID of the parent folder, or null if this is a top-level folder. */
        parent_folder_id: string | null
        /** Whether the folder contains any child entries. */
        has_children: boolean
      }
    | ConnectedFile
    | ConnectedFolder
}

/** Success */
export type DeleteV2FilesByFileIdResponse = Record<string, unknown>

/** Success */
export type GetV2WebhooksResponse = {
  data: Array<{
    /** URL where the webhook events will be delivered to. */
    target_url: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
    id: {
      /** The ID of the workspace the webhook belongs to. */
      workspace_id: string
      /** The ID of the webhook. */
      webhook_id: string
    }
    /** The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. */
    status: "active" | "degraded" | "inactive"
    /** When the webhook was created. */
    created_at: string
  }>
}

export type PostV2WebhooksRequest = {
  data: {
    /** URL where the webhook events will be delivered to. */
    target_url: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
  }
}

/** Success */
export type PostV2WebhooksResponse = {
  data: {
    /** URL where the webhook events will be delivered to. */
    target_url: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
    id: {
      /** The ID of the workspace the webhook belongs to. */
      workspace_id: string
      /** The ID of the webhook. */
      webhook_id: string
    }
    /** The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. */
    status: "active" | "degraded" | "inactive"
    /** When the webhook was created. */
    created_at: string
    /** The key which is used to sign the webhook events. This is only shown when setting up the webhook initially. */
    secret: string
  }
}

/** Success */
export type GetV2WebhooksByWebhookIdResponse = {
  data: {
    /** URL where the webhook events will be delivered to. */
    target_url: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
    id: {
      /** The ID of the workspace the webhook belongs to. */
      workspace_id: string
      /** The ID of the webhook. */
      webhook_id: string
    }
    /** The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. */
    status: "active" | "degraded" | "inactive"
    /** When the webhook was created. */
    created_at: string
  }
}

export type PatchV2WebhooksByWebhookIdRequest = {
  data: {
    /** URL where the webhook events will be delivered to. */
    target_url?: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions?: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
  }
}

/** Success */
export type PatchV2WebhooksByWebhookIdResponse = {
  data: {
    /** URL where the webhook events will be delivered to. */
    target_url: string
    /** One or more events the webhook is subscribed to. Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`. */
    subscriptions: Array<{
      /** Type of event the webhook is subscribed to. */
      event_type:
        | "activity.created"
        | "activity.updated"
        | "activity.deleted"
        | "activity-attribute.created"
        | "activity-attribute.updated"
        | "activity-record.created"
        | "activity-record.deleted"
        | "call-recording.created"
        | "comment.created"
        | "comment.resolved"
        | "comment.unresolved"
        | "comment.deleted"
        | "list.created"
        | "list.updated"
        | "list.deleted"
        | "list-attribute.created"
        | "list-attribute.updated"
        | "list-entry.created"
        | "list-entry.updated"
        | "list-entry.deleted"
        | "object-attribute.created"
        | "object-attribute.updated"
        | "note.created"
        | "note-content.updated"
        | "note.updated"
        | "note.deleted"
        | "record.created"
        | "record.merged"
        | "record.updated"
        | "record.deleted"
        | "task.created"
        | "task.updated"
        | "task.deleted"
        | "workspace-member.created"
      /** Filters to determine whether the webhook event should be sent. If null, the filter always passes. When filters are compared for uniqueness, key order and the order of operations are ignored. */
      filter:
        | (
            | {
                $or: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
            | {
                $and: Array<
                  | {
                      field: string
                      operator: "equals"
                      value: string
                    }
                  | {
                      field: string
                      operator: "not_equals"
                      value: string
                    }
                >
              }
          )
        | null
    }>
    id: {
      /** The ID of the workspace the webhook belongs to. */
      workspace_id: string
      /** The ID of the webhook. */
      webhook_id: string
    }
    /** The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. */
    status: "active" | "degraded" | "inactive"
    /** When the webhook was created. */
    created_at: string
  }
}

/** Success */
export type DeleteV2WebhooksByWebhookIdResponse = Record<string, unknown>

export type GetV2SelfResponse =
  | {
      active: false
    }
  | {
      /** Whether the token is currently active and usable. */
      active: true
      /** A space-separated list of scopes associated with this token */
      scope: string
      /** Identifies the client the token was issued to. For app access tokens this is the app ID. Workspace access tokens have no OAuth client, so this is the workspace access token ID. */
      client_id: string
      /** The type of token, always Bearer. */
      token_type: "Bearer"
      /** The time at which this token will expire, if set, as a number of seconds since January 1 1970 UTC. Attio access tokens do not currently expire, so this is always null. */
      exp: number | null
      /** The time at which this token was issued, as a number of seconds since January 1 1970 UTC. */
      iat: number
      /** The subject of the token. For a workspace-level token, this is the workspace ID. For a user-level token, this is an opaque value that identifies the workspace member. Do not parse this value. To get the workspace ID, use workspace_id. To get the workspace member ID, use authorized_by_workspace_member_id. */
      sub: string
      /** The intended audience for this token, for Bearer tokens this is the same as the client_id. */
      aud: string
      /** The issuer of the token. Always attio.com */
      iss: "attio.com"
      /** Whether the token acts for the whole workspace or for a single workspace member. */
      token_level: "workspace" | "user"
      /** The ID of the workspace member who authorized this token initially. Almost every token has one, but it is omitted for the app access tokens that Attio created itself rather than on a member's behalf. */
      authorized_by_workspace_member_id?: string
      /** The ID of the workspace the token is scoped to. */
      workspace_id: string
      /** The name of the workspace the token is scoped to. */
      workspace_name: string
      /** The slug of the workspace the token is scoped to. */
      workspace_slug: string
      /** The logo URL of the workspace the token is scoped to. */
      workspace_logo_url: string | null
    }

/** What each operation answers, by its id. */
export interface Responses {
  getV2Objects: GetV2ObjectsResponse
  postV2Objects: PostV2ObjectsResponse
  getV2ObjectsByObject: GetV2ObjectsByObjectResponse
  patchV2ObjectsByObject: PatchV2ObjectsByObjectResponse
  deleteV2ObjectsByObject: DeleteV2ObjectsByObjectResponse
  getV2ObjectsByObjectViews: GetV2ObjectsByObjectViewsResponse
  postV2ObjectsByObjectViews: PostV2ObjectsByObjectViewsResponse
  getV2ObjectsByObjectViewsByViewId: GetV2ObjectsByObjectViewsByViewIdResponse
  patchV2ObjectsByObjectViewsByViewId: PatchV2ObjectsByObjectViewsByViewIdResponse
  deleteV2ObjectsByObjectViewsByViewId: DeleteV2ObjectsByObjectViewsByViewIdResponse
  getV2Activities: GetV2ActivitiesResponse
  postV2Activities: PostV2ActivitiesResponse
  getV2ActivitiesByActivity: GetV2ActivitiesByActivityResponse
  patchV2ActivitiesByActivity: PatchV2ActivitiesByActivityResponse
  deleteV2ActivitiesByActivity: DeleteV2ActivitiesByActivityResponse
  getV2ByTargetByIdentifierAttributes: GetV2ByTargetByIdentifierAttributesResponse
  postV2ByTargetByIdentifierAttributes: PostV2ByTargetByIdentifierAttributesResponse
  getV2ByTargetByIdentifierAttributesByAttribute: GetV2ByTargetByIdentifierAttributesByAttributeResponse
  patchV2ByTargetByIdentifierAttributesByAttribute: PatchV2ByTargetByIdentifierAttributesByAttributeResponse
  getV2ByTargetByIdentifierAttributesByAttributeOptions: GetV2ByTargetByIdentifierAttributesByAttributeOptionsResponse
  postV2ByTargetByIdentifierAttributesByAttributeOptions: PostV2ByTargetByIdentifierAttributesByAttributeOptionsResponse
  patchV2ByTargetByIdentifierAttributesByAttributeOptionsByOption: PatchV2ByTargetByIdentifierAttributesByAttributeOptionsByOptionResponse
  getV2ByTargetByIdentifierAttributesByAttributeStatuses: GetV2ByTargetByIdentifierAttributesByAttributeStatusesResponse
  postV2ByTargetByIdentifierAttributesByAttributeStatuses: PostV2ByTargetByIdentifierAttributesByAttributeStatusesResponse
  patchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatus: PatchV2ByTargetByIdentifierAttributesByAttributeStatusesByStatusResponse
  postV2ObjectsByObjectRecordsQuery: PostV2ObjectsByObjectRecordsQueryResponse
  postV2ObjectsByObjectRecords: PostV2ObjectsByObjectRecordsResponse
  putV2ObjectsByObjectRecords: PutV2ObjectsByObjectRecordsResponse
  getV2ObjectsByObjectRecordsByRecordId: GetV2ObjectsByObjectRecordsByRecordIdResponse
  putV2ObjectsByObjectRecordsByRecordId: PutV2ObjectsByObjectRecordsByRecordIdResponse
  patchV2ObjectsByObjectRecordsByRecordId: PatchV2ObjectsByObjectRecordsByRecordIdResponse
  deleteV2ObjectsByObjectRecordsByRecordId: DeleteV2ObjectsByObjectRecordsByRecordIdResponse
  postV2ObjectsByObjectRecordsMerge: PostV2ObjectsByObjectRecordsMergeResponse
  getV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues: GetV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse
  putV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValues: PutV2ObjectsByObjectRecordsByRecordIdAttributesByAttributeValuesResponse
  getV2ObjectsByObjectRecordsByRecordIdEntries: GetV2ObjectsByObjectRecordsByRecordIdEntriesResponse
  postV2ObjectsRecordsSearch: PostV2ObjectsRecordsSearchResponse
  postV2ActivitiesByActivityRecordsQuery: PostV2ActivitiesByActivityRecordsQueryResponse
  postV2ActivitiesByActivityRecords: PostV2ActivitiesByActivityRecordsResponse
  putV2ActivitiesByActivityRecords: PutV2ActivitiesByActivityRecordsResponse
  getV2ActivitiesByActivityRecordsByRecordId: GetV2ActivitiesByActivityRecordsByRecordIdResponse
  putV2ActivitiesByActivityRecordsByRecordId: PutV2ActivitiesByActivityRecordsByRecordIdResponse
  patchV2ActivitiesByActivityRecordsByRecordId: PatchV2ActivitiesByActivityRecordsByRecordIdResponse
  deleteV2ActivitiesByActivityRecordsByRecordId: DeleteV2ActivitiesByActivityRecordsByRecordIdResponse
  postV2Sql: PostV2SqlResponse
  getV2Lists: GetV2ListsResponse
  postV2Lists: PostV2ListsResponse
  getV2ListsByList: GetV2ListsByListResponse
  patchV2ListsByList: PatchV2ListsByListResponse
  getV2ListsByListViews: GetV2ListsByListViewsResponse
  postV2ListsByListViews: PostV2ListsByListViewsResponse
  getV2ListsByListViewsByViewId: GetV2ListsByListViewsByViewIdResponse
  patchV2ListsByListViewsByViewId: PatchV2ListsByListViewsByViewIdResponse
  deleteV2ListsByListViewsByViewId: DeleteV2ListsByListViewsByViewIdResponse
  postV2ListsByListEntriesQuery: PostV2ListsByListEntriesQueryResponse
  postV2ListsByListEntries: PostV2ListsByListEntriesResponse
  putV2ListsByListEntries: PutV2ListsByListEntriesResponse
  getV2ListsByListEntriesByEntryId: GetV2ListsByListEntriesByEntryIdResponse
  putV2ListsByListEntriesByEntryId: PutV2ListsByListEntriesByEntryIdResponse
  patchV2ListsByListEntriesByEntryId: PatchV2ListsByListEntriesByEntryIdResponse
  deleteV2ListsByListEntriesByEntryId: DeleteV2ListsByListEntriesByEntryIdResponse
  getV2ListsByListEntriesByEntryIdAttributesByAttributeValues: GetV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse
  putV2ListsByListEntriesByEntryIdAttributesByAttributeValues: PutV2ListsByListEntriesByEntryIdAttributesByAttributeValuesResponse
  getV2WorkspaceMembers: GetV2WorkspaceMembersResponse
  getV2WorkspaceMembersByWorkspaceMemberId: GetV2WorkspaceMembersByWorkspaceMemberIdResponse
  getV2Notes: GetV2NotesResponse
  postV2Notes: PostV2NotesResponse
  getV2NotesByNoteId: GetV2NotesByNoteIdResponse
  patchV2NotesByNoteId: PatchV2NotesByNoteIdResponse
  deleteV2NotesByNoteId: DeleteV2NotesByNoteIdResponse
  getV2Tasks: GetV2TasksResponse
  postV2Tasks: PostV2TasksResponse
  getV2TasksByTaskId: GetV2TasksByTaskIdResponse
  patchV2TasksByTaskId: PatchV2TasksByTaskIdResponse
  deleteV2TasksByTaskId: DeleteV2TasksByTaskIdResponse
  getV2Threads: GetV2ThreadsResponse
  getV2ThreadsByThreadId: GetV2ThreadsByThreadIdResponse
  postV2Comments: PostV2CommentsResponse
  getV2CommentsByCommentId: GetV2CommentsByCommentIdResponse
  deleteV2CommentsByCommentId: DeleteV2CommentsByCommentIdResponse
  getV2Emails: GetV2EmailsResponse
  postV2SequencesUnsubscribedEmails: PostV2SequencesUnsubscribedEmailsResponse
  getV2WorkspaceBlocklistAddresses: GetV2WorkspaceBlocklistAddressesResponse
  putV2WorkspaceBlocklistAddresses: PutV2WorkspaceBlocklistAddressesResponse
  deleteV2WorkspaceBlocklistAddressesByAddress: DeleteV2WorkspaceBlocklistAddressesByAddressResponse
  getV2Meetings: GetV2MeetingsResponse
  postV2Meetings: PostV2MeetingsResponse
  getV2MeetingsByMeetingId: GetV2MeetingsByMeetingIdResponse
  putV2MeetingsByMeetingId: PutV2MeetingsByMeetingIdResponse
  patchV2MeetingsByMeetingId: PatchV2MeetingsByMeetingIdResponse
  deleteV2MeetingsByMeetingId: DeleteV2MeetingsByMeetingIdResponse
  getV2MeetingsByMeetingIdCallRecordings: GetV2MeetingsByMeetingIdCallRecordingsResponse
  postV2MeetingsByMeetingIdCallRecordings: PostV2MeetingsByMeetingIdCallRecordingsResponse
  getV2MeetingsByMeetingIdCallRecordingsByCallRecordingId: GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse
  deleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingId: DeleteV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdResponse
  getV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscript: GetV2MeetingsByMeetingIdCallRecordingsByCallRecordingIdTranscriptResponse
  getV2Files: GetV2FilesResponse
  postV2Files: PostV2FilesResponse
  postV2FilesUpload: PostV2FilesUploadResponse
  getV2FilesByFileId: GetV2FilesByFileIdResponse
  deleteV2FilesByFileId: DeleteV2FilesByFileIdResponse
  getV2FilesByFileIdDownload: unknown
  getV2Webhooks: GetV2WebhooksResponse
  postV2Webhooks: PostV2WebhooksResponse
  getV2WebhooksByWebhookId: GetV2WebhooksByWebhookIdResponse
  patchV2WebhooksByWebhookId: PatchV2WebhooksByWebhookIdResponse
  deleteV2WebhooksByWebhookId: DeleteV2WebhooksByWebhookIdResponse
  getV2Self: GetV2SelfResponse
}
