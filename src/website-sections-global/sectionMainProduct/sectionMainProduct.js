import './sectionMainProduct.css'
import ThumMainProduct from './images/mainproduct.png'
import ThumMainProductMobile from './images/mainproductmobile.png'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Slidersection() {
    const c = (cl) => document.querySelector(cl)
    let screen = window.innerWidth

    //console.log( screen )
    //c('')

    /*goToPageSection*/
    function goToPageSection(e) {
        if( e.target.id === 'laptops' ) {
            localStorage.setItem('searchProduct', `category/${e.target.id}`)
        }
    }


    useEffect(() => {
        if( screen <= 480 ) {
            if( c('.image-main-product') ) {
                c('.image-main-product').src = ThumMainProductMobile
            }
        }
    }, [screen])

    return (
        <div className='main-product-section'>
            <div className='product-main'>
                <a href='#/searchpage'><img src={ThumMainProduct} alt='mainproduct' className='image-main-product' id='laptops' onClick={goToPageSection}/></a>
            </div>
        </div>
    )
}
