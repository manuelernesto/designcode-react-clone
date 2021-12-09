import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorsStyles"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.backgroundColor};
        }
    }
`