import axios from 'axios';
import  { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(result => setData(result.data))
      .catch(() => setError(true));
  }, []);

  if (error) return <p>Ошибка</p>;

  return (
    <div>
      {data.map(post => (
        <p key={post.id}>{post.body}</p>
      ))}
    </div>
  );
};

export default Posts;