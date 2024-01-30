import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @keyframes float {
      50% {
        transform: translateY(-2rem);
      }
    }

    html {
        font-size: 10px;
        font-family: "Space Grotesk";
        
        body {
            margin: 0px;
            color: ${props => props.theme.dark};

        a {
            &, &:hover, &:focus, &:active, &:visited, &:-webkit-any-link {
                text-decoration: none;
            }
        }

        .container {
            width: 120rem;

            .page-title {
                font-size: 3.6rem;
                font-weight: 700;
            }
        }

        @media screen and (max-width: ${props => props.theme.widthMobileScreen}) {
            .container {
                width: ${props => props.theme.widthContainerMobileScreen};

                .page-title {
                    font-size: 2.4rem;
                }
            }
        }
    }
}


`

export default GlobalStyle