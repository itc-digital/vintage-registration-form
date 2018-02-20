import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 22px;
    font-size: 12px;
    box-sizing: border-box;
    border: 2px solid #6f6f71;
    border-left-color: #6f6f71;
    border-top-color: #6f6f71;
    border-right-color: #d2d2d2;
    border-bottom-color: #d1d1d1;
    background: #fff;
`;

const DropdownIcon = styled.button`
    background: #bdbdbd;
    border: 2px solid #6f6f71;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #6f6f71;
    border-bottom-color: #6f6f71;
`;

export default () => (
    <Container>
        Селект<DropdownIcon>▾</DropdownIcon>
    </Container>
);
