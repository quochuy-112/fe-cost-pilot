"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Bell, Search } from "lucide-react";

export function Header() {
    const pathname = usePathname();

    // Format the title based on the pathname
    const title = pathname.split("/").filter(Boolean)[0] || "Overview";
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    return (
        <header
            className={clsx(
                "h-16",
                "border-b border-border",
                "bg-background/80",
                "backdrop-blur-md",
                "sticky top-0",
                "z-10",
                "w-full",
                "flex items-center justify-between",
                "px-8",
                "shadow-sm"
            )}
        >
            <div className="flex items-center gap-4 flex-1">
                <h1
                    className={clsx(
                        "text-xl font-semibold",
                        "tracking-tight",
                        "text-foreground",
                        "transition-all"
                    )}
                >
                    {formattedTitle}
                </h1>
            </div>

            <div className="flex items-center gap-6">
                {/* Search */}
                <div
                    className={clsx(
                        "relative",
                        "group",
                        "hidden md:block"
                    )}
                >
                    <Search
                        className={clsx(
                            "absolute left-3",
                            "top-1/2 -translate-y-1/2",
                            "text-muted-foreground",
                            "w-4 h-4",
                            "group-focus-within:text-primary",
                            "transition-colors"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className={clsx(
                            "w-64",
                            "pl-10 pr-4 py-2",
                            "bg-muted/50",
                            "border border-transparent",
                            "rounded-full",
                            "focus:bg-background",
                            "focus:border-border",
                            "focus:ring-1 focus:ring-ring",
                            "outline-none",
                            "transition-all",
                            "text-sm",
                            "placeholder:text-muted-foreground",
                            "text-foreground"
                        )}
                    />
                </div>

                {/* Notifications */}
                <button
                    className={clsx(
                        "relative",
                        "w-10 h-10",
                        "rounded-full",
                        "hover:bg-muted",
                        "flex items-center justify-center",
                        "transition-colors"
                    )}
                >
                    <Bell size={20} className="text-muted-foreground" />
                    <span
                        className={clsx(
                            "absolute top-2 right-2.5",
                            "w-2 h-2",
                            "bg-red-500",
                            "rounded-full",
                            "border-2 border-background",
                            "animate-pulse"
                        )}
                    />
                </button>
            </div>
        </header>
    );
}
