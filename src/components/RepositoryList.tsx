import { useEffect, useState } from 'react'
import { Flex, UnorderedList } from '@chakra-ui/react'

import { RepositoryItem } from '../components/RepositoryItem'


interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/joaokvalho/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return(
        <Flex
          w="100%"
          maxWidth={1100}
          mx="auto"
          mb="14"
          px="5"
        >
            <UnorderedList styleType="none" spacing="4">
                { repositories.map(repository => {
                    return(
                        <RepositoryItem key={repository.name} repository={repository}/>
                    )
                }) }
            </UnorderedList>
        </Flex>
    )
}