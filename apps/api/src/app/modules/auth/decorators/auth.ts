import { applyDecorators, createParamDecorator, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// ─────────────────────────────────────────────────────────────────────────────

class LocalAuthGuard extends AuthGuard('local') {}
class JwtAuthGuard extends AuthGuard('jwt') {}

// ─────────────────────────────────────────────────────────────────────────────

const user = createParamDecorator(
  (data: unknown, ctx) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

export const Auth = {
  Login: () => applyDecorators(
    UseGuards(LocalAuthGuard),
  ),
  Jwt: () => applyDecorators(
    UseGuards(JwtAuthGuard),
  ),
  User: user,
}