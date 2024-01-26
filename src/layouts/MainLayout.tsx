import Header from '../components/Header'
import Footer from '../components/Footer'

type MainLayoutProps = {
  children: JSX.Element;
}

const MainLayout = (props: MainLayoutProps) => {

    return (
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    )
}

export default MainLayout