"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ContextType = {
  showSplash: boolean;
  dispatch: (value: boolean) => void;
};

const ContextProviderContext = createContext<ContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true);

  const dispatch = (value: boolean) => setShowSplash(value);

  return (
    <ContextProviderContext.Provider
      value={{
        showSplash,
        dispatch,
      }}
    >
      {children}
    </ContextProviderContext.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(ContextProviderContext);
  if (!context) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }
  return context;
};
