import React, { FunctionComponent } from 'react';
import './stylesCustomHeader.scss';

interface CustomHeaderProps {}

const CustomHeader: FunctionComponent<CustomHeaderProps> = () => (
    <div className="customHeader">
        <h1 className="customHeader_item"> Search</h1>
        <h1 className="customHeader_item"> Parties </h1>
        <h1 className="customHeader_item"> O </h1>
    </div>
);

export default CustomHeader;
