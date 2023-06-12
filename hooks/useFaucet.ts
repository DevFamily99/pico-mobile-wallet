import {useRPC} from '../context/RPCContext';
import {useUserInfo} from '../context/UserInfoContext';

export default function useTransfer() {
  const {name, updateBalance} = useUserInfo();
  const {api} = useRPC();

// Calls the faucet so the user can receive 500 pico 

  const callFaucet = async ( ) => {
    if (!name || name=='') throw new Error('Cannot call the faucet for another account!');   //Throws and error is the user tries to call the faucet for another account
    console.log(`Calling the faucet for ${name}...'`);
    const result = await api.transact({
      actions: [{
        account: 'faucet',               //Account name of who launched the contract
        name: 'reverse',                  //Name of the contract called
        authorization: [{
          actor: name,
          permission: 'active',
        }],
        data: {
          from: name,                    //Maybe needs to be changed not sure if this is meant as data received or data sent.
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
    callFaucet,
  };
}
