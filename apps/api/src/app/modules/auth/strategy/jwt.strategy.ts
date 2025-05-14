import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthTokenPayload } from '../../../shared/types';
import { ConfigService } from '@nestjs/config';

// ─────────────────────────────────────────────────────────────────────────────

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.getOrThrow<string>('auth.secret'),
      ignoreExpiration: false,
    });
  }

  validate(payload: AuthTokenPayload): AuthTokenPayload {
    return payload;
  }
}