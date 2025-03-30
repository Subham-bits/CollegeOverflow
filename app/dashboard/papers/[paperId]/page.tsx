import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuestionItem } from "@/components/question-item"
import { notFound } from "next/navigation"

interface PaperPageProps {
  params: {
    paperId: string
  }
}

export default function PaperPage({ params }: PaperPageProps) {
  // In a real app, you would fetch the paper data from the database
  const papers = {
    "1": {
      id: "1",
      title: "Midterm Exam 2023",
      courseCode: "CS101",
      courseName: "Computer Science 101",
      date: "October 15, 2023",
      duration: "2 hours",
      totalMarks: 50,
      questions: [
        {
          id: "q1",
          number: 1,
          text: "Explain the difference between a compiler and an interpreter.",
          marks: 5,
          answerCount: 3,
        },
        {
          id: "q2",
          number: 2,
          text: "What is the time complexity of binary search? Explain with an example.",
          marks: 5,
          answerCount: 2,
        },
        {
          id: "q3",
          number: 3,
          text: "Write a pseudocode for bubble sort algorithm.",
          marks: 10,
          answerCount: 4,
        },
        {
          id: "q4",
          number: 4,
          text: "Explain the concept of recursion with a suitable example.",
          marks: 10,
          answerCount: 1,
        },
        {
          id: "q5",
          number: 5,
          text: "What is the difference between stack and queue data structures?",
          marks: 5,
          answerCount: 5,
        },
        {
          id: "q6",
          number: 6,
          text: "Explain the working of a hash table with an example.",
          marks: 10,
          answerCount: 0,
        },
        {
          id: "q7",
          number: 7,
          text: "What is the difference between procedural and object-oriented programming?",
          marks: 5,
          answerCount: 2,
        },
      ],
    },
  }

  const paper = papers[params.paperId as keyof typeof papers]

  if (!paper) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{paper.title}</h1>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <div>{paper.courseCode}</div>
        <div className="mx-2">•</div>
        <div>{paper.courseName}</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className="text-sm font-medium">Date</p>
              <p className="text-sm text-muted-foreground">{paper.date}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Duration</p>
              <p className="text-sm text-muted-foreground">{paper.duration}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Marks</p>
              <p className="text-sm text-muted-foreground">{paper.totalMarks}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Questions</p>
              <p className="text-sm text-muted-foreground">{paper.questions.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-4">Questions</h2>
        <div className="space-y-4">
          {paper.questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  )
}

