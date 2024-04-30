import ToDoList from "../components/ToDoList";
import InsuranceTips from "../components/InsuranceTips";

const Center = () => {
  return (
    <div
      className=" flex lg:items-start lg:justify-start 
       items-center justify-center

       flex-wrap 
       w-full
   flex-col lg:flex-row"
    >
      <div className=" w-[90%] md:w-1/2 p-5 mt-5">
        <ToDoList />
      </div>
      <div className=" w-full md:w-1/2 p-5 mt-5">
        <InsuranceTips />
      </div>
    </div>
  );
};

export default Center;
