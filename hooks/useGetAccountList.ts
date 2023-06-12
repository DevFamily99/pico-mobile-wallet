import {useRPC} from '../context/RPCContext';

export default function useGetAccountList() {
  const {rpc} = useRPC();
  const getAccountList = async (publicKey: string) => {
    const result = await rpc.history_get_key_accounts(publicKey);
    return result;
  };

  return {
    getAccountList,
  };
}
