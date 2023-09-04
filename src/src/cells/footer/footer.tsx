import React from 'react';
import Text from '../../atoms/texts/text';

import './footer.scss';

interface FooterInter { }

const Footer: React.FC<FooterInter> = (props) => {

    return <footer>
        <Text text='Footer' />
    </footer>
}

export default Footer;