import { useState } from "react";
import illustration from "../assets/illustration.png";
import { Input } from "../components/input";

export default function Register() {
  const [tipo, setTipo] = useState("Aluno");

  const [nomeAluno, setNomeAluno] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [emailAluno, setEmailAluno] = useState("");
  const [escola, setEscola] = useState("");
  const [serie, setSerie] = useState("");

  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [cpfResponsavel, setCpfResponsavel] = useState("");
  const [emailResponsavel, setEmailResponsavel] = useState("");

  const [curso1, setCurso1] = useState("");
  const [curso2, setCurso2] = useState("");
  const [curso3, setCurso3] = useState("");

  const [inst1, setInst1] = useState("");
  const [inst2, setInst2] = useState("");
  const [inst3, setInst3] = useState("");

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const formValido =
    nomeAluno &&
    telefone &&
    dataNascimento &&
    isValidEmail(emailAluno) &&
    escola &&
    serie &&
    nomeResponsavel &&
    parentesco &&
    cpfResponsavel.length === 11 &&
    isValidEmail(emailResponsavel) &&
    senha.length >= 6 &&
    senha === confirmarSenha;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* IMAGEM */}
      <div className="hidden lg:flex bg-blue-50 items-center justify-center p-12">
        <img src={illustration} alt="Ilustração" className="max-w-lg w-full" />
      </div>

      {/* FORMULÁRIO */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-blue-900 mb-8">
            Cadastre-se
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="text-sm font-medium text-zinc-700 mb-3">Você é?</p>
              <div className="grid grid-cols-2 gap-3">
                {["Aluno", "Empresa", "Escola", "Universidade"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTipo(item)}
                    className={`h-11 rounded-md border text-sm font-medium transition ${
                      tipo === item
                        ? "border-blue-700 bg-blue-50 text-blue-800"
                        : "border-zinc-300 text-zinc-600 hover:border-blue-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <Input
              label="Nome Completo do Aluno"
              value={nomeAluno}
              onChange={setNomeAluno}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input label="Telefone" value={telefone} onChange={setTelefone} />
              <Input
                type="date"
                label="Data de nascimento"
                value={dataNascimento}
                onChange={setDataNascimento}
              />
            </div>

            <Input
              label="Email do Aluno"
              value={emailAluno}
              onChange={setEmailAluno}
            />

            <div className="grid grid-cols-2 gap-4">
              <Input label="Escola" value={escola} onChange={setEscola} />
              <Input label="Série" value={serie} onChange={setSerie} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nome do Responsável"
                value={nomeResponsavel}
                onChange={setNomeResponsavel}
              />
              <Input
                label="Parentesco"
                value={parentesco}
                onChange={setParentesco}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="CPF do Responsável"
                value={cpfResponsavel}
                onChange={setCpfResponsavel}
              />
              <Input
                label="Email do Responsável"
                value={emailResponsavel}
                onChange={setEmailResponsavel}
              />
            </div>

            <p className="text-sm font-medium text-zinc-700">
              Cursos de interesse
            </p>
            <Input placeholder="Opção 01" value={curso1} onChange={setCurso1} />
            <Input placeholder="Opção 02" value={curso2} onChange={setCurso2} />
            <Input placeholder="Opção 03" value={curso3} onChange={setCurso3} />

            <p className="text-sm font-medium text-zinc-700">
              Instituições de interesse
            </p>
            <Input placeholder="Opção 01" value={inst1} onChange={setInst1} />
            <Input placeholder="Opção 02" value={inst2} onChange={setInst2} />
            <Input placeholder="Opção 03" value={inst3} onChange={setInst3} />

            <Input
              type="password"
              label="Senha"
              value={senha}
              onChange={setSenha}
            />
            <Input
              type="password"
              label="Confirmar senha"
              value={confirmarSenha}
              onChange={setConfirmarSenha}
            />

            <button
              disabled={!formValido}
              className={`w-full h-12 rounded-md text-sm font-semibold transition ${
                formValido
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
              }`}
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
