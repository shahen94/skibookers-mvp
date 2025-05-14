export type User = {
  id: string;
  email: string;
  password: string;
}

export type AuthTokenPayload = Pick<User, 'id'>;