import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const AccordionComponent = () => {
    const accordData = [
        {
            title: "Are You An Insurance Company?",
            detail: "No, MyCovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone."
        },
        {
            title: "What Kinds Of Plans Can I Get?",
            detail: "Every plan to suit your business needs. Our plans cover health, vehicles, gadgets, office space, travel and logistics. You can also create unique plans with us, if you don't find what you need."
        },
        {
            title: "How Do I Get Covered?",
            detail: "It's as easy as having a conversation. Choose a plan that suits your business, tell us a bit about your business, complete payment and get an insurance certificate immediately. No paperwork is involved."
        },
        {
            title: "Can I Get A Unique Plan For My Business?",
            detail: "Certainly! That's what we do at mycovergenius. We create tailor-made insurance plans to suit your specific business needs."
        },
    ];

    return (
        <div className=" py-12 sm:py-6">
            <Accordion type="single" collapsible>
                {accordData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="my-4">
                        <div>
                            <AccordionTrigger className=" text-sm hover:no-underline p-4 text-gray-600 md:text-xl">{item.title}</AccordionTrigger>
                        </div>
                        <div className="bg-accord">
                            <AccordionContent className="cursor-pointer p-4 text-sm text-gray-500 md:text-xl">{item.detail}</AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default AccordionComponent;
