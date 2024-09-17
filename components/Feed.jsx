"use client";
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) =>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) =>(<PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />))}
    </div>
  )
}


const Feed = () => {
  
  const [searchText, setSearchText] = useState('');
  const [post, setPost] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);

  useEffect(()=>{
    const fetchPost = async() =>{
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPost(data);
    }
    fetchPost();
  },[])

  useEffect(()=>{
    const filtered = post.filter(po => {
      if(po.tag.includes(searchText)){
        return po;
      }
      if(po.prompt.includes(searchText)){
        return po;
      }
    });
    setFilteredPost(filtered);
    console.log(filteredPost);
  },[searchText])
  
  return (
    <section className=' feed'>
      <form className='relative flex justify-center w-full '>
        <input type='text' placeholder='search...' onChange={(e) => setSearchText(e.target.value)} required className='search_input peer'/>
      </form>
      <PromptCardList data = {filteredPost.length == 0 ? post : filteredPost} handleTagClick={() =>{}}/>
    </section>
  )
}

export default Feed;