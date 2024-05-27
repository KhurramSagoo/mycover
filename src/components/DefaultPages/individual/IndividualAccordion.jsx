import AccordionComponent from "@/components/AccordionComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const IndividualAccordion = () => {
  const accordData = [
    {
      title: "How long before my plan becomes active?",
      detail:
        "With MyCoverGenius, skip the process of bulky paper forms & boring office processes. Get covered right from your device and receive your insurance policy instantly.",
    },
    {
      title: "Can I buy it for multiple people?",
      detail:
        "Yes. MyCoverGenius allows you to get insurance for several people all at once, including your family.",
    },
    {
      title: "Who needs insurance?",
      detail:
        "Everyone, With MyCoverGenius, the uncertainty of possible financial loss is reduced! Our Insurance plans help you pay for medical emergencies, unforeseen damages caused to property like cars and gadgets! Transfer all your risks to us so you can have peace of mind.",
    },
    {
      title: "Is MyCoverGenius available in my state?",
      detail:
        "Yes! We are available in all 36 states in Nigeria, no matter where you are, We are set to provide you with premium insurance that protects you.",
    },
  ];
  return (
    <div className=" py-12 px-4 md:px-12 pb-6 mb-6 w-full  md:py-14 ">
      <div
        className=" flex items-center md:items-start justify-center  flex-col lg:flex-row
           
            "
      >
        {/* left side */}
        <div className=" mb-6 sm:pb-6 w-full flex items-center justify-center sm:items-start flex-col sm:px-8 ">
          <p className=" text-2xl md:text-5xl lg:text-7xl  text-secondary flex items-center justify-start font-extrabold mb-6 md:my-6">
            {" "}
            What would you like to
            <br />
          </p>
          <span className=" text-primary  text-2xl md:text-5xl lg:text-7xl font-extrabold ">
            know
          </span>
          <div className=" flex items-center  w-full justify-start md:my-6">
            <button className=" bg-primary py-3 px-9  text-white rounded-md ">
              Lets talk
            </button>
            <p className=" text-md text-primary ml-5 cursor-pointer ">
              Get Started
            </p>
          </div>
        </div>

        {/* right side accordion */}
        <div className=" px-4 w-full ">
          <div className=" px-4 w-full ">
            <div className=" py-12 sm:py-6">
              <Accordion type="single" collapsible>
                {accordData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="my-4"
                  >
                    <div>
                      <AccordionTrigger className=" text-sm hover:no-underline p-4 text-gray-800 md:text-xl">
                        {item.title}
                      </AccordionTrigger>
                    </div>
                    <div className="bg-accord">
                      <AccordionContent className="cursor-pointer p-4 text-sm text-gray-900 font-medium md:text-base">
                        {item.detail}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          {/* <AccordionComponent accordData={accordData} /> */}
        </div>
      </div>
    </div>
  );
};

export default IndividualAccordion;
