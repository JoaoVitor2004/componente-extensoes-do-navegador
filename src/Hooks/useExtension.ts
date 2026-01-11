import { useContext } from "react";
import { themeContext } from "../contexts/ThemeProvider";

export const useExtension = () => {
    return useContext(themeContext)
}