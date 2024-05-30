import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import search from "../../assets/dashboard/doc-search.svg";
const DrawerSheet = ({ head, title, detail, subDetail, value }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" flex items-center justify-center ">{head}</div>
      </SheetTrigger>
      <SheetContent className="  w-72 border-b-2 sm:w-full h-auto">
        <SheetHeader>
          <SheetTitle className=" w-full rounded-md">
            <div
              className=" flex items-center  justify-center shadow-md w-full gap-5
               text-primary  h-16"
            >
              <p>{title}</p>
              <p>({value})</p>
            </div>
          </SheetTitle>
          <SheetDescription>
            {value === 0 && (
              <div className=" mt-10 h-screen flex items-center justify-start flex-col gap-5">
                <div className=" text-xl font-bold text-black text-center break-words">
                  {detail}
                </div>
                <div className=" text-base font text-gray-500 text-center break-words">
                  {subDetail}
                </div>
                <div className=" text-xl font-bold text-center break-words bg-[#eff8ff] rounded-full w-36 h-36 ">
                  <img src={search} alt="" />
                </div>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerSheet;
