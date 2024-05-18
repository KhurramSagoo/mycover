const ToDoList = () => {
  return (
    <div className=" w-full  h-72 flex items-center justify-start flex-col">
      <div className=" flex items-center justify-between w-full">
        <p className=" text-xl font-semibold text-secondary">To Do List</p>
        <p className=" text-md text-green-600 cursor-pointer ">View All</p>
      </div>
      <div className=" h-72 flex items-center justify-center flex-col w-full">
        <p className=" w-72 text-gray-400 text-md">You have no pending to-do</p>
        <p className=" w-72 text-gray-400 text-sm">
          Items in your todo list will be displayed here
        </p>
      </div>
    </div>
  );
};

export default ToDoList;
