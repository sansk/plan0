import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* SideBar */}
      <Sidebar />
      {/* Main Content */}
      {/* This Main is where the children will be rendered */}
      <main className="dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64">
        {/* Navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
