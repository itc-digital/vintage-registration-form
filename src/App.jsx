import { Component } from 'inferno';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withFormik } from 'formik';
import { isEmptyObject } from './utils';
import Window from './Window';
import ErrorsWrapper from './ErrorsWrapper';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import DropdownSelect from './DropdownSelect';
import FileInput from './FileInput';
import { H1, P, UList, Li } from './Typography';
import { RowSpacing, HR, Inline, Center } from './Markup';

const FormContainer = styled.form`
    width: 304px;
`;

class App extends Component {
    state = {
        page: 0
    };

    get pages() {
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            setFieldValue
        } = this.props;

        return [
            <div>
                <Row>
                    <Col xs={12}>
                        <P>
                            Привет! Хочешь записаться на наши курсы по
                            разработке?
                        </P>
                        <P>Представься пожалуйста.</P>
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
                            value={values.lastname}
                        />
                    </Col>
                </Row>
            </div>,
            <div>
                <Row>
                    <Col xs={12}>
                        <P>
                            Твои контакты. Если у тебя нет телеграма, придётся
                            его сделать - мы будем общаться через него.
                        </P>
                        <P>
                            Ещё мы будем работать с гитхабом, поэтому
                            зарегистрируйся и там.
                        </P>
                    </Col>
                </Row>

                <RowSpacing scale={3} />

                <Row>
                    <Col xs={4}>
                        <Label>GitHub</Label>
                    </Col>
                    <Col xs={8}>
                        <Input
                            type="text"
                            name="github"
                            onChange={handleChange}
                            value={values.github}
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
                            value={values.telegram}
                        />
                    </Col>
                </Row>
            </div>,
            <div>
                <Row>
                    <Col xs={12}>
                        <P>Где ты учишься?</P>
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
                            value={values.faculty}
                            name="faculty"
                            onChange={this.handleFacultyChange}
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
            </div>
        ];
    }

    nextPage = e => {
        if (this.state.page < this.pages.length - 1) {
            this.setState(state => ({ page: state.page + 1 }));
        }
        e.preventDefault();
    };

    prevPage = e => {
        if (this.state.page > 0) {
            this.setState(state => ({ page: state.page - 1 }));
        }
        e.preventDefault();
    };

    handleFilesChange = e => {
        this.props.setFieldValue('files', e.currentTarget.files);
    };

    handleFacultyChange = faculty => {
        this.props.setFieldValue('faculty', faculty);
    };

    resetErrors = e => {
        this.props.setErrors({});
        e.preventDefault();
    };

    render() {
        const { page } = this.state;
        const { errors, handleSubmit } = this.props;

        return (
            <FormContainer onSubmit={handleSubmit}>
                <ErrorsWrapper>
                    {!isEmptyObject(errors) && (
                        <Window title="Ошибка!">
                            <UList>
                                {Object.values(errors).map(value => (
                                    <Li>{value}</Li>
                                ))}

                                <RowSpacing scale={3} />
                                <Center>
                                    <Button
                                        width="60px"
                                        onClick={this.resetErrors}
                                    >
                                        ОK
                                    </Button>
                                </Center>
                            </UList>
                        </Window>
                    )}
                </ErrorsWrapper>
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
                                        <Button
                                            width="80px"
                                            onClick={this.prevPage}
                                        >
                                            {'<'} Назад
                                        </Button>
                                    )}
                                    {page === this.pages.length - 1 ? (
                                        <Button width="80px">Готово</Button>
                                    ) : (
                                        <Button
                                            width="80px"
                                            onClick={this.nextPage}
                                        >
                                            Далее {'>'}
                                        </Button>
                                    )}
                                </Inline>
                            </Col>
                        </Row>
                    </Grid>
                </Window>
            </FormContainer>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Укажи имя';
    }

    if (!values.lastname) {
        errors.lastname = 'Укажи фамилию';
    }

    if (!values.github) {
        errors.github = 'Укажи ник на GitHub';
    }

    if (!values.telegram) {
        errors.telegram = 'Укажи ник в телеграме';
    }

    if (!values.faculty) {
        errors.faculty = 'Укажи факультет';
    }

    if (!values.files.length) {
        errors.fileds = 'Прикрепи скриншот c пройденным Питонтьютором';
    }

    return errors;
};

export default withFormik({
    validateOnBlur: false,
    mapPropsToValues: () => ({
        firstname: '',
        lastname: '',
        vk: '',
        telegram: '',
        files: []
    }),
    handleSubmit: (values, { props, setSubmitting, setErrors }) => {
        console.log('handleSubmit');
        const errors = validate(values);
        if (isEmptyObject(errors)) {
            console.log('submit', values);
        } else {
            console.log('errors');
            setErrors(errors);
        }
    }
})(App);
