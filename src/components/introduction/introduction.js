import './introduction.css'
import Interactive from '../../images/desktop/image-interactive.jpg'

export default function Introduction() {
    return (
        <div className='intro-container'>
            <div className='intro-image'>
                <img src={Interactive} alt="interactive man!"/>
            </div>
            <div className='intro-content'>
                <div className='intro-title'>
                    THE LEADER IN INTERACTIVE VR
                </div>
                <div className='intro-body'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </div>
            </div>
        </div>
    )
}