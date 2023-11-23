// pages/index.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../lib/contentful';
import { setPosts } from '../redux/actions';
import Link from 'next/link';
import { RootState } from '../redux/store';

interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
  };
}

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      if (allPosts !== null) {
        dispatch(setPosts(allPosts));
      }
    };
  
    fetchPosts();
  }, [dispatch]);
  

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.sys.id}>
            <Link href={`/post/${post.fields.slug}`}>
              <a>{post.fields.title}</a>
            </Link>
          </li>
        )) || []} 
      </ul>

    </div>
  );
};

export default Home;
