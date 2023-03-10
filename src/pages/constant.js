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
        path: "https://ims-recruitment.netlify.app/recruitment",
      },
      {
        id: 2,
        icon: MdWorkOutline,
        title: "Recruiters",
        description: "Portal for the Recruiters",
        path: "https://ims-recruitment.netlify.app/recruitment",
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
        path: "https://ims-accounting.netlify.app/accounting",
      },
      {
        id: 2,
        icon: MdWorkOutline,
        title: "Accountant",
        description: "Portal for Head of the Accounting",
        path: "https://ims-accounting.netlify.app/accounting",
      },
    ],
  },
  {
    id: 3,
    icon: MdWorkOutline,
    title: "CV Parsing",
    path: "https://cv.omanjobs.om",
    description: "Application for Recruitment Division",
    direct: true,
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
