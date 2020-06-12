export interface TokenInfo {
  chainId: number;
  address: string;
  name?: string;
  decimals?: number;
  symbol?: string;
  logoURI?: string;
  tagIds?: string[];
}

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export interface Tags {
  [tagId: string]: {
    name: string;
    description: string;
  };
}

export interface TokenList {
  name: string;
  timestamp: number;
  version: Version;
  tokens: TokenInfo[];
  keywords?: string[];
  tags?: Tags;
}
