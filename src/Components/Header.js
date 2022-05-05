import { Icon } from '@iconify/react';


function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <p className="nav-">Where in the world? </p>
            </div>
            <div className="header-right">
                <p className="nav">
                    <Icon icon="ion:moon-sharp" width="25" height="25" />
                    <span className="span-right">Dark Mode</span>
                </p>
            </div>
        </div>
    );
}

export default Header;