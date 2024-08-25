import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styling for the blog card
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: silver;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
;`

// Styling for the blog card image
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
;`

// Styling for the content within the card
const Content = styled.div`
  padding: 20px;
;`

// Styling for the title
const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
;`

// Styling for the read more link
const ReadMore = styled.button`
  font-size: 16px;
  color: Blue;
  text-decoration: none;

  &:hover {
    color: #23527c;
  }
;`

const Blog = ({ title, slug, picture, content }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blog/${slug}`);
  };
  return (
    <Card>
      <Outlet />
      <Image src={picture} alt={name} />
      <h1>Title:{title}</h1>
      <div>Slug{slug}</div>
      <div>content:{content}</div>
      <ReadMore onClick={handleNavigate}> Check It Out</ReadMore>
    </Card>
  );
};

export default Blog;