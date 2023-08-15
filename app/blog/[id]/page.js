import blogs from '../../../data/blogData.json';
const Post = ({params}) => {
    const blogId = params.id - 1;
    console.log('blogId', blogs[blogId].title);
    
  return (
      <div className="text-slate-700">
          <h1 className='my-2 font-bold text-3xl border-b py-3'>{blogs[blogId].id} - {blogs[blogId].title}</h1>
          <i>Posted at: {blogs[blogId].date}</i>
          <p className='my-2'>{blogs[blogId].content}</p>
      </div>
  )
}

export default Post