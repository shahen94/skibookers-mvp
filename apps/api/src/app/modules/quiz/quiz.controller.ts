import { Controller, Get } from "@nestjs/common";
import { Auth } from "../auth/decorators";
import { QuizService } from "./quiz.service";

// ─────────────────────────────────────────────────────────────────────────────

@Controller({
  path: 'quiz',
  version: '1'
})
export class QuizController {
  constructor(
    private readonly quizService: QuizService
  ) {}

  @Get()
  @Auth.Jwt()
  getQuiz() {
    return this.quizService.getQuiz();
  }
}