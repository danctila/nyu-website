import { extendTheme } from "@chakra-ui/react";
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const theme = extendTheme({
    fonts: {
        heading: `'Montserrat Variable', sans-serif`,
        body: `'Montserrat Variable', sans-serif`
    }
})

export default theme;