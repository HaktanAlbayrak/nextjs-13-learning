import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  console.log(posts);
  return (
    <div className={styles.blogsContainer}>
      <h1>
        {posts && posts.map((post) => <BlogCard {...post} key={post.id} />)}
      </h1>
    </div>
  );
}
