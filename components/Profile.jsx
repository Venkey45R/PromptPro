import React from 'react'
import PromptCard from '@components/PromptCard'

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  const post = data;
  return (
    <section className='w-full '>
      <h1 className='text-left head_text'><span className=' blue_gradient'>{name} Profile</span></h1>
      <p className='text-left desc'>{desc}</p>
      <div className='mt-10 prompt_layout'>
        {data.map((post) =>(<PromptCard key={post._id} post={post} handleEdit={() => handleEdit && handleEdit(post)} handleDelete={() => handleDelete && handleDelete(post)} />))}
      </div>
    </section>
  )
}

export default Profile