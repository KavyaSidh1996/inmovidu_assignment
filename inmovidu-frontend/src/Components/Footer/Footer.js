import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebook, faLinkedinIn, faWhatsapp, faInstagramSquare, faFacebookF, faTelegram } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className="row Footer-two px-5">
        <div className="col-md-6">
            <p>Copyright © Getkenz All Rights Reserved</p>
        </div>
        <div className="col-md-6 text-center">
        <p>
        <FontAwesomeIcon className="mx-3" icon={faTwitter} /><span>|</span>
        <FontAwesomeIcon className="mx-3" icon={faFacebookF}/><span>|</span>
        <FontAwesomeIcon className="mx-3" icon={faLinkedinIn} /><span>|</span>
        <FontAwesomeIcon className="mx-3" icon={faWhatsapp} /><span>|</span>
        <FontAwesomeIcon className="mx-3" icon={faInstagramSquare} /><span>|</span>
        <FontAwesomeIcon className="mx-3" icon={faTelegram} />

        </p>
        </div>
    </div>
        
    )
}

