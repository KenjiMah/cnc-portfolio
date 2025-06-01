import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ReactNode } from "react";

export function TooltipLinkWrapper({
  tooltip,
  link,
  target = "_blank",
  children,
}: {
  tooltip?: string;
  link: string;
  target?: string;
  children: ReactNode;
}) {
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <a href={link} target={target}>
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
