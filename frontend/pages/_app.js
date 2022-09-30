import '../styles/globals.css'

import { AuthContextProvider } from '../context/AuthContext'
import Navbar from './components/Navbar'

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'



function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </AuthContextProvider>
  )
}

export default MyApp