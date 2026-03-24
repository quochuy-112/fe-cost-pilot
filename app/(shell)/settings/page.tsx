export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

                <form className="space-y-5 flex flex-col">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        />
                    </div>

                    <div className="border-t border-border pt-4 mt-2">
                        <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
