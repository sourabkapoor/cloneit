import React from 'react';

const post = ({ body }) => {
  if(body.title!== null){
  return (
    <div> 
    	{
        <div className='pa2'>
			{body.title}<a className='f5 lh-copy link pointer mid-gray underline-hover' href={body.url}> { (body.url) } </a>
			<p className='f6 lh-copy mid-gray'>{body.points} points  |  {body.author}  |  {body.num_comments}</p>
        {body.story_text}
        </div>
      }	
    </div>
  );
  }
   else
  return null;
}

export default post;
