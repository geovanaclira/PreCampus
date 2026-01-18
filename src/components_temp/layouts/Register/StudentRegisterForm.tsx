/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Input } from "../../input";

const StudentRegisterForm = () => {
  const [useSameAddress, setUseSameAddress] = useState(false);

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

    monthlyIncome: 0,

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
      {/*---------- DADOS ALUNO ----------*/}
      <Input label="Nome completo" />
      <Input label="Email" />
      <Input type="password" label="Senha" />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Telefone" />
        <Input type="date" label="Data de nascimento" />
      </div>

      <p className="text-sm font-medium text-zinc-700">Endereço</p>

      <div className="flex gap-5">
        <div className="w-[70%]">
          <Input
            label="Rua"
            value={form.address.street}
            onChange={(v) =>
              setForm({ ...form, address: { ...form.address, street: v } })
            }
          />
        </div>
        <div className="w-[30%]">
          <Input
            label="Número"
            value={form.address.number}
            onChange={(v) =>
              setForm({ ...form, address: { ...form.address, number: v } })
            }
          />
        </div>
      </div>

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

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">
          Renda familiar mensal
        </label>

        <select
          value={form.monthlyIncome}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              monthlyIncome: Number(e.target.value),
            }))
          }
          className="h-11 rounded-md border border-zinc-300 px-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
          required
        >
          <option value={0}>Selecione</option>
          <option value={1}>Até 1 salário mínimo</option>
          <option value={2}>De 1 a 2 salários mínimos</option>
          <option value={3}>De 2 a 3 salários mínimos</option>
          <option value={4}>Acima de 3 salários mínimos</option>
        </select>
      </div>

      {/*---------- DADOS RESPONSÁVEL ---------- */}
      <div className="bg-admin h-[1px] w-full"></div>

      <p className="text-sm font-medium text-zinc-700">Dados do responsável</p>
      <Input
        label="Nome completo"
        value={form.guardian.fullName}
        onChange={(v) =>
          setForm({ ...form, guardian: { ...form.guardian, fullName: v } })
        }
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Parentesco</label>

        <select
          value={form.guardian.relationship}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              guardian: {
                ...prev.guardian,
                relationship: e.target.value,
                otherRelationship: "",
              },
            }))
          }
          className="h-11 rounded-md border border-zinc-300 px-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
          required
        >
          <option value="">Selecione</option>
          <option value="Pai">Pai</option>
          <option value="Mãe">Mãe</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      {form.guardian.relationship === "Outro" && (
        <Input
          label="Informe o parentesco"
          value={form.guardian.otherRelationship}
          onChange={(value) =>
            setForm((prev) => ({
              ...prev,
              guardian: {
                ...prev.guardian,
                otherRelationship: value,
              },
            }))
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

      <label className="flex items-center gap-2 text-sm text-zinc-700">
        <input
          type="checkbox"
          checked={useSameAddress}
          onChange={(e) => {
            const checked = e.target.checked;
            setUseSameAddress(checked);

            if (checked) {
              setForm((prev) => ({
                ...prev,
                guardian: {
                  ...prev.guardian,
                  address: { ...prev.address },
                },
              }));
            }
          }}
        />
        Usar o mesmo endereço do aluno
      </label>

      <p className="text-sm font-medium text-zinc-700">
        Endereço do responsável
      </p>

      <div className="flex gap-5">
        <div className="w-[70%]">
          <Input
            label="Rua"
            value={form.guardian.address.street}
            disabled={useSameAddress}
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
        </div>
        <div className="w-[30%]">
          <Input
            label="Número"
            value={form.guardian.address.number}
            disabled={useSameAddress}
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
        </div>
      </div>

      <Input
        label="Cidade"
        value={form.guardian.address.city}
        disabled={useSameAddress}
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
        disabled={useSameAddress}
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
        disabled={useSameAddress}
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

      <div className="bg-admin h-[1px] w-full"></div>

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
