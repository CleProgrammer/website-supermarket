import Header from '../../website-sections-global/header/header'
import Footer from '../../website-sections-global/footer/footer'
import '../searchpage/searchpage.css'
import Products from '../../website-sections-global/products/products'

export default function Serachpage() {
    let productProp = sessionStorage.getItem('searchProduct')
    if( productProp === null ) {
        productProp = ''
    }

    let priceMin = sessionStorage.getItem('priceMin')
    if( priceMin === null ) {
        priceMin = 0
    }

    let priceMax = sessionStorage.getItem('priceMax')
    if( priceMax === null ) {
        priceMax = 1000000
    }

    let pricemaxmin = [priceMin, priceMax]
    
    return (
        <div className='Searchpage'>
            <Header/>
            <Products link={productProp} prices={pricemaxmin}/>
            <Footer/>
        </div>
    )
}
