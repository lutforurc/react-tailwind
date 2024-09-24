import React from 'react'
import Logo from '../../assets/1.png'

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
  return (
  <>
    <div className='container flex justify-between items-center py-4'>
    {/* Logo Section */}
    <div className='flex items-center gap-2'>
        <img src={Logo} className='w-[50px]' alt="" />
        <p className='font-bold text-xl'>HUSTLE</p>
    </div>
    {/* Link Section */}
    <div className='hidden md:block'>
        <ul className='flex gap-3 xl:gap-4'>
            {NavbarLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a className='hover:text-primary uppercase text-sm md:text-base' href={link.link}>{link.title}</a>
                    </li>
                )
            })}
        </ul>
    </div>
    {/* Button Section */}
    <div>
        <button className='primary-btn'>Request for Quotation</button>
    </div>
    </div>
  </>
  )
}

export default Navbar