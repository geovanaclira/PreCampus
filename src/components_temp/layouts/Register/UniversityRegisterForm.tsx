import type { UniversityFormState } from "../../../types/UniversityFormState";
import CoursesFields from "../../forms/university/CoursesFields";
import SocialLinksFields from "../../forms/university/SocialLinksFields";
import { Input } from "../../input";

interface UniversityRegisterFormProps {
  form: UniversityFormState;
  setForm: React.Dispatch<React.SetStateAction<UniversityFormState>>;
}

const UniversityRegisterForm = ({
  form,
  setForm,
}: UniversityRegisterFormProps) => {
  return (
    <>
      <Input
        label="Razão Social"
        value={form.corporateName}
        onChange={(v) => setForm((prev) => ({ ...prev, corporateName: v }))}
      />

      <Input
        label="CNPJ"
        value={form.cnpj}
        onChange={(v) => setForm((prev) => ({ ...prev, cnpj: v }))}
      />

      <Input
        label="Email"
        value={form.email}
        onChange={(v) => setForm((prev) => ({ ...prev, email: v }))}
      />

      <Input
        type="password"
        label="Senha"
        value={form.password}
        onChange={(v) => setForm((prev) => ({ ...prev, password: v }))}
      />

      <Input
        label="Telefone"
        value={form.phone}
        onChange={(v) => setForm((prev) => ({ ...prev, phone: v }))}
      />

      <Input
        label="Descrição da universidade"
        value={form.description}
        onChange={(v) => setForm((prev) => ({ ...prev, description: v }))}
      />

      {/* ENDEREÇO */}
      <p className="text-sm font-medium">Endereço</p>

      <Input
        label="Rua"
        value={form.address.street}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            address: { ...prev.address, street: v },
          }))
        }
      />

      <Input
        label="Cidade"
        value={form.address.city}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            address: { ...prev.address, city: v },
          }))
        }
      />

      <Input
        label="Estado"
        value={form.address.state}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            address: { ...prev.address, state: v },
          }))
        }
      />

      <Input
        label="CEP"
        value={form.address.cep}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            address: { ...prev.address, cep: v },
          }))
        }
      />

      {/* CURSOS */}
      <CoursesFields
        courses={form.courses}
        onChange={(courses) => setForm((prev) => ({ ...prev, courses }))}
      />

      {/* SITE */}
      <Input
        label="Site"
        value={form.website}
        onChange={(v) => setForm((prev) => ({ ...prev, website: v }))}
      />

      {/* REDES SOCIAIS */}
      <SocialLinksFields
        socialLinks={form.socialLinks}
        onChange={(socialLinks) =>
          setForm((prev) => ({ ...prev, socialLinks }))
        }
      />
    </>
  );
};

export default UniversityRegisterForm;
