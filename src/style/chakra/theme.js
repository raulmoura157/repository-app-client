import { extendTheme, ChakraProvider } from "@chakra-ui/react"

export default function ThemeProvider({ children }) {
  const theme = extendTheme({
    styles:{
      global:{
        "body":{
          backgroundColor:"#fff",
          margin:0,
          padding: 0,
          border:0,
          color:"#333",
          fontFamily:"Roboto"
        },
        "button":{
          backgroundColor:"#2e5d78",
          color:"#fff"
        },
        ".column.social-media":{
          display:"flex"
        }
      },
    },
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