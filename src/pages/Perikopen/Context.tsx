import React from 'react';

export interface IPerikopenData {
  id: number
};


const data : IPerikopenData = {
  id: 0,
};
const PerikopenContext = React.createContext(data);

export const PerikopenProvider = PerikopenContext.Provider;

export default PerikopenContext;
