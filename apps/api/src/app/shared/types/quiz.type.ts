export type Quiz = {
  questions: QuestionAnswer[];
}

type QuestionAnswer = {
  id: string;
  answer: string;
}