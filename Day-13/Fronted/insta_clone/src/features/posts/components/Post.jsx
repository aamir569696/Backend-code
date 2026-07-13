import React from 'react'

const Post = ({user,post}) => {
  return (
    <div className="post">
            <div className="top">
              <img src={post.imageurl} alt="" />
              <p>{post.user}</p>
            </div>

            <img src={post.imageurl} alt="" className="post-media" />

            <div className="bottom">
              <p className="caption"> {post.caption} </p>
            </div>
          </div>
  )
}

export default Post