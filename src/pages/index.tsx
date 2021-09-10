import { Flex, Text, Input, Button, useToast } from '@chakra-ui/react'
import { Logo } from '../components/Logo'

import Head from 'next/head'
import { RepositoryList } from '../components/RepositoryList'
import { useState } from 'react'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [user, setUser] = useState('')
  const toast = useToast()


  function searchRepositories(){
    if(user){
      fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data))
    } else {
      toast({
        title: "Required field",
        description: "Fill the user field",
        position: 'top-right',
        status: "error",
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <>
      <Head>
        <title>Home | search_repo</title>
      </Head>

      <Logo />
      
      <Flex
          w="100%"
          maxWidth={1100}
          mx="auto"
          my="16"
          px="8"
          direction="column"
        >
            <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb="4">
                Explore repositories<br/> on GitHub.
            </Text>

            <Flex w="100%" maxWidth={600}>
                <Input
                    variant="unstyled"
                    p="4"
                    bg="white"
                    borderTopRightRadius="0"
                    borderBottomRightRadius="0"
                    placeholder="Type here"
                    onChange={event => setUser(event.target.value)}
                />
                <Button
                    type="submit"
                    px={["2", "8"]}
                    size="xl"
                    borderTopLeftRadius="0"
                    borderBottomLeftRadius="0"
                    colorScheme="green"
                    color="white"
                    onClick={searchRepositories}                    
                >
                    Pesquisar
                </Button>
            </Flex>
        </Flex>
      
      <RepositoryList repositories={repositories} />
    </>
  )
}
