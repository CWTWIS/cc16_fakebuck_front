import PictureForm from "./PictureForm";
import Avatar from "../../../components/Avatar";
import CoverImage from "../../profile/components/CoverImage";
import useAuth from "../../../hook/use-auth";
import { updateUser } from "../../../api/user";

export default function EditProfileForm() {
  const {
    authUser: { profileImage, coverImage },
  } = useAuth();

  const updateProfileImage = (file) => {
    const formData = new FormData(); //object key ===> value
    formData.append("profileImage", file); //{profileImage: file}
    updateUser(formData);
  };
  const updateCoverImage = (file) => {
    const formData = new FormData(); //object key ===> value
    formData.append("coverImage", file); //{profileImage: file}
    updateUser(formData);
  };

  return (
    <div className="flex flex-col gap-4">
      <PictureForm
        title="Profile picture"
        initialSrc={profileImage}
        onSave={updateProfileImage}
      >
        {(src) => <Avatar size={10.5} src={src} />}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={coverImage}
        onSave={updateCoverImage}
      >
        {(src) => <CoverImage size={10.5} src={src} />}
      </PictureForm>
    </div>
  );
}
