import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  .arrows {
    position: absolute;
    top: 50%;
    bottom: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__icon1 {
      font-size: 3rem;
      padding-left: 3rem;
      cursor: pointer;
    }
    &__icon2 {
      font-size: 3rem;
      padding-right: 3rem;
      cursor: pointer;
    }
  }
`;

export const BannerCarosel = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center left;
  background-size: cover;
  padding: 16rem 0;

  .paraCarosel {
    width: 30%;
    margin-left: 20rem;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;
