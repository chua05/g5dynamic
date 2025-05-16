"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { page: "/", views: 12500, uniqueVisitors: 8700, bounceRate: "32%" },
  { page: "/products", views: 8900, uniqueVisitors: 6200, bounceRate: "28%" },
  { page: "/blog", views: 7400, uniqueVisitors: 5100, bounceRate: "35%" },
  { page: "/about", views: 5200, uniqueVisitors: 3800, bounceRate: "41%" },
  { page: "/contact", views: 4100, uniqueVisitors: 3200, bounceRate: "45%" },
]

export function TopPagesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Page</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Unique Visitors</TableHead>
          <TableHead className="text-right">Bounce Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.page}>
            <TableCell className="font-medium">{item.page}</TableCell>
            <TableCell className="text-right">{item.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">{item.uniqueVisitors.toLocaleString()}</TableCell>
            <TableCell className="text-right">{item.bounceRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
