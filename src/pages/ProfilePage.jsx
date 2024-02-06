import Avatar from "../components/Avatar";
import Button from "../components/Button";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-white shadow">
      <div className="max-w-[68.5rem] max-h-[25.5rem] overflow-hidden rounded-lg mx-auto aspect-[1096/408] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/18364792/pexels-photo-18364792/free-photo-of-star-trails-over-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover"
        />
      </div>

      <div className="max-w-[68.5rem] px-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end pb-4">
        <div className="-mt-20 sm:-mt-5">
          <Avatar size={10} />
        </div>
        <div className="sm:flex-1">
          <div className="flex flex-col items-center gap-2 sm:items-start sm:mb-4">
            <h5 className="text-3xl font-semibold">Josh Wilson</h5>
            <span className="text-gray-500 font-medium">9 Friends</span>
            <div className="flex -space-x-2">
              <Avatar size={2} />
              <Avatar size={2} />
              <Avatar size={2} />
              <Avatar size={2} />
              <Avatar size={2} />
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:mb-4">
          <Button bg="blue" color="white">
            Confirm request
          </Button>
          <Button bg="green" color="white">
            Delete request
          </Button>
        </div>
      </div>
    </div>
  );
}
