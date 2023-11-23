// pages/[slug].tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostBySlug } from '../lib/contentful';
import { setPost } from '../redux/actions';
import { RootState } from '../redux/store';

const PostDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post);

  useEffect(() => {
    const fetchPost = async () => {
      const singlePost = await getPostBySlug(slug);
      dispatch(setPost(singlePost));
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, dispatch]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.content}</p>
    </div>
  );
};

export default PostDetail;
