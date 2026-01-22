import type { Address } from "./AddressType";

export type Role = "student" | "school" | "university" | "admin";

export interface BaseUser {
  id: string;
  email: string;
  role: Role;
}

export interface StudentUser extends BaseUser {
  role: "student";
  fullName: string;
  phone: string;
  birthDate: string;
  monthlyIncome: number;
  interestedCourses: string[];
  interestedUniversities: string[];
  address: Address;
  guardian?: {
    fullName: string;
    cpf: string;
    relationship: string;
    email: string;
    otherRelationship?: string;
    address: Address;
  };
}

/* ===================== SCHOOL ===================== */
export interface SchoolUser extends BaseUser {
  role: "school";
  corporateName: string;
  phone: string;
  address: Address;
}

/* ===================== UNIVERSITY ===================== */
export interface UniversityUser extends BaseUser {
  role: "university";
  corporateName: string;
  phone: string;
  description: string;
}

export type User = StudentUser | SchoolUser | UniversityUser;
