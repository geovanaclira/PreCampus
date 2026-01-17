import { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  IdentificationIcon
} from "@heroicons/react/24/outline";

export function Event() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">

    
      <header className="bg-orange-600 text-white px-4 py-4 flex justify-between items-center">
        <button className="text-2xl">☰</button>
        <h1 className="text-lg font-semibold">Evento 1</h1>
      </header>

      <div className="max-w-3xl mx-auto p-4">

        <div className="bg-blue-600 h-52 md:h-64 rounded-lg mb-5"></div>

        <h2 className="text-xl font-bold">Evento 1</h2>

        <p className="text-sm text-gray-500 mb-3">
          Escola São José • <span className="font-semibold">1020 pessoas garantiram presença</span>
        </p>

        <p className="text-gray-600 mb-6">
          O evento tem como objetivo reunir participantes para discutir temas atuais,
          promover networking e compartilhar conhecimentos relevantes para a área.
        </p>

        <div className="space-y-3 text-gray-700 mb-8">

          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <span>17/11/2026</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-blue-600" />
            <span>Rua 123 - 230</span>
          </div>

          <div className="flex items-center gap-2">
            <IdentificationIcon className="w-5 h-5 text-blue-600" />
            <span>Geral</span>
          </div>

        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md font-semibold shadow-md"
          >
            GARANTIR PRESENÇA
          </button>
        </div>

      </div>

        {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
            <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-2xl p-8 relative animate-fade">

            <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
                ✕
            </button>

            <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-500 text-3xl">
                ✓
                </div>
            </div>

            <h2 className="text-center font-bold text-xl">
                Presença confirmada!
            </h2>

            <p className="text-center text-gray-500 mt-3">
                Verifique seu email para mais informações
            </p>

            </div>
        </div>
        )}

        </div>
        );
        }