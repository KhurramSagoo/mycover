// middle icons
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import EventIcon from "@mui/icons-material/Event";
import PaidIcon from "@mui/icons-material/Paid";

// // one stop data
// import track1 from "../../../assets/thirdparty/Claim1.mp4";
// import track2 from "../../../assets/thirdparty/claim2.mp4";
// import track3 from "../../../assets/thirdparty/claim3.mp4";

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

// basic protection
export const basicData = [
  {
    top: "What is covered in 3rd Party Comprehensive Insurance?",
    head: "Basic protection for your vehicle needs",
    detail:
      "Get basic protection for damages against others on the road, without breaking the bank.",
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
    title: "What Does 3rd Party Insurance Cover?",
    detail:
      "3rd party insurance provides coverage for damages caused by you to others on the road. This includes unlimited coverage for bodily injury and up to ₦3 million for damage to third-party property.",
  },
  {
    title: "How Do I Get Covered?",
    detail:
      "It’s easy. Tell us a bit about you and your business. Then tell us the number of vehicles you want to cover at only 55,000 Naira of each vehicle per annum.",
  },
  {
    title: "How Soon Will I Get My Insurance Certificate?",
    detail:
      "Instantly. You will receive your certificate in your email and on your dashboard once you complete your registration and inspection. This product  is  underwritten by AIICO.",
  },
];

export const oneStopTabs = [
  {
    head: "Track Claims",
    // video: track1,
    borderColor: "#7A5AF8 ",
  },
  {
    head: "Manage your Analytics",
    // video: track2,
    borderColor: "#DD2690",
  },
  {
    head: "Access your insurance plans",
    // video: track3,
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
    title: "Peace Of Mind",
    detail:
      "This plan covers third-party vehicle damages for legal compliance, so you can drive with peace of mind.",
    image: <EventIcon />,
  },
  {
    title: "Flexible payments",
    detail:
      "With us, there are no boxes. Payment depends on each vehicle, so can save on your budget",
    image: <PaidIcon />,
  },
];

// export heroData
export default middlePlans;
