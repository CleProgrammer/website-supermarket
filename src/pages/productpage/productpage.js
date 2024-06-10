import '../productpage/productpage.css'
import Header from '../../website-sections-global/header/header'
import Footer from '../../website-sections-global/footer/footer'
import Selectedproduct from '../../website-sections-global/selectedproduct/selectedproduct'

export default function Productpage() {
    return (
        <div className='productpage-main'>
            <Header/>
            <Selectedproduct/>
            <Footer/>
        </div>
    )
}
