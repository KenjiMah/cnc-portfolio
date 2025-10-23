import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface MenubarVisibilityContextType {
  isVisible: boolean;
  hideMenubar: () => void;
  showMenubar: () => void;
  toggleMenubar: (shouldShow?: boolean) => void;
}

const MenubarVisibilityContext = createContext<
  MenubarVisibilityContextType | undefined
>(undefined);

export function MenubarVisibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const hideMenubar = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showMenubar = useCallback(() => {
    setIsVisible(true);
  }, []);

  const toggleMenubar = useCallback(
    (shouldShow?: boolean) => {
      const newVisibility = shouldShow !== undefined ? shouldShow : !isVisible;
      setIsVisible(newVisibility);
    },
    [isVisible]
  );

  return (
    <MenubarVisibilityContext.Provider
      value={{
        isVisible,
        hideMenubar,
        showMenubar,
        toggleMenubar,
      }}
    >
      {children}
    </MenubarVisibilityContext.Provider>
  );
}

export function useMenubarVisibilityContext() {
  const context = useContext(MenubarVisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useMenubarVisibilityContext must be used within a MenubarVisibilityProvider"
    );
  }
  return context;
}
