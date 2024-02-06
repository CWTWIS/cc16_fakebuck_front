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
    // <div className="bg-gradient-to-b from-gray-300 to-white shadow">
    //   <div className="max-w-[68.5rem] max-h-[25.5rem] overflow-hidden rounded-lg mx-auto aspect-[1096/408] flex items-center justify-center">
    //     <img
    //       src="https://images.pexels.com/photos/18364792/pexels-photo-18364792/free-photo-of-star-trails-over-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //       alt="cover"
    //     />
    //   </div>

    //   <div className="max-w-[68.5rem] px-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end pb-4">
    //     <div className="-mt-20 sm:-mt-5">
    //       <Avatar size={10} />
    //     </div>

    //     <div className="sm:flex-1">
    //       <ProfileInfo />
    //     </div>

    //     <div className="sm:mb-4">
    //       <ProfileAction />
    //     </div>
    //   </div>
    // </div>
  );
}
