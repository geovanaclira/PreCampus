import { type ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
 {/*esquerdo*/}     
      <div className="hidden md:flex items-center justify-center bg-blue-50 h-full object-cover">
        <img
          src="/src/assets/illustration.svg"
          alt="Ilustração educacional"
        />
      </div>

{/*direito*/}
      <div className="flex-cols items-center  justify-center">
        {children}
      </div>

    </div>
  );
}

export default LoginLayout;