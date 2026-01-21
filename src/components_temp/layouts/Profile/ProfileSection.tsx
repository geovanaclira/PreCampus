import { SquarePen } from "lucide-react";
import ProfileActions from "./ProfileActions";

interface ProfileSectionProps {
  title: string;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const ProfileSection = ({
  title,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  children,
}: ProfileSectionProps) => {
  return (
    <div className="flex w-[60%] flex-col gap-4 rounded-xl bg-[#E2E8F0] px-10 py-5">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>

        {!isEditing && (
          <button onClick={onEdit} className="hover:text-blue-600">
            <SquarePen className="w-5" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">{children}</div>

      <ProfileActions
        isEditing={isEditing}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  );
};

export default ProfileSection;
