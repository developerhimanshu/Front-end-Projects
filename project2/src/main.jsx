import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript , theme} from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode> 
    <ColorModeScript />
    <ChakraProvider theme = {theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider> 
  </StrictMode>
)
