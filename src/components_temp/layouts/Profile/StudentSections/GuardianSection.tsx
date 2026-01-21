import { useEffect } from "react";
import ProfileSection from "../ProfileSection";
import ProfileField from "../ProfileField";
import AddressSection from "../AddressSection";
import type { AddressForm } from "../AddressSection";
import { useEditableSection } from "../../../../hooks/useEditableSection";

export interface GuardianForm {
  fullName: string;
  relationship: string;
  email: string;
  address?: AddressForm;
}

interface GuardianSectionProps {
  initialGuardian: GuardianForm;
  onSaveGuardian: (guardian: GuardianForm) => Promise<void>;
  onSaveAddress: (address: AddressForm) => Promise<void>;
}

const GuardianSection = ({
  initialGuardian,
  onSaveGuardian,
  onSaveAddress,
}: GuardianSectionProps) => {
  const { isEditing, startEditing, cancelEditing, saveEditing } =
    useEditableSection(initialGuardian);

  const section = useEditableSection(initialGuardian);

  const { data, setData } = section;

  useEffect(() => {
    setData(initialGuardian);
  }, [initialGuardian]);

  return (
    <>
      <ProfileSection
        title="Dados do Responsável"
        isEditing={isEditing}
        onEdit={startEditing}
        onSave={() => saveEditing(onSaveGuardian)}
        onCancel={cancelEditing}
      >
        <ProfileField
          label="Nome"
          value={data.fullName}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, fullName: v }))}
        />

        <ProfileField
          label="Parentesco"
          value={data.relationship}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, relationship: v }))}
        />

        <ProfileField
          label="Email"
          value={data.email}
          disabled={!isEditing}
          onChange={(v) => setData((p) => ({ ...p, email: v }))}
        />
      </ProfileSection>

      {data.address && (
        <AddressSection
          title="Endereço do Responsável"
          initialAddress={data.address}
          onSave={onSaveAddress}
        />
      )}
    </>
  );
};

export default GuardianSection;
