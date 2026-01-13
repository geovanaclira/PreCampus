import { useState } from "react";
import RegisterHeader from "../components_temp/layouts/Register/RegisterHeader";
import RegisterTypeSelector from "../components_temp/layouts/Register/RegisterTypeSelector";
import type { RegisterType } from "../types/Register";
import StudentRegisterForm from "../components_temp/layouts/Register/StudentRegisterForm";
import SchoolRegisterForm from "../components_temp/layouts/Register/SchoolRegisterForm";
import UniversityRegisterForm from "../components_temp/layouts/Register/UniversityRegisterForm";
import RegisterSubmitButton from "../components_temp/layouts/Register/RegisterSubmitButton";
import AuthLayout from "../components_temp/layouts/Auth/AuthLayout";

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
