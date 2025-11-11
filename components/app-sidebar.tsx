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
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
  RouteIcon,
  BookOpenIcon,
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
  { title: "Journey", href: "/journey", icon: RouteIcon },
  { title: "Blog", href: "/blog", icon: BookOpenIcon },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="size-6 rounded-md bg-primary text-primary-foreground grid place-items-center font-semibold">
            SN
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Shaik Noor Mohammad</span>
            <span className="text-xs text-muted-foreground">Software Engineer</span>
          </div>
        </div>
        <Separator className="mx-2" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link href={item.href} className="flex items-center gap-2">
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

      <SidebarFooter>
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          <p className="mb-1">PowerCenter • IICS • Troubleshooting</p>
          <Badge variant="secondary" className="text-[10px]">Open to opportunities</Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar