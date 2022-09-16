import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { memo } from 'react';
import Button from '@mui/material/Button';

import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';
import { walletButtonStyle } from './style';
import { getSmallAddress } from '@utils/returnSmallAddress';

const ConnectWallet = props => {
  const [obj, setObj] = useAtom(store);
  const { isConnected, address } = obj;
  const { onConnect } = props;
  return (
    <div>
      <Button
        onClick={onConnect}
        className="w-146 h-36"
        variant="contained"
        style={walletButtonStyle}
      >
        {address && isConnected ? getSmallAddress(address) : 'Collect Wallet'}
      </Button>
    </div>
  );
};
export default memo(ConnectWallet);
