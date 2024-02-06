import Avatar from "../components/Avatar";
import ProfileAction from "../features/profile/components/ProfileAction";
import ProfileContainer from "../features/profile/components/ProfileContainer";
import ProfileInfo from "../features/profile/components/ProfileInfo";
import ProfileContextProvider from "../features/profile/contexts/ProfileContext";

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  );
}
