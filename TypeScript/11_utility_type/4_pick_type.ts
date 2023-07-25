// Pick Type - Omit Type 반대

interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Post): Post {
  return post;
}

createPost({
  title: '개발자 취업',
  content: '2023년 하반기는 어떤가?',
  createdAt: new Date(),
});

// ⬇

function createPost2(post: Pick<Post, 'title' | 'content'>): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost2({
  title: '개발자 취업',
  content: '2023년 하반기는 어떤가?',
});
