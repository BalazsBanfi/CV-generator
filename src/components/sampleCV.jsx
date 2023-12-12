import { v4 as uuidv4 } from "uuid";
import personImg from "../assets/person.jpg";

export const Person = {
  fileName: "person.jpg",
  fileSrc: personImg,
  personal: [
    {
      name: "First name",
      text: "Balázs",
      type: "text",
    },
    {
      name: "Last  name",
      text: "Bánfi",
      type: "text",
    },
    {
      name: "City",
      text: "Szeged, HUN",
      type: "text",
    },
    {
      name: "Email",
      text: "banfibalazs81@gmail.com",
      type: "email",
    },
    {
      name: "Phone number",
      text: "33701234567",
      type: "tel",
    },
    {
      name: "Website",
      text: "https://www.linkedin.com/in/banfibalazs/",
      type: "url",
    },
  ],

  education: [
    {
      id: uuidv4(),
      degree: "BSC",
      school: "ZMNE",
      city: "Budapest",
      start: "2010",
      end: "2015",
    },
  ],
  profession: [
    {
      id: uuidv4(),
      title: "Medior Software Engineer",
      company: "IT Solutions",
      description: "I was the leader of the IT team.",
      start: "2019",
      end: "present",
    },
  ],
};
