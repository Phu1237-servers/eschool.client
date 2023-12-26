export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  api_token?: string
  created_at: string;
  updated_at: string;
}

export const defaultUser: User = {
  id: 0,
  name: "",
  email: "",
  created_at: "",
  updated_at: "",
};
