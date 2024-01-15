import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostLg = () => {
  const { data, isLoading, formatter } = usePost(373);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {data?.slice(6, 9).map((item) => (
        <a href={item.link} key={item.id}>
          <Post.Root>
            <hr />
            <Post.Date
              date={formatter.format(new Date(item.date))}
              variant="white"
            />
            <Post.Slug slug={`Customer experience`} variant="blue" />
            <Post.Title title={`${item.title.rendered}`} variant="white" />
          </Post.Root>
        </a>
      ))}
    </>
  );
};
