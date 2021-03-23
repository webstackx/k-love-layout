import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display:flex;
    padding:2.5rem 20rem;
    background:#ffdbdc;

    .Footer{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;

        &-Left {
            color: #707070;
            font-size: 1.1rem;
            font-weight: 300;
            line-height: 1;
        }
        &-Right{
            display:flex;
            align-items:center;
            

            &-Btn {
                cursor: pointer;
                font-size: 1rem;
                font-weight: 300;
                margin:0 4px;
                background:none;
                border:none;
                color:#525151;
                border:none;
                outline:none;
            }
        }
    }
`;