import { createContext, useContext } from "react";

// Initialize Menu context object.
export const WPContext = createContext({});

export function useWordPressContext() {
  return useContext(WPContext);
}

export default function WordPressProvider(props: any) {
  const { value, children } = props;

  return <WPContext.Provider value={value}>{children}</WPContext.Provider>;
}
