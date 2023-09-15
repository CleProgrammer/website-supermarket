import '../footer/footer.css'

export default function Footer() {
    const c = (cl) => document.querySelector(cl)

    return (
        <div className="footer-main">
            <div className='footer-container'>
                <div>HOME</div>
                <div>PRODUTOS</div>
                <div>CONTATOS</div>
            </div>
        </div>
    )
}