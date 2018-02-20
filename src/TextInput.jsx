import styled from 'styled-components';

const TextInput = styled.input`
    width: 100%;
    padding: 2px;
    font-size: 12px;
    box-sizing: border-box;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #d2d2d2;
    border-bottom-color: #d1d1d1;
    background: #fff;

    :focus {
        outline: 1px solid #333;
    }
`;

export default props => <TextInput type="text" {...props} />;
