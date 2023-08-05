import Link from "next/link";
import styles from '../../styles/Blog.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { blogs: data }
    }
}

const Blogs = ({ blogs }) => {
    return (
        <div>
            <h1>All Blogs</h1>
            {blogs.map(blog => (
                <Link href={'/blogs/' + blog.id} key={blog.id} className={styles.single}>
                    <h3>{blog.name}</h3>
                </Link>
            ))
            }
        </div >
    );
}

export default Blogs;