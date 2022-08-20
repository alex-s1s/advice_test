import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Área de trabalho",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Agendar consultas",
    path: "/queries",
    icon: <AiIcons.AiFillAccountBook />,
    cName: "nav-text",
  },
  {
    title: "Consultas",
    path: "/schedules",
    icon: <AiIcons.AiOutlineSchedule />,
    cName: "nav-text",
  },
];
