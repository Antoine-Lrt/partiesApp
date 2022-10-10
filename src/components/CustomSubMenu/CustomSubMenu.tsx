import React, { FunctionComponent } from 'react';
import './stylesCustomSubMenu.scss';

interface CustomSubMenuProps {}

const CustomSubMenu: FunctionComponent<CustomSubMenuProps> = () => (
    <div className="customSubMenu">
        <ul className="customSubMenu_list">
            <li className="customSubMenu_list_item">
                <h2 className="customSubMenu_list_item_text"> Map</h2>
            </li>
            <li className="customSubMenu_list_item">
                <h2 className="customSubMenu_list_item_text">
                    Prochaines soirée
                </h2>
            </li>
        </ul>
    </div>
);

export default CustomSubMenu;
