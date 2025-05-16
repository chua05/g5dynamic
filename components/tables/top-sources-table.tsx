"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { source: "Google", visitors: 18500, conversion: "3.2%" },
  { source: "Direct", visitors: 12700, conversion: "4.5%" },
  { source: "Twitter", visitors: 8900, conversion: "2.8%" },
  { source: "Facebook", visitors: 7400, conversion: "2.1%" },
  { source: "LinkedIn", visitors: 5200, conversion: "3.7%" },
]

export function TopSourcesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Source</TableHead>
          <TableHead className="text-right">Visitors</TableHead>
          <TableHead className="text-right">Conversion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.source}>
            <TableCell className="font-medium">{item.source}</TableCell>
            <TableCell className="text-right">{item.visitors.toLocaleString()}</TableCell>
            <TableCell className="text-right">{item.conversion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
