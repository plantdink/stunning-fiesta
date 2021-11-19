import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <p>&copy; { new Date().getFullYear() } - Powered by Next.js</p>
                </li>
                <li>
                    <Link href='/authors'>
                        <a><p>Author</p></a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;