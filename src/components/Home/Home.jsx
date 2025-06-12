import React from 'react';
import Sunnyactivity from '../Home/micro/Sunny_activity';
import PopularSearch from '../Home/micro/Populer_search';
import RecipeReviewCard from '../Home/micro/Recent';
import Homegrid from '../Home/micro/Homegrid';
import HomeSearch from '../Home/micro/HomeSearch';
import HomeSlider from '../Home/micro/HomeSlider';
import {HomeServises} from '..//Home/micro/HomeServises';
import Movies from '../Home/micro/Movies';
import Utilityservices from '../Home/micro/Utilityservices';
import Trending from '../Home/micro/Trending';
import TopLocations from '../Home/micro/Toplocations';

const Home = () => {
    return (
        <>
            {/* Uncomment these components as needed */}
            <HomeSearch />
            <HomeSlider />
            <HomeServises />
            
            <div className='grid grid-rows-1 gap-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <Homegrid />
                    <Homegrid />
                    <Homegrid />
                    <Homegrid />
                </div>
                <Utilityservices/>
                <Trending/>
            <Movies/>
            <TopLocations/>
            </div>
            
            <PopularSearch />
                <Sunnyactivity/>
                <div className='flex  justify-center-between gap-8 ms-4'>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                </div>
        </>
    );
}

export default Home;