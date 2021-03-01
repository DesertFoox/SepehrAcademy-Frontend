import React from "react"
import { ShoppingCart } from "react-feather"
import { quaterlySales, quaterlySalesSeries } from "../StatisticsData"
import StatisticsCards from './../../@vuexy/statisticsCard/StatisticsCard';

const QuaterlySales = () => {
  return (  
    <>
      <StatisticsCards
        icon={<ShoppingCart className="danger" size={22} />}
        iconBg="danger"
        stat="36%"
        statTitle="Quarterly Sales"
        options={quaterlySales}
        series={quaterlySalesSeries}
        type="area"
      />
    </>
  );
}
 
export {QuaterlySales};