import { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { useAuth } from "../contexts/AuthContext";
import StudentProfileSection from "../components_temp/layouts/Profile/StudentSections/StudentProfileSection";
import AddressSection from "../components_temp/layouts/Profile/AddressSection";
import GuardianSection from "../components_temp/layouts/Profile/StudentSections/GuardianSection";

const Profile = () => {
  const { setTitle } = useHeader();
  const { user, updateUser } = useAuth();

  useEffect(() => {
    setTitle("Meu Perfil");
  }, []);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center py-4">
      {user.role === "student" && (
        <div className="flex w-full flex-col items-center gap-4">
          <StudentProfileSection
            initialData={{
              name: user.fullName,
              email: user.email,
              phone: user.phone,
              birthDate: user.birthDate,
              monthlyIncome: user.monthlyIncome,
              interestedCourses: user.interestedCourses,
              interestedUniversities: user.interestedUniversities,
            }}
          />

          {user.address && (
            <AddressSection
              title="Endereço do Aluno"
              initialAddress={user.address}
              onSave={(address) => updateUser({ address })}
            />
          )}

          {user.guardian && (
            <GuardianSection
              initialGuardian={user.guardian}
              onSaveGuardian={(guardian) => updateUser({ guardian })}
              onSaveAddress={(address) =>
                updateUser({ guardian: { ...user.guardian!, address } })
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
