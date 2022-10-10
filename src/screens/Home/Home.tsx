import React, { FunctionComponent } from 'react';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomSubMenu from '../../components/CustomSubMenu/CustomSubMenu';
import './stylesHome.scss';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => (
    <div className="home">
        <section className="home_header">
            <CustomHeader />
            <CustomSubMenu />
        </section>
        <section className="home_main">
            <div className="home_main_title">Soirée en boîte</div>
            <div className="home_main_content">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </section>
    </div>
);

export default Home;
