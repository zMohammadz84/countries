export type CountryType = {
  name: string;
  nativeName: string;
  tld: string[];
  capital: string[];
  region: string;
  subregion: string;
  languages: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  borders: string[];
  topLevelDomain: string[];
};
