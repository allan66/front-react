import { Form, Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  FormGroup,
  Button,
  BackButton,
  Label,
} from "../styles/global.js";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UserForm = () => {
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.state.user) {
      setUser(location.state.user);
    }
  }, []);

  const initialValues = {
    email: user.email,
    age: user.age,
    name: user.name,
  };

  const handleSubmit = () => {
    if (user.name === "" || user.email === "" || user.age === "") {
      MySwal.fire(`Por favor preencha todos os campos!`);

      return;
    }

    if (user.id) {
      updateUser();

      return;
    }

    Axios.post(`${process.env.REACT_APP_URL_API}/user`, {
      email: user.email,
      age: user.age,
      name: user.name,
    })
      .then((response) => {
        if (response.data.status === 201) { 
          MySwal.fire(`Usuário ${response.data.data.name} criado com sucesso!`);
          setTimeout(() => {
            window.location = "/list";
          }, 1000);
        }
      })
      .catch((error) => {
        MySwal.fire(`Houve um erro`);
        console.log(error);
      });
  };

  const updateUser = (values) => {
    Axios.put(`${process.env.REACT_APP_URL_API}/user/${user.id}`, {
      email: user.email,
      age: user.age,
      name: user.name,
    })
      .then((response) => {
        if (response.data.status === 201) {
          MySwal.fire(
            `Usuário ${response.data.data.name} editado com sucesso!`
          );
          setTimeout(() => {
            window.location = "/list";
          }, 1000);
        }
      })
      .catch((error) => {
        MySwal.fire(`Houve um erro`);
        console.log(error);
      });
  };

  function handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [field]: value,
    });
  }

  return (
    <Container>
      <Title>{user.id ? "Editar de Usuário" : "Cadastrar Usuário"}</Title>
      <Formik
        onSubmit={handleSubmit}
        validateOnMount
        initialValues={initialValues}
      >
        {({ errors, touched }) => (
          <Form>
            <FormGroup>
              <Label>Nome</Label>
              <Field
                className="form-field"
                name="name"
                value={user.name}
                onChange={handleChange}
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Idade</Label>
              <Field
                className="form-field"
                name="age"
                type="text"
                value={user.age}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Field
                className="form-field"
                value={user.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <FormGroup style={{ display: "flex" }}>
                <Button type="submit">
                  {user.id ? "Salvar" : "Cadastrar"}
                </Button>
                <NavLink to="/list">
                  <BackButton> Voltar Para Listagem </BackButton>
                </NavLink>
              </FormGroup>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
