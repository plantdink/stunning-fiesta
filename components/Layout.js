import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ( props ) => (
    <>
        <Header />
        <Navigation />
        <main>{ props.children }</main>
        <Footer />
    </>
);

export default Layout;