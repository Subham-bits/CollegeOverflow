"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function SidebarNav() {
  const pathname = usePathname()
  const [openYear, setOpenYear] = useState<string | null>("2023-2024")

  const years = ["2023-2024", "2022-2023", "2021-2022", "2020-2021"]

  const courses = {
    "2023-2024": [
      { id: "1", name: "Computer Science 101", code: "CS101" },
      { id: "2", name: "Data Structures", code: "CS201" },
      { id: "3", name: "Database Systems", code: "CS301" },
      { id: "4", name: "Web Development", code: "CS401" },
    ],
    "2022-2023": [
      { id: "5", name: "Introduction to Programming", code: "CS100" },
      { id: "6", name: "Algorithms", code: "CS202" },
      { id: "7", name: "Operating Systems", code: "CS302" },
    ],
    "2021-2022": [
      { id: "8", name: "Computer Networks", code: "CS303" },
      { id: "9", name: "Software Engineering", code: "CS402" },
    ],
    "2020-2021": [
      { id: "10", name: "Artificial Intelligence", code: "CS403" },
      { id: "11", name: "Machine Learning", code: "CS404" },
    ],
  }

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-4 py-2">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Question Papers</h2>
          <div className="space-y-1">
            {years.map((year) => (
              <div key={year} className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-between font-normal"
                  onClick={() => setOpenYear(openYear === year ? null : year)}
                >
                  {year}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openYear === year ? "rotate-180" : "")} />
                </Button>
                {openYear === year && (
                  <div className="ml-4 space-y-1">
                    {courses[year as keyof typeof courses].map((course) => (
                      <Button
                        key={course.id}
                        variant="ghost"
                        asChild
                        className={cn(
                          "w-full justify-start font-normal",
                          pathname === `/dashboard/courses/${course.id}` ? "bg-muted font-medium" : "",
                        )}
                      >
                        <Link href={`/dashboard/courses/${course.id}`}>
                          {course.code} - {course.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Topics</h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start font-normal",
                pathname === "/dashboard/topics/midterm" ? "bg-muted font-medium" : "",
              )}
            >
              <Link href="/dashboard/topics/midterm">Midterm Exams</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start font-normal",
                pathname === "/dashboard/topics/final" ? "bg-muted font-medium" : "",
              )}
            >
              <Link href="/dashboard/topics/final">Final Exams</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start font-normal",
                pathname === "/dashboard/topics/quiz" ? "bg-muted font-medium" : "",
              )}
            >
              <Link href="/dashboard/topics/quiz">Quizzes</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start font-normal",
                pathname === "/dashboard/topics/assignment" ? "bg-muted font-medium" : "",
              )}
            >
              <Link href="/dashboard/topics/assignment">Assignments</Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

