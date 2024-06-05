// middle icons
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionIcon from "@mui/icons-material/Description";

// smart business
import hmo from "../../../assets/business/smartBusinessTabs/e-hmo-id.png";
import self from "../../../assets/business/smartBusinessTabs/self-inspection.png";
import peace from "../../../assets/business/smartBusinessTabs/peace-of-mind.png";
import claim from "../../../assets/business/smartBusinessTabs/instant-claim.png";

// one stop tabs
import beneficiaries from "../../../assets/business/solutions-beneficiaries.png";
import claims from "../../../assets/business/solutions-claims.png";
import plans from "../../../assets/business/solutions-plans.png";
import wallet from "../../../assets/business/solution-wallet.png";

// hero section
export const heroData = [
  {
    head: "Insurance made easy for your business",
    detail:
      "Set your business up for success with a seamless insurance platform with tools and products that help you recover from unplanned events quickly.",
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

// smart business tabs data
export const tabsBusinessSmartData = [
  {
    title: "Digital HMO ID",
    detail:
      "Staff can access quality healthcare with an eHMO ID from anywhere.",
    image: hmo,
  },
  {
    title: "Self inspection",
    detail:
      "Whether you need to protect your car, devices or office space, our self inspection process is easy and convenient.",
    image: self,
  },
  {
    title: "Peace of Mind",
    detail:
      "Some things shouldn't take time and we believe insurance is one of them. We've taken out the worries involved with paperworks and lengthy insurance processes.",
    image: peace,
  },
  {
    title: "Instant claim pay-outs",
    detail:
      "The sweet part. We care about your business, just like you do. That's why we ensure your business gets compensated swiftly, if anything ever goes wrong.",
    image: claim,
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
