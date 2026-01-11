import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from './contexts/ThemeProvider.tsx'
import { useExtension } from './Hooks/useExtension.ts'

const AppContent = () => {

  const { theme } = useExtension()

  return(
    <Theme appearance={theme}>
      <App/>
    </Theme>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  </StrictMode>
)