import ToDoList from "../components/ToDoList";
import InsuranceTips from "../components/InsuranceTips";

const Center = () => {
  return (
    <div className=" flex items-start justify-start w-full flex-wrap m-5">
      <div className=" w-full md:w-1/2 px-5">
        <ToDoList />
      </div>
      <div className=" w-full md:w-1/2 px-5">
        <InsuranceTips />
      </div>
    </div>
  );
};

export default Center;
