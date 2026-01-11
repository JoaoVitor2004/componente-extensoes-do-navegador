import { useEffect, useState, type ReactNode } from "react";
import type React from "react";
import { createContext } from "react";
import type SchemeExtensions from "../entities/Extension";
import { extensioApi } from "../api/api";

type typeTheme = "dark" | "light"

interface ThemeProviderProps {
    children: ReactNode
}

interface themeContextProps {
    extension: SchemeExtensions[]
    theme: typeTheme,
    index: number,
    color: string
    changeIndex: (index: number) => void,
    changeColor: (indice: number) => void,
    alternateTheme: () => void
}

export const themeContext = createContext({} as themeContextProps)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [extension, setExtension] = useState<SchemeExtensions[]>([])
    const [index, setIndex] = useState<number>(0)
    const [color, setColor] = useState<string>("colorRed")

    useEffect(() => {
        extensioApi.getExtensions().then((data) => setExtension(data))
    }, [])

    const [theme, setTheme] = useState<typeTheme>("dark")

    const alternateTheme = () => setTheme((prev) => prev === "dark" ? "light" : "dark")
    const changeIndex = (index: number) => setIndex(index)
    const changeColor = (indice: number) => index === indice ? color : ""

    return (
        <themeContext.Provider value={{ extension, theme, index, color, alternateTheme, changeIndex, changeColor }}>
            {children}
        </themeContext.Provider>
    )
}