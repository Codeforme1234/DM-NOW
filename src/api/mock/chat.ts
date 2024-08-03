export type Chat = {
  id: string;
  name: string;
  profilePicture: string;
  lastMessage: string;
  isRead: boolean;
  professionalDetails: string;
  isBookmarked?: boolean;
};

export const chat: Chat[] = [
  {
    id: "1",
    name: "Sofia Martinez",
    profilePicture: "/assets/image2.jpeg",
    lastMessage: "Excited about our new project!",
    isRead: false,
    professionalDetails: "Project Manager at InnovateX",
  },
  {
    id: "2",
    name: "Raj Patel",
    profilePicture: "/assets/panther.jpeg",
    lastMessage: "Can we schedule a call?",
    isRead: true,
    professionalDetails: "Lead Engineer at InnovateX",
  },

  {
    id: "3",
    name: "Mia Wong",
    profilePicture: "/assets/spiderman.jpeg",
    lastMessage: "Looking forward to the team outing.",
    isRead: false,
    professionalDetails: "Marketing Specialist",
  },

  {
    id: "4",
    name: "Arjun Singh",
    profilePicture: "/assets/superman.jpg",
    lastMessage: "I'll be there in 10 minutes.",
    isRead: false,
    professionalDetails: "Sales Executive",
  },

  {
    id: "5",
    name: "Aisha Khan",
    profilePicture: "/assets/loog.jpeg",
    lastMessage: "Need your feedback on the report.",
    isRead: true,
    professionalDetails: "Content Writer",
  },
];
