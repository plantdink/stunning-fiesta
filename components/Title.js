import Link from 'next/link'

const Title = () => {
    return (
        <div className='title'>
            <Link href='/' passHref>
                <h1>Developing software with a blunt instrument</h1>
            </Link>
            <p>Random thoughts about software development, job hunting and other things.</p>
        </div>
    );
};

export default Title;