import { Form, Formik, Field, ErrorMessage } from 'formik';
import React, { useRef, useEffect } from "react";
import * as yup from 'yup';
import { GlobalStyle, LoginContainer, Title, FormGroup, Button, Label } from '../styles/global.js';
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

const Login = ({ }) => {
    const handleSubmit = (values) => {
console.log('teste')
    };

    const validateLogin = yup.object().shape({
        email: yup
            .string()
            .email("E-mail inválido")
            .required("O E-mail é obrigatório"),
        password: yup
            .string()
            .min(8, "A senha deve conter 8 caracteres")
            .required("Este campo é obrigatório")
    });
 
    return (
        <>
            <LoginContainer>
                <Title>Login</Title>
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validateLogin}>
                    <Form className='login'>
                        <FormGroup>
                            <Field
                                name="email"
                                className="form-field"
                                placeholder="Digite seu e-mail"
                            />
                            <ErrorMessage
                                name="email"
                                component="spam"
                                className="form-error"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name="password"
                                className="form-field"
                                placeholder="Digite sua senha"
                                type="password"
                            />
                            <ErrorMessage
                                name="password"
                                component="spam"
                                className="form-error"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Acessar</Button>
                        </FormGroup>

                        <Label> Ou </Label>
                        <FormGroup>
                            <NavLink to="/singup">
                                <Button type="button">Cadastre-se já!</Button>
                            </NavLink>

                        </FormGroup>
                    </Form>
                </Formik>
            </LoginContainer>
            <GlobalStyle />
        </>

    );
};

export default Login;