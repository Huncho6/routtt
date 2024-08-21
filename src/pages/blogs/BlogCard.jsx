import styled from "styled-components";
import { blogPosts } from "../../blogPost";
import Blog from "./Blog";

const Cad = styled.div`
  background-color: black;
  padding: 20px;
  min-height: 100vh; /* Ensures the background covers the entire page */
`;


const BlogCard = () => {
  return (
    <Cad>
      {blogPosts.map((blogPost, index) => (
        <Blog key={index} {...blogPost} />
      ))}
    </Cad>
  );
};

export default BlogCard;
