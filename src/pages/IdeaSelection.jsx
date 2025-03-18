import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ChatButton from "../components/ChatButton";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const IdeaSelection = () => {
    const [activeTab, setActiveTab] = useState("Announcement");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const bgColor = "#1F3F6A";

    return (
        <div className="font-sans min-h-screen bg-gray-50 transition-all duration-300 ease-in-out">
            {/* Navbar */}
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} bgColor={bgColor} />

            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} bgColor={bgColor} />

            {/* Content Wrapper */}
            <div
                className={`mt-20 px-6 transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? "ml-64" : "ml-0"
                }`}
            >
                {/* Breadcrumb Navigation */}
                <Breadcrumb bgColor={bgColor} />

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6">
                    {/* Tabs */}
                    <div className="flex justify-around gap-4 mb-6">
                        {["Announcement", "Material", "Submission", "Grade Book"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded text-white font-medium ${
                                    activeTab === tab ? "bg-green-600" : "bg-gray-600"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="bg-white rounded-md shadow-2xl border border-gray-200 p-6">
                        <h2 className="text-2xl font-bold text-[#1F3F6A] mb-6">Final Year Project I (FYP ID)</h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#1F3F6A] text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">Sr No.</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Subject</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Date</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Attachment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={5} className="border border-gray-300 px-4 py-3 text-gray-700">
                                            No Announcement
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            {/* Chat Button */}
            <ChatButton bgColor={bgColor} />
        </div>
    );
};

export default IdeaSelection;
