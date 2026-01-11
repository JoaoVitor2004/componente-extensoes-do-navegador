import { Box, Button, Flex } from "@radix-ui/themes"
import React from "react"
import Logo from "./assets/images/logo.svg"
import Wrapper from "./components/Wrapper"
import Container from "./components/Container"
import Extensions from "./components/Extensions"
import { useExtension } from "./Hooks/useExtension"
import Config from "./components/Config"

const App: React.FC = () => {

  const { theme, alternateTheme } = useExtension()

  return (
    <Wrapper>
      <Box width={"90%"} mx={"auto"} my={"8"}>
        <Container>
          <Flex justify={"between"} align={'center'} width={"100%"}>
            <img color="#fff" src={Logo} alt="logo main" />
            <Button onClick={alternateTheme} style={{ cursor: "pointer", background: "none" }}>
              <i style={{ color: "#000", fontSize: "20px" }} className={`${"bi"} ${theme === "dark" ? "bi-brightness-high" : "bi-moon-fill"}`}></i>
            </Button>
          </Flex>
        </Container>
        <Config />
        <Extensions />
      </Box>
    </Wrapper>
  )

}

export default App