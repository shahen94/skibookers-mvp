import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';
import { RecommendationController } from "./recommendation.controller";
import { RecommendationService } from "./recommendation.service";
import { ConfigService } from "@nestjs/config";

// ─────────────────────────────────────────────────────────────────────────────

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get<string>('services.recommendationEngineUrl'),
      }),
    })
  ],
  controllers: [RecommendationController],
  providers: [RecommendationService],
})
export class RecommendationModule {}