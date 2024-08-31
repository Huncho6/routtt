import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../../utils/blogPost";
import styled from "styled-components";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Container = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const BlogPreview = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const nextPost = useMemo(() => {
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    return blogPosts[currentIndex + 1];
  }, [slug]);

  const prevPost = useMemo(() => {
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    return blogPosts[currentIndex - 1];
  }, [slug]);

  const navigate = useNavigate();
  const goToNextPost = () => {
    if (nextPost) {
      navigate(`/blog/${nextPost.slug}`);
    }
  };

  const goToPrevPost = () => {
    if (prevPost) {
      navigate(`/blog/${nextPost.slug}`);
    }
  };

  const { theme } = useContext(ThemeContext);

  if (!post) return <div>Post not found</div>;

  return (
    <Container theme={theme}>
      <Image src={post.picture} alt={post.title} />
      <Content>
        <Title>{post.title}</Title>
        <Description>{post.content}</Description>
        <button onClick={() => navigate(-1)}>Close</button>
        <button onClick={goToNextPost}>Next</button>
        <button onClick={goToPrevPost}>previous</button>
      </Content>
    </Container>  
  );
};

export default BlogPreview;
