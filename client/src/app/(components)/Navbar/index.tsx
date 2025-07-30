import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* SearchBar */}
      <div className="flex items-center gap-8">
        <div className="realtive flex h-min w-[200px]">
          <Search className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
