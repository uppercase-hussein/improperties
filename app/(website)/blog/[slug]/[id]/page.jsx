import BlogBody from '@/app/(website)/components/blog/BlogBody'
import client from '@/app/lib/contentful/client'
import React from 'react'
import Hero from '../../../components/app/Hero'

const SingleBlog = async ({params}) => {
  const {id} = params
  let post = await client.getEntry(id)
  let { title, slug, body, excerpt, coverImage, mainImage,  } = post.fields
   coverImage = coverImage?.fields.file.url
  return (
    <>
    <Hero title={title} imageUrl={coverImage}/>
    <BlogBody post={post} />
    </>
  )
}

export default SingleBlog