import Header from "./Header"
import Title from "./Title";
import Footer from "./Footer"

const Layout = ( props ) => (
    <>
        <Header />
        <Title />
        
        <div className='content-container'>
            <main>{ props.children }</main>
        </div>

        <footer className='footer--pin'>
            <Footer />
        </footer>
    </>
);

export default Layout;