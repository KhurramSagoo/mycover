import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

// hero section
export const heroData = [
  {
    head: "Get your business vehicles on the road without worry.",
    detail:
      "Travel insurance protects you and your team every step of the way, so you experience the world happily.",
    span: "",
    btn: "Get Covered",
  },
];

// basic protection
export const basicData = [
  {
    top: "What is covered in Travel Insurance",
    head: "Experience the world without worry",
    detail: "A few things you don't have to worry about anymore.",
    span: "",
    btn: "Get Covered",
  },
];

// accordion
export const accordData = [
  {
    title: "What Does Travel Insurance Cover?",
    detail:
      "Travel insurance gives you and your team protection against unprecedented events outside the country.",
  },
  {
    title: "How Do I Get Covered?",
    detail:
      "It’s easy. Select any of the big Get Covered buttons to tell us where you’re travelling to, the period of travel and your date of birth. That’s all",
  },
];

// middle plans
const middlePlans = [
  {
    title: "Total coverage",
    detail:
      "Our plan gives your business 360° coverage during unprecedented events outside the country.",
    image: <CheckCircleIcon />,
    bg: "#fce7f6",
  },
  {
    title: "Instant claims process",
    detail:
      "You won’t have to spend time filling long forms with our digital claims process.",
    image: <ElectricBoltIcon />,
    bg: "#ffead5",
  },
  {
    title: "Immediate Assistance",
    detail:
      "You will never walk alone; our team works round the clock to serve you and your team.",
    image: <PrivacyTipIcon />,
    bg: "#fce7f6",
  },
];

// export heroData
export default middlePlans;
