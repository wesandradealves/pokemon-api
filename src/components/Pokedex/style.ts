import styled, { css } from 'styled-components';

interface Interface {
    backgroundColor?:any;
}

export const Container = styled.div<Interface>`
    color: #DC211E;
    position: relative;
    min-height: 100vh;
    width: 100%;
    &:hover .item {
        filter: blur(1px);
        cursor: pointer;
        &:hover {
            filter: initial;
            transform: scale(.99)
        }
    }
    .item {
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        position: relative;
        border: 0;
        box-shadow: initial;
        transition: 500ms ease all;
    }
    button.MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text.MuiPaginationItem-circular.MuiPaginationItem-textPrimary.Mui-selected {
        background: url('/assets/imgs/pokeball_icon.svg') center center / contain no-repeat;
        position: relative;
        overflow: hidden;
        font-size: 1pt;
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
        background: url(/assets/imgs/pokeball_icon.svg) center center / contain no-repeat transparent;
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