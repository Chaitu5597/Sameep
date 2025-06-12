// Movies_list_layout.jsx
import React, { useState } from 'react';
import Asidemenu from '../micro/Asidemenu';
import List_movies from '../micro/List_movies';
import ShowsNavigation from './Movies_tabsbar';

const Movies_list_layout = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Tabs and Search */}
      <ShowsNavigation tabValue={tabValue} setTabValue={setTabValue} />

      <div className="flex ">
        {/* Sidebar */}
        <div className="w-64">
          <Asidemenu />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {tabValue === 0 && <List_movies />}
          {tabValue === 1 && <div>⏳ Displaying Upcoming Shows</div>}
        </div>
      </div>
    </div>
  );
};

export default Movies_list_layout;
