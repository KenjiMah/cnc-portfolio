import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function HoverIcon({
  tooltip,
  link,
  icon,
}: {
  tooltip?: string;
  link: string;
  icon: string;
}) {
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <a href={link}>
          <i
            className={` text-gray-300 hover:text-white transition-colors fa-2xl ${icon}`}
          />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function IconLinks() {
  return (
    <div className="h-full w-full content-center text-right pr-6">
      <div className="gap-4 inline-flex">
        <HoverIcon
          tooltip={"Email"}
          link="mailto:kenjimahcnc@gmail.com"
          icon="fa-solid fa-envelope"
        />
        <HoverIcon
          tooltip={"LinkedIn"}
          link="https://www.linkedin.com/in/kenji-mah-69b86a14a/"
          icon="fa-brands fa-linkedin"
        />
        <HoverIcon
          tooltip={"GitHub"}
          link="https://github.com/KenjiMah"
          icon="fa-brands fa-github"
        />
      </div>
    </div>
  );
}
