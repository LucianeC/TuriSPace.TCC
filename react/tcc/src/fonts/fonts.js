import { createGlobalStyle } from "styled-components";
import RobotoThin from './Roboto-Thin.woff2';
import RobotoLight from './Roboto-Light.woff2';
import RosarioSemiBold from './Rosario-SemiBold.woff2';
import MontserratMedium from './Montserrat-Medium.woff2';
import OpenSansExtraBold from './OpenSans-ExtraBold.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: Roboto-Thin;
        src: url(${RobotoThin}) format('woff2');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: Roboto-Light;
        src: url(${RobotoLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
   @font-face {
        font-family: Rosario-semiBold;
        src: url(${RosarioSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: Montserrat-Medium;
        src: url(${MontserratMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: OpenSans-ExtraBold;
        src: url(${OpenSansExtraBold}) format('woff2');
        font-weight: 800;
        font-style: normal;
    }
`