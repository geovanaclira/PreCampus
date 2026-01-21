/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { SchoolFormState } from "../../../types/SchoolFormState";
import { Input } from "../../input";

interface SchoolRegisterFormProps {
  form: SchoolFormState;
  setForm: React.Dispatch<React.SetStateAction<SchoolFormState>>;
}
const SchoolRegisterForm = ({ form, setForm }: SchoolRegisterFormProps) => {
  return (
    <>
      <Input
        label="Razão Social"
        value={form.corporateName}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            corporateName: v,
          }))
        }
      />

      <Input
        label="CNPJ"
        value={form.cnpj}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            cnpj: v,
          }))
        }
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            email: v,
          }))
        }
      />
      <Input
        type="password"
        label="Senha"
        value={form.password}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            password: v,
          }))
        }
      />
      <Input
        label="Telefone"
        value={form.phone}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            phone: v,
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

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

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Número"
          value={form.address.number}
          onChange={(v) =>
            setForm((prev) => ({
              ...prev,
              address: { ...prev.address, number: v },
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
      </div>

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

      <div className="bg-admin h-px w-full"></div>

      <p className="text-sm font-medium">Turmas</p>

      <Input
        type="number"
        label="1º ano"
        value={String(form.classes.firstYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            classes: { ...prev.classes, firstYear: Number(v) },
          }))
        }
      />

      <Input
        type="number"
        label="2º ano"
        value={String(form.classes.secondYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            classes: { ...prev.classes, secondYear: Number(v) },
          }))
        }
      />

      <Input
        type="number"
        label="3º ano"
        value={String(form.classes.thirdYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            classes: { ...prev.classes, thirdYear: Number(v) },
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

      <p className="text-sm font-medium">Quantidade de alunos</p>

      <Input
        type="number"
        label="1º ano"
        value={String(form.studentsCount.firstYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            studentsCount: { ...form.studentsCount, firstYear: Number(v) },
          }))
        }
      />

      <Input
        type="number"
        label="2º ano"
        value={String(form.studentsCount.secondYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            studentsCount: { ...form.studentsCount, secondYear: Number(v) },
          }))
        }
      />

      <Input
        type="number"
        label="3º ano"
        value={String(form.studentsCount.thirdYear)}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            studentsCount: { ...form.studentsCount, thirdYear: Number(v) },
          }))
        }
      />
    </>
  );
};

export default SchoolRegisterForm;
