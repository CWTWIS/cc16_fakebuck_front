import coverImage from "../../../assets/coverDefault.jpeg";

export default function CoverImage({ src, rounded }) {
  const defaultClasses =
    "max-w-[68.5rem] max-h-[25.5rem] overflow-hidden mx-auto aspect-[1096/408] flex items-center justify-center";
  const extendedClasses = rounded === "bottom" ? "rounded-b-lg" : "rounded-lg";
  const classes = defaultClasses + " " + extendedClasses;
  return (
    <div className={classes}>
      <img src={src || coverImage} alt="cover" />
    </div>
  );
}
