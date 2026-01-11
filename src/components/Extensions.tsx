import { Grid, ScrollArea } from "@radix-ui/themes"
import { useExtension } from "../Hooks/useExtension"
import Extension from "./Extension"
import "../styles/variables.css"

const Extensions: React.FC = () => {

    const { extension, index } = useExtension()

    const verifyContent = (index: number) => {

        if (index === 0) {
            const extensionsAll = extension.filter((extension) => extension.isActive === true || extension.isActive === false) ?? []
            return extensionsAll.map((extension) => <Extension props={extension} key={extension.id}/>)
        }

        if (index === 1) {
            const extensionsActive = extension.filter((extension) => extension.isActive === true) ?? []
            return extensionsActive.map((extension) => <Extension props={extension} key={extension.id}/>)
        }

        if (index === 2) {
            const extensionsInactive = extension.filter((extension) => extension.isActive === false) ?? []
            return extensionsInactive.map((extension) => <Extension props={extension} key={extension.id}/>)
        }
    }

    return (
        <ScrollArea scrollbars="horizontal">
            <Grid columns={"3"} gap={"6"} minWidth={"68rem"}>
                { verifyContent(index) }
            </Grid>
        </ScrollArea>
    )
}

export default Extensions