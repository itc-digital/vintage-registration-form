import styled from 'styled-components';

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
`;

export const P = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    & + & {
        margin-top: 0.5rem;
    }
`;

export const UList = styled.ul`
    list-style-type: none;
    margin: 0.5rem 0;
    padding: 0 0 0 .5rem;
`;

export const Li = styled.li`
    :before {
        content: " - "
    }
`;
