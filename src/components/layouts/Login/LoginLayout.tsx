import { type ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="grid h-svh grid-cols-1 md:grid-cols-2">
      {/*esquerdo*/}
      <div className="h-full justify-center bg-[#F5F9FE] object-cover md:flex">
        <img
          src="/src/assets/illustration.svg"
          alt="Ilustração educacional"
          className="w-[80%] object-contain"
        />
      </div>

      {/*direito*/}
      <div className="flex-cols items-center justify-center">{children}</div>
    </div>
  );
};

export default LoginLayout;
