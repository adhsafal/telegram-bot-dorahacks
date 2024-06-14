import { createContext, useContext, useState } from "react";

export const PageContext = createContext({
  pageNumber: 0,
  setPageNumber: (x: any) => {},
});

export const PageProvider = ({ children }: any) => {
  const [pageNumber, setPageNumber] = useState(0);

  const changePageNumber = (pageNo: number) => {
    setPageNumber(pageNo);
  };

  return (
    <PageContext.Provider
      value={{
        pageNumber,
        setPageNumber: changePageNumber,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context)
    throw new Error("usePageContext must be used within a PageProvider");
  return context;
};
