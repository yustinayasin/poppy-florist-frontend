"use client";

import React, { createContext, useState, ReactNode } from "react";

interface TotalPriceContextType {
  totalPrice: number;
  setTotalPrice: (value: number) => void;
}

const TotalPriceContext = createContext<TotalPriceContextType>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const TotalPriceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

export default TotalPriceContext;
