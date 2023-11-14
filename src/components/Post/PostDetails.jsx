import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../redux/news/selectors';

const PostDetail = () => {
  const { postId } = useParams();
  const posts = useSelector(getPost);
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
