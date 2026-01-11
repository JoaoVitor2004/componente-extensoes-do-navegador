import { Button, Flex, Heading } from "@radix-ui/themes"
import "../styles/responsive.css"
import { useExtension } from "../Hooks/useExtension"

const Config: React.FC = () => {

    const { changeIndex, changeColor } = useExtension()

    return (
        <Flex className="grid" align={"center"} justify={"between"} mb={"8"}>
            <Heading size={"7"} as="h2">Extensions List</Heading>
            <Flex gap={"4"}>
                <Button onClick={() => changeIndex(0)} className={`${"rounded-3xl font-bold background btn"} ${changeColor(0)}`}>All</Button>
                <Button onClick={() => changeIndex(1)} className={`${"rounded-3xl font-bold background btn"} ${changeColor(1)}`}>Active</Button>
                <Button onClick={() => changeIndex(2)} className={`${"rounded-3xl font-bold background btn"} ${changeColor(2)}`}>Inactive</Button>
            </Flex>
        </Flex>
    )
}

export default Config