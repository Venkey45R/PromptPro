"use client"; 
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreatePrompt = () => {
    const router = useRouter();
    const {data:session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        prompt: "",
        tag: "",
    })
    const CreatePrompt = async (e) =>{
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/prompt/new',{
                method: 'POST',
                body: JSON.stringify({
                    prompt: Post.prompt,
                    userId: session?.user.id,
                    tag: Post.tag,
                })
            })
            if(res.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setSubmitting(false);
        }
    }
    return (
        <Form type = "create" post = {Post} setPost = {setPost} handleSubmit = {CreatePrompt}/>
    )
}

export default CreatePrompt