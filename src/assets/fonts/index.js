import { createGlobalStyle } from 'styled-components';

import NameOfYourFontWoff2 from './Hellix-Regular/Hellix-Regular.woff2';
import NameOfYourFontWoff from './Hellix-Regular/Hellix-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${NameOfYourFontWoff2}) format('woff2'),
        url(${NameOfYourFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
