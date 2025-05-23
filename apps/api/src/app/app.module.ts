import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config";
import { QuizModule } from "./modules/quiz/quiz.module";
import { RecommendationModule } from "./modules/recommendation/recommendation.module";

// ─────────────────────────────────────────────────────────────────────────────

@Module({
  imports: [
    AuthModule,
    QuizModule,
    RecommendationModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    })
  ]
})
export class AppModule {}