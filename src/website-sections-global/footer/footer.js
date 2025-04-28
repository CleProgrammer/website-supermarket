import '../footer/footer.css'
import $ from 'jquery'
import PinterestLogo from "../footer/images/pinterest.png"
import InstagramLogo from "../footer/images/insta.png"
import WhatsappLogo from "../footer/images/whatsapp.png"
import EmailLogo from "../footer/images/email.png"
import TelegramLogo from "../footer/images/telegram.png"

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
        <footer className="footer-main">
            <div className='footer-container'>
                <div className='footer-icons'>
                    <img src={InstagramLogo}/>
                    <img src={PinterestLogo}/>
                    <img src={WhatsappLogo}/>
                    <img src={TelegramLogo}/>
                    <img src={EmailLogo}/>
                </div>
                <div className='footer-sections'>
                    <div id='home' onClick={goToHome}>HOME</div>
                    <div>PRODUTOS</div>
                    <div>LOCALIZAÇÃO</div>
                    <div>CONTATOS</div>
                </div>
            </div>
            <div className='footer-rights'>Copyright ©2025 | Desenvolvido por Clebson</div>
        </footer>
    )
}