"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import {
  UserIcon,
  FileTextIcon,
  BriefcaseIcon,
  WrenchIcon,
  AwardIcon,
  LayersIcon,
  GraduationCapIcon,
  MailIcon,
} from "lucide-react"

type NavItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { title: "About", href: "/about", icon: UserIcon },
  { title: "Resume", href: "/resume", icon: FileTextIcon },
  { title: "Work Experience", href: "/work-experience", icon: BriefcaseIcon },
  { title: "Skills", href: "/skills", icon: WrenchIcon },
  { title: "Certificates", href: "/certificates", icon: AwardIcon },
  { title: "Projects", href: "/projects", icon: LayersIcon },
  { title: "Educations", href: "/educations", icon: GraduationCapIcon },
  { title: "Contact", href: "/contact", icon: MailIcon },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarRail />
      <SidebarHeader className="border-b">
        {state === "collapsed" ? (
          // Compact brand in collapsed mode to avoid a visually empty header
          <div className="grid h-14 place-items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/about" aria-label="About" className="grid place-items-center">
                  <Avatar className="size-7 ring-1 ring-sidebar-border">
                    <AvatarFallback className="bg-primary text-primary-foreground text-[10px] font-bold">SNM</AvatarFallback>
                  </Avatar>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" align="center">
                Shaik Noor Mohammad — Software Engineer
              </TooltipContent>
            </Tooltip>
          </div>
        ) : (
          <div className="flex h-14 items-center gap-3 px-3">
            <div className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <UserIcon className="size-5" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold leading-tight tracking-tight">Shaik Noor Mohammad</span>
              <span className="truncate text-xs text-muted-foreground">Software Engineer</span>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {state !== "collapsed" && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex h-9 items-center gap-2 ${isActive ? "font-medium" : ""}`}
                      >
                        <Icon className="size-4" />
                        <span className="truncate">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />
      {state !== "collapsed" && (
        <SidebarFooter>
          <div className="px-3 py-2 text-xs text-muted-foreground">
            <p className="mb-1">PowerCenter • IDMC • Troubleshooting</p>
            <Badge variant="secondary" className="text-[10px]">Open to opportunities</Badge>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  )
}

export default AppSidebar