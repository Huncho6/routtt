import styled from "styled-components"

const ErrorPagesContainer = styled.div `
 display: flex,
 flex-direction: column;
 align-items: center;
 height: 100vh;
 background-color: #f8f8f8;
`;

const ErrorMessage = styled.h1`
font-size: 48px;
color: #333;
margin-bottom: 16px;
`;

const ErrorDescription = styled.p `
font-size: 24px;
color: #666;
`;


const ErrorPages = () => {
  return (
   <ErrorPagesContainer>
    <ErrorMessage>404</ErrorMessage>
    <ErrorDescription>Page no found</ErrorDescription>
   </ErrorPagesContainer>
  )
}

export default ErrorPages