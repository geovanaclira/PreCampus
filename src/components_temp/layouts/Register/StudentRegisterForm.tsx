import { useState } from "react";
import { Input } from "../../input";

const StudentRegisterForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",

    birthDate: "",
    phone: "",

    address: {
      street: "",
      number: "",
      city: "",
      state: "",
      cep: "",
    },

    monthlyIncome: "",

    guardian: {
      fullName: "",
      relationship: "",
      otherRelationship: "",
      cpf: "",
      email: "",
      address: {
        street: "",
        number: "",
        city: "",
        state: "",
        cep: "",
      },
    },

    interestedCourses: ["", "", ""],
    interestedUniversities: ["", "", ""],
  });

  return (
    <>
      <Input label="Nome completo" />
      <Input label="Email" />
      <Input type="password" label="Senha" />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Telefone" />
        <Input type="date" label="Data de nascimento" />
      </div>

      <p className="text-sm font-medium text-zinc-700">Endereço</p>

      <Input
        label="Rua"
        value={form.address.street}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, street: v } })
        }
      />

      <Input
        label="Número"
        value={form.address.number}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, number: v } })
        }
      />

      <Input
        label="Cidade"
        value={form.address.city}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, city: v } })
        }
      />

      <Input
        label="Estado"
        value={form.address.state}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, state: v } })
        }
      />

      <Input
        label="CEP"
        value={form.address.cep}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, cep: v } })
        }
      />

      <p className="text-sm font-medium text-zinc-700">Dados do responsável</p>
      <Input
        label="Nome completo"
        value={form.guardian.fullName}
        onChange={(v) =>
          setForm({ ...form, guardian: { ...form.guardian, fullName: v } })
        }
      />
      <Input
        label="Parentesco (Pai, Mãe ou Outro)"
        value={form.guardian.relationship}
        onChange={(v) =>
          setForm({ ...form, guardian: { ...form.guardian, relationship: v } })
        }
      />
      {form.guardian.relationship === "Outro" && (
        <Input
          label="Informe o parentesco"
          value={form.guardian.otherRelationship}
          onChange={(v) =>
            setForm({
              ...form,
              guardian: { ...form.guardian, otherRelationship: v },
            })
          }
        />
      )}
      <Input
        label="CPF"
        value={form.guardian.cpf}
        onChange={(v) =>
          setForm({ ...form, guardian: { ...form.guardian, cpf: v } })
        }
      />

      <Input
        label="Email do responsável"
        value={form.guardian.email}
        onChange={(v) =>
          setForm({ ...form, guardian: { ...form.guardian, email: v } })
        }
      />
      <p className="text-sm font-medium text-zinc-700">
        Endereço do responsável
      </p>

      <Input
        label="Rua"
        value={form.guardian.address.street}
        onChange={(v) =>
          setForm({
            ...form,
            guardian: {
              ...form.guardian,
              address: { ...form.guardian.address, street: v },
            },
          })
        }
      />

      <Input
        label="Número"
        value={form.guardian.address.number}
        onChange={(v) =>
          setForm({
            ...form,
            guardian: {
              ...form.guardian,
              address: { ...form.guardian.address, number: v },
            },
          })
        }
      />

      <Input
        label="Cidade"
        value={form.guardian.address.city}
        onChange={(v) =>
          setForm({
            ...form,
            guardian: {
              ...form.guardian,
              address: { ...form.guardian.address, city: v },
            },
          })
        }
      />

      <Input
        label="Estado"
        value={form.guardian.address.state}
        onChange={(v) =>
          setForm({
            ...form,
            guardian: {
              ...form.guardian,
              address: { ...form.guardian.address, state: v },
            },
          })
        }
      />

      <Input
        label="CEP"
        value={form.guardian.address.cep}
        onChange={(v) =>
          setForm({
            ...form,
            guardian: {
              ...form.guardian,
              address: { ...form.guardian.address, cep: v },
            },
          })
        }
      />

      {/* <Input label="Nome completo do responsável" />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Parentesco" />
        <Input label="CPF" />
      </div>

      <Input label="Email do responsável" />
      <Input label="Endereço do responsável" /> */}

      <p className="text-sm font-medium text-zinc-700">Cursos de interesse</p>
      <Input placeholder="Opção 01" />
      <Input placeholder="Opção 02" />
      <Input placeholder="Opção 03" />

      <p className="text-sm font-medium text-zinc-700">
        Universidades de interesse
      </p>
      <Input placeholder="Opção 01" />
      <Input placeholder="Opção 02" />
      <Input placeholder="Opção 03" />
    </>
  );
};

export default StudentRegisterForm;
