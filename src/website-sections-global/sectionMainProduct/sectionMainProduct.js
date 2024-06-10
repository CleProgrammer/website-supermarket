import './sectionMainProduct.css'
import ThumMainProduct from './images/thumbmainproduct.jpg'

export default function Slidersection() {
    function goToMainProduct() {
        localStorage.setItem('selectedproduct', '1')
    }

    return (
        <div className='main-product-section'>
            <div className='product-main' onClick={goToMainProduct}>
                <img src={ThumMainProduct}/>
            </div>
        </div>
    )
}
