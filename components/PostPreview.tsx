"use client";

import { post } from "@/types";
import globalsStyles from "../app/globals.module.css";
import { Image } from ".";
import { useRouter } from "next/navigation";

export default function PostPreview({ post }: { post: post }) {
  const router = useRouter();

  const {
    title = "",
    mainImage = null,
    slug,
    _createdAt = "",
    _updatedAt = null,
  } = post;

  const goToPost = () => {
    if (slug) {
      router.push(`/posts/${slug.current}`);
    }
  };

  return (
    <div
      className={globalsStyles["vertical-flex"]}
      onClick={goToPost}
      style={{
        position: "relative",
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
        cursor: "pointer",
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image source={mainImage} />
      <h1
        style={{
          backgroundColor: "#fae351",
          position: "absolute",
          bottom: "-0.5rem",
          left: "50%",
          transform: "translate(-50%, 0) rotate(-3deg)",
          width: "90%",
          textAlign: "center",
          padding: ".5rem 1rem",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
