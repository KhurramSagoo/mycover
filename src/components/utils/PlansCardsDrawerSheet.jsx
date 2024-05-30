import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const PlansCardsDrawerSheet = (head, title, detail) => {
  return (
    <Sheet>
      <SheetTrigger>{head}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{detail}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PlansCardsDrawerSheet;
