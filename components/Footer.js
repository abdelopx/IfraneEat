import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-green-500 py-4 bottom-0 w-full">
      {/* <div className="px-5 py-5 flex justify-around mt-10">
        <div className="flex flex-col items-center gap-2">
          <h6 className="font-medium">Available cities:</h6>
          <span className="text-sm">Ifrane, Morocco</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h6 className="font-medium">Top Restaurants:</h6>
          <span className="text-sm">For You</span>
          <span className="text-sm">Oueld Lhaj</span>
          <span className="text-sm">Foodie</span>
          <span className="text-sm">Crepeto</span>
        </div>
      </div> */}
      <p className="text-white italic font-medium text-md">© 2022 IfraneEat. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
