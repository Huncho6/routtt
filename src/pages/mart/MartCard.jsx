import { useContext } from "react";
import styled from "styled-components";
import { MartContext } from "../../context/MartContext";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled{
  background-color: #ccc;
  }
`;

const MartCard = ({ car }) => {
  const  { addToCart, cart } = useContext(MartContext);
  const isAdded = cart.find((cartItem) => cartItem.id === car.id);

  return (
    <CardContainer>
      <ProductImage src={car.image} alt="Product" />
      <ProductName>{car.name}</ProductName>
      <ProductPrice>{car.price}</ProductPrice>
      <AddToCartButton disabled={isAdded} onClick={() => addToCart(car)}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default MartCard;