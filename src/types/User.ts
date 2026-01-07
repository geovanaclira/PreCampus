export type Role = "student" | "school" | "university" | "admin";

export interface User {
  id: string;
  email: string;
  role: Role;

  fullName?: string;
  corporateName?: string;
}
