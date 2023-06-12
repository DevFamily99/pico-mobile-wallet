import {useRPC} from '../context/RPCContext';
import {useUserInfo} from '../context/UserInfoContext';

export default function useTransfer() {
  const {name, updateBalance} = useUserInfo();
  const {api} = useRPC();

  const sendTransfer = async (quantity: string, receiver: string, memo: string) => {
    if (!name || name=='' || !receiver || receiver=='' ||
    parseFloat(quantity)<=0 || !api) throw new Error('quantity cannot be 0');
    console.log(`transfering ${quantity} to ${receiver}...'`);
    const result = await api.transact({
      actions: [{
        account: 'pico.token',
        name: 'transfer',
        authorization: [{
          actor: name,
          permission: 'active',
        }],
        data: {
          from: name,
          to: receiver,
          quantity: `${quantity} PICO`,
          memo,
        },
      }],
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    updateBalance();
    return result;
  };

  return {
    sendTransfer,
  };
}
