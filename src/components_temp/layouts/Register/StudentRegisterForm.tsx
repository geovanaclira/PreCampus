/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Input } from "../../input";
import type { StudentFormState } from "../../../types/StudentFormState";
import type { MonthlyIncome } from "../../../types/MonthlyIncome";
import { MONTHLY_INCOME } from "../../../types/MonthlyIncome";

type StudentRegisterFormProps = {
  form: StudentFormState;
  setForm: React.Dispatch<React.SetStateAction<StudentFormState>>;
};

const StudentRegisterForm = ({ form, setForm }: StudentRegisterFormProps) => {
  const [useSameAddress, setUseSameAddress] = useState(false);

  return (
    <>
      {/*---------- DADOS ALUNO ----------*/}
      <Input
        label="Nome completo"
        value={form.fullName}
        onChange={(v) => setForm((prev) => ({ ...prev, fullName: v }))}
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

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Telefone"
          value={form.phone}
          onChange={(v) => setForm((prev) => ({ ...prev, phone: v }))}
        />

        <Input
          type="date"
          label="Data de nascimento"
          value={form.birthDate}
          onChange={(v) => setForm((prev) => ({ ...prev, birthDate: v }))}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">
          Renda familiar mensal
        </label>

        <select
          value={form.monthlyIncome}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              monthlyIncome: Number(e.target.value) as MonthlyIncome,
            }))
          }
          className="h-11 rounded-md border border-zinc-300 px-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
          required
        >
          <option value={MONTHLY_INCOME.NONE}>Selecione</option>
          <option value={MONTHLY_INCOME.UP_TO_1_MINIMUM}>
            Até 1 salário mínimo
          </option>
          <option value={MONTHLY_INCOME.FROM_1_TO_2}>
            De 1 a 2 salários mínimos
          </option>
          <option value={MONTHLY_INCOME.FROM_2_TO_3}>
            De 2 a 3 salários mínimos
          </option>
          <option value={MONTHLY_INCOME.ABOVE_3}>
            Acima de 3 salários mínimos
          </option>
        </select>
      </div>

      {/*---------- ENDEREÇO ALUNO ----------*/}
      <p className="text-sm font-medium text-zinc-700">Endereço</p>

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

      <div className="flex gap-5">
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

      {/*---------- DADOS RESPONSÁVEL ---------- */}
      <div className="bg-admin h-px w-full"></div>

      <p className="text-sm font-medium text-zinc-700">Dados do responsável</p>

      <Input
        label="Nome completo do responsável"
        value={form.guardian.fullName}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, fullName: v },
          }))
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
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, cpf: v },
          }))
        }
      />

      <Input
        label="Email do responsável"
        value={form.guardian.email}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: { ...prev.guardian, email: v },
          }))
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

      <Input
        label="Rua"
        value={form.guardian.address.street}
        disabled={useSameAddress}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: {
              ...prev.guardian,
              address: { ...prev.guardian.address, street: v },
            },
          }))
        }
      />

      <div className="flex gap-5">
        <Input
          label="Número"
          value={form.guardian.address.number}
          disabled={useSameAddress}
          onChange={(v) =>
            setForm((prev) => ({
              ...prev,
              guardian: {
                ...prev.guardian,
                address: { ...prev.guardian.address, number: v },
              },
            }))
          }
        />

        <Input
          label="CEP"
          value={form.guardian.address.cep}
          disabled={useSameAddress}
          onChange={(v) =>
            setForm((prev) => ({
              ...prev,
              guardian: {
                ...prev.guardian,
                address: { ...prev.guardian.address, cep: v },
              },
            }))
          }
        />
      </div>

      <Input
        label="Cidade"
        value={form.guardian.address.city}
        disabled={useSameAddress}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: {
              ...prev.guardian,
              address: { ...prev.guardian.address, city: v },
            },
          }))
        }
      />

      <Input
        label="Estado"
        value={form.guardian.address.state}
        disabled={useSameAddress}
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            guardian: {
              ...prev.guardian,
              address: { ...prev.guardian.address, state: v },
            },
          }))
        }
      />

      <div className="bg-admin h-px w-full"></div>

      <p className="text-sm font-medium text-zinc-700">
        Cursos de interesse (até 3)
      </p>

      {[0, 1, 2].map((i) => (
        <Input
          key={i}
          placeholder={`Opção ${i + 1}`}
          value={form.interestedCourses[i] ?? ""}
          onChange={(v) => {
            const updated = [...form.interestedCourses];
            updated[i] = v;
            setForm((prev) => ({ ...prev, interestedCourses: updated }));
          }}
        />
      ))}

      <p className="text-sm font-medium text-zinc-700">
        Universidades de interesse
      </p>
      {[0, 1, 2].map((i) => (
        <Input
          key={i}
          placeholder={`Opção ${i + 1}`}
          value={form.interestedUniversities[i] ?? ""}
          onChange={(v) => {
            const updated = [...form.interestedUniversities];
            updated[i] = v;
            setForm((prev) => ({ ...prev, interestedUniversities: updated }));
          }}
        />
      ))}
    </>
  );
};

export default StudentRegisterForm;
