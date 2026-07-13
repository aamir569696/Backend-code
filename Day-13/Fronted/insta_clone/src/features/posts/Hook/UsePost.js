
import { useContext } from 'react'
import {getFeed} from '../services/Post.api'
import { PostContext } from '../Post.context'


export const UsePost=()=>{

  const context=  useContext(PostContext)
  const {loading,setLoading,post,setPost,feed,setFeed}=context

  const handleGetFeed=async ()=>{
    setLoading(true)
   const data=await getFeed()
   setFeed(data.posts)
   setLoading(false)
  }

  return {loading,post,feed,handleGetFeed}


}