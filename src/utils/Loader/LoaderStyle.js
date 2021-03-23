import styled from 'styled-components';

const media = {
    mobile: '@media(max-width:600px)'
}

export const LoaderWrap = styled.div`
    background: #000000;
    display:grid;
    place-items: center;
    width:100%;
    height:100vh;
    transition: all 1s ease-out;

    .imageLogo {
        width:30%;

        ${media.mobile}{
            width: 80%;
        }
    }
`;