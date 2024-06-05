import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

// flexibusinessSmart Data
import claim1 from "./assets/claim1.png";
import claim2 from "./assets/claim2.png";

import person from "./assets/persons.svg";
import access from "./assets/access.svg";

// flexi business needs data
export const flexiBusinessNeedsData = [
  // {
  //   title: "Easy access to care",
  //   detail:
  //     "With access to over 1200 hospitals, your team is always within reach to every health centre in our network. No matter which state you move to, you are always close to quality care.",
  //   image: <CheckCircleIcon />,
  //   bg: "#fce7f6",
  // },
  {
    head: "Everything your business needs to enjoy quality health care.",
    detail: "Choose the plan that suits you best",
    span: "",
    btn: "Get Covered",
  },
];

// smart business tabs data
export const tabsBusinessSmartData = [
  {
    title: "A Unified Platform",
    detail:
      "Our web interface enables you to manage your plans and staff in one place. It helps you:",
    image: claim1,
    extra: [
      {
        line: "Manage employee benefits",
        image: person,
      },
      {
        line: "Access all business insurance plans.",
        image: access,
      },
    ],
  },
  {
    title: "Digital HMO ID",
    detail:
      "Everything is in place to ensure ill health does not get in the way of your business. Your team gets a personalised experience using a digital HMO ID to access healthcare from anywhere. Staff view their HMO ID from a mobile interface to manage their plans and get care.",
    image: claim2,
  },
];

// hero section
export const heroData = [
  {
    head: "Get your business vehicles on the road without worry.",
    detail:
      "Delight your team and boost productivity with Flexicare health insurance which comes with access to over 1200 hospitals.",
    span: "",
    btn: "Get Covered",
  },
];

// basic protection
export const basicData = [
  {
    top: "What is covered in Flexicare?",
    head: "Insurance that meets you where you are",
    detail:
      "Illnesses show up without warning, that’s why we’ve made getting health cover seamless with no extra cost on your budget.",
    span: "",
    btn: "Get Covered",
  },
];

// accordion
export const accordData = [
  {
    title: "What Does Flexicare Cover?",
    detail:
      "Flexicare covers primary and secondary care, surgeries, antenatal care and delivery for your staff. See the full benefits here.",
  },
  {
    title: "How Do I Know The Hospitals Under The Plan?",
    detail:
      "Go to your HMO ID from your account and select View Hospitals to see all the hospitals near you.",
  },
  {
    title: "Can My Staff Visit Any Of The Hospitals?",
    detail:
      "Yes! Your staffs can get healthcare from anywhere. There’s always one close to you, or your staffs.",
  },
  {
    title: "How Do I Get Covered?",
    detail:
      "Click on Get covered and select Flexicare for as little as ₦1,600 per staff. Tell us a little about you and the number of staffs you want an health cover for.",
  },
];

// middle plans
const middlePlans = [
  {
    title: "Easy access to care",
    detail:
      "With access to over 1200 hospitals, your team is always within reach to every health centre in our network. No matter which state you move to, you are always close to quality care.",
    image: <CheckCircleIcon />,
    bg: "#fce7f6",
  },
  {
    title: "Flexible payment",
    detail:
      "With us, there are no boxes. Choose the plan that works best for you, without worry for unexpected occurrences.",
    image: <ElectricBoltIcon />,
    bg: "#ffead5",
  },
  {
    title: "Get covered instantly",
    detail:
      "Our onboarding process is fast and online, no paper, no long forms, or prior tests. Get HMO IDs for your team and start enjoying health cover immediately.",
    image: <PrivacyTipIcon />,
    bg: "#fce7f6",
  },
];

// export heroData
export default middlePlans;
