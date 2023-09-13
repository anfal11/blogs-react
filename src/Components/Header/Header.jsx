import Image from '../../assets/Images/img1.jpg'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-2 border-b-2'>
            <h1 className='text-4xl font-bold'>KnowLedge Cafe</h1>
            <img className='rounded-full w-24' src={Image} alt="" />
        </header>
    );
};

export default Header;