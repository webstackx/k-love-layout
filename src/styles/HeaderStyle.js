import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  background: ${(props) => (props.isBackground ? "#ffffff" : "transparent")};
  box-sizing: border-box;
  transition: all 1s ;

  .logo {
    margin-left: 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__img {
      width: 40px;
      height: 40px;
      margin-right: 0.6rem;
    }
  }

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__para {
      padding: 0.1rem;
      margin-right: 4rem;

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid #000000;
      }
    }
  }

  .inputCart {
    margin-right: 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__searchDiv {
      position: absolute;
      top: 110%;
      right: 22rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 18%;
      transition: all 1s ease-in;

      &--input {
        padding: 0.8rem;
        border: none;
        border-radius: 4px;
        background: #ffffff;
        width: 100%;

        &:focus {
          outline: none;
        }
      }

      &--button {
        padding: 0.8rem;
        border: none;
        margin-left: 0.5rem;
        border-radius: 4px;
        background: #8a5580;
        color: #ffffff;

        &:focus {
          outline: none;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    &__search,
    &__cart {
      font-size: 1.2rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
`;
