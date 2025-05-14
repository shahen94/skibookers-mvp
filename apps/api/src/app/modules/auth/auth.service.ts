import { Injectable, UnauthorizedException } from "@nestjs/common";
import { randomUUID } from 'node:crypto';
import { hash, compare } from 'bcryptjs';
import omit from 'lodash/omit';
import { AuthTokenPayload, User } from "../../shared/types";
import { AuthResponseDto, SignupDto } from "./dto";
import { JwtService } from "@nestjs/jwt";

// ─────────────────────────────────────────────────────────────────────────────

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: SignupDto) {
    const user: User = {
      id: randomUUID(),
      email: dto.email,
      password: await this.hashPassword(dto.password),
    }

    this.users.push(user);

    return this.signToken(user);
  }

  public async login(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isMatch = await this.comparePassword(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return omit(user, ['password']);
  }

  public getById(id: string) {
    const user = this.users.find(user => user.id === id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return Promise.resolve(omit(user, ['password']));
  }

  public async signToken(user: AuthTokenPayload): Promise<AuthResponseDto> {
    const token = await this.jwtService.signAsync(user);

    return {
      accessToken: token,
    }
  }

  private hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }

  private comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}