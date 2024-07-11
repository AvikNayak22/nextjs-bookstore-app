import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Gyanspace - Buy or Rent Books",
  description: "An online bookstore to sell and rent used books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
      <div className="flex flex-wrap p-2 justify-center w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
