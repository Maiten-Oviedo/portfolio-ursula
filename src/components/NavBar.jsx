import { useEffect, useState } from 'react'

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // Función para actualizar la posición del scroll
  const handleScroll = () => {
    const position = window.scrollY || document.documentElement.scrollTop
    setScrollPosition(position)
  }

  useEffect(() => {
    // Añade el listener cuando el componente se monta
    window.addEventListener('scroll', handleScroll)

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const bgStyle = {
    backgroundColor: scrollPosition > 2 || menuOpen ? '#f4f4f5' : 'transparent',
    boxShadow:
      scrollPosition > 2 ? '0px 5px 5px -5px rgba(115,115,115,1)' : 'none',
  }

  return (
    <>
      <nav
        className="fixed z-20 px-[5%] lg:px-[15%] w-full flex justify-between items-center p-4 transition font-bold"
        style={bgStyle}
      >
        <h1 className="text-5xl italic font-normal">Úrsula Castro</h1>
        <button
          className="block lg:hidden p-2 text-zinc-900 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#0d0d0d"
            className="size-12"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#000000"
              ></path>{' '}
            </g>
          </svg>
        </button>
        <ul
          className={`list-none gap-8 items-center text-zinc-950 transition-transform duration-300 ease-in-out ${
            menuOpen
              ? ' absolute top-20 left-0 w-full bg-[#f4f4f5] flex flex-col justify-center items-center shadow-md p-4'
              : 'hidden'
          } lg:flex`}
        >
          <li className="hover:text-[#31a0eb] hover:scale-[1.02] transition-500">
            <a href="#">INICIO</a>
          </li>
          <li className="hover:text-[#31a0eb] hover:scale-[1.02] transition-500">
            <a href="#experience">EXPERIENCIA</a>
          </li>
          <li className="hover:text-[#31a0eb] hover:scale-[1.02] transition-500">
            <a href="#about">SOBRE MÍ</a>
          </li>
          <li className="hover:text-[#31a0eb] hover:scale-[1.02] transition-500">
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
