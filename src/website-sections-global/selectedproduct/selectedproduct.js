import { useEffect, useState } from 'react'
import '../selectedproduct/selectedproduct.css'
import ApiCall from '../../api-call/api-call'
import StarRating from '../selectedproduct/images/star-rating.webp'

export default function Selectedproduct() {
    const c = (cl) => document.querySelector(cl)
    const [saveData, setsaveData] = useState([])
    const [saveImg, setsaveImg] = useState([])

    function turnImageActive(e) {
        setsaveImg( e.target.src )
    }

    function zoom(e) {
        c('.image-zoom').style.backgroundImage = 'url("' + saveImg + '")'
        c('.image-zoom').style.marginLeft = `calc(270px - ${e.clientX}px)`
        c('.image-zoom').style.marginTop = `calc(125px - ${e.clientY}px)`

        c('.selectedproduct-1-selected-image').style.backgroundImage = ''
    }

    function changeImage() {
        c('.image-zoom').style.backgroundImage = ''
        c('.selectedproduct-1-selected-image').style.backgroundImage = 'url("' + saveImg + '")'
    }

    useEffect(() => {
        let getIdSelectedProduct = sessionStorage.getItem('selectedproduct')

        const getData = async (e) =>  {
            let getData = await ApiCall(e)
            setsaveData( getData )
            setsaveImg( getData.images[0] )
        }

        getData(getIdSelectedProduct)

    }, [])

    return (
        <div className="selectedproduct-main">

            <div className='selectedproduct-1'>
                <div className='selectedproduct-1-images'>
                    {saveData.images && (
                        <>
                            {saveData.images[0] && (
                                <img src={saveData.images[0]} onMouseOver={turnImageActive}/>
                            )}
                            
                            {saveData.images[1] && (
                                <img src={saveData.images[1]} onMouseOver={turnImageActive}/>
                            )}

                            {saveData.images[2] && (
                                <img src={saveData.images[2]} onMouseOver={turnImageActive}/>
                            )}

                            {saveData.images[3] && (
                                <img src={saveData.images[3]} onMouseOver={turnImageActive}/>
                            )}
                        </>
                    )}
                </div>

                <div className='selectedproduct-1-selected-image' style={{backgroundImage: `url(${saveImg})`}} onMouseMove={zoom} onMouseOut={(changeImage)}>
                    <div className='image-zoom'></div>
                </div>
            </div>
            <div className='selectedproduct-2'>
                <div className='product-informations'>
                    <div className='title'>{saveData.title}</div>
                    <div className='rating'><img src={StarRating} /> {saveData.rating}</div>
                    <div className='price'>U${saveData.price}</div>
                    <div className='desc'>{saveData.description}</div>
                </div>

                <div className='product-buttons'>
                    <div className='selectedproduct-3-buy'>COMPRAR</div>
                    <div className='selectedproduct-3-cart'>CARRINHO</div>
                </div>
            </div>
        </div>
    )
}
