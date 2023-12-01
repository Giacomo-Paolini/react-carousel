import posts from '../../data/posts';
import Card from './Card';

export default function PostList() {
  return posts.map(
    (post) =>
      post.published && (
        <Card
          key={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
          tags={post.tags}
        />
      ),
  );
}
