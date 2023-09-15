import './sectionMainProduct.css'

export default function Slidersection() {
    function goToMainProduct() {
        localStorage.setItem('selectedproduct', '1')
    }

    return (
        <div className='main-product-section'>
            <div className='product-main' onClick={goToMainProduct}>
                <a href='/productpage'><img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'/></a>
            </div>
        </div>
    )
}
