import { useEffect } from "react";
import { Card } from "../components/Cards/Card";
import { useHeader } from "../contexts/HeaderContext";

const PainelEventos = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Painel de Eventos");
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          title="Evento 1"
          imageUrl="https://placehold.co/300x150"
          isFavorite={false}
          onToggleFavorite={() => console.log("clicou no coração")}
          variant="aluno"
        />

        <Card
          title="Evento 2"
          imageUrl="https://placehold.co/300x150"
          isFavorite={false}
          onToggleFavorite={() => console.log("clicou no coração")}
          variant="aluno"
        />

        <Card
          title="Evento 3"
          imageUrl="https://placehold.co/300x150"
          isFavorite={false}
          onToggleFavorite={() => console.log("clicou no coração")}
          variant="aluno"
        />

        <Card
          title="Evento 4"
          imageUrl="https://placehold.co/300x150"
          isFavorite={false}
          onToggleFavorite={() => console.log("clicou no coração")}
          variant="aluno"
        />

        <Card
          title="Evento 4"
          imageUrl="https://placehold.co/300x150"
          isFavorite={false}
          onToggleFavorite={() => console.log("clicou no coração")}
          variant="aluno"
        />
      </div>
    </>
  );
};

export default PainelEventos;
