import Header from '../components/Header'
import Footer from '../components/Footer'
import AppRoutes from '../routes/Routes'
const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <AppRoutes />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout