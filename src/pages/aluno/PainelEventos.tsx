import { Card } from "../../components/cards/Card";
import Header from "../../components/HeaderMenu/Header";

export function PainelEventos() {
    return (
        <>
      <Header title="Painel de Eventos" bgColor="bg-[#D84E2F]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-4">
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
      </div>
    </>
    )
}