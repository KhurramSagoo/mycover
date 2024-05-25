// middle icons
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionIcon from "@mui/icons-material/Description";

// one stop tabs
import beneficiaries from "../../../assets/business/solutions-beneficiaries.png";
import claims from "../../../assets/business/solutions-claims.png";
import plans from "../../../assets/business/solutions-plans.png";
import wallet from "../../../assets/business/solution-wallet.png";

// hero section
export const heroData = [
  {
    head: "Save on your vehicle insurance costs",
    detail:
      "3rd Party is a basic auto insurance plan that protects your business against damages to other people, vehicles and property in transit.",
    span: "",
    btn: "Get Covered",
  },
];

// accordion
export const accordData = [
  {
    title: "Are You An Insurance Company?",
    detail:
      "No, MyCovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone.",
  },
  {
    title: "What Kinds Of Plans Can I Get?",
    detail:
      "Every plan to suit your business needs. Our plans cover health, vehicles, gadgets, office space, travel and logistics. You can also create unique plans with us, if you don't find what you need.",
  },
  {
    title: "How Do I Get Covered?",
    detail:
      "It's as easy as having a conversation. Choose a plan that suits your business, tell us a bit about your business, complete payment and get an insurance certificate immediately. No paperwork is involved.",
  },
  {
    title: "Can I Get A Unique Plan For My Business?",
    detail:
      "Certainly! That's what we do at mycovergenius. We create tailor-made insurance plans to suit your specific business needs.",
  },
];

// one stop data
export const oneStopTabs = [
  {
    head: "Beneficiaries",
    title:
      "A host of innovative and tailored plans for every aspect of your business",
    image: beneficiaries,
    borderColor: "#7A5AF8 ",
  },
  {
    head: "Claims",
    title:
      "An automated claims process so you focus on achieving business goals.",
    image: claims,
    borderColor: "#DD2690",
  },
  {
    head: "Plans",
    title: "Conveniently manage staff and their insurance plans",
    image: plans,
    borderColor: "#2E90FA",
  },
  {
    head: "Wallet",
    title: "See your claims payout in real-time.",
    image: wallet,
    borderColor: "#12B76A",
  },
];

// middle plans
const middlePlans = [
  {
    title: "Affordable plans",
    detail: "Grow your business with insurance that fits your budget.",
    image: <PaymentsIcon />,
  },
  {
    title: "No Paperwork",
    detail:
      "We are online! Get your business covered anywhere without filling out long forms.",
    image: <DescriptionIcon />,
  },
  {
    title: "24/7 Support",
    detail: "We are at your beck and call with a constant support.",
    image: <SupportAgentIcon />,
  },
];

export default middlePlans;
