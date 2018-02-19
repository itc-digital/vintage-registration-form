import { version, Component } from 'inferno';
import styled from 'styled-components';
import Window from './Window';
import Button from './Button';
import TextInput from './TextInput';

const Container = styled.div`
    padding: 8px;
`;

class App extends Component {
    state = {
        name: '',

    }

    render() {
        return (
            <Container>
                <Window>
                    Привет
                    <Button>Тык</Button>
                    <TextInput />
                </Window>
            </Container>
        );
    }
}

export default App;
