import styled from 'styled-components';

export const KeepTouchWrapper = styled.div`
    display:flex;
    padding:2.5rem 20rem;
    background-color:#8a5580;

    .KeepTouch {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;

        &-Head {
            color: #fff;
            font-size:2rem;
            font-weight:550;
        }
        &-Subhead {
            margin-top:1.2rem;
            font-size:1.5rem;
            color: #fff;
        }
        &-Controls {
            margin: 1.2rem 0;
            display:flex;
            align-items:center;
            width:100%;
            justify-content:center;

            &-Text {
                padding: 0.6rem 1rem;
                border-radius:4px;
                border:none;
                font-size:0.9rem;
                width:40%;
            }
            &-Btn {
                margin-left: 0.5rem;
                background:#2d2d2d;
                border:none;
                padding: 0.6rem 1rem;
                font-size:0.9rem;
                font-weight:550;
                border-radius:4px;
                cursor: pointer;
                width:15%;
                color:#fff;
                outline:none
            }
        }
        &-Footer{
                font-size:1rem;
                color:#fff;

            span {
                color:#000000;
                /* font-weight:bold; */
                cursor: pointer;
            }
        }
        &-Links {
            display:flex;
            justify-content:space-between;
            margin: 2rem auto auto;
            width:25%;

            &-Icon {
                color: white;
                cursor: pointer;
            }
        }
    }
`;