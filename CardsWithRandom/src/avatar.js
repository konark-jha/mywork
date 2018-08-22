import card1_img from "./res/img/card1_img.png";
import card2_img from "./res/img/card2_img.png";
import card3_img from "./res/img/card3_img.png";
import Facebook from "./res/logo/facebook.svg";
import Linkedin from "./res/logo/Linkedin.svg";
import Twitter from "./res/logo/Twitter.svg";
import profile1 from "./res/img/Profile_1.png";
import profile2 from "./res/img/Profile_2.png";
import profile3 from "./res/img/Profile_3.png";
import profile4 from "./res/img/Profile_4.png";
import card1_img1 from "./res/img/img1.jpg";
import card1_img2 from "./res/img/img2.jpg";
import card1_img3 from "./res/img/img3.jpg";
import card1_img4 from "./res/img/img4.jpg";
import locTag from "./res/logo/Location.svg";

const card1TextValues = [
  {
    heading: "Fishing in the Congo",
    subtext: "Congo",
    tag: "Domestic"
  },
  {
    heading: "Rafting in the Amazon",
    subtext: "Brazil",
    tag: "Amazon"
  },
  {
    heading: "Biking in Ladakh",
    subtext: "India",
    tag: "India"
  },
  {
    heading: "Rafting in Bali",
    subtext: "Indonesia",
    tag: "BALI"
  },
  {
    heading: "Hiking in Oaxaca",
    subtext: "Mexico",
    tag: "Mexico"
  },
  {
    heading: "Painting in Paris",
    subtext: "France",
    tag: "Paris"
  }
];
export const FeedsData = [
  {
    name: "Prakash Sanker",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  },
  {
    name: "Aakarsh Yadav",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  },
  {
    name: "Ankur Gala",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  },
  {
    name: "Meghna Sharma",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  },
  {
    name: "Omar Diab",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  },
  {
    name: "Anthony Mainero",
    company: "Parker Industries",
    designation: "UX DESIGNER",
    colab: "USUALLY COLLABORATED WITH"
  }
];

const profileImageUrls = [card3_img, profile1, profile2, profile3, profile4];
const cardImageUrls = [
  card1_img,
  card1_img1,
  card1_img2,
  card1_img3,
  card1_img4
];

export const getRandomCard1Text = () => {
  return card1TextValues[Math.floor(Math.random() * card1TextValues.length)];
};
export const getRandomCardImageUrl = () => {
  return cardImageUrls[Math.floor(Math.random() * cardImageUrls.length)];
};
export const getRandomProfileImageUrl = () => {
  return profileImageUrls[Math.floor(Math.random() * FeedsData.length)];
};
export const getRandomFeedsData = () => {
  return FeedsData[Math.floor(Math.random() * FeedsData.length)];

  // return profileImageUrls[Math.floor(Math.random() * profileImageUrls.length)];
};

export const svgImg = {
  Facebook,
  Linkedin,
  Twitter,
  locTag,
  card2_img
};
