import type { SocialLinkForm } from "../../../types/UniversityFormState";
import { Input } from "../../input";

interface Props {
  socialLinks: SocialLinkForm[];
  onChange: (links: SocialLinkForm[]) => void;
}

const SocialLinksFields = ({ socialLinks, onChange }: Props) => {
  function updateLink(
    index: number,
    field: keyof SocialLinkForm,
    value: string,
  ) {
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Redes sociais</p>

      {socialLinks.map((link, index) => (
        <div
          key={index}
          className="space-y-2 rounded-lg border border-[#bcd6f7] bg-[#f5f9fe62] p-4"
        >
          <Input
            label="Nome da rede social"
            value={link.name}
            onChange={(v) => updateLink(index, "name", v)}
          />

          <Input
            type="url"
            label="Link"
            value={link.url}
            onChange={(v) => updateLink(index, "url", v)}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => onChange([...socialLinks, { name: "", url: "" }])}
        className="text-sm text-violet-600"
      >
        + Adicionar rede social
      </button>
    </div>
  );
};

export default SocialLinksFields;
