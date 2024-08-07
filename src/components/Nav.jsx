import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks, shoes, statistics, products, services, reviews, footerLinks, socialMedia } from '../constants'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className='top-0 padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img
            className='flex'
            src={headerLogo}
            alt="Logo"
            width={140}
            height={29}
          />
        </a>
        <div>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='font-montserrat text-slate-gray text-lg leading-normal'>
                  {item.label}
                </a>
              </li>
            ))}
            <li>{isAuthenticated && <p className='font-semibold text-slate-gray border border-coral-red p-2 font-palanquin text-xl'>{user.name}</p>
              }
            </li>
            {
              isAuthenticated ?
                (<li>
                  <button className='font-montserrat text-white w-20 h-25 bg-black rounded-xl'
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                </li>) :
                (<li>
                  <button className='font-montserrat text-white w-20 h-25 bg-black rounded-xl'
                    onClick={() => loginWithRedirect()}>Log In</button>
                </li>

                )
            }
          </ul>
        </div>

        <div className='max-lg:block hidden'>
          <button
            className='flex mr-0'
            onClick={toggleHamburger}>
            <img
              src={hamburger}
              alt="Menu"
              width={25}
              height={25}
            />
          </button>
          {isOpen &&
            <div className='absolute text-white'>
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='font-montserrat text-slate-gray text-lg leading-normal'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          }
        </div>
      </nav>
    </header>
  )
}

export default nav