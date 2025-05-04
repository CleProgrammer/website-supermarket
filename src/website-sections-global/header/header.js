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
        } else if( c('.main-header .header-section3 .header-section3-menu ul').id === 'enable' ) {
            c('.main-header .header-section3 .header-section3-menu ul').style.display = 'none'
            c('.main-header .header-section3 .header-section3-menu ul').id = 'disable'
            c('.main-header .header-section3 .header-section3-menu').style.backgroundImage = `url(${ClosedMenu})`
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
    async function searchProduct(e) {

        if( sessionStorage.getItem('priceMin') ) {
            sessionStorage.removeItem('priceMin')
        }

        if( sessionStorage.getItem('priceMax') ) {
            sessionStorage.removeItem('priceMax')
        }

        sessionStorage.setItem('checkFilter', 'false')

        if( e.target.className === 'goToHomeLogo' ) {
            sessionStorage.removeItem('checkifinsearchpage')
        }
        
        if( e.target.className === 'searchLupa' ) {
            if( sessionStorage.getItem('checkifinsearchpage') === 'true' ) {
                window.location.reload()
            }
            sessionStorage.setItem('checkifinsearchpage', 'true')
        }
         
        let input = `search?q=${c('.input-search-product').value}`
        sessionStorage.setItem('searchProduct', input)
    }

    /*goToPageSection*/
    function goToPageSection(e) {

        if( e.target.id === 'iphone' && sessionStorage.getItem('checkifinsearchpage') === 'true' ) {
            sessionStorage.setItem('searchProduct', `search?q=${e.target.id}`)
            window.location.reload()
        } else if( e.target.id === 'iphone' ) {
            sessionStorage.setItem('searchProduct', `search?q=${e.target.id}`)
        }
        

        if( e.target.id === 'samsung' && sessionStorage.getItem('checkifinsearchpage') === 'true' ) {
            sessionStorage.setItem('searchProduct', `search?q=${e.target.id}`)
            window.location.reload()
        } else if( e.target.id === 'samsung' ) {
            sessionStorage.setItem('searchProduct', `search?q=${e.target.id}`)
        } 

        sessionStorage.setItem('checkifinsearchpage', 'true')

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
                <a href='#/' onClick={searchProduct}><img className='goToHomeLogo' src={Logosite}/></a>
            </div>
            <div className='header-section2'>
                <input className='input-search-product' placeholder='encontrar produto'/>
                <a href='#/searchpage'><img src={Lupasite} className='searchLupa' onClick={searchProduct}/></a>
            </div>
            <div className='header-section3'>
                <div className='header-section3-menu' onClick={openMenu}>
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
