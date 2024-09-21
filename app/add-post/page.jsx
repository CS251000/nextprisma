"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router= useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await fetch('/api/add-post',{
                method:'POST',
                headers:{
                'Content-Type':'application/json'
                },
                body: JSON .stringify({title,content})
                
        })
        router.refresh();
        }catch(err){
            console.log(err);
        }
        
        setTitle('');
        setContent('');
        
    };

    return (
        <main className="p-6 bg-black">
            <Link href={'/'}>HOME</Link>
            <h1 className="text-center text-2xl font-bold mb-6">Add Post</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-black p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 w-full text-black"
                        
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="border border-gray-300 rounded p-2 w-full text-black"
                        rows="4"
                    />
                </div>
                
                
                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
                    Add Post
                </button>
            </form>
        </main>
    );
}
