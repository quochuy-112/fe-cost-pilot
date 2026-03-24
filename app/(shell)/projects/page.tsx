export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-background border border-border p-4 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold">Active Projects</h2>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Create Project
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-background border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg hover:underline transition-all">Project Name {i}</h3>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                In Progress
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            A short description of project {i} explaining what it does and why it is important.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full border-2 border-background bg-zinc-200 dark:bg-zinc-700"></div>
                                <div className="w-6 h-6 rounded-full border-2 border-background bg-zinc-300 dark:bg-zinc-600"></div>
                                <div className="w-6 h-6 rounded-full border-2 border-background bg-zinc-400 dark:bg-zinc-500 flex items-center justify-center text-[10px] text-white">
                                    +3
                                </div>
                            </div>
                            <span>Updated 3 days ago</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
