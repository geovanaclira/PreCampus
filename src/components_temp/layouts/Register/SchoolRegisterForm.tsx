/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "../../input";
import { useState } from "react";

const SchoolRegisterForm = () => {
  const [form, setForm] = useState({
    corporateName: "",
    cnpj: "",
    email: "",
    password: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      cep: "",
    },
    classes: {
      firstYear: "",
      secondYear: "",
      thirdYear: "",
    },
    studentsCount: {
      firstYear: "",
      secondYear: "",
      thirdYear: "",
    },
  });

  return (
    <>
      {/* <Input label="Razão Social" />
      <Input label="CNPJ" />
      <Input label="Email" />
      <Input type="password" label="Senha" />
      <Input label="Telefone para contato" />

      <Input label="Quantidade de turmas (1º, 2º, 3º)" />
      <Input label="Quantidade total de alunos" /> */}
      <Input
        label="Razão Social"
        value={form.corporateName}
        onChange={(v) => setForm({ ...form, corporateName: v })}
      />

      <Input
        label="CNPJ"
        value={form.cnpj}
        onChange={(v) => setForm({ ...form, cnpj: v })}
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
      />
      <Input
        type="password"
        label="Senha"
        value={form.password}
        onChange={(v) => setForm({ ...form, password: v })}
      />
      <Input
        label="Telefone"
        value={form.phone}
        onChange={(v) => setForm({ ...form, phone: v })}
      />

      <div className="bg-admin h-[1px] w-full"></div>

      <p className="text-sm font-medium">Endereço</p>

      <Input
        label="Rua"
        value={form.address.street}
        onChange={(v) =>
          setForm({ ...form, address: { ...form.address, street: v } })
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

      <div className="bg-admin h-[1px] w-full"></div>

      <p className="text-sm font-medium">Turmas</p>

      <Input
        label="1º ano"
        value={form.classes.firstYear}
        onChange={(v) =>
          setForm({ ...form, classes: { ...form.classes, firstYear: v } })
        }
      />

      <Input
        label="2º ano"
        value={form.classes.secondYear}
        onChange={(v) =>
          setForm({ ...form, classes: { ...form.classes, secondYear: v } })
        }
      />

      <Input
        label="3º ano"
        value={form.classes.thirdYear}
        onChange={(v) =>
          setForm({ ...form, classes: { ...form.classes, thirdYear: v } })
        }
      />

      <div className="bg-admin h-[1px] w-full"></div>

      <p className="text-sm font-medium">Quantidade de alunos</p>

      <Input
        label="1º ano"
        value={form.studentsCount.firstYear}
        onChange={(v) =>
          setForm({
            ...form,
            studentsCount: { ...form.studentsCount, firstYear: v },
          })
        }
      />

      <Input
        label="2º ano"
        value={form.studentsCount.secondYear}
        onChange={(v) =>
          setForm({
            ...form,
            studentsCount: { ...form.studentsCount, secondYear: v },
          })
        }
      />

      <Input
        label="3º ano"
        value={form.studentsCount.thirdYear}
        onChange={(v) =>
          setForm({
            ...form,
            studentsCount: { ...form.studentsCount, thirdYear: v },
          })
        }
      />
    </>
  );
};

export default SchoolRegisterForm;
