interface ProfileActionsProps {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const ProfileActions = ({
  isEditing,
  onSave,
  onCancel,
}: ProfileActionsProps) => {
  if (!isEditing) return null;

  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <button
        onClick={onCancel}
        className="cursor-pointer rounded-lg border border-red-400 px-4 py-2 text-red-700 transition hover:bg-red-700 hover:text-white"
      >
        Cancelar
      </button>

      <button
        onClick={onSave}
        className="cursor-pointer rounded-lg border border-blue-700 px-4 py-2 text-blue-700 transition hover:bg-blue-700 hover:text-white"
      >
        Salvar
      </button>
    </div>
  );
};

export default ProfileActions;
