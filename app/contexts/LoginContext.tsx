"use client";

// contexts / LoginContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface LoginContextType {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
