import QuickreplyIcon from "@mui/icons-material/Quickreply";
import EventIcon from "@mui/icons-material/Event";
import PaidIcon from "@mui/icons-material/Paid";

// Import videos
import track1 from "./assets/delivery-1.mp4";
import track2 from "./assets/comprehensive-analytics.mp4";
import track3 from "./assets/access.mp4";

// hero section
export const heroData = [
  {
    head: "Get your business vehicles on the road without worry.",
    detail:
      "Minimise vehicle risks with our Monthly Comprehensive auto insurance for your business.",
    span: "",
    btn: "Get Covered",
  },
];

// basic protection
export const basicData = [
  {
    top: "What is covered in Monthly Comprehensive Insurance?",
    head: "Essential protection for your business needs",
    detail:
      "Get all the protection you need for your vehicles, monthly, to reduce the strain on your budget.",
    span: "",
    btn: "Get Covered",
  },
];

// accordion
export const accordData = [
  {
    title: "Are You An Insurance Company?",
    detail:
      "No, MyCoverGenius is an Insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone in partnership with leading insurance companies.",
  },
  {
    title: "What Does Comprehensive Insurance Cover?",
    detail:
      "Comprehensive insurance covers you and your car against accidental damage to your vehicle, theft, fire, flood, commotions, accidents and damages to others on the road (vehicle and bodily injury). This plan is underwritten by AIICO.",
  },
  {
    title: "How Do I Get Covered?",
    detail:
      "It’s easy. Tell us a bit about you and your business. Then tell us the number of vehicles you want to cover at only 5% for each vehicle value per annum.",
  },
  {
    title: "How Soon Will I Get My Insurance Certificate?",
    detail:
      "Instantly. You will receive your certificate in your email and on your dashboard once you complete your registration and inspection. The product  is co-created with and  underwritten by AIICO Insurance company.",
  },
];

// one stop data
export const oneStopTabs = [
  {
    head: "Track Claims",
    video: track1,
    borderColor: "#7A5AF8",
  },
  {
    head: "Manage your Analytics",
    video: track2,
    borderColor: "#DD2690",
  },
  {
    head: "Access your insurance plans",
    video: track3,
    borderColor: "#2E90FA",
  },
];

// middle plans
const middlePlans = [
  {
    title: "Get covered instantly",
    detail:
      "Getting auto Insurance shouldn’t waste time. You receive your insurance certificate in minutes.",
    image: <QuickreplyIcon />,
  },
  {
    title: "Instant claims",
    detail:
      "Claims settlement is digital, seamless and instant without any additional payment from you.",
    image: <EventIcon />,
  },
  {
    title: "Complete Protection",
    detail:
      "Get the maximum coverage for any damages to your vehicles, without strain on your budget.",
    image: <PaidIcon />,
  },
];

// export heroData
export default middlePlans;
