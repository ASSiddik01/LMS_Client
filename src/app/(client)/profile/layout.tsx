import ProtectedRoute from "@/utils/ProtectedRoute";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};
export default ProfileLayout;
