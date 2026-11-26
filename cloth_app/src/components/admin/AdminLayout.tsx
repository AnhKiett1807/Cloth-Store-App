import { LayoutDashboard, LogOut, Menu, Package, Settings, ShoppingBag, Store, Users, X } from "lucide-react"
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom"
import { Button } from "../ui/button";

const navItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Products", path: "/admin/products", icon: Package },
    { label: "Orders", path: "/admin/orders", icon: ShoppingBag },
    { label: "Customers", path: "/admin/customers", icon: Users },
    { label: "Settings", path: "/admin/settings", icon: Settings }
]

const AdminLayout = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-zinc-50 text-zinc-900">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />

            )}
            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-6">
                    <Link
                        to="/admin"
                        className="uppercase font-serif text-2xl font-bold tracking-[0.2em] text-black">
                        fasco
                    </Link>
                    <button onClick={() => setSidebarOpen(false)}
                        className="text-zinc-500 lg:hidden">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1.5 p-4">
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Management
                    </p>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                to={item.path}
                                key={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 rounded=lg px-3.5 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-zinc-900 text-white"
                                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                                    }`}>
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="border-t border-zinc-200 p-4 space-y-2">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2.5 border-zinc-300 text-zinc-700"
                        render={<Link to="/" />}
                    >
                        <Store className="h-4 w-4" />
                        View Storefront
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-2.5 text-red-600 hover:bg-red-50 hover:text-red-700"
                        render={<Link to="/login" />}
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            <div className="flex flex-1 flex-col">
                {/* Topbar */}
                <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-zinc-200 bg-white px-6">
                    <div className="flex items-center gap-3">
                        <button
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            Admin Portal
                        </h2>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text0sm font-semibold text-white">
                        AD
                    </div>
                </header>

                <main className="flex01 p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout