import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 my-6'>
            <h2 className="text-4xl font-bold text-[#111]">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;