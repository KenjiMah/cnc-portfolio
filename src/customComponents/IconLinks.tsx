import { TooltipLinkWrapper } from "./TooltipWrapper";

export function IconLinks() {
  return (
    <div className="h-full w-full content-center text-right pr-6">
      <div className="gap-6 inline-flex">
        <TooltipLinkWrapper
          tooltip={"Email"}
          link="mailto:kenjimahcnc@gmail.com"
        >
          <i
            className={`fa-solid fa-envelope text-gray-300 hover:text-white transition-colors fa-2xl`}
          />
        </TooltipLinkWrapper>
        <TooltipLinkWrapper
          tooltip={"LinkedIn"}
          link="https://www.linkedin.com/in/kenji-mah-69b86a14a/"
        >
          <i
            className={`fa-brands fa-linkedin text-gray-300 hover:text-white transition-colors fa-2xl`}
          />
        </TooltipLinkWrapper>
        <TooltipLinkWrapper
          tooltip={"GitHub"}
          link="https://github.com/KenjiMah"
        >
          <i
            className={`fa-brands fa-github text-gray-300 hover:text-white transition-colors fa-2xl`}
          />
        </TooltipLinkWrapper>
      </div>
    </div>
  );
}
