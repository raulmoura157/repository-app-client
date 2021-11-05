import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import homeBackground from '../../images/home-background.jpg'

export default function Home(){

    return(
        <Box>
            <Flex align="center" justify="flex-start" p="0 50px" bgImage={homeBackground}>
                <Box maxW="427px">
                    <Box bg="green" color="white" p="50px 50px 0" borderRadius="10px 10px 0 0">A melhor em gestão de MRP</Box>
                    <Box bg="gray" color="white" p="0 50px 50px" borderRadius="0 0 10px 10px">
                        Não é de hoje que percebemos que o mundo está no meio de
                        mudanças significativas. Portanto, para um melhor
                        gerenciamento de materia prima, vem com a gente!
                    </Box>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    {/* <img src={} /> */}
                    <p>
                        Economia de tempo
                    </p>
                </Box>
                <Box>
                    {/* <img src={} /> */}
                    <p>
                        Relatórios Inteligentes
                    </p>
                </Box>
                <Box>
                    {/* <img src={} /> */}
                    <p>
                        Manutenção que cabe no bolso
                    </p>
                </Box>
            </Flex>
        </Box>
    )
}