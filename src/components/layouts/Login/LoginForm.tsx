import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const navegate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: typeof errors = {};
    
    if (!email) newErrors.email = "Email é obrigatório";
    if (!password) newErrors.password = "Senha é obrigatória";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login enviado", { email, password });
    }
  }

  return (
    <form className="px-6 px-[180px] space-y-5" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-4 border border-sky-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-4 border border-sky-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="rounded" />
          Lembrar-me
        </label>
        <a href="#" className="text-sm text-blue-950 hover:underline">
          Esqueceu a senha?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-sky-600 to-blue-950 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        ENTRAR
      </button>

      <p className="text-center text-lg text-blue-950 mt-12">
        Não tem uma conta?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => navegate("/register")}
        >
            Cadastre-se
       </span>
      </p>
    </form>
  );
}

export { LoginForm };