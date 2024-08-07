import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";

const App = () => {
  return (
    <div className="flex h-screen bg-purple-800 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
        <Navbar />
        <div className="flex-1 p-6">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
