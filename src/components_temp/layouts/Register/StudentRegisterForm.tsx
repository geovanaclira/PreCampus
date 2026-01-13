import { Input } from "../../input";

const StudentRegisterForm = () => {
  return (
    <>
      <Input label="Nome completo" />
      <Input label="Email" />
      <Input type="password" label="Senha" />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Telefone" />
        <Input type="date" label="Data de nascimento" />
      </div>

      <Input label="Endereço" />

      <p className="text-sm font-medium text-zinc-700">Dados do responsável</p>

      <Input label="Nome completo do responsável" />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Parentesco" />
        <Input label="CPF" />
      </div>

      <Input label="Email do responsável" />
      <Input label="Endereço do responsável" />

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
