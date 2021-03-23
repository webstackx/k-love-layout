import styled from "styled-components";

export const BrandWrapper = styled.div`
  display: flex;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  padding-right: 5rem;
  padding-left: 5rem;
  text-align: center;
  align-items: center;
  justify-content: flex-start;

  .brand {
    width: 100%;
  }
  .brand-header {
    font-size: 3rem;
    letter-spacing: 0.2rem;
    margin-top: 4rem;
  }
  .brand-title {
    padding: 2rem;
    padding-top: 1rem;
    color: grey;
    font-size: 1.2rem;
  }
  .brand-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .brand-background {
      flex: 0 0 25%;
      background-color: #fff;
      height: auto;
      margin-bottom: 4rem;
      position: relative;
      
      img {
        width: 17rem;
        height: 17rem;
        margin: 0px 0;
        border-radius: 4px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        object-fit: cover;
        opacity: 0.9;
        transition: all 0.8s;
        cursor: pointer;
        :hover {
          opacity: 1;
          box-shadow: 0 5px 5px grey;
        }
      }
      &-text {
        font-weight: 500;
        color: white;
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
        position: absolute;
        text-transform: uppercase;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
