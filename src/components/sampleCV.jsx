import { v4 as uuidv4 } from "uuid";
import personImg from "../assets/person.jpg";

export const Personal = {
  fileName: "person.jpg",
  fileSrc: personImg,
  firstName: "Balázs",
  lastName: "Bánfi",
  city: "Szeged, HUN",
  email: "banfibalazs81@gmail.com",
  phoneNumber: "33701234567",
  website: "https://www.linkedin.com/in/banfibalazs/",
};

export const Education = [
  {
    id: uuidv4(),
    degree: "BSC",
    school: "ZMNE",
    city: "Budapest",
    start: "2010",
    end: "2015",
  },
  {
    id: uuidv4(),
    degree: "BSC",
    school: "ZMNE",
    city: "Budapest",
    start: "2010",
    end: "2015",
  },
];

export const Profession = [
  {
    id: uuidv4(),
    title: "Medior Software Engineer",
    company: "IT Solutions",
    description: "I was the leader of the IT team.",
    start: "2019",
    end: "present",
  },
];
