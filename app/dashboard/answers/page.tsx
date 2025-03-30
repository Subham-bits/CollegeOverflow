import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AnswersPage() {
  // In a real app, you would fetch the user's answers from the database
  const answers = [
    {
      id: "a1",
      text: "A compiler translates the entire source code into machine code before execution, while an interpreter executes the source code line by line. Compilers generally produce faster programs but have a longer initial compilation time. Interpreters are usually slower but provide better debugging capabilities.",
      questionId: "q1",
      questionText: "Explain the difference between a compiler and an interpreter.",
      courseCode: "CS101",
      courseName: "Computer Science 101",
      paperTitle: "Midterm Exam 2023",
      createdAt: "2023-10-20T10:30:00Z",
      upvotes: 5,
    },
    {
      id: "a3",
      text: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.\n\n```\nprocedure bubbleSort(A : list of sortable items)\n    n := length(A)\n    repeat\n        swapped := false\n        for i := 1 to n-1 inclusive do\n            if A[i-1] > A[i] then\n                swap(A[i-1], A[i])\n                swapped := true\n            end if\n        end for\n        n := n - 1\n    until not swapped\nend procedure\n```",
      questionId: "q3",
      questionText: "Write a pseudocode for bubble sort algorithm.",
      courseCode: "CS101",
      courseName: "Computer Science 101",
      paperTitle: "Midterm Exam 2023",
      createdAt: "2023-10-22T09:45:00Z",
      upvotes: 8,
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Answers</h1>
      </div>

      <Tabs defaultValue="all" className="mt-4">
        <TabsList>
          <TabsTrigger value="all">All Answers</TabsTrigger>
          <TabsTrigger value="upvoted">Most Upvoted</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="space-y-4">
            {answers.map((answer) => (
              <Card key={answer.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{answer.questionText}</CardTitle>
                  <CardDescription>
                    {answer.courseCode} • {answer.courseName} • {answer.paperTitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm whitespace-pre-line">
                      {answer.text.length > 200 ? `${answer.text.substring(0, 200)}...` : answer.text}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {new Date(answer.createdAt).toLocaleDateString()} • {answer.upvotes} upvotes
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/dashboard/papers/${answer.questionId.replace("q", "")}`}>View Question</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upvoted" className="mt-4">
          <div className="space-y-4">
            {answers
              .sort((a, b) => b.upvotes - a.upvotes)
              .map((answer) => (
                <Card key={answer.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{answer.questionText}</CardTitle>
                    <CardDescription>
                      {answer.courseCode} • {answer.courseName} • {answer.paperTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm whitespace-pre-line">
                        {answer.text.length > 200 ? `${answer.text.substring(0, 200)}...` : answer.text}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {new Date(answer.createdAt).toLocaleDateString()} • {answer.upvotes} upvotes
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/dashboard/papers/${answer.questionId.replace("q", "")}`}>View Question</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <div className="space-y-4">
            {answers
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((answer) => (
                <Card key={answer.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{answer.questionText}</CardTitle>
                    <CardDescription>
                      {answer.courseCode} • {answer.courseName} • {answer.paperTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm whitespace-pre-line">
                        {answer.text.length > 200 ? `${answer.text.substring(0, 200)}...` : answer.text}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {new Date(answer.createdAt).toLocaleDateString()} • {answer.upvotes} upvotes
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/dashboard/papers/${answer.questionId.replace("q", "")}`}>View Question</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

