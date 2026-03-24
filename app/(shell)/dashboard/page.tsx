export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Metric Cards Mockup */}
                <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                    <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                    <div className="text-3xl font-bold mt-2 text-foreground">$45,231.89</div>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <span className="bg-green-500/10 p-0.5 rounded px-1">+20.1%</span> from last month
                    </p>
                </div>
                <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                    <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                    <div className="text-3xl font-bold mt-2 text-foreground">+2,350</div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <span>+180</span> since last week
                    </p>
                </div>
                <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                    <p className="text-sm font-medium text-muted-foreground">Sales</p>
                    <div className="text-3xl font-bold mt-2 text-foreground">+12,234</div>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <span className="bg-green-500/10 p-0.5 rounded px-1">+19%</span> from last month
                    </p>
                </div>
            </div>

            {/* Chart/Dashboard content placeholder */}
            <div className="bg-background border border-border h-[400px] rounded-xl flex items-center justify-center text-muted-foreground shadow-sm">
                Dashboard Overview Chart
            </div>
        </div>
    );
}
