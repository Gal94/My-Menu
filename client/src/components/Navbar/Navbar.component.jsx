import { useEffect, useState } from 'react';
import { NavbarContainer } from './Navbar.styles';

//TODO Add content and appropriate styles to navbar

let listener;

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        listener = document.addEventListener('scroll', (e) => {
            // get how much have been scrolled from top
            let scrolled = document.scrollingElement.scrollTop;

            // apply styles
            if (scrolled >= 10) {
                if (isTop !== false) {
                    setIsTop(false);
                }
            } else {
                if (isTop !== true) {
                    setIsTop(true);
                }
            }
        });

        // upon unmounting remove listener
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [isTop]);

    return (
        <NavbarContainer isTransparent={isTop}>
            Its a navbar thats needs to be implemented
        </NavbarContainer>
    );
};

export default Navbar;
