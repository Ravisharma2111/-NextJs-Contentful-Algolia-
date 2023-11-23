// components/PostList.tsx
import Link from 'next/link';
import { useSelector,  } from 'react-redux';
import { Post,RootState } from '../redux/types';


const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.sys.id}>
            <Link href={`/post/${post.fields.slug}`}>
              <a>{post.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;