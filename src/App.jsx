import { Component } from 'inferno';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withFormik } from 'formik';
import Window from './Window';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import DropdownSelect from './DropdownSelect';
import FileInput from './FileInput';
import { H1, P } from './Typography';
import { RowSpacing, HR, Inline } from './Markup';

const FormContainer = styled.form`
    width: 304px;
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

    handleFileChange = e => {
        this.props.setFieldValue('file', e.currentTarget.files);
    };

    render() {
        const { page } = this.state;
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
        } = this.props;

        return (
            <FormContainer onSubmit={handleSubmit}>
                <Window title="Регистрация на курсы ITC">
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
                                        <Input
                                            type="text"
                                            name="firstname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                        />
                                    </Col>
                                </Row>

                                <RowSpacing />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Фамилия</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <Input
                                            type="text"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                        />
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
                                        <Label>Линк VK</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <Input />
                                    </Col>
                                </Row>

                                <RowSpacing />

                                <Row>
                                    <Col xs={4}>
                                        <Label>Email</Label>
                                    </Col>
                                    <Col xs={8}>
                                        <Input />
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
                                        <DropdownSelect
                                            values={['ФМЭСИ', 'ГРТСИ']}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {page === 3 && (
                            <div>
                                <Row>
                                    <Col xs={12}>
                                        <FileInput
                                            name="file"
                                            onChange={this.handleFileChange}
                                            files={values.file}
                                        />
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
                            <Col xs={12}>
                                <Inline right>
                                    {page > 0 && (
                                        <Button
                                            width="80px"
                                            onClick={this.prevPage}
                                        >
                                            {'<'} Назад
                                        </Button>
                                    )}
                                    <Button
                                        width="80px"
                                        onClick={this.nextPage}
                                    >
                                        Далее >
                                    </Button>
                                </Inline>
                            </Col>
                        </Row>
                    </Grid>
                </Window>
            </FormContainer>
        );
    }
}

export default withFormik({
    mapPropsToValues: props => ({ firstname: '', lastname: '' }),
    validate: (values, props) => {
        return {};
    },
    handleSubmit: (
        values,
        {
            props,
            setSubmitting,
            setErrors /* setValues, setStatus, and other goodies */
        }
    ) => {
        // submit
    }
})(App);
