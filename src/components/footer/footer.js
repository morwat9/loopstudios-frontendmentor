import './footer.css'
import FooterBrand from '../../images/logo.svg'
import FacebookIcon from '../../images/icon-facebook.svg'
import InstagramIcon from '../../images/icon-instagram.svg'
import PinterestIcon from '../../images/icon-pinterest.svg'
import TwitterIcon from '../../images/icon-twitter.svg'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-left'>
                    <div>
                        <img src={FooterBrand} alt="loopstudio brand" />
                    </div>
                    <div className='footer-nav'>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Events</div>
                        <div>Products</div>
                        <div>Support</div>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-icons'>
                        <img src={FacebookIcon} alt="facebook icon"/>
                        <img src={TwitterIcon} alt="twitter icon"/>
                        <img src={PinterestIcon} alt="pinterest icon"/>
                        <img src={InstagramIcon} alt="instagram icon"/>
                    </div>
                    <div className='footer-copyright'>
                        &copy;2022 Loopstudios. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}