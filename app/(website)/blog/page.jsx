import React from 'react'
import Hero from '../components/app/Hero'
import BlogPosts from '../components/blog/BlogPosts'


const BlogPage = () => {
  return (
    <>
    <Hero title="Our Blog" imageUrl="assets/images/blog/blog_header.jpeg"/>
    <BlogPosts />
    </>
  )
}

export default BlogPage