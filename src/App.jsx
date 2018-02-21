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
    };

    get pages() {
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            setFieldValue,
        } = this.props;

        return [
            <div>
                <Row>
                    <Col xs={12}>
                        <P>
                            Привет! Мы рады, что ты хочешь записаться на наши курсы по разработке.
                        </P>
                        <P>
                            Но прежде, чем заполнять эту форму, не забудь выполнить вступительные
                            испытания.
                        </P>
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
            </div>,
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
                        <Input
                            type="text"
                            name="vk"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.vk}
                        />
                    </Col>
                </Row>

                <RowSpacing />

                <Row>
                    <Col xs={4}>
                        <Label>Telegram</Label>
                    </Col>
                    <Col xs={8}>
                        <Input
                            type="text"
                            name="telegram"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.telegram}
                        />
                    </Col>
                </Row>
            </div>,
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
                            name="faculty"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Col>
                </Row>
            </div>,
            <div>
                <Row>
                    <Col xs={12}>
                        <FileInput
                            name="files"
                            onChange={this.handleFilesChange}
                            files={values.files}
                        />
                    </Col>
                </Row>
            </div>,
        ];
    }

    nextPage = () => {
        this.setState(state => ({ page: state.page + 1 }));
    };

    prevPage = () => {
        if (this.state.page > 0) {
            this.setState(state => ({ page: state.page - 1 }));
        }
    };

    handleFilesChange = (e) => {
        this.props.setFieldValue('files', e.currentTarget.files);
    };

    render() {
        const { page } = this.state;
        const { handleSubmit } = this.props;

        return (
            <FormContainer onSubmit={handleSubmit}>
                <Window title="Регистрация на курсы разработке от ITC">
                    <Grid fluid>
                        <Row>
                            <Col xs={12}>
                                <H1>itc frontend</H1>
                            </Col>
                        </Row>

                        <RowSpacing scale={2} />

                        <div>{this.pages[page]}</div>

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
                                        <Button width="80px" onClick={this.prevPage}>
                                            {'<'} Назад
                                        </Button>
                                    )}
                                    <Button width="80px" onClick={this.nextPage}>
                                        Далее {'>'}
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
    mapPropsToValues: () => ({
        firstname: '',
        lastname: '',
        vk: '',
        telegram: '',
        files: [],
    }),
    validate: (values, props) => {
        const errors = {};

        if (!values.firstname) {
            errors.firstname = 'Укажи имя';
        }

        if (!values.lastname) {
            errors.lastname = 'Укажи фамилию';
        }

        if (!values.vk) {
            errors.vk = 'Укажи ссылку VK';
        }

        if (!values.telegram) {
            errors.telegram = 'Укажи ник в телеграме';
        }

        if (!values.faculty) {
            errors.faculty = 'Укажи факультет';
        }

        return errors;
    },
    handleSubmit: (
        values,
        { props, setSubmitting, setErrors /* setValues, setStatus, and other goodies */ },
    ) => {
        // submit
    },
})(App);
