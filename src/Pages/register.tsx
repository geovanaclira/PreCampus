import { useState } from "react";
import AuthLayout from "../components/layouts/Auth/AuthLayout";
import RegisterHeader from "../components/layouts/Register/RegisterHeader";
import RegisterTypeSelector from "../components/layouts/Register/RegisterTypeSelector";
import StudentRegisterForm from "../components/layouts/Register/StudentRegisterForm";
import SchoolRegisterForm from "../components/layouts/Register/SchoolRegisterForm";
import UniversityRegisterForm from "../components/layouts/Register/UniversityRegisterForm";
import RegisterSubmitButton from "../components/layouts/Register/RegisterSubmitButton";
import type { RegisterType } from "../types/Register";

export default function Register() {
  const [type, setType] = useState<RegisterType>("student");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-lg px-6 py-10">
        <RegisterHeader />

        <form onSubmit={handleSubmit} className="space-y-5">
          <RegisterTypeSelector value={type} onChange={setType} />

          {type === "student" && <StudentRegisterForm />}
          {type === "school" && <SchoolRegisterForm />}
          {type === "university" && <UniversityRegisterForm />}

          <RegisterSubmitButton />
        </form>
      </div>
    </AuthLayout>
  );
}
