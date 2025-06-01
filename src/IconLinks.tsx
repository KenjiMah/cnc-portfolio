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
    <a href={link}>
      <i className={` text-gray-200 fa-2xl ${icon}`}></i>
    </a>
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
