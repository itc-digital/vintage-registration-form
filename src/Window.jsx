import styled from 'styled-components';

const Window = styled.div`
    background: #bdbdbd;
    border: 2px solid;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #6f6f71;
    border-bottom-color: #6f6f71;
    font-family: 'Microsoft Sans Serif', sans-serif;
    font-smooth: never;
    -webkit-font-smoothing: none;
`;

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3px;
    padding-right: 32px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 13px;
    color: #fff;
    background: #00007b;
    background: linear-gradient(to right, #00007b 0%, #0d7fc6 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
            startColorstr='#00007b',
            endColorstr='#0d7fc6',
            GradientType=1
        );
`;

const Title = styled.div``;

const CloseButton = styled.div`
    padding: 0;
    background-color: #bdbdbd;
    outline: none;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #6f6f71;
    border-bottom-color: #6f6f71;
`;

const Content = styled.div`
    padding: 8px;
`;

export default ({ title, children }) => (
    <Window>
        <Bar>
            <Title>{title}</Title>
            <CloseButton />
        </Bar>
        <Content>{children}</Content>
    </Window>
);
