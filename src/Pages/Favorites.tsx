import { CalendarDays, MapPin, CheckCircle } from "lucide-react";
import { useHeader } from "../contexts/HeaderContext";
import { useEffect } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  confirmed: boolean;
}

const eventsDefault: Event[] = [
  {
    id: 1,
    title: "Evento 1",
    date: "07/10/2025",
    location: "São Paulo, SP",
    confirmed: true,
  },
  {
    id: 2,
    title: "Evento 2",
    date: "15/10/2025",
    location: "Rio de Janeiro, RJ",
    confirmed: true,
  },
];

const MyConfirmedEvents = () =>{
    const { setTitle } = useHeader();

      useEffect(() => {
        setTitle("Eventos Favoritos");
    }, []);

  return (
    <div className="bg-slate-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-slate-200 rounded-xl shadow-md p-8">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h1 className="text-center text-xl font-semibold text-blue-900">
            Meus Eventos Confirmados
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-center gap-3">
          {['Hoje', 'Esta Semana', 'Este Mês', 'Todos'].map((filter: string) => (
            <button
              key={filter}
              className="px-4 py-1.5 rounded-full border border-blue-400 text-blue-600 text-sm hover:bg-blue-50 transition cursor-pointer"
            >
              {filter}
            </button>
          ))}
        </div>

        {eventsDefault.map((event: Event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow p-6 flex justify-between mt-2 items-start"
          >
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-blue-900">
                {event.title}
              </h2>

              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="px-4 py-1.5 rounded-md border border-blue-500 text-blue-600 text-sm hover:bg-blue-50 transition cursor-pointer">
                  Ver Detalhes
                </button>
                <button className="px-4 py-1.5 rounded-md border border-red-400 text-red-500 text-sm hover:bg-red-50 transition cursor-pointer">
                  Cancelar Presença
                </button>
              </div>
            </div>

            {event.confirmed && (
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle className="w-5 h-5" />
                Presença Confirmada
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyConfirmedEvents;
