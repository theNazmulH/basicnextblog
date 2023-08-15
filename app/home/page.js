import Link from "next/link"

const Home = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-200">

          <ul className="flex gap-5">
              <Link href="/home">Home</Link>
              <Link href="/blog">Blog</Link>
          </ul>
      </nav>
          <h2 className="py-3 font-bold text-lg">Welcome to my blog. I hope you enjoy your stay.</h2>
     </div>
  )
}

export default Home