import Link from 'next/link'

const Title = () => {
    return (
        <div className='title'>
            <Link href='/' passHref>
                <h1>Developing software with a blunt instrument</h1>
            </Link>
        </div>
    );
};

export default Title;