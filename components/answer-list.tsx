"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThumbsUp } from "lucide-react"

interface AnswerListProps {
  questionId: string
}

export function AnswerList({ questionId }: AnswerListProps) {
  // In a real app, you would fetch the answers from the database
  const [answers, setAnswers] = useState([
    {
      id: "a1",
      text: "A compiler translates the entire source code into machine code before execution, while an interpreter executes the source code line by line. Compilers generally produce faster programs but have a longer initial compilation time. Interpreters are usually slower but provide better debugging capabilities.",
      author: {
        name: "John Doe",
        avatar: null,
      },
      createdAt: "2023-10-20T10:30:00Z",
      upvotes: 5,
      upvoted: false,
    },
    {
      id: "a2",
      text: "Compiler: Translates entire program at once, creates executable file, examples include C, C++, Rust.\n\nInterpreter: Executes code line by line, no separate executable, examples include Python, JavaScript, Ruby.",
      author: {
        name: "Jane Smith",
        avatar: null,
      },
      createdAt: "2023-10-21T14:15:00Z",
      upvotes: 3,
      upvoted: true,
    },
  ])

  const handleUpvote = (answerId: string) => {
    setAnswers(
      answers.map((answer) => {
        if (answer.id === answerId) {
          return {
            ...answer,
            upvotes: answer.upvoted ? answer.upvotes - 1 : answer.upvotes + 1,
            upvoted: !answer.upvoted,
          }
        }
        return answer
      }),
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-4">
      {answers.map((answer) => (
        <div key={answer.id} className="space-y-2">
          <div className="flex items-start gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={answer.author.avatar || ""} alt={answer.author.name} />
              <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{answer.author.name}</div>
                <div className="text-xs text-muted-foreground">{formatDate(answer.createdAt)}</div>
              </div>
              <div className="mt-1 text-sm whitespace-pre-line">{answer.text}</div>
              <div className="mt-2 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center gap-1 text-xs ${
                    answer.upvoted ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => handleUpvote(answer.id)}
                >
                  <ThumbsUp className="h-3 w-3" />
                  <span>{answer.upvotes}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

