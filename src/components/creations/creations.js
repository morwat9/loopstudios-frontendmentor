import './creations.css'
import { useMediaQuery } from "@react-hook/media-query";

import CuriosityDesktop from '../../images/desktop/image-curiosity.jpg'
import DeepEarthDesktop from '../../images/desktop/image-deep-earth.jpg'
import FishEyeDesktop from '../../images/desktop/image-fisheye.jpg'
import FromAboveDesktop from '../../images/desktop/image-from-above.jpg'
import GridDesktop from '../../images/desktop/image-grid.jpg'
import NightArcadeDesktop from '../../images/desktop/image-night-arcade.jpg'
import PocketBorealisDesktop from '../../images/desktop/image-pocket-borealis.jpg'
import SoccerTeamDesktop from '../../images/desktop/image-soccer-team.jpg'

import CuriosityMobile from '../../images/mobile/image-curiosity.jpg'
import DeepEarthMobile from '../../images/mobile/image-deep-earth.jpg'
import FishEyeMobile from '../../images/mobile/image-fisheye.jpg'
import FromAboveMobile from '../../images/mobile/image-from-above.jpg'
import GridMobile from '../../images/mobile/image-grid.jpg'
import NightArcadeMobile from '../../images/mobile/image-night-arcade.jpg'
import PocketBorealisMobile from '../../images/mobile/image-pocket-borealis.jpg'
import SoccerTeamMobile from '../../images/mobile/image-soccer-team.jpg'

export default function Creations() {
    const isDesktop = useMediaQuery('only screen and (min-width: 550px)')


    const creations = [
        {
            imageDesktop: DeepEarthDesktop,
            imageMobile: DeepEarthMobile,
            title: "DEEP EARTH"
        },
        {
            imageDesktop: NightArcadeDesktop,
            imageMobile: NightArcadeMobile,
            title: "NIGHT ARCADE"
        },
        {
            imageDesktop: SoccerTeamDesktop,
            imageMobile: SoccerTeamMobile,
            title: "SOCCER TEAM VR"
        },
        {
            imageDesktop: GridDesktop,
            imageMobile: GridMobile,
            title: "THE GRID"
        },
        {
            imageDesktop: FromAboveDesktop,
            imageMobile: FromAboveMobile,
            title: "FROM UP ABOVE VR"
        },
        {
            imageDesktop: PocketBorealisDesktop,
            imageMobile: PocketBorealisMobile,
            title: "POCKET BOREALIS"
        },
        {
            imageDesktop: CuriosityDesktop,
            imageMobile: CuriosityMobile,
            title: "THE CURIOSITY"
        },
        {
            imageDesktop: FishEyeDesktop,
            imageMobile: FishEyeMobile,
            title: "MAKE IT FISHEYE"
        },
    ]


    return (
        <>
            <div className='creations-container'>
                <div className='creations-header'>
                    <div className='creations-title'>
                        OUR CREATIONS
                    </div>
                    <div className='creations-button-desktop'>SEE ALL</div>
                </div>
                <div className='creations-card-container'>
                    {creations.map(creation => (
                        <div className='card' style={{ backgroundImage: `url(${isDesktop ? creation.imageDesktop : creation.imageMobile})` }} key={creation.title}>
                            <div className='card-filter'>
                                <div className='card-title'>
                                    {creation.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='creations-button-mobile'>SEE ALL</div>
            </div>
        </>
    )
}