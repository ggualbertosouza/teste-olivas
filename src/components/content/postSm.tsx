import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostSm = () => {
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
      {data?.slice(3, 9).map((posts) => (
        <a href={posts.link} key={posts.id}>
          <Post.Root>
            <Post.Title title={`${posts.title.rendered}`} />
            <Post.Date date={formatter.format(new Date(posts.date))} />
            <Post.Slug slug={`Customer experience`} />
            <hr className="border-[#707070]/25" />
          </Post.Root>
        </a>
      ))}
    </>
  );
};
