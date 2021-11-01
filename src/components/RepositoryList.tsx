import { useEffect, useState } from 'react'
import { Flex, UnorderedList } from '@chakra-ui/react'

import { RepositoryItem } from '../components/RepositoryItem'

interface RepositoryListProps {
    repositories: Repository[];
}

interface Repository {
    name: string;
    description: string;
    html_url: string;
  }

export function RepositoryList({ repositories }: RepositoryListProps){
    return(
        <Flex
          w="100%"
          maxWidth={1100}
          align="center"
          justify="center"
          mx="auto"
          mb="14"
          px="4"          
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