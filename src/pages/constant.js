import { MdWorkOutline } from "react-icons/md";

export const dashboardOperationOptions = [
  {
    id: 1,
    icon: MdWorkOutline,
    title: "Recruitment",
    path: "loginSelection/operations/recruitment/1",
    description: "Application for Recruitment Division",
    users: [
      {
        id: 1,
        icon: MdWorkOutline,
        title: "Recruitment Head",
        description: "Portal for Head of the Recruitment",
        path: "https://mw-rec-ims.netlify.app/recruitment",
      },
      {
        id: 2,
        icon: MdWorkOutline,
        title: "Recruiters",
        description: "Portal for the Recruiters",
        path: "https://mw-rec-ims.netlify.app/recruitment",
      },
      {
        id: 3,
        icon: MdWorkOutline,
        title: "Clients",
        description: "Portal for Clients using Recruitment Services",
        path: "https://mw-rec-ims.netlify.app/client",
      },
    ],
  },
  {
    id: 2,
    icon: MdWorkOutline,
    title: "Accounting",
    path: "loginSelection/operations/accounting/2",
    description: "Application for Recruitment Division",
    users: [
      {
        id: 1,
        icon: MdWorkOutline,
        title: "Accounting Head",
        description: "Portal for Head of the Accounting",
        path: "https://mw-acc-ims.netlify.app/accounting",
      },
    ],
  },
];

export const dashboardSupportOptions = [
  {
    id: 1,
    icon: MdWorkOutline,
    title: "Support test",
    path: "loginSelection/recruitment/1",
    description: "Application for Recruitment Division",
    users: [],
  },
];

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  show: {
    opacity: 1,
    y: "0px",
    delay: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 9,
    },
  },
};
