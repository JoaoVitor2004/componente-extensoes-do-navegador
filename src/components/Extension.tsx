import { Box, Button, Card, Flex, Heading, Switch, Text } from "@radix-ui/themes"
import type SchemeExtensions from "../entities/Extension"

interface extensionsProp {
    props: SchemeExtensions
}

const Extension: React.FC<extensionsProp> = ({ props }) => {

    // useEffect(() => {
    //     if (input) {

    //         input = props.isActive;

    //     } else {
    //         console.log("Error")
    //     }
    // }, [props.isActive]);

    return (
        <Card>
            <Box p={"2"}>
                <Flex gap={"6"} mb={"5"}>
                    <img src={props.logo} alt="logo extension" />
                    <Flex direction={"column"} gap={"4"}>
                        <Heading as="h3">{props.name}</Heading>
                        <Text as="p" id="description">{props.description}</Text>
                    </Flex>
                </Flex>
                <Flex width={"100%"} align={"center"} justify={"between"}>
                    <Button style={{ cursor: "pointer" }}>Remover</Button>
                    <Switch style={{ cursor: "pointer" }} color="red" />
                </Flex>
            </Box>
        </Card>
    )
}

export default Extension