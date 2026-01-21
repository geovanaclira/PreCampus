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
