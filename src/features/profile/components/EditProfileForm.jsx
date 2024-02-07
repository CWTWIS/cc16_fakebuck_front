import PictureForm from "./PictureForm";
import Avatar from "../../../components/Avatar";
import CoverImage from "../../profile/components/CoverImage";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        {(src) => <Avatar size={10.5} src={src} />}
      </PictureForm>
      <PictureForm title="Cover photo">
        {(src) => <CoverImage size={10.5} src={src} />}
      </PictureForm>
    </div>
  );
}
