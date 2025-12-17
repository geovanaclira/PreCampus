import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar, User, Heart, LogOut, BarChart3, Plus } from "lucide-react";
import Logo from "../../assets/img/logoPreCampus.png";
import LogoInstitution from "../../assets/img/logoInstitution.png";
import LogoAdmin from "../../assets/img/logoAdm.png";


interface HeaderProps {
  username?: string
  title: string;
  role: "student" | "admin" | "school" | "university";  
  userType?: string;
}

const userData = {
  student: {
    logo: Logo,
    bgColor: "bg-[#D84E2F]",
    color: "text-[#D84E2F]",
    menu: [
      {name: "Eventos", icon: Calendar,},
      {name: "Perfil", icon: User,},
      {name: "Meus Eventos", icon: Heart,}
    ]
  },
  
  school: {
    logo: LogoInstitution,
    bgColor: "bg-[#006607]",
    color: "text-[#006607]",
    menu: [
      {name: "Eventos", icon: Calendar,},
      {name: "Perfil", icon: User,},
      {name: "Dashboard", icon: BarChart3,},
      {name: "Criar Evento", icon: Plus,} 
    ]
  },

  university: {
    logo: LogoInstitution, 
    bgColor: "bg-[#006607]",
    color: "text-[#006607]",
    menu: [
      {name: "Dashboard", icon: BarChart3,},
      {name: "Criar Evento", icon: Plus,}
    ]
  },

  admin: {
    logo: LogoAdmin,
    bgColor: "bg-[#003366]",
    color: "text-[#003366]",
    menu: [
      {name: "Dashboard", icon: BarChart3,},
      {name: "Criar Evento", icon: Plus,}
    ]
  }
}

export default function Header({ title, role, userType, username }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const user = userData[role];  

  return (
    <>
      <header
        className={`${user.bgColor} h-40 flex items-center px-6 text-white shadow-md`}
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
          <div className={`w-14 h-14 rounded-full ${user.bgColor} flex items-center justify-center text-white text-xl font-bold`}>
            {userType?.charAt(0).toUpperCase()}
          </div>
          <span className={`font-bold ${user.color}`}>{username}</span>
          <span className="text-xs text-[#9B9B9B]">{userType}</span>
        </div>

        <nav className="flex flex-col items-center gap-6 py-6 mt-8">
          {user.menu.map((item) => {
            const Icon = item.icon;
             return (
              <Link
                key={item.name}
                to={"/"}
                className={`flex flex-col items-center ${user.color}`}
                onClick={() => setOpen(false)}
              >
                <Icon size={35} />
                <span className="text-sm mt-1 text-[#202020]">
                  {item.name}
                </span>
              </Link>
            );
          })}
          {/* <Link to="/" className="flex flex-col items-center text-[#D84E2F]">
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
          </Link> */}
        </nav>

        <div className="flex justify-center py-4">
          <img
            src={user.logo}
            alt="Logo PreCampus"
            className="w-40 select-none"
          />
        </div>

        <div className="mt-auto flex flex-col items-center gap-4 py-6">
          <span className="text-m text-[#202020]">Olá, precisa de ajuda?</span>
          <button className={`${user.bgColor} cursor-pointer text-white px-6 py-2 rounded-md text-sm`}>
            CONTATO
          </button>

          <button className={`${user.color} cursor-pointer`}>
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
