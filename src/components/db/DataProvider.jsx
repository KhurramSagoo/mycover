import { createContext, useState } from "react";

// Create a new context
const DataContext = createContext();

// Define a provider component
const DataProvider = ({ children }) => {
  const [idData, setIdData] = useState(0);
  console.log("contextapi", idData);

  return (
    <DataContext.Provider value={{ idData, setIdData }}>
      {children}
      {console.log(idData)}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
