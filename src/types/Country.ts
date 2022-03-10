export type Flag = {
  svg: string;
  png: string;
};

export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Translation = {
  [key: string]: string;
};

export type RegionalBloc = {
  acronym: string;
  name: string;
};

export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flag;
  currencies: Currency[];
  languages: Language[];
  translations: Translation;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
};
