import React from 'react'
import Article from './Article';
import blogData from '../data/blog';

function ArticleList({ posts }) {
<Article title={blogData.title}
         date={blogData.date}
         minutes={blogData.minutes}
         preview={blogData.preview}
/>

  return (posts.map((post) => (
    <main key={post.id}>
      <h3>{post.title}</h3>
      <small>
        {post.date} • {post.minutes} min read
      </small>
      <p>{post.preview}</p>
    </main>
  ))
);
}

export default ArticleList