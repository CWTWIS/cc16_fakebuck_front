import profileImg from "../assets/profileImage.png";

export default function Avatar({ src, size = 2.5 }) {
  return (
    <img
      src={src || profileImg}
      alt="user"
      className="rounded-full"
      style={{ width: `${size}rem`, height: `${size}rem` }}
    />
  );
}
