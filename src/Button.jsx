import { Component } from 'inferno';
import styled from 'styled-components';

const Button = styled.div`
    padding: 2px;
    font-size: 14px;
    text-align: center;
    background: #bdbdbd;
    outline: none;
    border: 2px solid;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #6f6f71;
    border-bottom-color: #6f6f71;
    color: #000;

    :active {
        border-left-color: #6f6f71;
        border-top-color: #6f6f71;
        border-right-color: #d2d2d2;
        border-bottom-color: #d1d1d1;
    }

    :focus {
        box-shadow: 0 0 0 1px black;
    }
`;

export default props => <Button {...props} />;
