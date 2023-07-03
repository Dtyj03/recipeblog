import React from 'react'
import { marked } from 'marked';

const Post = ({article}) => {
    console.log(article)
    const {title, desc, featuredImage, chef,chefname} = article.fields
    const postDesc = desc ? marked(desc) : '';
  return (
    <div className='post'>
        <h2 className='title'>{title}</h2>
        {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={title} title={title}/>}
        <section dangerouslySetInnerHTML={{ __html: postDesc }}></section>
        <div className='bg'>
        <p className='chefname'>Recipe by: {chefname}</p>
        {chef &&<img className='chef' src={chef.fields.file.url} alt={title} title={title}/> }
        </div>
        
    </div>
  )
}

export default Post