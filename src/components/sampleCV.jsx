import { v4 as uuidv4 } from "uuid";
import samplePerson from "../assets/samplePerson.jpg";

export const Person = {
  fileName: "samplePerson.jpg",
  fileSrc: samplePerson,
  personal: [
    {
      name: "First name",
      text: "Balázs",
    },
    {
      name: "Last  name",
      text: "Bánfi",
    },
    {
      name: "Email",
      text: "banfibalazs81@gmail.com",
    },
    {
      name: "Phone number",
      text: "33701234567",
    },
    {
      name: "City",
      text: "Szeged, HUN",
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
      start: "2019",
      end: "present",
      description: "I was the leader of the IT team.",
    },
  ],
};
