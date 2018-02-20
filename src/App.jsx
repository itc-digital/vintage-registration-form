import { Component } from 'inferno';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Window from './Window';
import Button from './Button';
import TextInput from './TextInput';
import Label from './Label';
import { H1, P } from './Typography';
import { RowSpacing, HR, Inline } from './Markup';

const Container = styled.div`
    min-width: 272px;
`;

class App extends Component {
    state = {
        page: 0,
        name: ''
    };

    nextPage = () => {
        this.setState(state => ({ page: state.page + 1 }));
    };

    prevPage = () => {
        if (this.state.page > 0) {
            this.setState(state => ({ page: state.page - 1 }));
        }
    };

    render() {
        // Регистрация на курсы ITC

        const { page } = this.state;

        return (
            <Container>
                <Window title="Test">
                    <Grid fluid>
                        <Row>
                            <Col xs={12}>
                                <H1>itc frontend</H1>
                            </Col>
                        </Row>

                        <RowSpacing scale={2} />

                        {page === 0 && (
                            <div>
                                <Row>
                                    <Col xs={12}>
                                        <P>Представьтесь пожалуйста</P>
                                    </Col>
                                </Row>

                                <RowSpacing scale={3} />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Имя</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <TextInput />
                                    </Col>
                                </Row>

                                <RowSpacing />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Фамилия</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <TextInput />
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {page === 1 && (
                            <div>
                                <Row>
                                    <Col xs={12}>
                                        <P>Представьтесь пожалуйста</P>
                                    </Col>
                                </Row>

                                <RowSpacing scale={3} />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Профиль VK</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <TextInput />
                                    </Col>
                                </Row>

                                <RowSpacing />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Email</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <TextInput />
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {page === 2 && (
                            <div>
                                <Row>
                                    <Col xs={12}>
                                        <P>Представьтесь пожалуйста</P>
                                    </Col>
                                </Row>

                                <RowSpacing scale={3} />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Факультет</Label>
                                    </Col>
                                    <Col xs={8}>
                                        Селект
                                    </Col>
                                </Row>
                            </div>
                        )}

                        <RowSpacing scale={2} />

                        <Row>
                            <Col xs={12}>
                                <HR />
                            </Col>
                        </Row>

                        <RowSpacing scale={2} />

                        <Row end="xs">
                            <Col xs={page > 0 ? 8 : 4}>
                                <Inline>
                                    {page > 0 && (
                                        <Button onClick={this.prevPage}>
                                            {'<'} Назад
                                        </Button>
                                    )}
                                    <Button onClick={this.nextPage}>
                                        Далее >
                                    </Button>
                                </Inline>
                            </Col>
                        </Row>
                    </Grid>
                </Window>
            </Container>
        );
    }
}

export default App;
