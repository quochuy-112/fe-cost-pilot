"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FolderKanban,
    Settings,
    PieChart,
} from "lucide-react";

const navItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Projects",
        href: "/projects",
        icon: FolderKanban,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-border bg-background flex flex-col h-screen fixed top-0 left-0 z-20 transition-all duration-300">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:scale-105">
                        <PieChart size={20} />
                    </div>
                    <span className="font-semibold text-lg tracking-tight">Cost Pilot</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                    Overview
                </div>
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${isActive
                                ? "bg-primary text-primary-foreground shadow-sm font-medium"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                        >
                            <item.icon
                                size={20}
                                className={`transition-colors duration-200 ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    }`}
                            />
                            {item.name}

                            {isActive && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-foreground rounded-r-md block shadow-sm animate-pulse" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section (Footer of Sidebar) */}
            <div className="p-2 border-t border-border mt-auto">
                <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-muted rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium shadow-sm">
                        US
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">User</p>
                        <p className="text-xs text-muted-foreground truncate">user@costpilot.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
