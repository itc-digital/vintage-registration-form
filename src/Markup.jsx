import styled from 'styled-components';

export const RowSpacing = styled.div`
    width: 100%;
    height: ${({ scale }) => (scale ? scale * 5 + 'px' : '5px')};
`;

export const HR = styled.hr`
    width: 100%;
    margin: 0 -2px;
`;

export const Inline = styled.div`
    display: flex;
`;