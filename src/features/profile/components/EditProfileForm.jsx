import PictureForm from "./PictureForm";
import Avatar from "../../../components/Avatar";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        {/* <Avatar
          size={10.5}
          src={file ? URL.createObjectURL(file) : undefined}
        /> */}
      </PictureForm>
      <PictureForm title="Cover photo" />
    </div>
  );
}
