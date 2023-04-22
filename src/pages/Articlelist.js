import articles from './article-content'
import { Link } from 'react-router-dom';
import Articles from '../components/Articles';
import React from 'react'

const Articlelist = () => {
  return (
    <div className='mb-20'>
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Article List Page</h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
            <Articles  articless={articles}/>
        </div>
      </div>
    </div>
    );
}

export default Articlelist