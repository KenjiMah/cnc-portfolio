import { Card } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import type { ReactNode } from "react";
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
  return (
    <Card
      className="bg-gray-400 fixed p-3 z-30 bottom-2 border-gray-400 text-zinc-100"
      style={{ justifySelf: "anchor-center" }}
    >
      <div className="flex gap-2 ">
        <IconWrapper
          pathTo={`/${ROUTES.PROJECTPAGE}`}
          iconClassName={`fa-regular fa-object-group`}
        >
          Projects
        </IconWrapper>
        <IconWrapper
          pathTo={`/${ROUTES.ABOUTMEPAGE}`}
          iconClassName={`fa-solid fa-info-circle pt-1`}
        >
          About
        </IconWrapper>
        <IconWrapper
          pathTo={`/${ROUTES.STORE}`}
          iconClassName={`fa-solid fa-shopping-cart pt-1`}
        >
          Store
        </IconWrapper>
      </div>
    </Card>
  );
}
