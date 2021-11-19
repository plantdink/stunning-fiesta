import Header from "./Header"
import Title from "./Title";
import Footer from "./Footer"

const Layout = ( props ) => (
    <>
        <Header />
        <Title />
        <main>{ props.children }</main>
        <Footer />
    </>
);

export default Layout;