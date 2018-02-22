import { Component } from 'inferno';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
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

const OverlaySelect = styled.select`
    position: absolute;
    width: 100%;
    opacity: 0;
`;

const Value = styled.div`
    padding: 3px;
`;

const DropdownIcon = styled.div`
    padding: 0;
    width: 16px;
    cursor: default;
    border: 2px solid #6f6f71;
    border-left-color: #d2d2d2;
    border-top-color: #d1d1d1;
    border-right-color: #6f6f71;
    border-bottom-color: #6f6f71;
    text-align: center;
    background: #bdbdbd;
`;

class DropdownSelect extends Component {
    state = {
        selectedIndex: 0
    };

    componentDidMount() {
        const { value, values } = this.props;
        this.setState({ selectedIndex: values.indexOf(value) + 1 });
    }

    handleChange = e => {
        const { selectedIndex } = e.target;
        const { onChange, values } = this.props;

        this.setState({ selectedIndex });

        if (onChange) {
            onChange(values[selectedIndex - 1]);
        }
    };

    render() {
        const { values } = this.props;
        const { selectedIndex } = this.state;
        const valuesWithDefault = ['Выберите...', ...values];

        return (
            <Container>
                <OverlaySelect
                    onChange={this.handleChange}
                    value={valuesWithDefault[selectedIndex]}
                >
                    {valuesWithDefault.map((value, i) => (
                        <option value={value} key={value} disabled={i === 0}>
                            {value}
                        </option>
                    ))}
                </OverlaySelect>
                <Value>{valuesWithDefault[selectedIndex]}</Value>
                <DropdownIcon>▾</DropdownIcon>
            </Container>
        );
    }
}

export default DropdownSelect;
