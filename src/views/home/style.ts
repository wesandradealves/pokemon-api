import styled, { css } from 'styled-components';

interface Interface {
	img?:any;
}

export const Section = styled.section<Interface>`
    width: 100%;
    position: relative;
    min-height: 100vh;
    &::after {
        content: '';
        background: url(https://icon-icons.com/downloadimage.php?id=136305&root=2248/SVG/&file=pokeball_icon_136305.svg) center center / contain no-repeat transparent;
        height: 300px;
        width: 300px;
        margin: -140px;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        opacity: .1;
    }    
`;

export const Container = styled.div<Interface>`
    color: black;
`;

export const Title = styled.h1<Interface>`
`;

export const Subtitle = styled.small<Interface>`
    font-size: .8rem;
    font-weight: 300;
`;