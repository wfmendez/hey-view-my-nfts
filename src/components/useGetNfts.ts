import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ALCHEMY_API_URL = 'https://eth-mainnet.g.alchemy.com/v2/GJC_m3a4XakXrDBi4kVyr';

export const useGetNfts = (walletAddress: string | undefined) => {
  return useQuery({
    queryKey: ['nfts', walletAddress],
    queryFn: async () => {
      if (!walletAddress) {
        return [];
      }
      const response = await axios.get(`${ALCHEMY_API_URL}/getNFTs`, {
        params: {
          owner: walletAddress,
        },
      });
      return response.data.ownedNfts;
    },
    enabled: !!walletAddress,
  });
};