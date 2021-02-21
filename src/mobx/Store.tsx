import React from 'react';
import RootStore from '../mobx/stores/RootStore';

const StoreContext = React.createContext<any | undefined>(undefined);

const StoreProvider = ({children}: any) => {  
  return (
    <StoreContext.Provider value={new RootStore()}>{children}</StoreContext.Provider>
  )
}

export const useApplicationStore = () => React.useContext(StoreContext);

export default StoreProvider;