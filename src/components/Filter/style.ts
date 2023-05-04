import styled, { css } from 'styled-components';

interface Interface {
	img?:any;
}

export const Container = styled.ul<Interface>`

`;

export const FilterItem = styled.li<Interface>`
	font-size: .8rem;
	font-weight: 300;
	cursor: pointer;
`;

export const Text = styled.p<Interface>`

`;