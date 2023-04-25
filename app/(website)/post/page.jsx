import BlogBody from '@/app/(website)/components/blog/BlogBody'
import client from '@/app/lib/contentful/client'
import React from 'react'
import Hero from '../components/app/Hero'

const SingleBlog = async ({searchParams}) => {
  const {ref} = searchParams
  console.log(ref)
  let post = await client.getEntry(ref)
  let { title, coverImage,  } = post.fields
   coverImage = coverImage?.fields.file.url
  return (
    <>
    <Hero title={title} imageUrl={coverImage}/>
    <BlogBody post={post} />
    </>
  )
}

export default SingleBlog