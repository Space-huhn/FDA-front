import React from 'react';
import themeClassic from "@/themes/classic";

const Favorite = ({state}) => {
  const activeColor = themeClassic.palette["colorAccent"].companyAccentMain;

  return (
    <svg width="17" height="17" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.8434 2.14929C14.4768 1.78493 14.0417 1.4959 13.5627 1.2987C13.0837 1.1015 12.5704 1 12.0519 1C11.5335 1 11.0201 1.1015 10.5411 1.2987C10.0621 1.4959 9.62698 1.78493 9.26046 2.14929L8.49981 2.90512L7.73916 2.14929C6.99882 1.41366 5.9947 1.00038 4.94771 1.00038C3.90071 1.00038 2.89659 1.41366 2.15626 2.14929C1.41592 2.88493 1 3.88267 1 4.92302C1 5.96336 1.41592 6.9611 2.15626 7.69674L2.91691 8.45256L8.49981 14L14.0827 8.45256L14.8434 7.69674C15.21 7.33255 15.5009 6.90014 15.6994 6.42422C15.8979 5.94829 16 5.43818 16 4.92302C16 4.40785 15.8979 3.89774 15.6994 3.42182C15.5009 2.94589 15.21 2.51348 14.8434 2.14929V2.14929Z"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        stroke={state ? activeColor : 'white'}
        fill={state && activeColor}
      />
    </svg>
  );
};

export default Favorite;