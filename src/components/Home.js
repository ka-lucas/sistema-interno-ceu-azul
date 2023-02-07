import React from "react";
import "./Front.css"

import { Button, Center, InputRightElement } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs' ;



function Home() {

    
    function openNew(){
        const url = "https://ka-lucas.github.io/ceuazul/"
        const win = window.open(url, '_blank')

    }

    return (
        <>
            <Link to="/" >
                <BsBoxArrowInRight position={InputRightElement} size={50} color="#7590f8"/>
            </Link>
            <img className="img-logo" src="https://raw.githubusercontent.com/laisleao/Projeto-2-site-/main/projeto1-projeto1/imagem/logo.png" alt='logo' />
            <Center>
                <div className="botao">
                    <Link to='/Form'>
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
        
              
                        <Button
                            onClick={openNew}
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
                            Site
                        </Button>
                      
                    
                    <Link to='/Read'>
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
                            Sistema Interno
                        </Button>
                    </Link>
                </div>
            </Center>

        </>
    );
}
export default Home;