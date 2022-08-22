import React from "react";
import { PostCard } from "../PostCard";
export const Posts = ({posts}) => {
    return(
        <div className="posts">
        {posts.map(post => (
         <PostCard
         key={post.id}
         title={post.title}
         id={post.id}
         body={post.body}
         cover={post.cover}
         />
        )
        )}
      </div>
    )
}