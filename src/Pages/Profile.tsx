import { useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { useAuth } from "../contexts/AuthContext";

import type { StudentUser } from "../types/User";
import StudentProfileMainSection from "../components_temp/layouts/Profile/StudentSections/StudentProfileMainSection";
import StudentProfileAddressSection from "../components_temp/layouts/Profile/StudentSections/StudentProfileAddressSection";
import StudentProfileGuardianSection from "../components_temp/layouts/Profile/StudentSections/StudentProfileGuardianSection";
import StudentProfileInterestsSection from "../components_temp/layouts/Profile/StudentSections/StudentProfileInterestsSection";

const Profile = () => {
  const { setTitle } = useHeader();
  const { user } = useAuth();

  useEffect(() => {
    setTitle("Meu Perfil");
  }, [setTitle]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center py-4">
      {user.role === "student" && (
        <div className="flex w-full flex-col items-center gap-4">
          <StudentProfileMainSection user={user as StudentUser} />
          <StudentProfileAddressSection user={user as StudentUser} />
          <StudentProfileGuardianSection user={user as StudentUser} />
          <StudentProfileInterestsSection user={user as StudentUser} />
        </div>
      )}
    </div>
  );
};

export default Profile;
