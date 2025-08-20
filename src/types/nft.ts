export interface NftAttribute {
  trait_type: string;
  value: string;
}

export interface Nft {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  title: string;
  description: string;
  tokenUri: {
    gateway: string;
    raw: string;
  };
  media: {
    gateway: string;
    raw: string;
  }[];
  metadata: {
    image: string;
    name: string;
    description: string;
    attributes: NftAttribute[];
  };
  owner: string;
}