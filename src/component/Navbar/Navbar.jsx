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
    <div className='container flex justify-between items-center'>
    {/* Logo Section */}
    <div>
        <img src={Logo} className='w-[50px]' alt="" />
    </div>
    {/* Link Section */}
    <div className='hidden md:block'>
        <ul className='flex gap-3'>
            {NavbarLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.link}>{link.title}</a>
                    </li>
                )
            })}
        </ul>
    </div>
    {/* Button Section */}
    <div>
        <button>Request for Quotation</button>
    </div>
    </div>
  </>
  )
}

export default Navbar