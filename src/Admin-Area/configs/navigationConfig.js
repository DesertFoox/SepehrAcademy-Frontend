import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";

import { getUserInformation } from "../../Components/services/storage/storage";


const navigationConfig = [
  {
    id: "dashboard",
    title: "حساب کاربری",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/admin/dashboard",
  },
  {
    id: "home",
    title: "پروفایل",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: `/admin/Dashboard/profile/:id`,
  },
  {
    id: "dropdown",
    title: "دوره ها",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "دوره ها",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/courses",
      },
      {
        id: "courses",
        title: "اضافه کردن دوره",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/addcourse",
      },
    ],
  },
];

export default navigationConfig;
// {
//   id: "dropdown",
//   title: "dropdown",
//   type: "collapse",
//   icon: <Icon.Home size={20} />,
//   badge: "warning",
//   badgeText: "2",
//   children: [
//     {
//       id: "analyticsDash",
//       title: "Analytics",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/test"
//     },
//     {
//       id: "eCommerceDash",
//       title: "eCommerce",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin"],
//       navLink: "/ecommerce-dashboard"
//     }
//   ]
// },
