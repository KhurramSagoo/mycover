import docSearch from "../assets/dashboard/doc-search.svg";

const ToDoList = () => {
  return (
    <div className=" w-full  h-72 flex items-center justify-start flex-col">
      <div className=" flex items-center justify-between w-full">
        <p className=" text-xl font-semibold text-secondary">To Do List</p>
        <p className=" text-md text-primary font-medium cursor-pointer ">
          View All
        </p>
      </div>
      <div className=" h-72 flex items-center justify-center flex-col w-full font-medium">
        <img src={docSearch} alt="" className=" w-24" />
        <p className=" text-center w-72 text-gray-600 text-md">
          You have no pending to-do
        </p>
        <p className=" text-center w-72 text-gray-500  text-sm">
          Items in your todo list will be displayed here
        </p>
      </div>
    </div>
  );
};

export default ToDoList;
