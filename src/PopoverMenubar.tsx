import { Card } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import type { ReactNode } from "react";
import { useMenubarVisibilityContext } from "./context/MenubarVisibilityContext";
// import { useLocation } from "react-router-dom";

function IconWrapper({
  pathTo,
  iconClassName,
  children,
}: {
  pathTo: string;
  iconClassName: string;
  children: ReactNode;
}) {
  // const { pathname } = useLocation();
  return (
    <Link to={pathTo}>
      <Button>
        <i className={iconClassName} /> {children}
      </Button>
    </Link>
  );
}

export function PopoverMenubar() {
  const { isVisible } = useMenubarVisibilityContext();

  if (!isVisible) {
    return null;
  }

  return (
    <Card
      className="bg-gray-400 fixed p-2 z-30 bottom-2 left-2 right-2 border-gray-400 text-zinc-100 sm:left-auto sm:right-auto sm:px-3 sm:py-3"
      style={{ justifySelf: "anchor-center" }}
    >
      <div className="flex gap-1 sm:gap-2 justify-between sm:justify-center">
        <IconWrapper
          pathTo={`/${ROUTES.PROJECTPAGE}`}
          iconClassName={`fa-regular fa-object-group`}
        >
          <span className="hidden sm:inline">Projects</span>
          <span className="sm:hidden">Proj</span>
        </IconWrapper>
        <IconWrapper
          pathTo={`/${ROUTES.COMPUTERSCIENCE}`}
          iconClassName={`fa-solid fa-code pt-1`}
        >
          <span className="hidden sm:inline">CS Work</span>
          <span className="sm:hidden">CS</span>
        </IconWrapper>
        <IconWrapper
          pathTo={`/${ROUTES.ABOUTMEPAGE}`}
          iconClassName={`fa-solid fa-info-circle pt-1`}
        >
          <span className="hidden sm:inline">About</span>
          <span className="sm:hidden">Info</span>
        </IconWrapper>
        <IconWrapper
          pathTo={`/${ROUTES.STORE}`}
          iconClassName={`fa-solid fa-shopping-cart pt-1`}
        >
          <span className="hidden sm:inline">Store</span>
          <span className="sm:hidden">Shop</span>
        </IconWrapper>
      </div>
    </Card>
  );
}
