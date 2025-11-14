import bg from "@/images/backgrounds/footer2.jpeg";
import footerImage from "@/images/resources/logo-1.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "SKF",
  copyrightYear: new Date().getFullYear(),
  about:
    "Smilekeepers Foundation is a non-profit organization committed to empowering underprivileged individuals, providing education, support, and resources to those in need, helping them build better futures.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "https://twitter.com/Smilekeepers?s=08",
      icon: "fa-twitter",
    },  
    {
      id: 2,
      href: "https://www.facebook.com/Smilekeepers-Foundation-104563897912641/",
      icon: "fa-facebook-square",
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble",
    },
    {
      id: 4,
      href: "https://www.instagram.com/smilekeepers_foundation?igsh=MTQzbGtmNjN5b3Q0cQ==",
      icon: "fa-instagram",
    },
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Donate",
    },
    // {
    //   id: 2,
    //   href: "#",
    //   title: "Campaigns",
    // },
    // {
    //   id: 3,
    //   href: "#",
    //   title: "Fundraise",
    // },
    {
      id: 2,
      href: "#",
      title: "Volunteers",
    },
    // {
    //   id: 5,
    //   href: "#",
    //   title: "Sponsors",
    // },
    // {
    //   id: 6,
    //   href: "#",
    //   title: "Fundraising",
    // },
    {
      id: 3,
      href: "#",
      title: "Contact",
    },
    {
      id: 4,
      href: "#",
      title: "Help",
    },
    // {
    //   id: 9,
    //   href: "#",
    //   title: "Faqs",
    // },
  ],
};

export default footerData;
