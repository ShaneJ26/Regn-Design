import { cookies } from "next/headers"

import { source } from "@/lib/source"
import { DocsSidebar } from "@/components/docs-sidebar"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // SidebarProvider writes `sidebar_state` on toggle. Reading it here means the
  // server renders the nav in the state the user left it, with no flash.
  const cookie = (await cookies()).get("sidebar_state")?.value

  return (
    <div className="container-wrapper flex flex-1 flex-col px-2">
      <SidebarProvider
        defaultOpen={cookie ? cookie === "true" : true}
        className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
          } as React.CSSProperties
        }
      >
        <DocsSidebar tree={source.pageTree} />
        <div className="h-full w-full">{children}</div>
      </SidebarProvider>
    </div>
  )
}
