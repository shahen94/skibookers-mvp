import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Quiz } from "../../shared/types";
import { lastValueFrom } from "rxjs";

// ─────────────────────────────────────────────────────────────────────────────

@Injectable()
export class RecommendationService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  // TODO: Generate SDK from recommendation engine using heyapi-ts
  async proxy(quiz: Quiz, response: Express.Response) {
    const obs = this.httpService.post('/recommendation', quiz, {
      responseType: 'stream',
    });

    const { data } = await lastValueFrom(obs);

    // @ts-expect-error For now, we need to import from express, in new Nestjs version the hide the root express import
    response.header('Content-Type', 'application/json');
    data.pipe(response);
  }
}