import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./msgError.css";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://63c5cfbdf80fabd877f05d4d.mockapi.io/Login");
  xmlhttp.send();

  function Verificar() {
    const usuarios = JSON.parse(xmlhttp.response);

    let emaill = document.querySelector("#email");
    let senhaa = document.querySelector("#senha");
    let msgError = document.querySelector("#msgError");

    for (let indice = 0; indice < usuarios.length; indice++) {
      const emailDoUsuario = usuarios[indice].email;
      const senhaDoUsuario = usuarios[indice].senha;

      if (emailDoUsuario === email && senhaDoUsuario === senha) {
        window.open("./Home");
        emaill.setAttribute("style", "border-color: none");
        senhaa.setAttribute("style", "border-color: none");
        msgError.setAttribute("style", "display: none");
        emaill.focus();

        return;
      } else {
        emaill.setAttribute("style", "border-color:red");
        senhaa.setAttribute("style", "border-color:red");
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML = "Usuário ou senha incorretos";
        emaill.focus();
      }
    }
  }

  /*
    if (
      email === JSON.parse(xmlhttp.response)[0].email &&
      senha === JSON.parse(xmlhttp.response)[0].senha
    ) {
      alert("Foiiiii");
    } else if (
      email === JSON.parse(xmlhttp.response)[1].email &&
      senha === JSON.parse(xmlhttp.response)[1].senha
    ) {
      alert("Foii 2");
    } else if (
      email === JSON.parse(xmlhttp.response)[2].email &&
      senha === JSON.parse(xmlhttp.response)[2].senha
    ) {
      alert("Foii 3");
    } else if (
      email === JSON.parse(xmlhttp.response)[3].email &&
      senha === JSON.parse(xmlhttp.response)[3].senha
    ) {
      alert("Foii 4");
    } else if (
      email === JSON.parse(xmlhttp.response)[4].email &&
      senha === JSON.parse(xmlhttp.response)[4].senha
    ) {
      alert("Foii 5");
    } else if (
      email === JSON.parse(xmlhttp.response)[5].email &&
      senha === JSON.parse(xmlhttp.response)[5].senha
    ) {
      alert("Foii 6");
    } */
  /*for (var i = 1; i < 7; i++) {
      if (
        email === JSON.parse(xmlhttp.response)[i].email &&
        senha === JSON.parse(xmlhttp.response)[i].senha
      ) {
        alert("Foi");
      } else if (
        email != JSON.parse(xmlhttp.response)[i].email &&
        senha != JSON.parse(xmlhttp.response)[i].senha
      ) {
        alert("Não foi");
      }
    }
  }*/

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="#7590f8">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <div id="msgError"></div>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Center>
                <Button
                  onClick={Verificar}
                  id="btn"
                  w={240}
                  p="6"
                  type="button"
                  bg="#7590f8"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "#7590f8" }}
                >
                  Login
                </Button>
              </Center>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="#7590f8" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
