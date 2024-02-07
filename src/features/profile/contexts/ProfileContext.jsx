import { createContext, useState } from "react";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({
    id: 1,
    firstName: "Jim",
    lastName: "Bonne",
    profileImage:
      "https://images.pexels.com/photos/18049017/pexels-photo-18049017/free-photo-of-sunflowers-blooming-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/18364792/pexels-photo-18364792/free-photo-of-star-trails-over-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  const [profileUserFriends, setProfileUserFriends] = useState([
    {
      id: 1,
      firstName: "Jones",
      lastName: "Bonne",
      profileImage:
        "https://images.pexels.com/photos/19004684/pexels-photo-19004684/free-photo-of-model-in-sunglasses-and-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      coverImage:
        "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      firstName: "James",
      lastName: "Bonne",
      profileImage:
        "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      coverImage:
        "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [relationshipToAuthUser, setRelationshipToAuthUser] = useState("ME");
  return (
    <ProfileContext.Provider
      value={{ profileUser, profileUserFriends, relationshipToAuthUser }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
