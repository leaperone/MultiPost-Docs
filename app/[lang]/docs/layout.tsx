import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  return (
    <DocsLayout
      {...baseOptions(lang)}
      tree={source.pageTree[lang]}
      nav={{ ...baseOptions(lang).nav, mode: "auto" }}
    >
      {children}
    </DocsLayout>
  );
}
