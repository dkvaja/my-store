import styled from "styled-components";

export const ProductItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .action-area {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid #2a76d1;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 0px;
    height: 100%;
    cursor: pointer;

    img {
      max-height: 300px;
      object-fit: cover;
      border-radius: 20px 20px 0px 0px;
    }

    div {
      padding: 1rem;
      height: 100%;
    }
  }

  button {
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
  }
`;
