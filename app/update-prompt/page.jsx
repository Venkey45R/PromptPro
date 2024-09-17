"use client"; 
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const UpdatePrompt = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [Post, setPost] = useState({
        prompt: "",
        tag: "",
    })
    useEffect(()=>{
        const getPromptDetails = async() =>{
            const response = await fetch(`api/prompt/${promptId}`)
            const data = await response.json()
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }
        if(promptId) getPromptDetails();
    },[promptId])

    const UpdatePrompt = async (e) =>{
        e.preventDefault();
        setSubmitting(true);
        if(!promptId) return alert('prompt ID not found');
        try {
            const res = await fetch(`/api/prompt/${promptId}`,{
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: Post.prompt,
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
        <Form type = "Edit" post = {Post} setPost = {setPost} handleSubmit = {UpdatePrompt}/>
    )
}

export default UpdatePrompt