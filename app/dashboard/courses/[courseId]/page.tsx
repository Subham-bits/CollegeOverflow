import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { notFound } from "next/navigation"

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  // In a real app, you would fetch the course data from the database
  const courses = {
    "1": {
      id: "1",
      name: "Computer Science 101",
      code: "CS101",
      description: "Introduction to Computer Science",
      year: "2023-2024",
    },
    "2": {
      id: "2",
      name: "Data Structures",
      code: "CS201",
      description: "Advanced data structures and algorithms",
      year: "2023-2024",
    },
    "3": {
      id: "3",
      name: "Database Systems",
      code: "CS301",
      description: "Introduction to database design and SQL",
      year: "2023-2024",
    },
    "4": {
      id: "4",
      name: "Web Development",
      code: "CS401",
      description: "Building modern web applications",
      year: "2023-2024",
    },
  }

  const course = courses[params.courseId as keyof typeof courses]

  if (!course) {
    notFound()
  }

  // In a real app, you would fetch the question papers from the database
  const questionPapers = [
    {
      id: "1",
      title: "Midterm Exam 2023",
      type: "midterm",
      date: "October 15, 2023",
      questions: 10,
    },
    {
      id: "2",
      title: "Final Exam 2023",
      type: "final",
      date: "December 20, 2023",
      questions: 15,
    },
    {
      id: "3",
      title: "Quiz 1",
      type: "quiz",
      date: "September 10, 2023",
      questions: 5,
    },
    {
      id: "4",
      title: "Quiz 2",
      type: "quiz",
      date: "November 5, 2023",
      questions: 5,
    },
    {
      id: "5",
      title: "Assignment 1",
      type: "assignment",
      date: "September 25, 2023",
      questions: 3,
    },
    {
      id: "6",
      title: "Assignment 2",
      type: "assignment",
      date: "November 15, 2023",
      questions: 4,
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{course.name}</h1>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <div>{course.code}</div>
        <div className="mx-2">•</div>
        <div>{course.year}</div>
      </div>
      <p className="text-muted-foreground">{course.description}</p>

      <Tabs defaultValue="all" className="mt-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="midterm">Midterm</TabsTrigger>
          <TabsTrigger value="final">Final</TabsTrigger>
          <TabsTrigger value="quiz">Quizzes</TabsTrigger>
          <TabsTrigger value="assignment">Assignments</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {questionPapers.map((paper) => (
              <Card key={paper.id}>
                <CardHeader>
                  <CardTitle>{paper.title}</CardTitle>
                  <CardDescription>
                    {paper.date} • {paper.questions} questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/papers/${paper.id}`}>View Paper</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {["midterm", "final", "quiz", "assignment"].map((type) => (
          <TabsContent key={type} value={type} className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {questionPapers
                .filter((paper) => paper.type === type)
                .map((paper) => (
                  <Card key={paper.id}>
                    <CardHeader>
                      <CardTitle>{paper.title}</CardTitle>
                      <CardDescription>
                        {paper.date} • {paper.questions} questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href={`/dashboard/papers/${paper.id}`}>View Paper</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

