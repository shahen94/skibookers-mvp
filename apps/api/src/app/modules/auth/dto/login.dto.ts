import { IsEmail, IsStrongPassword } from "class-validator";
import { PASSWORD } from "../../../shared/constraints";

// ─────────────────────────────────────────────────────────────────────────────

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsStrongPassword(PASSWORD)
  password!: string;
}