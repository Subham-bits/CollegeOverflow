"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/courses",
      label: "Courses",
      active: pathname === "/dashboard/courses" || pathname.startsWith("/dashboard/courses/"),
    },
    {
      href: "/dashboard/papers",
      label: "Question Papers",
      active: pathname === "/dashboard/papers" || pathname.startsWith("/dashboard/papers/"),
    },
    {
      href: "/dashboard/answers",
      label: "My Answers",
      active: pathname === "/dashboard/answers",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

