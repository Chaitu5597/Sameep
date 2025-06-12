import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Asidemenu = () => {
  const [openDropdown, setOpenDropdown] = useState({
    sortedBy: true,
    languages: false,
    format: false,
    genre: false,
  });

  const [checkedItems, setCheckedItems] = useState({
    sortedBy: { old: false, new: false, present: false },
    languages: {
      english: false,
      spanish: false,
      french: false,
      german: false,
      chinese: false,
      japanese: false,
      hindi: false,
      arabic: false,
      russian: false,
      portuguese: false,
    },
    format: { '2d': false, '3d': false, imax: false },
    genre: {
      drama: false,
      comedy: false,
      action: false,
      thriller: false,
      romance: false,
      scifi: false,
      horror: false,
      documentary: false,
    },
  });

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxChange = (category, name) => {
    setCheckedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [name]: !prev[category][name],
      },
    }));
  };

  return (
    <>
      <aside className="w-64 bg-white shadow-md p-4 min-h-screen">
        <section>
         
          <h1 className="text-2xl font-bold mb-6 max-w-xs leading-snug sm:max-w-full">
            Filters
          </h1>

          <div className="mb-4">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleDropdown('sortedBy')}
            >
              Sorted By
              <span className="ml-2">
                {openDropdown.sortedBy ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </button>
            {openDropdown.sortedBy && (
              <div
                className="mt-2 pl-2 space-y-2"
                style={{
                  overflowY: 'auto',
                  maxHeight: '12rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {['old', 'new', 'present'].map((item) => (
                  <label key={item} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.sortedBy[item]}
                      onChange={() => handleCheckboxChange('sortedBy', item)}
                    />
                    <span className="capitalize">{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          
          <div className="mb-4">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleDropdown('languages')}
            >
              Languages
              <span className="ml-2">
                {openDropdown.languages ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </button>
            {openDropdown.languages && (
              <div
                className="mt-2 pl-2 space-y-2"
                style={{
                  overflowY: 'auto',
                  maxHeight: '12rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {[
                  'english',
                  'spanish',
                  'french',
                  'german',
                  'chinese',
                  'japanese',
                  'hindi',
                  'arabic',
                  'russian',
                  'portuguese',
                ].map((lang) => (
                  <label key={lang} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.languages[lang]}
                      onChange={() => handleCheckboxChange('languages', lang)}
                    />
                    <span className="capitalize">{lang}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

   
          <div className="mb-4">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleDropdown('format')}
            >
              Format
              <span className="ml-2">
                {openDropdown.format ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </button>
            {openDropdown.format && (
              <div
                className="mt-2 pl-2 space-y-2"
                style={{
                  overflowY: 'auto',
                  maxHeight: '12rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {['2d', '3d', 'imax'].map((format) => (
                  <label key={format} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.format[format]}
                      onChange={() => handleCheckboxChange('format', format)}
                    />
                    <span className="uppercase">{format}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          
          <div className="mb-4">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleDropdown('genre')}
            >
              Genre
              <span className="ml-2">
                {openDropdown.genre ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </button>
            {openDropdown.genre && (
              <div
                className="mt-2 pl-2 space-y-2"
                style={{
                  overflowY: 'auto',
                  maxHeight: '12rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {[
                  'drama',
                  'comedy',
                  'action',
                  'thriller',
                  'romance',
                  'scifi',
                  'horror',
                  'documentary',
                ].map((genre) => (
                  <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.genre[genre]}
                      onChange={() => handleCheckboxChange('genre', genre)}
                    />
                    <span className="capitalize">{genre}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </section>
      </aside>
    </>
  );
};

export default Asidemenu;
