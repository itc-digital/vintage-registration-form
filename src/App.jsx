import { Component } from 'inferno';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { withFormik } from 'formik';
import { isEmptyObject } from './utils';
import * as masks from './masks';
import submit from './submit';
import Window from './Window';
import ErrorsWrapper from './ErrorsWrapper';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import DropdownSelect from './DropdownSelect';
import FileInput from './FileInput';
import { H1, P, UList, Li } from './Typography';
import { RowSpacing, HR, Inline, Center } from './Markup';

const Container = styled.div`
    width: 304px;
`;

const FormContainer = styled.form`
    width: 304px;
`;

class App extends Component {
    state = {
        page: 0
    };

    get pages() {
        const { values, handleChange } = this.props;

        return [
            <div>
                <Row>
                    <Col xs={12}>
                        <P>
                            Привет! Хочешь записаться на наши курсы по
                            фронтэнду? Тогда заполни эту форму. Все поля
                            обязательны для заполнения.
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
                            его сделать - мы будем общаться через него. <br />
                            <a
                                href="http://telegramzy.ru/nik-v-telegramm/"
                                target="_blank"
                            >
                                Как получить ник в Telegram?
                            </a>
                        </P>
                        <P>
                            Ещё мы будем работать с{' '}
                            <a href="https://github.com/" target="_blank">
                                гитхабом
                            </a>, поэтому зарегистрируйся и там.
                        </P>
                    </Col>
                </Row>
                <RowSpacing scale={3} />
                <Row>
                    <Col xs={4}>
                        <Label>VK</Label>
                    </Col>
                    <Col xs={8}>
                        <Input
                            type="text"
                            name="vk"
                            showMask
                            mask={masks.vk}
                            placeholderChar={' '}
                            guide={false}
                            onChange={handleChange}
                            onBlur={this.handleBlur}
                            value={values.vk}
                        />
                    </Col>
                </Row>
                <RowSpacing />
                <Row>
                    <Col xs={4}>
                        <Label>GitHub</Label>
                    </Col>
                    <Col xs={8}>
                        <Input
                            type="text"
                            name="github"
                            showMask
                            mask={masks.github}
                            placeholderChar={' '}
                            guide={false}
                            onChange={handleChange}
                            onBlur={this.handleBlur}
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
                            mask={masks.telegram}
                            placeholderChar={' '}
                            guide={false}
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
                            values={[
                                'ФМЭСИ',
                                'ФФ',
                                'ФМа',
                                'ФМе',
                                'ФЭП',
                                'ФЭТТ',
                                'ГРТСИ',
                                'МШБиМЭ',
                                'Капитаны России',
                                'ИУиСЭП',
                                'БШМиП',
                                'Integral'
                            ]}
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
                        <P>
                            Наш курс предполагает, что ты уже умеешь писать HTML
                            и CSS. Поэтому для завершения регистрации пройди{' '}
                            <a
                                href="https://htmlacademy.ru/courses/4/"
                                target="_blank"
                            >
                                "Знакомство" от HTML Academy
                            </a>.
                        </P>
                        <P>
                            Если ты уже знаком(а) с HTML и CSS, это задание не
                            займёт много времени. А если нет, то знаний,
                            полученных от прохождения хватит для поступления к
                            нам.
                        </P>
                        <P>
                            Прикрепи скриншот, где видно пройденное "Первое
                            испытание"
                        </P>
                    </Col>
                </Row>
                <RowSpacing scale={2} />
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

    resetStatus = e => {
        this.props.setStatus(undefined);
        e.preventDefault();
    };

    render() {
        const { page } = this.state;
        const { errors, handleSubmit, isSubmitting, status } = this.props;

        if (status === 'success') {
            return (
                <Container>
                    <Window title="Регистрация прошла успешно">
                        <Grid fluid>
                            <Row>
                                <Col xs={12}>
                                    <H1>Ура!</H1>
                                </Col>
                            </Row>
                            <RowSpacing scale={2} />
                            <Row>
                                <Col xs={12}>
                                    <P>
                                        Заявка на поступление успешно
                                        отправлена! Скоро мы свяжемся с тобой
                                    </P>
                                </Col>
                            </Row>
                            <RowSpacing scale={3} />
                        </Grid>
                    </Window>
                </Container>
            );
        }

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
                    {status === 'fail' && (
                        <Window title="Ошибка">
                            <Grid fluid>
                                <Row>
                                    <Col xs={12}>
                                        <H1>Упс...</H1>
                                    </Col>
                                </Row>
                                <RowSpacing scale={2} />
                                <Row>
                                    <Col xs={12}>
                                        <P>
                                            При отправке заявки произошла
                                            ошибка. Мы можем зарегистрировать
                                            тебя вручную. Напиши{' '}
                                            <a href="https://vk.com/mlshv42">
                                                Мише
                                            </a>
                                            <RowSpacing scale={3} />
                                            <Center>
                                                <Button
                                                    width="60px"
                                                    onClick={this.resetErrors}
                                                >
                                                    ОK
                                                </Button>
                                            </Center>
                                        </P>
                                    </Col>
                                </Row>
                                <RowSpacing scale={1} />
                            </Grid>
                        </Window>
                    )}
                </ErrorsWrapper>
                <Window title="Регистрация на курсы от ITC">
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
                                            disabled={isSubmitting}
                                            onClick={this.prevPage}
                                        >
                                            {'<'} Назад
                                        </Button>
                                    )}
                                    {page === this.pages.length - 1 ? (
                                        <Button
                                            width="80px"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Готово
                                        </Button>
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

    if (!values.vk) {
        errors.vk = 'Укажи ссылку VK';
    }

    if (!values.github) {
        errors.github = 'Укажи ссылку GitHub';
    }

    if (!values.telegram) {
        errors.telegram = 'Укажи ник в телеграме';
    }

    if (!values.faculty) {
        errors.faculty = 'Укажи факультет';
    }

    if (!values.files.length) {
        errors.fileds = 'Прикрепи скриншот c пройденным "Знакомством"';
    }

    return errors;
};

export default withFormik({
    validateOnBlur: false,
    mapPropsToValues: () => ({
        files: []
    }),
    handleSubmit: (values, { props, setSubmitting, setStatus, setErrors }) => {
        const errors = validate(values);
        if (isEmptyObject(errors)) {
            console.log('submitting', values);
            setSubmitting(true);
            submit(values).then(isSuccessful => {
                if (isSuccessful) {
                    setStatus('success');
                    console.log('success');
                } else {
                    setStatus('fail');
                    console.log('fail');
                }
                setSubmitting(false);
            });
        } else {
            setErrors(errors);
            setSubmitting(false);
        }
    }
})(App);
