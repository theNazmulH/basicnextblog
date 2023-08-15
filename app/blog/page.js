
import Link from 'next/link';
import blogs from '../../data/blogData.json';
const Blog = () => {
    
    
  return (
      <div>
          <h3 className='font-bold text-lg border-b py-3'>My blog Posts</h3>
          <div className="blog-lists flex flex-wrap gap-y-4 px-4">
            {blogs.map((blog) => {
                return (
                    <div className='cursor-pointer p-3 w-1/3  items-center h-full'>
                        <div className='border p-4 text-center bg-slate-200 relative hover:bg-violet-600 hover:text-white transition'>
                                <span className='font-bold text-[100px] text-gray-400 absolute top-0 right-4 leading-none opacity-30 z-0'>{blog.id}</span>
                            <Link href={`blog/${blog.id}`} className='flex items-center relative min-h-[300px]'>
                                <span className='z-1 relative'>{blog.title}</span>
                                </Link>
                            </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Blog