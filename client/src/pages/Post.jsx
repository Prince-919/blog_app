import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import CallToAction from "../components/CallToAction";

const Post = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [postSlug]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
      const data = await res.json();
      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      if (res.ok) {
        setPost(data.posts[0]);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader size={50} color="#00bf72" />
      </div>
    );
  }

  return (
    <div className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post?.title}
      </h1>
      <Link
        to={`/search?category=${post?.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post?.category}
        </Button>
      </Link>
      <img
        src={post?.image}
        alt={post?.title}
        className="mt-10 p-2 max-h-[600px] w-full object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 w-full max-w-2xl mx-auto text-xs">
        <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {(post?.content.length / 1000).toFixed()} mins read
        </span>
      </div>
      <div
        className="p-2 w-full max-w-2xl mx-auto post-content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>
      <div className="w-full max-w-4xl mx-auto">
        <CallToAction />
      </div>
    </div>
  );
};

export default Post;
