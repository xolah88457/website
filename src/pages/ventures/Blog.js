export const Blog = ({ posts }) => {
  // ...existing logic for handling posts

  return (
    <article className="blog-container">
      <Section className="blog-content">
        <header className="blog-header">
          <Heading level={1}>Blog</Heading>
        </header>
        <div className="blog-posts">
          {posts.map((post, index) => (
            <ArticlesPost key={post.slug} {...post} index={index} />
          ))}
        </div>
      </Section>
      <Footer />
    </article>
  );
};
