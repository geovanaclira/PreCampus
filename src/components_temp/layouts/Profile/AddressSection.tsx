import { useEditableSection } from "../../../hooks/useEditableSection";
import ProfileField from "./ProfileField";
import ProfileSection from "./ProfileSection";

export interface AddressForm {
  street: string;
  number: string;
  city: string;
  state: string;
  cep: string;
}

interface AddressSectionProps {
  title?: string;
  initialAddress: AddressForm;
  onSave: (address: AddressForm) => Promise<void>;
}

const AddressSection = ({
  title = "Endereço",
  initialAddress,
  onSave,
}: AddressSectionProps) => {
  const { isEditing, data, setData, startEditing, cancelEditing, saveEditing } =
    useEditableSection(initialAddress);

  return (
    <ProfileSection
      title={title}
      isEditing={isEditing}
      onEdit={startEditing}
      onSave={() => saveEditing(onSave)}
      onCancel={cancelEditing}
    >
      <ProfileField
        label="Rua"
        value={data.street}
        disabled={!isEditing}
        onChange={(v) => setData((p) => ({ ...p, street: v }))}
      />

      <ProfileField
        label="Número"
        value={data.number ?? ""}
        disabled={!isEditing}
        onChange={(v) => setData((p) => ({ ...p, number: v }))}
      />

      <ProfileField
        label="Cidade"
        value={data.city}
        disabled={!isEditing}
        onChange={(v) => setData((p) => ({ ...p, city: v }))}
      />

      <ProfileField
        label="Estado"
        value={data.state}
        disabled={!isEditing}
        onChange={(v) => setData((p) => ({ ...p, state: v }))}
      />

      <ProfileField
        label="CEP"
        value={data.cep}
        disabled={!isEditing}
        onChange={(v) => setData((p) => ({ ...p, cep: v }))}
      />
    </ProfileSection>
  );
};

export default AddressSection;
