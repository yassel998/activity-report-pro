export const menu = [
  {
    id: 1,
    title: "principale",
    listItems: [
      {
        id: 1,
        title: "Page d'accueil",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile",
        icon: "myprofile.svg",
      },
    ],
  },
  {
    id: 2,
    title: "listes",
    listItems: [
      {
        id: 1,
        title: "Collaborateurs",
        url: "/collaborators",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Projets",
        url: "/projects",
        icon: "order.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Notifications",
        url: "/",
        icon: "notifications.svg",
      },
      {
        id: 2,
        title: "Language ",
        url: "/",
        icon: "language.svg",
      },

      {
        id: 3,
        title: "Déconnexion",
        url: "/",
        icon: "logout.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "5",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "1",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1",
  },
  // {
  //   id: 7,
  //   img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   username: "Angel Thomas",
  //   email: "angel@gmail.com",
  //   amount: "1.560",
  // },
];

export const chartBoxCollab = {
  color: "#8884d8",
  icon: "/user.svg",
  title: "CollabHub",
  number: "32",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { month: "Jan", users: 4 },
    { month: "Feb", users: 6 },
    { month: "Mar", users: 5 },
    { month: "Apr", users: 7 },
    { month: "May", users: 4 },
    { month: "Jun", users: 5 },
    { month: "Jul", users: 4 },
    { month: "Aug", users: 6 },
    { month: "Sep", users: 5 },
    { month: "Oct", users: 7 },
    { month: "Nov", users: 4 },
    { month: "Dec", users: 5 },
  ],
};

export const chartBoxProject = {
  color: "skyblue",
  icon: "/order.svg",
  title: "Projets",
  number: "138",
  dataKey: "projets",
  percentage: -12,
  chartData: [
    { name: "Sun", projets: 40 },
    { name: "Mon", projets: 60 },
    { name: "Tue", projets: 50 },
    { name: "Wed", projets: 70 },
    { name: "Thu", projets: 40 },
    { name: "Fri", projets: 50 },
    { name: "Sat", projets: 45 },
  ],
};

export const collabRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    last_name: "Hubbard",
    first_name: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
    address: "123 Main Street, Cityville, State",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
    address: "123 Main Street, Cityville, State",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    address: "123 Main Street, Cityville, State",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
    address: "123 Main Street, Cityville, State",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    address: "123 Main Street, Cityville, State",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    joinedAt: "01.02.2023",
    address: "123 Main Street, Cityville, State",
  },
];

export const projectRows = [
  {
    id: 1,
    projectName: "Project A",
    fullname: "John Doe",
    tjm: "500€",
    status: "En-Cours",
    createdAt: "01.02.2023",
  },
  {
    id: 2,
    projectName: "Project B",
    fullname: "Jane Smith",
    tjm: "600€",
    status: "Terminé",
    createdAt: "01.02.2023",
  },
  {
    id: 3,
    projectName: "Project C",
    fullname: "Bob Johnson",
    tjm: "550€",
    status: "À-Venir",
    createdAt: "01.02.2023",
  },
  {
    id: 4,
    projectName: "Project D",
    fullname: "Alice Williams",
    tjm: "700€",
    status: "En-Cours",
    createdAt: "01.02.2023",
  },
  {
    id: 5,
    projectName: "Project E",
    fullname: "Charlie Brown",
    tjm: "450€",
    status: "Terminé",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    projectName: "Project F",
    fullname: "Diana Miller",
    tjm: "800€",
    status: "À-Venir",
    createdAt: "01.02.2023",
  },
  {
    id: 7,
    projectName: "Project G",
    fullname: "Edward Davis",
    tjm: "600€",
    status: "En-Cours",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    projectName: "Project H",
    fullname: "Fiona White",
    tjm: "550€",
    status: "Terminé",
    createdAt: "01.02.2023",
  },
  {
    id: 9,
    projectName: "Project I",
    fullname: "George Turner",
    tjm: "500€",
    status: "À-Venir",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    projectName: "Project J",
    fullname: "Helen Clark",
    tjm: "700€",
    status: "En-Cours",
    createdAt: "01.02.2023",
  },
  {
    id: 11,
    projectName: "Project K",
    fullname: "Ian Adams",
    tjm: "450€",
    status: "Terminé",
    createdAt: "01.02.2023",
  },
  {
    id: 12,
    projectName: "Project L",
    fullname: "Julia Reed",
    tjm: "800€",
    status: "À-Venir",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    projectName: "Project M",
    fullname: "Kevin Brown",
    tjm: "600€",
    status: "En-Cours",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    projectName: "Project N",
    fullname: "Linda Parker",
    tjm: "550€",
    status: "Terminé",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    projectName: "Project O",
    fullname: "Michael Evans",
    tjm: "500€",
    status: "À-Venir",
    createdAt: "01.02.2023",
  },
];
