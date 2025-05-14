import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResponseDto, LoginDto, SignupDto } from "./dto";
import { Auth } from "./decorators";
import type { AuthTokenPayload, User } from "../../shared/types";

// ─────────────────────────────────────────────────────────────────────────────

@Controller({
  path: 'auth',
  version: '1'
})
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  @Auth.Login()
  login(@Auth.User() user: AuthTokenPayload): Promise<AuthResponseDto> {
    return this.authService.signToken(user);
  }

  @Post('signup')
  signup(@Body() dto: SignupDto): Promise<AuthResponseDto> {
    return this.authService.createUser(dto);
  }

  @Get('me')
  @Auth.Jwt()
  getMe(@Auth.User() user: AuthTokenPayload) {
    return this.authService.getById(user.id);
  }
}