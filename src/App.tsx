import GlobalStyle from './assets/style/GlobalStyle'
import Router from './router'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/style/theme'

function App() {

  return (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <GlobalStyle />
      <Router />
    </StyledApp>
  </ThemeProvider>
  )
}

const StyledApp = styled.div`
  /* position: relative; */
` 

export default App
