import styled, { css } from 'styled-components';
// import pokeball from './assets/pokeball.png';

interface Interface {
    backgroundColor?:any;
}

export const Container = styled.div<Interface>`
    color: #1E252E;
    position: relative;
    min-height: 100vh;
    width: 100%;
    .item {
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        position: relative;
        border: 0;
        box-shadow: initial;
    }
`;

export const Card = styled.div<Interface>`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
    border: 0;
    box-shadow: initial;
    border-radius: 20px;
    > * {
        position: relative;
        z-index: 3;
    }
    &::before {
        content: '';
        height: 250px;
        width: 250px;
        margin: -65px;
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        background: url(https://icon-icons.com/downloadimage.php?id=136305&root=2248/SVG/&file=pokeball_icon_136305.svg) center center / contain no-repeat transparent;
        z-index: 1;
        opacity: .1;
    }  
    ${({ backgroundColor }) => backgroundColor && css`
        &::after {
            background-color: ${backgroundColor};
            content: '';
            display:  block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            opacity: .7;
            color: white;
        }
    `}
`;

export const CardTitle = styled.h3<Interface>`
    text-transform: uppercase;
    font-size: 1.2rem;
    color: white;
`;

export const CardInfo = styled.div<Interface>`
    flex: 1;
    .list {
        > *:not(:last-child) {
            margin-bottom: 4px
        }
    }
`;

export const CardFooter = styled.div<Interface>`
    .list {
        > * {
            &:not(:last-child) {
                margin-right: 2px
            }
            &:not(:first-child) {
                margin-left: 2px
            }
        }
    }
`;

export const HighlightItem = styled.li<Interface>`
    background-color: rgba(0,0,0,.1);
    ${({ backgroundColor }) => backgroundColor && css`background-color: ${backgroundColor};`}
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 999px;
    padding: 5px; 
`;

export const ListItem = styled.ul<Interface>`

`;

export const Thumbnail = styled.img<Interface>`

`;