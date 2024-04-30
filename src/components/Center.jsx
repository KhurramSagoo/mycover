import ToDoList from "../components/ToDoList";
import InsuranceTips from "../components/InsuranceTips";

const Center = () => {
  return (
    <div className=" flex lg:items-start lg:justify-start items-center justify-center w-full flex-wrap p-5 flex-col md:flex-row">
      <div className=" w-full md:w-1/2 p-5">
        <ToDoList />
      </div>
      <div className=" w-full md:w-1/2 p-5">
        <InsuranceTips />
      </div>
    </div>
  );
};

export default Center;
