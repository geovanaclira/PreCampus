import {Heart} from "lucide-react";

type CardVariant = "aluno" | "universidade" | "escola";

interface CardProps {
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  variant?: CardVariant;
}

export function Card({ title, imageUrl, isFavorite, onToggleFavorite, variant ="universidade" }: CardProps) {

    const heartColor = variant === "aluno" ? "#D84E2F" : "#006607";

    return (
        <div className="w-64 rounded-xl shadow-md overflow-hidden bg-white">
           <img
                src={imageUrl}
                alt="Imagem Evento"
                className="h-32 w-full object-cover"
           />
            <div className="flex items-center justify-between p-3">
                <h3 className="font-semibold text-sm">{title}</h3>

                <button onClick={onToggleFavorite}>
                    <Heart
                    size={25}
                    style={{
                        color: heartColor,
                        fill: isFavorite ? heartColor : "transparent",
                    }}
                    />
                </button>
            </div>
        </div>
    )
}