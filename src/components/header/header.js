import React from "react";
import './header.css'
import NavbarBrand from '../../images/logo.svg'
import Hamburger from '../../images/icon-hamburger.svg'
import CloseIcon from '../../images/icon-close.svg'
import { useMediaQuery } from "@react-hook/media-query";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function Header() {
    const isDesktop = useMediaQuery('only screen and (min-width: 998px)')
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="navbar-brand">
                        <img src={NavbarBrand} alt="loopstudios logo" width={150} />
                    </div>
                    <div className="navbar-menu">
                        {isDesktop ?
                            <div className="navbar-full">
                                <div>About</div>
                                <div>Careers</div>
                                <div>Events</div>
                                <div>Products</div>
                                <div>Support</div>
                            </div> :

                            <img src={Hamburger} alt="hamburger icon" width={30} onClick={toggleDrawer} />
                        }
                    </div>
                </div>
                <div className="header-body">
                    <div className="tagline-container">
                        <div className="tagline">
                            <span>
                                IMMERSIVE EXPERIENCES THAT DELIVER
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                size="100vh"
                className="navbar-drawer"
                style={{
                    backgroundColor: "#000",
                    color: "hsl(0, 0%, 100%)"
                }}
            >
                <div>
                    <div className="drawer-header">
                        <div className="drawer-brand">
                            <img src={NavbarBrand} alt="loopstudios logo" width={150} />
                        </div>
                        <div className="drawer-close">
                            <img src={CloseIcon} alt="close icon" width={30} onClick={toggleDrawer} />
                        </div>
                    </div>
                    <div className="drawer-body">
                        <div>ABOUT</div>
                        <div>CAREERS</div>
                        <div>EVENTS</div>
                        <div>PRODUCTS</div>
                        <div>SUPPORT</div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}