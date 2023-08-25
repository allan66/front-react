import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  ButtonEdit,
  ButtonDelete,
  FormGroup,
  Button,
} from "../styles/global.js";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UserList = () => {
  const MySwal = withReactContent(Swal);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get(`${process.env.REACT_APP_URL_API}/list`).then((response) => {
      if (response.data.status === 200) {
        setUsers(response.data.data);
      }
    });
  };

  const deleteUser = (user) => {
    Swal.fire({
      title: `Você tem certeza que deseja excluir o usuário ${user.name} ?`,
      showDenyButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`${process.env.REACT_APP_URL_API}/user/${user.id}`).then(
          (response) => {
            if (response.data.status === 200) {
              MySwal.fire(`Usuário excluido com sucesso`);
            }
          }
        );
        getUsers();
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container>
        <Title>Lista de Usuários</Title>
        <FormGroup style={{ display: "flex" }}>
          <Link to="/create" state={{ user: null }}>
            <Button> Novo Usuário </Button>
          </Link>
        </FormGroup>
        <table className="table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <NavLink to="/edit" state={{ user: user }}>
                      <ButtonEdit type="button">Editar</ButtonEdit>
                    </NavLink>
                    <ButtonDelete
                      type="button"
                      onClick={() => deleteUser(user)}
                    >
                      Excluir
                    </ButtonDelete>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default UserList;
