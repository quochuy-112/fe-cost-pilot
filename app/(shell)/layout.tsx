import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function ShellLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-muted/20">
            {/* Left Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 ml-64 flex flex-col min-h-screen transition-all duration-300">
                <Header />

                {/* Page Content */}
                <main className="flex-1 p-8 overflow-y-auto w-full max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
