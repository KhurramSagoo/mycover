const Btn = ({ title, handle }) => {
  return (
    <div
      className="mx-1 py-2 cursor-pointer px-5 text-white bg-primary rounded-full"
      onClick={() => handle}
    >
      {title}
    </div>
  );
};

export default Btn;
