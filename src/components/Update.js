import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function Update() {
  let history = useNavigate();
  const [id, setID] = useState(null);
  const [nomeResp, setNomeResp] = useState("");
  const [naturalResp, setNaturalResp] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [nomeCrian, setNomeCrian] = useState("");
  const [naturalCrian, setNaturalCrian] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [tipoSang, setTipoSang] = useState("");
  const [sexo, setSexo] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNomeResp(localStorage.getItem("Nome Responsavel"));
    setNaturalResp(localStorage.getItem("Naturalidade Responsavel"));
    setEmail(localStorage.getItem("Email"));
    setCelular(localStorage.getItem("Celular"));
    setTelefone(localStorage.getItem("Telefone"));
    setEndereco(localStorage.getItem("Endereco"));
    setCidade(localStorage.getItem("Cidade"));
    setNomeCrian(localStorage.getItem("Nome Crianca"));
    setDataNasc(localStorage.getItem("Data Nascimento"));
    setNaturalCrian(localStorage.getItem("Naturalidade Crianca"));
    setTipoSang(localStorage.getItem("Tipo Sanguinio"));
    setSexo(localStorage.getItem("Sexo"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://63c5cfbdf80fabd877f05d4d.mockapi.io/projetom3/${id}`, {
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
      })
      .then(() => {
        history.push("/Read");
      });
  };

  return (
    <Box h="100vh">
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
          pb="10" /*posição da frase formulario*/
          w="70%"
        >
          Formulário de Matrícula
        </Center>
      </Flex>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 100px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">
                  Nome Completo do Responsável
                </FormLabel>
                <Input
                  id="nome"
                  type="text"
                  value={nomeResp}
                  onChange={(e) => setNomeResp(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input
                  id="natural"
                  type="text"
                  value={naturalResp}
                  onChange={(e) => setNaturalResp(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="natural">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input
                  id="cel"
                  type="number"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                <Input
                  id="Tefone"
                  type="number"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input
                  id="endereco"
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input
                  id="cidade"
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo da Criança</FormLabel>
                <Input
                  id="nomeC"
                  type="text"
                  value={nomeCrian}
                  onChange={(e) => setNomeCrian(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input
                  id="naturalC"
                  type="text"
                  value={naturalCrian}
                  onChange={(e) => setNaturalCrian(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input
                  id="nasc"
                  type="date"
                  value={dataNasc}
                  onChange={(e) => setDataNasc(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tipoS">Tipo Sanguíneo</FormLabel>
                <Input
                  id="ts"
                  type="text"
                  value={tipoSang}
                  onChange={(e) => setTipoSang(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup value={sexo}>
                  <HStack spacing="24px">
                    <Radio
                      value="Masculino"
                      onChange={(e) => setSexo(e.target.value)}
                    >
                      Masculino
                    </Radio>
                    <Radio
                      value="Feminino"
                      onChange={(e) => setSexo(e.target.value)}
                    >
                      Feminino
                    </Radio>
                    <Radio
                      value="Outro"
                      onChange={(e) => setSexo(e.target.value)}
                    >
                      Outro
                    </Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Link to="/Read">
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
              <Link to="/Read">
                <Button
                  onClick={updateAPIData}
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
                  Enviar
                </Button>
              </Link>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default Update;
