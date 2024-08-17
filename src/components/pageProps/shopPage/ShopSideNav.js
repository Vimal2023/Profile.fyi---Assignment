import React from "react";
import Brand from "./shopBy/Brand";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <Category  /> */}
      <Brand icons={false}/>
      {/* <Color />
      <Price /> */}
    </div>
  );
};

export default ShopSideNav;
