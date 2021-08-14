import { Flex, Text, Input, Button } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify'
import { Logo } from '../components/Logo'

import 'react-toastify/dist/ReactToastify.css'

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

  const notify = () => toast("User founded")

  function searchRepo(){
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
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
                    _hover={{
                        colorScheme: 'green'
                    }}
                    onClick={searchRepo}
                >
                    Pesquisar
                </Button>
            </Flex>
        </Flex>
      
      <ToastContainer />
      <RepositoryList repositories={repositories} />
    </>
  )
}
