import React from "react";

type BlogLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <div className="mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="space-y-8 text-white text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
