import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import burger from '../assets/icon/burger.svg'
import close from '../assets/icon/close.svg'
import { useState, type FC } from 'react'

const Header: FC = () => {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  return (
    <StyledHeader className="header">
        <div className="header__container container">
            <a 
                href="/">
                <img 
                    src={logo} 
                    className="logo"
                />
            </a>

            <div className="header__menu--desktop">
                {menus.filter(menu => menu.label !== 'Home').map(menu => (
                    <a href={menu.path}>{menu.label}</a>
                    )
                )}
            </div>
            <div 
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className="header__menu--mobile"
            >
                <img 
                    src={!isOpenMobileMenu ? burger : close} 
                    className={!isOpenMobileMenu ? 'burger' : 'close'} 
                />
            </div>
        </div>
        {isOpenMobileMenu && 
            <div className="header__mobile-menu">
                <div className="container">
                    <div className="header__mobile-menu__menu">
                        {menus.slice(0, 3).map(menu => (
                                <a 
                                    href={menu.path}
                                    className={window.location.pathname === menu.path ? 'curr-menu' : ''}
                                    onClick={() => { setIsOpenMobileMenu(false) }}
                                >
                                    {menu.label}
                                </a>
                            )
                        )}
                    </div>
                    <div className="header__mobile-menu__menu login">
                        <a 
                            href={menus[3].path}
                            className={window.location.pathname === menus[3].path ? 'curr-menu' : ''}
                            onClick={() => { setIsOpenMobileMenu(false) }}
                        >
                            {menus[3].label}
                        </a>
                    </div>
                </div>
            </div>
        }
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    max-width: 100vw;
    padding: 3rem 0;
    position: fixed;
    background-color: white;
    top: 0;

    .header {
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
                width: 23.1rem;
                height: 3.2rem;
            }
        }
        
        &__menu {
            &--desktop {
                display: flex;
                justify-content: space-between;
                gap: 6rem;
            
                a {
                    font-size: 2.1rem;
                    font-family: "Space Grotesk";
                    font-weight: 500;
                }
            }

            &--mobile {
                display: none;

                img {
                    /* overflow: hidden;
                    object-fit: contain; */
                    /* width: 2.4rem;
                    height: 0.8rem;
                    border: 1px solid red; */
                    /* border: 1px solid red; */
                }
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
        height: ${props => props.theme.heightMobileHeader};
        padding: 0;

        .header {
            &__container {
                img {
                    &.logo {
                        width: 15rem;
                        height: 2rem;
                    }

                    &.burger {
                        width: 2.4rem;
                        height: 0.8rem;
                    }

                    &.close {
                        width: 1.7rem;
                        height: 1.7rem;
                    }
                }   
            }
        
            &__menu {
                &--desktop {
                    display: none;
                }

                &--mobile {
                    display: flex;
                    /* display: flex; */
                                    /* display: flex;
                justify-content: space-between;
                gap: 6rem; */

                    a {
                        /* font-size: 2.1rem;
                        font-family: "Space Grotesk";
                        font-weight: 500;    */
                    }
                }
            }

            &__mobile-menu {
                background-color: white;
                display: flex;
                justify-content: center;
                position: absolute;
                top: ${props => props.theme.heightMobileHeader};
                right: 0;
                left: 0;
                width: 100vw;
                height: calc(100vh - ${props => props.theme.heightMobileHeader});
                padding: 2.4rem 0;

                &__menu {
                    display: flex;
                    flex-direction: column;
                    gap: 3.2rem;
                    font-size: 1.8rem;
                    font-weight: 700;

                    &.login {
                        border-top: 1px solid #D9D9D9;
                        padding-top: 3.2rem;
                        margin-top: 3.2rem;
                    }

                    .curr-menu {
                        color: ${props => props.theme.orange};
                    }
                }
            }
        }
    }
`

const menus = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/events',
        label: 'Events',
    },
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/login',
        label: 'Login',
    }
]

export default Header
