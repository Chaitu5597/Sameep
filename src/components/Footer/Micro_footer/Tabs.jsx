import { useState } from "react";

const icons = {
  briefcase: (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12v.01M7 7h10M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"
      ></path>
    </svg>
  ),
  heart: (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
      ></path>
    </svg>
  ),
  truck: (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-6h13v6M9 17a3 3 0 106 0M9 17H5a2 2 0 00-2 2v2h18v-2a2 2 0 00-2-2h-4"
      ></path>
    </svg>
  ),
  sparkles: (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m12.728 0l-2.121-2.121M8.757 8.757L6.636 6.636"
      ></path>
    </svg>
  ),
  home: (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l9-9 9 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
      ></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
    </svg>
  ),
};

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Business and Legal",
      icon: icons.briefcase,
      content:
        "AC Lodging ServicesBeach ResortsBungalows On HireCottages On HireDharamshalasFarm HouseFarm House On HireGovernment HostelsGuest HouseHostelsHostels For MenHostels For WomenHostels For Working MenHostels For Working WomenHotelsHotels (Rs 500 & Below)Lodging ServicesResortsDormitory ServicesHome StayHostel For Girl Students3 Star Hotels5 Star Hotels2 Star Hotels4 Star HotelsVillasVillas On HireRooms On HireAC Dormitory ServicesPet Friendly ResortsHostel For Boy StudentsVillage ResortsAC Guest HousePaying Guest Accommodations For WomenWater Park ResortsHostel For StudentsCouple Friendly HotelsPaying Guest Accommodations for StudentGovernment Hostels for WomenAC Paying Guest AccommodationsAC Paying Guest Accommodations For MenAC Paying Guest Accommodations for WomenPaying Guest Accommodations For MenPaying Guest Accommodations For Girl StudentUnisex Paying Guest AccommodationsSingle Occupancy Paying Guest AccommodationsMansionsCouple Paying Guest Accommodations",
      disabled: false,
    },
    {
      title: "Beauty and Fitness",
      icon: icons.heart,
      content:
        "Real Estate AgentsBook ShopsAadhaar Card AgentsYoga ClassesEstate Agents For LandPmjay Scheme HospitalsTutorials For IIT JEEMobile Phone Repair & Services-MIWrist Watch DealersEducation ConsultantsBattery Operated Scooter Dealers-OLAEntertainment CentresDTH TV Broadcast Service Providers-Sun DirectAC Repair & Services-Blue StarTnpsc TutorialsMobile Phone Simcard Dealers-JioMPSC TutorialsShoe Dealers-NikeTirupati Darshanam Ticketing ServicesBitcoin ServicesMobile Phone Repair & Services-NothingCat TutorialsLawyers For District CourtAyushman Bharat Yojana ConsultantsLawyers For Supreme CourtSports Shoe DealersCourier Services For AhmedabadInternet Payment Gateway Solution ProvidersTaxi Services For Inter CityBPSC TutorialsCourier Services For CanadaDemat Account ServicesAutomobile Part Dealers-Ashok LeylandPrp Hair Transplantation Treatment DoctorsMutual Fund Agents-SBICourier Services For DubaiBEST EnquiryPickleball CourtsKhatu Shyam Bhajan SingersDairy Product Retailers-AmulTutorials For MppscUber Autorickshaw Attachment ServicesFootball DealersCourier Services For SuratBattery Operated Auto Rickshaw Dealers-Mini MetroElectricity Suppliers-KsebCourier Services For TirupatiPackers And Movers For HyderabadNewspaper Advertising Agencies-Dainik BhaskarTutorials For MHT CET.",
      disabled: false,
    },
    {
      title: "Automobiles & Vehicles",
      icon: icons.truck,
      content:
        "Kotak Mahindra BanksINOX CinemasCanara BanksRatnakar BanksPVR CinemasICICI BanksHDFC BanksAU Small Finance BankBank Of MaharashtraBank Of IndiaAxis BanksIDFC First BanksMaharashtra Gramin BanksCatholic Syrian BanksSaraswat Co Operative BanksPunjab & Sind BanksState Bank Of IndiaUnion Bank Of IndiaPunjab National BanksBank Of BarodaLifestyle StoresBehrouz BiryaniFastrackThe Good BowlSonyYes BanksCromaDell Exclusive StoresBeverly Hills Polo ClubJoyalukkas JewelleryKalyan JewellersFlying MachineLenovo Exclusive StoreReliance DigitalVijay SalesDuroflexAnytime FitnessKromakay SalonsToni&Guy SalonsBakingoBarbeque Nation RestaurantsMcDonaldsSweet Truth Cake ShopsALDO StoresHeliosInglot StoresLEE StoresMax StoresUS Polo AssnWranglerLevi'sApple StoreIFB PointLGOppo Exclusive ShowroomFederal BanksIDBI BanksBandhan BanksDBS BanksKarur Vysya BanksIndusind BanksCentral Bank Of India",
      disabled: false,
    },
    {
      title: "Astrology",
      icon: icons.sparkles,
      content:
        "BangaloreMumbaiChennaiDelhiHyderabadPuneAhmedabadLucknowPatnaJaipurIndoreKochiKolkataCoimbatoreNagpurLudhianaAgraBhubaneshwarBhopalGuwahatiSuratMaduraiVisakhapatnamSonepatVadodaraMeerutThiruvananthapuramGurgaonKozhikodeVaranasiSiliguriAllahabadRajkotGhaziabadMysoreNoidaChandigarhNavi-MumbaiVijayawadaDurgapurSrinagarNashikPanipatJammuJodhpurUdaipur-RajasthanThaneRaipur-ChhattisgarhAmritsarJabalpur",
      disabled: false,
    },
    {
      title: "Accommodation",
      icon: icons.home,
      content:
        "Real Estate AgentsBook ShopsAadhaar Card AgentsYoga ClassesEstate Agents For LandPmjay Scheme HospitalsTutorials For IIT JEEMobile Phone Repair & Services-MIWrist Watch DealersEducation ConsultantsBattery Operated Scooter Dealers-OLAEntertainment CentresDTH TV Broadcast Service Providers-Sun DirectAC Repair & Services-Blue StarTnpsc TutorialsMobile Phone Simcard Dealers-JioMPSC TutorialsShoe Dealers-NikeTirupati Darshanam Ticketing ServicesBitcoin ServicesMobile Phone Repair & Services-NothingCat TutorialsLawyers For District CourtAyushman Bharat Yojana ConsultantsLawyers For Supreme CourtSports Shoe DealersCourier Services For AhmedabadInternet Payment Gateway Solution ProvidersTaxi Services For Inter CityBPSC TutorialsCourier Services For CanadaDemat Account ServicesAutomobile Part Dealers-Ashok LeylandPrp Hair Transplantation Treatment DoctorsMutual Fund Agents-SBICourier Services For DubaiBEST EnquiryPickleball CourtsKhatu Shyam Bhajan SingersDairy Product Retailers-AmulTutorials For MppscUber Autorickshaw Attachment ServicesFootball DealersCourier Services For SuratBattery Operated Auto Rickshaw Dealers-Mini MetroElectricity Suppliers-KsebCourier Services For TirupatiPackers And Movers For HyderabadNewspaper Advertising Agencies-Dainik BhaskarTutorials For MHT CET",
      disabled: false,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <nav className="flex border-b border-gray-300" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${index}`}
              id={`tab-${index}`}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && setActiveTab(index)}
              className={`flex items-center justify-center p-4 text-sm font-medium flex-1 whitespace-nowrap bg-blue-50
                ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800 cursor-pointer"
                }
                ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {tab.icon}
              {tab.title}
            </button>
          );
        })}
      </nav>
      <section
        id={`tab-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="p-4 text-gray-700"
      >
        <span className="font-medium text-gray-900">{tabs[activeTab].content}</span>
        {!tabs[activeTab].disabled && (
          <p className="mt-2 text-gray-600 text-sm">
            Clicking another tab will toggle the visibility of this content.
          </p>
        )}
      </section>
    </div>
  );
}
