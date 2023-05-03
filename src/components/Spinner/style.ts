import styled, { css } from 'styled-components';

interface Interface {
	img?:any;
}

export const Container = styled.div<Interface>`
    background-color: #DC211E;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 300px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
	${({ img }) => img && css`background-image: url('${img}');`}	
`;