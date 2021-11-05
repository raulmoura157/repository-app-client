import { extendTheme, ChakraProvider } from "@chakra-ui/react"

export default function ThemeProvider({ children }) {
  const theme = extendTheme({
    colors: {
      gray: {
        500: "#B5B6B8",
        700: "#7E8A93"
      },
      green: "#2E5D78",
      white: "#FCFCFC",
    },
  })

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}