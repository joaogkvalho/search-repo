import { Flex, Text } from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

export function Logo(){
    return(
        <Flex
            w="100%"
            maxWidth={1100}
            mx="auto"
            my="12"
            px="8"
            align="center"
        >
        <FiGithub size="30px" />
        <Text
            fontSize="3xl"
            fontWeight="500"
            letterSpacing="tight"
            color="gray.600"
            ml="2"
        >
            search
            <Text as="span" color="gray.100">_repo</Text>
        </Text>
      </Flex>
    )
}