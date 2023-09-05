import client from "@/client";
import PostPreview from "@/components/PostPreview";
import { post } from "@/types";
import groq from "groq";
import postsStyles from "./posts.module.css";

const fetchPosts = async () => {
  const posts = await client.fetch(groq`
    *[_type == "post" && _createdAt < now()] | order(_createdAt desc)
  `);
  console.log("💣🚨 FETCHING POSTS");
  return posts;
};

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <div>
      <p>Aquí puedes ver todos mis posts publicados hasta ahora!</p>
      {posts && (
        <div className={postsStyles.container}>
          {posts.map((post: post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}