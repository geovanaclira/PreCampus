import { useAuth } from "../../../../contexts/AuthContext";
import { useEditableSection } from "../../../../hooks/useEditableSection";
import type { StudentProfileForm } from "../../../../types/ProfileType";
import ProfileField from "../ProfileField";
import ProfileSection from "../ProfileSection";

interface StudentProfileSectionProps {
  initialData: StudentProfileForm;
}

const StudentProfileSection = ({ initialData }: StudentProfileSectionProps) => {
  const { updateUser } = useAuth();

  const studentSection = useEditableSection({
    name: initialData.name,
    email: initialData.email,
    phone: initialData.phone,
    birthDate: initialData.birthDate,
    monthlyIncome: initialData.monthlyIncome,
  });

  async function saveStudent(data: typeof studentSection.data) {
    await updateUser({
      fullName: data.name,
      email: data.email,
      phone: data.phone,
      birthDate: data.birthDate,
      monthlyIncome: data.monthlyIncome,
    });
  }

  // const guardianSection = useEditableSection(
  //   initialData.guardian ?? {
  //     fullName: "",
  //     relationship: "",
  //     email: "",
  //   },
  // );

  // async function saveGuardian(data: typeof guardianSection.data) {
  //   await updateUser({
  //     guardian: data,
  //   });
  // }

  const interestsSection = useEditableSection({
    interestedCourses: initialData.interestedCourses,
    interestedUniversities: initialData.interestedUniversities,
  });

  async function saveInterests(data: typeof interestsSection.data) {
    await updateUser(data);
  }

  const { isEditing, data, setData } =
    useEditableSection<StudentProfileForm>(initialData);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* DADOS DO ALUNO */}
      <ProfileSection
        title="Dados do Aluno"
        isEditing={studentSection.isEditing}
        onEdit={studentSection.startEditing}
        onSave={() => studentSection.saveEditing(saveStudent)}
        onCancel={studentSection.cancelEditing}
      >
        <div className="grid grid-cols-2 gap-4">
          <ProfileField
            label="Nome"
            value={data.name}
            disabled={!isEditing}
            onChange={(value) => setData((prev) => ({ ...prev, name: value }))}
          />
          <ProfileField
            label="Email"
            value={data.email}
            disabled={!isEditing}
            onChange={(value) => setData((prev) => ({ ...prev, email: value }))}
          />
        </div>

        <ProfileField
          label="Telefone"
          value={data.phone}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, phone: v }))}
        />

        <ProfileField
          label="Data de nascimento"
          value={data.birthDate}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, birthDate: v }))}
        />

        <ProfileField
          label="Renda mensal"
          value={String(data.monthlyIncome)}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, monthlyIncome: Number(v) }))}
        />
      </ProfileSection>

      {/* DADOS DO RESPONSÁVEL
      <ProfileSection
        title="Dados do Responsável"
        isEditing={guardianSection.isEditing}
        onEdit={guardianSection.startEditing}
        onSave={() => guardianSection.saveEditing(saveGuardian)}
        onCancel={guardianSection.cancelEditing}
      >
        <ProfileField
          label="Nome"
          value={data.name}
          disabled={!isEditing}
          onChange={(value) => setData((prev) => ({ ...prev, name: value }))}
        />
      </ProfileSection> */}

      {/* Faculdades de Interesse */}
      <ProfileSection
        title="Interesses"
        isEditing={interestsSection.isEditing}
        onEdit={interestsSection.startEditing}
        onSave={() => interestsSection.saveEditing(saveInterests)}
        onCancel={interestsSection.cancelEditing}
      >
        <ProfileField
          label="Universidades de interesse (separadas por vírgula)"
          value={data.interestedUniversities.join(", ")}
          disabled={!isEditing}
          onChange={(v) =>
            setData((p) => ({
              ...p,
              interestedUniversities: v.split(",").map((s) => s.trim()),
            }))
          }
        />

        <ProfileField
          label="Cursos de interesse (separados por vírgula)"
          value={data.interestedCourses.join(", ")}
          disabled={!isEditing}
          onChange={(v) =>
            setData((p) => ({
              ...p,
              interestedCourses: v.split(",").map((s) => s.trim()),
            }))
          }
        />
      </ProfileSection>

      {/* Cursos de Interesse */}
      {/* <ProfileSection
        title="Dados do Responsável"
        isEditing={isEditing}
        onEdit={startEditing}
        onSave={() => saveEditing(handleSave)}
        onCancel={cancelEditing}
      >
        <ProfileField
          label="Cursos de interesse (separados por vírgula)"
          value={data.interestedCourses.join(", ")}
          disabled={!isEditing}
          onChange={(v) =>
            setData((p) => ({
              ...p,
              interestedCourses: v.split(",").map((s) => s.trim()),
            }))
          }
        />
      </ProfileSection> */}
    </div>
  );
};

export default StudentProfileSection;
