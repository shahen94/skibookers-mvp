import { IsEmail, IsStrongPassword } from "class-validator";
import { PASSWORD } from "../../../shared/constraints";

// ─────────────────────────────────────────────────────────────────────────────

export class SignupDto {
  @IsEmail()
  email!: string;

  @IsStrongPassword(PASSWORD)
  password!: string;
}