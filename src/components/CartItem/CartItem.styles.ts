import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid cadetblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .info,
  .button-group {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
