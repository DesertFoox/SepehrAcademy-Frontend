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
  {
    id: "Course",
    title: "کورس ها",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "kourses",
        title: "کورس ها",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/kourses",
      },
      {
        id: "addkourses",
        title: "اضافه کردن دوره",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/addkourses",
      },
    ],
  },
  {
    id: "users",
    title: "کاربران",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "کاربران",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/users",
      },
      {
        id: "courses",
        title: "اضافه کردن کاربر",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/adduser",
      },
    ],
  },
  {
    id: "blogs",
    title: "بلاگ",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "allblogs",
        title: "بلاگ ها",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/blogs",
      },
      {
        id: "addBlog",
        title: "اضافه کردن بلاگ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/addblog",
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
