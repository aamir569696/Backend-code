import Post from "../components/Post";
import { useEffect } from "react";
import { UsePost } from "../Hook/UsePost";
import "../style/Feed.scss";

const Feed = () => {
  const { feed, loading, handleGetFeed } = UsePost();

    console.log("Current state:",{feed,loading})


  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

 // console.log(feed)

  return (
    <div className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post) => {
            return (
              <Post
               key={post.id || post._id}
                user={post.user}
                post={post}
               />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
