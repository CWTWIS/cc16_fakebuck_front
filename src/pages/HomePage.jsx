import CreatePostContainer from "../features/post/components/CreatePostContainer";
import PostList from "../features/post/components/PostList";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 max-w-[44rem] mx-auto ">
      <CreatePostContainer />
      <PostList />
    </div>
  );
}
