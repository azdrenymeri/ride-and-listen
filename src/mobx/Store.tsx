import React from 'react';
import {useLocalStore, useObserver} from 'mobx-react';
import storeObject from './storeObj';

const StoreContext = React.createContext<any | undefined>(undefined);

const StoreProvider = ({children}: any) => {  
  const store = useLocalStore(() => (storeObject()))
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export const useApplicationStore = () => React.useContext(StoreContext);

export default StoreProvider;