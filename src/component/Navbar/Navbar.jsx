
import { IoMdMenu } from "react-icons/io";
import Logo from '../../assets/1.png'
import { useState } from "react";

const NavbarLinks = [
    {
        id: 1,
        title: 'Home',
        link: "/"
    }, {
        id: 2,
        title: 'Features',
        link: "#"
    }, 
    {
        id: 3,
        title: 'Shop',
        link: "#"
    },
    {
        id: 4,
        title: 'About Us',
        link: "#"
    },
    {
        id: 5,
        title: 'Contact',
        link: "#"
    }
]


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    // const handLeMenuOpen = () => {}
  return (
  <>
    <div className='container flex justify-between items-center py-4'>
    {/* Logo Section */}
    <div className='flex items-center gap-2'>
        <img src={Logo} className='w-[50px]' alt="" />
        <a href="#">
            <p className='font-bold text-xl hover:text-primary '>HUSTLE</p>
        </a>
    </div>
    {/* Link Section */}
    <div className={ ` ${!isOpen? 'hidden' : ''} md:block absolute md:relative top-[60px] md:top-auto right-[10px] w-[200px] md:w-auto h-auto bg-primary md:bg-white`}>
        <ul className='flex flex-col md:flex-row gap-3 xl:gap-4 '>
            {NavbarLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a className='hover:text-white hover:font-bold hover:bg-black md:hover:bg-white md:hover:text-primary px-4 py-2 uppercase text-sm md:text-base w-full block' href={link.link}>{link.title}</a>
                    </li>
                )
            })}
        </ul>
    </div>
    <div className='block md:hidden'>
            <IoMdMenu className="text-2xl cursor-pointer" onClick={ () => setIsOpen(!isOpen)}/>
    </div>
    {/* Button Section */}
    <div className="hidden md:block">
        <button className='primary-btn'>Request for Quotation</button>
    </div>
    </div>
  </>
  )
}

export default Navbar