import './sectionMainProduct.css'
import ThumMainProduct from './images/mainproduct.png'

export default function Slidersection() {
    const c = (cl) => document.querySelector(cl)

    /*goToPageSection*/
    function goToPageSection(e) {
        if( e.target.id === 'laptops' ) {
            localStorage.setItem('searchProduct', `category/${e.target.id}`)
        }
    }

    return (
        <div className='main-product-section'>
            <div className='product-main'>
                <a href='#/searchpage'><img src={ThumMainProduct} alt='mainproduct' id='laptops' onClick={goToPageSection}/></a>
            </div>
        </div>
    )
}
