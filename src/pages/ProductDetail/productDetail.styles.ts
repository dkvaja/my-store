import styled from "styled-components";

export const ProductDetailWrapper = styled.div`
  display: flex;
  min-height: 90vh;

  img {
    max-height: 600px;
    object-fit: cover;
  }
  .product-detail-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .center-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chip-container {
    display: flex;
    flex-wrap: wrap;
    .MuiChip-root {
      margin: 0px 15px 15px 0px;
    }
  }
  .product-detail {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .button-group {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    margin: 0px 15px 15px 0px;
  }
`;
