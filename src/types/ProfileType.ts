export interface StudentProfileForm {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  monthlyIncome: number;
  interestedCourses: string[];
  interestedUniversities: string[];
  guardian?: {
    fullName: string;
    relationship: string;
    email: string;
  };
}
export interface UniversityProfileForm {
  corporateName: string;
  email: string;
  phone: string;
  description: string;
  courses: { name: string; description: string }[];
  website: string;
  socialLinks: { name: string; url: string }[];
  address: {
    street: string;
    city: string;
    state: string;
    cep: string;
  };
}
