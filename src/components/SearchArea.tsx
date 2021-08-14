import { Flex, Text, Input, Button } from '@chakra-ui/react'

export function SearchArea(){
    return(
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
                >
                    Pesquisar
                </Button>
            </Flex>
        </Flex>
    )
}