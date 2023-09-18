import Logosite from './images/logoSite.png'
import Lupasite from './images/lupa.png'
import ClosedMenu from '../header/images/openmenumobile.png'
import OpenedMenu from '../header/images/openmenumobilerotate.png'

import $ from 'jquery'

import '../header/header.css'

export default function Header() {
    const c = (cl) => document.querySelector(cl)

    /*SECTION OPNE AND CLOSE MENU*/
    function openMenu() {
        if( c('.main-header .header-section3 .header-section3-menu ul').id === 'disable' ) {
            c('.main-header .header-section3 .header-section3-menu ul').style.display = 'flex'
            c('.main-header .header-section3 .header-section3-menu ul').id = 'enable'
            c('.main-header .header-section3 .header-section3-menu').style.backgroundImage = `url(${OpenedMenu})`
            c('.main-header .header-section3 .header-section3-menu').addEventListener('mouseout', closeMenu)
        }
    }

    function closeMenu() {
        if( c('.main-header .header-section3 .header-section3-menu ul').id === 'enable' ) {
            c('.main-header .header-section3 .header-section3-menu ul').style.display = 'none'
            c('.main-header .header-section3 .header-section3-menu ul').id = 'disable'
            c('.main-header .header-section3 .header-section3-menu').style.backgroundImage = `url(${ClosedMenu})`
            c('.main-header .header-section3 .header-section3-menu').addEventListener('mouseover', openMenu)
        }
    }

    /*SECTION SEARCH PRODUCT*/
    async function searchProduct() {
        if( localStorage.getItem('priceMin') ) {
            localStorage.removeItem('priceMin')
        }

        if( localStorage.getItem('priceMax') ) {
            localStorage.removeItem('priceMax')
        }

        localStorage.setItem('checkFilter', 'false')

        let input = `search?q=${c('.input-search-product').value}`
        localStorage.setItem( 'searchProduct', input )    
    }

    /*goToPageSection*/
    function goToPageSection(e) {
        if( e.target.id === 'iphone' ) {
            localStorage.setItem('searchProduct', `search?q=${e.target.id}`)
        } else if( e.target.id === 'samsung' ) {
            localStorage.setItem('searchProduct', `search?q=${e.target.id}`)
        }

        if( e.target.id === 'contacts' ) {
            let bodySize = document.body.clientHeight
            $('html, body').animate({
                scrollTop: bodySize
            }, 500)
        }
    }

    return (
        <div className='main-header'>
            <div className='header-section1'>
                <a href='#/'><img src={Logosite}/></a>
            </div>
            <div className='header-section2'>
                <input className='input-search-product' placeholder='encontrar produto'/>
                <a href='#/searchpage'><img src={Lupasite} onClick={searchProduct}/></a>
            </div>
            <div className='header-section3'>
                <div className='header-section3-menu' onMouseOver={openMenu}>
                    <ul id='disable'>
                        <a href='#/' style={{textDecoration: 'none', color: 'white'}}><li id='home'>HOME</li></a>
                        <a href='#/searchpage' style={{textDecoration: 'none', color: 'white'}}><li id='iphone' onClick={goToPageSection}>IPHONE</li></a>
                        <a href='#/searchpage' style={{textDecoration: 'none', color: 'white'}}><li id='samsung' onClick={goToPageSection}>SAMSUNG</li></a>
                        <li id='contacts' onClick={goToPageSection}>CONTATO</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}   
