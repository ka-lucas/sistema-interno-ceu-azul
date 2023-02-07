import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Front.css";
import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { BsBoxArrowInRight } from "react-icons/bs";

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63c5cfbdf80fabd877f05d4d.mockapi.io/projetom3`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let {
      id,
      nomeResp,
      naturalResp,
      email,
      celular,
      telefone,
      endereco,
      cidade,
      nomeCrian,
      dataNasc,
      naturalCrian,
      tipoSang,
      sexo,
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nome Responsavel", nomeResp);
    localStorage.setItem("Naturalidade Responsavel", naturalResp);
    localStorage.setItem("Email", email);
    localStorage.setItem("Celular", celular);
    localStorage.setItem("Telefone", telefone);
    localStorage.setItem("Endereco", endereco);
    localStorage.setItem("Cidade", cidade);
    localStorage.setItem("Nome Crianca", nomeCrian);
    localStorage.setItem("Data Nascimento", dataNasc);
    localStorage.setItem("Naturalidade Crianca", naturalCrian);
    localStorage.setItem("Tipo Sanguinio", tipoSang);
    localStorage.setItem("Sexo", sexo);
  };

  const getData = () => {
    axios
      .get(`https://63c5cfbdf80fabd877f05d4d.mockapi.io/projetom3`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63c5cfbdf80fabd877f05d4d.mockapi.io/projetom3/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <TableContainer>
      <Flex align="center" bg="#7590f8">
        <Box>
          <img src={logo} width="200" />
        </Box>
        <Center
          as="header"
          h={150}
          color="white"
          fontWeight="bold"
          fontSize="4xl" /*tamanho da frase*/
          pb="5" /*posição da frase formulario*/
          w="70%"
        >
          Matriculados
        </Center>
        <Link to="/">
          <BsBoxArrowInRight size={50} color="white" />
        </Link>
      </Flex>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Alunos</Th>
            <Th>Responsáveis</Th>
            <Th>Celular</Th>
            <Th>E-mail</Th>
          </Tr>
        </Thead>
        <Tbody>
          {APIData.map((data) => {
            return (
              <Tr>
                <Td>{data.nomeCrian}</Td>
                <Td>{data.nomeResp}</Td>
                <Td>{data.celular}</Td>
                <Td>{data.email}</Td>
                <Td>
                  <Link to="/Update">
                    <Button onClick={() => setData(data)}>Alterar</Button>
                  </Link>
                  <span> </span>
                  <Button onClick={() => onDelete(data.id)}>Excluir</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Center align="center" justify="center" w="100%">
        <Link to="/">
          <Button
            w={240}
            p="6"
            type="submit"
            bg="#7590f8"
            color="white"
            fontWeight="bold"
            fontSize="xl"
            mt="2"
            _hover={{ bg: "#7590f8" }}
          >
            Voltar
          </Button>
        </Link>
        <Center color="white" fontWeight="bold">
          espaco
        </Center>
        <Link to="/Form">
          <Button
            w={240}
            p="6"
            type="submit"
            bg="#7590f8"
            color="white"
            fontWeight="bold"
            fontSize="xl"
            mt="2"
            _hover={{ bg: "#7590f8" }}
          >
            Nova Matrícula
          </Button>
        </Link>
      </Center>
      <Center>
        <p>&copy;Espaço Céu Azul</p>
      </Center>
    </TableContainer>
  );
}

export default Read;
