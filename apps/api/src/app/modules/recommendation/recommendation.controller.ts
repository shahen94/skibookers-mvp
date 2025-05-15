import { Body, Controller, Post, Res } from "@nestjs/common";
import { RecommendationService } from "./recommendation.service";
import type { Quiz } from "../../shared/types";

// ─────────────────────────────────────────────────────────────────────────────

@Controller({
  path: 'recommendation',
  version: "1",
})
export class RecommendationController {
  constructor(
    private readonly recommendationService: RecommendationService
  ) {}

  @Post('quiz')
  async getRecommendation(@Body() dto: Quiz, @Res() response: Express.Response): Promise<unknown> {
    return this.recommendationService.proxy(dto, response);
  }
}
