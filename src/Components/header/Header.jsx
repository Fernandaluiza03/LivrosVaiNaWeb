import logolivro from '../../assets/logolivro.png'
import lupa from '../../assets/lupa.png'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Início from '../../pages/início/início'
import LivrosDoados from '../../pages/livrosDoados/livrosDoados'
import QueroDoar from '../../pages/queroDoar/queroDoar'
import s from './header.module.scss'

export default function Header(){
return(
    <BrowserRouter>
        <header className={s.header}>
            <section className={s.logoHeader}>
                <img src={logolivro}alt="Imagem ilustrativa de um livro aberto com a capa azul "/>
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}> 
                <ul>
                    <li><Link className={s.link} to='/'>Início</Link></li>
                    <li><Link className={s.link} to='/livros-doados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/quero-doar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraDeBusca}>
                <input type="search" name="" id= "" placeholder='O que você procura?' />
                <button><img src={lupa}alt='Imagem ilustrativa de uma lupa branca'/> </button>
            </section>
        </header>
        <Routes>
            <Route path='/' element={<Início/>}/>
            <Route path='/livros-doados' element={<LivrosDoados/>}/>
            <Route path='/quero-doar' element={<QueroDoar/>}/>
        </Routes>
    </BrowserRouter>
       
    )
}