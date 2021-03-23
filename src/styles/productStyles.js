import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  padding-right: 8rem;
  padding-left: 8rem;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 6rem;

  .product {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    &-image-container {
      width: 100%;
      display: flex;
      flex-direction:column;
      /* flex: 0 0 50%; */
      /* flex-wrap: wrap; */
      background-color: aliceblue;
      &-top {
        img {
          width: 100%;
          height: 20rem;
          object-fit: cover;
          transition: transform 1s ease-in-out;
          :hover {
            transform: scale(1.05);
          }
        }
      }
      &-bottom {
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        img {
          width: 15rem;
          height: 20rem;
          object-fit: cover;
          /* padding-left: 1rem;
          padding-right: 1rem; */
          padding-top: 2rem;
          transition: transform 1s ease-in-out;
          :hover {
            transform: scale(1.05);
          }
        }
      }
    }
    &-about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem;
      &-header {
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
      }
      &-desc {
        line-height: 1.5;
        padding-top: 3rem;
        padding-bottom: 3rem;
        color: grey;
        letter-spacing: 0.1rem;
      }
      &-feature {
        display: flex;
        line-height: 2;
        flex-direction: column;

        &-1,
        &-2 {
          display: flex;
          color: #071f3e;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          font-size: 1.2rem;
          span {
            display: flex;
            font-size: 2rem;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
