export interface LoginPayload {
  email: string;
  password: string;
  terms: boolean;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}
