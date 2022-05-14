import React from "react";
import Image from "next/image";

import MenuSvg from "../../public/menu.svg";
import MenuItem from "../../components/MenuItem";

function id() {
  return (
    <div className="">
      <section className="bg-green-500 flex flex-row items-center justify-center px-16 drop-shadow-lg mb-16 flex-wrap w-full lg:gap-12 pb-8">
      <Image
          className="flex-1"
          src={MenuSvg}
          alt=""
          width={200}
          height={220}
        />
        <h1 className="font-semibold text-4xl lg:text-5xl text-white mb-4">
          For You&apos;s Menu
        </h1>
        <div>
          <p className="text-white italic">Method of Payments: Cash or Debit/Credit Card </p>
          <p className="text-white italic">Opening hours: 9:00 AM - 12 AM (Mon-Sun)</p>
          <p className="text-white italic">Location: N° 265 Rue Akasyasse، Ifran 53000</p>
          <p className="text-white italic">Phone Number: +212-654-759-878</p>
        </div>
        
      </section>
      <div className="flex px-10 gap-12 flex-wrap justify-center py-12 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default id;
