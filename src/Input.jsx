import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const Input = styled(MaskedInput)`
    width: 100%;
    padding: 2px;
    font-size: 12px;
    box-sizing: border-box;
    border: 2px solid #d2d2d2;
    border-left-color: #6f6f71;
    border-top-color: #6f6f71;
    border-right-color: #d2d2d2;
    border-bottom-color: #d1d1d1;
    background: #fff;

    :focus {
        outline: 1px solid #333;
    }
`;

export default ({ mask, ...restProps }) => (
    <Input mask={mask ? mask : false} {...restProps} />
);
