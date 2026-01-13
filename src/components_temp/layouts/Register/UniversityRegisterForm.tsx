import { Input } from "../../input";

const UniversityRegisterForm = () => {
  return (
    <>
      <Input label="Razão Social" />
      <Input label="CNPJ" />
      <Input label="Email" />
      <Input type="password" label="Senha" />
      <Input label="Telefone para contato" />

      <Input label="Descrição geral da universidade" />
      <Input label="Cursos oferecidos" />
      <Input label="Descrição dos cursos" />

      <Input label="Site" />
      <Input label="Redes sociais" />
    </>
  );
};

export default UniversityRegisterForm;
