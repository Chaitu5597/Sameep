import React from 'react';
import {
  FaHandshake,
  FaSearch,
  FaPhoneAlt,
  FaStar,
  FaTag,
  FaMapMarkerAlt
} from 'react-icons/fa';
import CustomTabs from '../Micro_footer/Tabs'; // Make sure the path is correct

const Onestep = () => {
  return (
    <footer className="bg-gray-100 py-10 ms-15 w-full rounded-lg ">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6">
            One-Stop for All Local Businesses, Services, & Stores Nearby Across India
          </h3>
          <div className="space-y-4 text-gray-700">
            <p className="text-justify">
              Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, <span className="font-semibold">8888888888</span> and the fact that we own a strong hold on local business information pan India.
            </p>
            <p className="text-justify">
              Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country.
            </p>
            <p className="text-justify">
              Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h3 className="text-3xl font-bold mb-8">
            Some of our services that will prove useful to you on a day-to-day basis:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-blue-600 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">B2B Portal</h4>
              </div>
              <p className="text-gray-600">
                Experience the ultimate B2B portal by Justdial. Explore countless diverse categories, top-quality vendors, and unmatched wholesale experience with instant chat assistance.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaSearch className="text-green-600 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">Business Search</h4>
              </div>
              <p className="text-gray-600">
                Find any local business with complete contact details, addresses, and directions across all major cities and smaller towns in India.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-red-600 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">24/7 Support</h4>
              </div>
              <p className="text-gray-600">
                Call our iconic customer support number 8888888888 for any assistance regarding local businesses, services, or orders.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">Rate & Review</h4>
              </div>
              <p className="text-gray-600">
                Share your experiences and read authentic reviews about local businesses to make informed decisions.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaTag className="text-purple-600 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">Best Deals</h4>
              </div>
              <p className="text-gray-600">
                Discover exclusive offers, last minute deals and live quotes to get the best bargains in your city.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-teal-600 text-3xl mr-4" />
                <h4 className="text-2xl font-semibold">Free Listing</h4>
              </div>
              <p className="text-gray-600">
                Showcase your business to millions of customers across India through our free listing service.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              Some of the other services that can be of assistance to you for leisure, health and home convenience are - Pest Control, Skin Care Clinics, Painters, Laundry Services, Interior Designers, Mobile Phone Repair, Vaccination Centres, Internet Service Providers, etc. With an endless number of things under the sun, you can be sure this will be your 'One Stop Shop' to find everything and more.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mt-10">
          <p className="text-gray-600 text-xl font-semibold mb-2">Popular Categories</p>
          <CustomTabs />
        </section>
      </div>
    </footer>
  );
};

export default Onestep;
