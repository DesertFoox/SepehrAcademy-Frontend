import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard"
  },
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "dropdown",
    title: "dropdown",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/test"
      },
      {
        id: "eCommerceDash",
        title: "eCommerce",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
      }
    ]
  },
  

]

export default navigationConfig
