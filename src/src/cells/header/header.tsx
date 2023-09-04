import React, { useEffect } from 'react';
import './header.scss'
import Text from '../../atoms/texts/text';

interface HeaderInter { }

const Header: React.FC<HeaderInter> = (props) => {

    useEffect(() => {
        const header = document.querySelector('header');
        const toggleClass = "is-sticky";

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 150) {
                header?.classList.add(toggleClass);
            } else {
                header?.classList.remove(toggleClass);
            }
        });

    }, []);

    return (
        <header>
            <Text text="CPMC Dogs"></Text>
        </header>
    )
}

export default Header;