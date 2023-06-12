import {useRPC} from '../context/RPCContext';

export default function useGetAccount() {
  const {rpc} = useRPC();
  const getAccount = async (name: string) => {
    if (!name || name=='') throw new Error('quantity cannot be 0');
    const result = await rpc.get_account(name);
    return result;
  };

  return {
    getAccount,
  };
}
