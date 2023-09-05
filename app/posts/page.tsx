import client from "@/client";
import { post } from "@/types";
import groq from "groq";
import Link from "next/link";
import postsStyles from "./posts.module.css";
import globalsStyles from "../globals.module.css";
import { Image } from "@/components";

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
          {posts.map((post: post) => {
            const {
              title = "",
              mainImage = null,
              slug,
              _createdAt = "",
              _updatedAt = null,
            } = post;
            return (
              <div
                key={post._id}
                className={`${globalsStyles["vertical-flex"]} ${postsStyles.post}`}
              >
                <Image source={mainImage} />
                <Link href={`/posts/${slug?.current}`}>👉 {title}</Link>{" "}
                {/* esto debe ser un título y debo hacer lick en el div para navegar */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
