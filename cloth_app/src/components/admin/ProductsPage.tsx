import { useState } from "react";
import { Search, Plus, Trash2, Edit } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const initialProducts = [
  { id: "PRD-01", name: "Shiny Dress", category: "Women's Fashion", price: 95.5, stock: 24 },
  { id: "PRD-02", name: "Long Dress", category: "Women's Fashion", price: 120.0, stock: 8 },
  { id: "PRD-03", name: "Full Sweater", category: "Winter Wear", price: 75.0, stock: 42 },
  { id: "PRD-04", name: "White Shirt", category: "Men's Fashion", price: 62.0, stock: 0 },
  { id: "PRD-05", name: "Colorful Dress", category: "Summer Collection", price: 89.0, stock: 15 },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Products
          </h1>
          <p className="text-sm text-zinc-500">
            Manage your clothing catalog, pricing, and stock levels.
          </p>
        </div>

        <Button
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
          className="h-10 gap-2 rounded-lg px-4"
        >
          <Plus className="h-4 w-4" />
          New Product
        </Button>
      </div>

      <Card className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs">
        <div className="border-b border-zinc-200 p-4 sm:p-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 pl-9"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-zinc-50/80">
                <TableHead className="px-6 py-3.5">SKU</TableHead>
                <TableHead className="px-6 py-3.5">Product Name</TableHead>
                <TableHead className="px-6 py-3.5">Category</TableHead>
                <TableHead className="px-6 py-3.5">Price</TableHead>
                <TableHead className="px-6 py-3.5">Stock</TableHead>
                <TableHead className="px-6 py-3.5 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-6 py-4 font-medium text-zinc-500">
                    {item.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-semibold text-zinc-900">
                    {item.name}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-zinc-600">
                    {item.category}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-medium text-zinc-900">
                    ${item.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    {item.stock === 0 ? (
                      <Badge className="bg-red-100 text-red-700">Out of stock</Badge>
                    ) : item.stock <= 10 ? (
                      <Badge className="bg-amber-100 text-amber-800">
                        Low ({item.stock})
                      </Badge>
                    ) : (
                      <Badge className="bg-emerald-100 text-emerald-800">
                        In Stock ({item.stock})
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <Button variant="ghost" size="icon-sm">
                        <Edit className="h-4 w-4 text-zinc-600" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}