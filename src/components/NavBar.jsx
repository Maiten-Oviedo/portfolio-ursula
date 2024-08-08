import { useEffect, useState } from 'react'

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

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
    backgroundColor: scrollPosition > 2 ? '#f4f4f5' : 'transparent',
    boxShadow:
      scrollPosition > 2 ? ' 0px 5px 5px -5px rgba(115,115,115,1)' : 'none',
  }
  return (
    <nav
      className="fixed z-20 px-[15%] w-full flex justify-between items-center p-4 transition font-bold"
      style={bgStyle}
    >
      <h1 className="text-5xl italic font-normal">Úrsula Castro</h1>
      <ul className="list-none flex gap-8 items-center text-xl text-zinc-950">
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
  )
}

export default NavBar
