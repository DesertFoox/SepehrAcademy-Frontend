import React from "react"
import { Row, Col } from "reactstrap"
// import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
// import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
// import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
// import RevenueChart from "../../ui-elements/cards/analytics/Revenue"
// import GoalOverview from "../../ui-elements/cards/analytics/GoalOverview"
// import BrowserStats from "../../ui-elements/cards/analytics/BrowserStatistics"
// import ClientRetention from "../../ui-elements/cards/analytics/ClientRetention"
// import SessionByDevice from "../../ui-elements/cards/analytics/SessionByDevice"
// import CustomersChart from "../../ui-elements/cards/analytics/Customers"
// import ChatWidget from "../../../components/@vuexy/chatWidget/ChatWidget"

import "../../assets/scss/plugins/charts/apex-charts.scss"
import DashboardHeader from './../../components/DashboardHeader/DashboardHeader';


const Dashboard = () => {
  return ( 

    <>
      <DashboardHeader />
      {/* <Row className="match-height">
        <Col lg="3" md="6" sm="6">
          <SubscribersGained />
        </Col>
        <Col lg="3" md="6" sm="6">
          <RevenueGenerated />
        </Col>
        <Col lg="3" md="6" sm="6">
          <QuaterlySales />
        </Col>
        <Col lg="3" md="6" sm="6">
          <OrdersReceived />
        </Col>
      </Row>    */}
    </>

   );
}
 
export default Dashboard;