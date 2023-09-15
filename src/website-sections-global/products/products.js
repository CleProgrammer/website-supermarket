import '../products/products.css'

import StarRating from '../selectedproduct/images/star-rating.webp'
import ApiCall from '../../api-call/api-call'
import { useEffect, useState } from 'react'

export default function Products({link, prices}) {
    const c = (cl) => document.querySelector(cl)
    const [saveProducts, setSaveProducts] = useState([])

    /*FILTERS*/
    const [savePriceMin, setSavePriceMin] = useState([])
    const [savePriceMax, setSavePriceMax] = useState([])
    const [checkFilter, setcheckFilter] = useState(false)

    function filterPrice() {
        localStorage.setItem('priceMin', c('.inputChoosePriceMin').value)
        localStorage.setItem('priceMax', c('.inputChoosePriceMax').value)
        localStorage.setItem('checkFilter', 'true')
    }

    function filterCategory(e) {
        localStorage.setItem('searchProduct', `/category/${e.target.className}`)
        localStorage.setItem('checkFilter', 'true')
    }

    function selectProduct(e) {
        localStorage.setItem('selectedproduct', e.target.id)
    }

    useEffect(() => {
        const getProducts = async (e) => {
            let getData = await ApiCall(e)
            setSaveProducts( getData.products )   
        }
        getProducts(link)

        if( prices ) {
            if(prices[0] === '') {
                setSavePriceMin( 0 )
            } else {
                setSavePriceMin( parseInt( prices[0] ) )
            }

            if(prices[1] === '') {
                setSavePriceMax( 1000000 )
            } else {
                setSavePriceMax( parseInt( prices[1] ) )
            }
        }

        let saveCheckFilter = localStorage.getItem('checkFilter')
        if( saveCheckFilter === 'true' ) {
            setcheckFilter( true )
        } else if( saveCheckFilter === 'false' ) {
            setcheckFilter( false )
        }
    }, [])

    return (
        <div className="products-main">
            {saveProducts.length > 0 ? (
                <>
                    <div className='section-filters'>
                        <div className='min-max'>
                            <input className='inputChoosePriceMin' placeholder='Min.'/>
                            <input className='inputChoosePriceMax' placeholder='Max.'/>
                            <div className='filter-price' onClick={filterPrice}><a href='/searchpage'>Filtrar</a></div>
                        </div>
                        <div className='categories'>
                            <div style={{fontWeight: '600', marginBottom: '5px'}}>CATEGORIAS</div>
                            <a href='/searchpage'><div className='smartphones' onClick={filterCategory}>smartphone</div></a>
                            <a href='/searchpage'><div className='laptops' onClick={filterCategory}>notebook</div></a>
                            <a href='/searchpage'><div className='fragrances' onClick={filterCategory}>perfume</div></a>
                            <a href='/searchpage'><div className='skincare' onClick={filterCategory}>creme facial</div></a>
                            <a href='/searchpage'><div className='groceries' onClick={filterCategory}>alimento</div></a>
                            <div></div>
                        </div>
                    </div>
                    <div className='section-products'>
                    
                    {saveProducts.map((item) =>
                        checkFilter === true ? (
                        (parseInt( item.price ) >= savePriceMin && parseInt( item.price ) <= savePriceMax && (
                                <div key={item.id} className='div-section-products'>
                                    <div className='div-section-products-img'>
                                        <img src={item.images[0]}/>
                                    </div>
                                    <div className='div-section-products-informations'>   
                                        {item.title.length > 18 ? (
                                            <div className='div-section-products-informations-title' title={item.title}>{item.title.substring(0, 15) + '...'}</div>
                                        ): (
                                            <div className='div-section-products-informations-title'>{item.title}</div>
                                        )}
                                        
                                        <div className='div-section-products-informations-rating'><img src={StarRating} /> {item.rating}</div>
                                        <div className='div-section-products-informations-price'>U$ {item.price}</div>
                                        {item.description.length > 50 ? (
                                            <div className='div-section-products-informations-description'>{item.description.substring(0, 40) + '...'}</div>
                                        ): (
                                            <div className='div-section-products-informations-description'>{item.description}</div>  
                                        )}
                                        <a href='/productpage'><div id={item.id} className='seeProductButtom' onClick={selectProduct}>VER</div></a>
                                        
                                    </div>
                                </div>
                            ))): checkFilter === false && (
                                <div key={item.id} className='div-section-products'>
                                    <div className='div-section-products-img'>
                                        <img src={item.images[0]}/>
                                    </div>
                                    <div className='div-section-products-informations'>   
                                        {item.title.length > 18 ? (
                                            <div className='div-section-products-informations-title' title={item.title}>{item.title.substring(0, 15) + '...'}</div>
                                        ): (
                                            <div className='div-section-products-informations-title'>{item.title}</div>
                                        )}
                                        
                                        <div className='div-section-products-informations-rating'><img src={StarRating} /> {item.rating}</div>
                                        <div className='div-section-products-informations-price'>U$ {item.price}</div>
                                        {item.description.length > 50 ? (
                                            <div className='div-section-products-informations-description'>{item.description.substring(0, 40) + '...'}</div>
                                        ): (
                                            <div className='div-section-products-informations-description'>{item.description}</div>  
                                        )}
                                        <a href='/productpage'><div id={item.id} className='seeProductButtom' onClick={selectProduct}>VER</div></a>
                                    </div>
                                </div> 
                            ) 
                        )}
                    </div>
                </>
            ): saveProducts.length === 0 && (
                <div className='product-not-found'>
                    Produto não encontrado
                </div>
            )}

        </div>
    )
}
