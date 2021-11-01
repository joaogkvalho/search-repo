import { ListItem, Text, Link, Box, Flex } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(        
        <ListItem bg="white" p="5" borderRadius="8">
            <Flex
                w={"100%"}
                align="center"
                justify="space-between"
            >
                <Box>
                    <Text fontWeight="700">{props.repository.name}</Text>
                    <Text fontSize="sm" color="gray.100">{props.repository.description}</Text>
                </Box>

                <Link href={props.repository.html_url} target="_blank">
                    <FiChevronRight fontSize="20" />
                </Link>
            </Flex>
        </ListItem>
    )
}