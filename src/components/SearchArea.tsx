import { Flex, Text, Input, Button } from '@chakra-ui/react'

export function SearchArea(){
    return(
        <Flex
          w="100%"
          maxWidth={1100}
          mx="auto"
          my="16"
          px="8"
          align="center"
          justify="center"
          direction="column"
        >
            <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb="4" align="center">
                Explore repositories<br/> on GitHub.
            </Text>

            <Flex w="100%" maxWidth={600}>
                <Input
                    variant="unstyled"
                    p="4"
                    bg="white"
                    border="0"
                    borderTopRightRadius="0"
                    borderBottomRightRadius="0"
                    placeholder="Type here" 
                />
                <Button
                    type="submit"
                    py="7"
                    px={["6" ,"12"]}
                    borderTopRightRadius="5"
                    borderBottomRightRadius="5"
                    borderRadius="0"
                    colorScheme="green"
                    color="white"
                    _hover={{
                        colorScheme: 'green'
                    }}
                >
                    Pesquisar
                </Button>
            </Flex>
        </Flex>
    )
}