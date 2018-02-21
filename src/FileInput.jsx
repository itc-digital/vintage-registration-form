import styled from 'styled-components';

const InputHolder = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

const Label = styled.label`
    display: block;
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
    font-size: 0.75rem;
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

const FileInput = ({
    title, files, onChange, ...restProps
}) => (
    <div>
        <Label>
            {files && files.length ? files[0].name : title}
            <InputHolder type="file" onChange={onChange} {...restProps} />
        </Label>
    </div>
);

FileInput.defaultProps = {
    title: 'Прикрепить файл',
};

export default FileInput;
