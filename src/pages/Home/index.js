import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import homeBackground from '../../images/home-background.jpg'
import Vector from '../../images/Vector.png'
import cert from '../../images/cert.png'
import chave from '../../images/chave.png'
import ThemeProvider from '../../style/chakra/theme';


export default function Home(){

    return(
        <ThemeProvider>

        <Box p= "40px 0 0">
            <Flex align="center" justify="flex-start" p="0 300px 10px " bgImage={homeBackground}>
                <Box p="40px 0 0" maxW="350px">
                    <Box  bg="green" color="white" p="50px 50px 0" borderRadius="10px 10px 0 0"><b>A melhor em gestão de MRP</b></Box>
                    <Box bg="gray" color="white" p="0 50px 50px" borderRadius="0 0 10px 10px">
                        Não é de hoje que percebemos que o mundo está no meio de
                        mudanças significativas. Portanto, para um melhor
                        gerenciamento de materia prima, vem com a gente!
                    </Box>
                </Box>
            </Flex>
            <Flex align="flex-end" justify='center' p= "100px">
                <Flex p= "0 190px">
                <Box p= "35px 15px 0">
                    {<Box justify="center" p= "0 18px 0px"><img align="center" src={Vector} /></Box>}
                    <p align= "center"> 
                        <b>Economia de<br /> Tempo</b>
                    </p>
                </Box>
                </Flex>
                <Box p= "0px 40px 0" >
                    {<Box justify="center" p= "0 18px 0px"><img src={cert} align="center"/></Box>}
                    <p align= "center">
                        <b>Relatórios <br />Inteligentes</b>
                    </p>
                </Box>
                <Flex p="0px 190px">
                <Box p= "0 15px 0px  " >
                    { <Box justify="center" p= "0 22px 0px"><img src={chave}/></Box>}
                    <p align= "center">
                        <b>Manutenção que<br /> cabe no bolso</b>
                    </p>
                </Box>
                </Flex>
            </Flex>
        </Box>
        </ThemeProvider>
    )
}