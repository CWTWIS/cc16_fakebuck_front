import ProfileContextProvider from "../contexts/ProfileContext";
import ProfileAction from "./ProfileAction";
import ProfileInfo from "./ProfileInfo";
import Avatar from "../../../components/Avatar";
import CoverImage from "./CoverImage";
import useProfile from "../hooks/use-profile";

export default function ProfileContainer() {
  const {
    profileUser: { coverImage, profileImage },
  } = useProfile();
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <CoverImage src={coverImage} />

      <div className="max-w-[68.5rem] px-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end pb-4">
        <div className="-mt-20 sm:-mt-5">
          <Avatar size={10} src={profileImage} />
        </div>

        <div className="sm:flex-1">
          <ProfileInfo />
        </div>

        <div className="sm:mb-4">
          <ProfileAction />
        </div>
      </div>
    </div>
  );
}
