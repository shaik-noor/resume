"use client"

import React from "react"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ExternalLink, Link, Link2, PanelLeftIcon } from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"
import { UserIcon } from "lucide-react"

export default function HeaderBar() {
  const { state, isMobile, open, openMobile } = useSidebar()

  // Show name when the sidebar is collapsed (desktop) or closed (mobile).
  const showName = (!isMobile && state === "collapsed") || (isMobile && !openMobile)

  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-3">
        {/* Left cluster: sidebar toggle and optional identity */}
        <div className="flex items-center gap-3 min-w-0">
          <SidebarTrigger aria-label="Toggle Sidebar">
            <Button variant="ghost" size="icon">
              <PanelLeftIcon className="size-4" />
            </Button>
          </SidebarTrigger>
          <Separator orientation="vertical" className="h-6" />
          {showName && (
            <div className="flex items-center gap-2 truncate">
              <div className="grid size-6 place-items-center rounded-md bg-primary text-primary-foreground">
                <UserIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold">Shaik Noor Mohammad</span>
                <span className="truncate text-xs text-muted-foreground">Software Engineer</span>
              </div>
            </div>
          )}
        </div>

        {/* Right cluster: website link and theme toggle */}
        <div className="flex items-center gap-2">
          
          <Button asChild variant="outline" size="sm">
           
            <a href="https://noruj.com" target="_blank" rel="noopener noreferrer">my website <ExternalLink /></a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}