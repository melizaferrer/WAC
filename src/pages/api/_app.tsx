import '../globals.css'
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";

const basicTheme=createTheme();

function MyApp ({Component, pageProps}:AppProps){
    
    return(
        <ThemeProvider theme={basicTheme}>
          
            <Component{...pageProps}/>
            
        </ThemeProvider>
    )
}

export default MyApp;