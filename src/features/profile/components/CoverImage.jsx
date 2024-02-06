import coverImage from "../../../assets/coverDefault.jpeg";

export default function CoverImage({ src }) {
  return (
    <div className="max-w-[68.5rem] max-h-[25.5rem] overflow-hidden rounded-lg mx-auto aspect-[1096/408] flex items-center justify-center">
      <img src={src || coverImage} alt="cover" />
    </div>
  );
}
