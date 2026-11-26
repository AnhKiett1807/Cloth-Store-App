import {
    DollarSign,
    ShoppingBag,
    Package,
    Users,
    ArrowUpRight,
    Plus,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";

const stats = [
    {
        title: "Total Revenue",
        value: "$24,580.00",
        change: "+12.5% from last month",
        icon: DollarSign,
    },
    {
        title: "Total Orders",
        value: "342",
        change: "+8.2% from last month",
        icon: ShoppingBag,
    },
    {
        title: "Active Products",
        value: "128",
        change: "14 low in stock",
        icon: Package,
    },
    {
        title: "Customers",
        value: "1,890",
        change: "+24 new this week",
        icon: Users,
    },
];

const recentOrders = [
    {
        id: "#ORD-7821",
        customer: "Nguyen Van A",
        item: "Shiny Dress - Black (M)",
        date: "Nov 26, 2026",
        total: "$95.50",
        status: "Delivered",
    },
    {
        id: "#ORD-7820",
        customer: "Tran Thi B",
        item: "Long Dress - Beige (S)",
        date: "Nov 26, 2026",
        total: "$120.00",
        status: "Processing",
    },
    {
        id: "#ORD-7819",
        customer: "Le Minh C",
        item: "Full Sweater - Cream (L)",
        date: "Nov 25, 2026",
        total: "$75.00",
        status: "Shipped",
    },
    {
        id: "#ORD-7818",
        customer: "Pham Hoang D",
        item: "White Shirt - Classic (M)",
        date: "Nov 25, 2026",
        total: "$62.00",
        status: "Cancelled",
    },
];

const statusBadgeStyle: Record<string, string> = {
    Deliverd: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
    Processing: "bg-amber-100 text-amber-800 hover:bg-amber-100",
    Shipped: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    Cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
}

const DashboardOverview = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                        Dashboard Overview
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Monitor store performance, recent orders, adn inventory status.
                    </p>
                </div>

                <Button
                    style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    className="h-10 gap-2 rounded-lg px-4"
                    render={<Link to="/admin/products" />}
                >
                    <Plus className="w-4 h-4" />
                    Add Product
                </Button>
            </div>

            {/* KPI */}
            <div className="grid gap05 sm: grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card
                            key={stat.title}
                            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium test-zinc-500">
                                    {stat.title}
                                </span>
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900">
                                    <Icon className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                                <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                                    {stat.change}
                                </p>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {/* Product price */}
            <Card className="overflow-hidden rounded-xl border border0zinc-200 bg-white shadow-xs">
                <div className="flex items-center justify-between border-b border-zinc-200 p-6">
                    <div>
                        <h3 className="text-base font-semibold text-zinc-900">
                            Recent Orders
                        </h3>
                        <p className="text-xs text-zinc-500">
                            Latest customer transactions acreoss your store
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        render={<Link to="/admin/orders" />}
                    >
                        View All
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-zinc-50/80">
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Order ID
                                </TableHead>
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Customer
                                </TableHead>
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Product
                                </TableHead>
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Date
                                </TableHead>
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Total
                                </TableHead>
                                <TableHead className="px-6 py-3.5 font-semibold text-zinc-700">
                                    Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentOrders.map((order) => (
                                <TableRow>
                                    <TableCell className="px-6 py-4 font-medium text-zinc-900">
                                        {order.id}
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-zinc-700">
                                        {order.customer}
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-zinc-600">
                                        {order.item}
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-zinc-500">
                                        {order.date}
                                    </TableCell>
                                    <TableCell className="px-6 py-4 font-semibold text-zinc-900">
                                        {order.total}
                                    </TableCell>
                                    <TableCell className="px-6 py-4">
                                        <Badge className={statusBadgeStyle[order.status]}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}

export default DashboardOverview