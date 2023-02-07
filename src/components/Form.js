import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import "./Front.css"
import {
  Flex, Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import { BsBoxArrowInRight } from 'react-icons/bs' ;

function Form() {
  let history = useNavigate();
  const [nomeResp, setNomeResp] = useState('');
  const [naturalResp, setNaturalResp] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [nomeCrian, setNomeCrian] = useState('');
  const [naturalCrian, setNaturalCrian] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [tipoSang, setTipoSang] = useState('');
  const [sexo, setSexo] = useState('');

  const postData = () => {
    axios.post(`https://63c5cfbdf80fabd877f05d4d.mockapi.io/projetom3`, {
      nomeResp,
      naturalResp,
      email,
      celular,
      telefone,
      endereco,
      cidade,
      nomeCrian,
      naturalCrian,
      dataNasc,
      tipoSang,
      sexo

    }).then(() => {
      history.push('/Read')
    })

  }


  return (
    <Box h="100vh">
      <Flex
        align="center"
        bg="#7590f8"
      >
        <Box
        >
          <img src={logo} width="200" />
        </Box>
        <Center
          as="header"
          h={150}
          color="white"
          fontWeight="bold"
          fontSize="4xl" /*tamanho da frase*/
          pb="10" /*posição da frase formulario*/
          w='70%'
        >
          Formulário de Matrícula
        </Center>
        <Link to="/" >
        <BsBoxArrowInRight paddig={100} size={50} color="white"/>
        </Link>
      </Flex>


      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 0px)"
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
                <FormLabel htmlFor="nome">Nome Completo do Responsável</FormLabel>
                <Input id="nome" type="text" onChange={(e) => setNomeResp(e.target.value)} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input id="natural" type="text" onChange={(e) => setNaturalResp(e.target.value)} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="natural">Email</FormLabel>
                <Input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input id="cel" type="number" onChange={(e) => setCelular(e.target.value)} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                <Input id="Tefone" type="number" onChange={(e) => setTelefone(e.target.value)} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input id="endereco" type="text" onChange={(e) => setEndereco(e.target.value)} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" type="text" onChange={(e) => setCidade(e.target.value)} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo da Criança</FormLabel>
                <Input id="nomeC" type="text" onChange={(e) => setNomeCrian(e.target.value)} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input id="naturalC" type="text" onChange={(e) => setNaturalCrian(e.target.value)} />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" onChange={(e) => setDataNasc(e.target.value)} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tipoS">Tipo Sanguíneo</FormLabel>
                <Input id="ts" type="text" onChange={(e) => setTipoSang(e.target.value)} />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino" onChange={(e) => setSexo(e.target.value)}>Masculino</Radio>
                    <Radio value="Feminino" onChange={(e) => setSexo(e.target.value)}>Feminino</Radio>
                    <Radio value="Outro" onChange={(e) => setSexo(e.target.value)}>Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
            <Link to='/' >
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
              <Link to='/Read'>
                <Button
                  onClick={postData}
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


export default Form;