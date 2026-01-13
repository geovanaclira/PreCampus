import { Input } from "../../input";

const SchoolRegisterForm = () => {
  return (
    <>
      <Input label="Razão Social" />
      <Input label="CNPJ" />
      <Input label="Email" />
      <Input type="password" label="Senha" />
      <Input label="Telefone para contato" />

      <Input label="Quantidade de turmas (1º, 2º, 3º)" />
      <Input label="Quantidade total de alunos" />
    </>
  );
};

export default SchoolRegisterForm;
