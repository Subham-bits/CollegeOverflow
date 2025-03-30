import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CourseCardProps {
  course: {
    id: string
    name: string
    code: string
    description: string
    year: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>
          {course.code} • {course.year}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/dashboard/courses/${course.id}`}>View Question Papers</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

