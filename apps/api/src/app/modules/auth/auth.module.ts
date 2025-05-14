import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';

// ─────────────────────────────────────────────────────────────────────────────

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('auth.secret'),
        signOptions: {
          expiresIn: configService.get<string>('auth.expiresIn'),
        }
      }),
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}