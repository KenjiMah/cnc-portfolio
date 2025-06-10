import dayjs from "dayjs";

interface BlogLayoutProps {
  title: string;
  children: React.ReactNode;
  lastUpdatedUnix?: number; // optional in case it's not always passed
}

export default function BlogLayout({
  title,
  children,
  lastUpdatedUnix,
}: BlogLayoutProps) {
  const lastUpdatedDate = lastUpdatedUnix
    ? dayjs(lastUpdatedUnix * 1000).format("MMMM D, YYYY")
    : null;

  return (
    <div className="mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      {lastUpdatedDate && (
        <p className="text-sm text-center text-gray-400 mb-6">
          Last updated: {lastUpdatedDate}
        </p>
      )}
      <div className="space-y-8 text-white text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
