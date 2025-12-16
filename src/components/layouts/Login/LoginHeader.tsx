
function LoginHeader() {
  return (
    <>
      <div className="flex justify-left ml-27">
          <img className="w-xs"
            src="/src/assets/logoPreCampus.png"
            alt="Logo PreCampus Laranja"
          />
      </div>
    <div className="px-6 px-[180px]">
      <h1 className="text-6xl font-bold text-blue-950 text-left">
        Bem-vindo ao PreCampus!
      </h1>

      <p className="text-gray-400 text-lg text-justify my-4">
        Acesse sua conta
      </p>
      </div>
    </>
  );
}

export default LoginHeader;