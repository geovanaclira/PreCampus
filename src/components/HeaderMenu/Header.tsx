import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar, User, Heart, LogOut } from "lucide-react";
import Logo from "../../assets/img/logoPreCampus.png";

interface HeaderProps {
  title: string;
  bgColor?: string;
}

export default function Header({ title, bgColor="bg-[#D84E2F]" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`${bgColor} h-40 flex items-center px-6 text-white shadow-md`}
      >
        <button className="cursor-pointer" onClick={() => setOpen(true)}>
          <Menu size={38} />
        </button>

        <h1 className="ml-auto text-5xl font-bold">
          {title}
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex flex-col items-center mt-10 gap-4">
          <div className="w-14 h-14 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white text-xl font-bold">
            J
          </div>
          <span className=" font-bold text-[#D84E2F]">José Wellington</span>
          <span className="text-xs text-[#9B9B9B]">Aluno</span>
        </div>

        <nav className="flex flex-col items-center gap-6 py-6 mt-8">
          <Link to="/" className="flex flex-col items-center text-[#D84E2F]">
            <Calendar size={35} />
            <span className="text-xs mt-1 text-[#202020]">EVENTOS</span>
          </Link>

          <Link to="/" className="flex flex-col items-center text-[#D84E2F]">
            <User size={35} />
            <span className="text-xs mt-1 text-[#202020]">PERFIL</span>
          </Link>

          <Link to="/" className="flex flex-col items-center text-[#D84E2F]">
            <Heart size={35} />
            <span className="text-xs mt-1 text-[#202020]">MEUS EVENTOS</span>
          </Link>
        </nav>

        <div className="flex justify-center py-4">
          <img
            src={Logo}
            alt="Logo PreCampus"
            className="w-40 user-drag-none"
          />
        </div>

        <div className="mt-auto flex flex-col items-center gap-4 py-6">
          <span className="text-m text-[#202020]">Olá, precisa de ajuda?</span>
          <button className="bg-[#FF6B4A] cursor-pointer text-white px-6 py-2 rounded-md text-sm">
            CONTATO
          </button>

          <button className="text-[#D84E2F] cursor-pointer">
            <LogOut size={22} />
          </button>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="cursor-pointer absolute top-4 right-4 text-gray-400"
        >
          <X size={22} />
        </button>
      </aside>
    </>
  );
}
