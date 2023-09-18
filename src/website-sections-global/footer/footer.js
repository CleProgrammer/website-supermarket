import '../footer/footer.css'
import $ from 'jquery'

export default function Footer() {
    const c = (cl) => document.querySelector(cl)

    function goToHome(e) {
        if( e.target.id === 'home' ) {
            console.log('dfgdfg')
            let bodySize = document.body.clientHeight
            $('html, body').animate({
                scrollTop: bodySize - bodySize
            }, 500)
        }
    }

    return (
        <div className="footer-main">
            <div className='footer-container'>
                <div id='home' onClick={goToHome}>HOME</div>
                <div>PRODUTOS</div>
                <div>CONTATOS</div>
            </div>
        </div>
    )
}