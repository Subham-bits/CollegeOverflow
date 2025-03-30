"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { AnswerList } from "@/components/answer-list"
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react"

interface QuestionItemProps {
  question: {
    id: string
    number: number
    text: string
    marks: number
    answerCount: number
  }
}

export function QuestionItem({ question }: QuestionItemProps) {
  const [showAnswers, setShowAnswers] = useState(false)
  const [showAnswerForm, setShowAnswerForm] = useState(false)
  const [answerText, setAnswerText] = useState("")

  const handleSubmitAnswer = () => {
    // In a real app, you would submit the answer to the server
    console.log("Submitting answer:", answerText)
    setAnswerText("")
    setShowAnswerForm(false)
    // Refresh the answers
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Question {question.number}</span>
          <span className="text-sm font-normal text-muted-foreground">{question.marks} marks</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base">{question.text}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-muted-foreground"
            onClick={() => setShowAnswers(!showAnswers)}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{question.answerCount} Answers</span>
            {showAnswers ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          {!showAnswerForm && (
            <Button variant="outline" size="sm" onClick={() => setShowAnswerForm(true)}>
              Add Answer
            </Button>
          )}
        </div>

        {showAnswers && question.answerCount > 0 && (
          <div className="mt-4 w-full">
            <Separator className="my-2" />
            <AnswerList questionId={question.id} />
          </div>
        )}

        {showAnswerForm && (
          <div className="mt-4 w-full">
            <Separator className="my-2" />
            <div className="space-y-4">
              <Textarea
                placeholder="Write your answer here..."
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAnswerForm(false)
                    setAnswerText("")
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleSubmitAnswer} disabled={!answerText.trim()}>
                  Submit Answer
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

