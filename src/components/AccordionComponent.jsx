import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const AccordionComponent = ({ accordData }) => {


    return (
        <div className=" py-12 sm:py-6">
            <Accordion type="single" collapsible>
                {accordData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="my-4">
                        <div>
                            <AccordionTrigger className=" text-sm hover:no-underline p-4 text-gray-600 md:text-xl">{item.title}</AccordionTrigger>
                        </div>
                        <div className="bg-accord">
                            <AccordionContent className="cursor-pointer p-4 text-sm text-gray-500 md:text-base">{item.detail}</AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default AccordionComponent;
