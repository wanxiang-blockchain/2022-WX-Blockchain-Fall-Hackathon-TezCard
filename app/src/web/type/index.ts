import { TezosToolkit, WalletProvider } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
export type StoreType = {
  tezos?: TezosToolkit;
  wallet?: BeaconWallet;
  address?: string;
  balance?: number;
  isConnected?: boolean;
  currentDao?: any;
  ipfsNode?: any;
};
export type ProfileInfoType = {
  name: string;
  desc: string;
  email: string;
  github: string;
  interest: string[];
  level1: string;
  level2: string;
  level3: string;
  skill1: string;
  skill2: string;
  skill3: string;
  twitter: string;
  website: string;
};
