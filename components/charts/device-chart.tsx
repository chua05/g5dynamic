"use client"

import { Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartPie } from "@/components/ui/chart"

const data = [
  { name: "Desktop", value: 65 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 5 },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]

export function DeviceChart() {
  return (
    <ChartContainer
      config={{
        device: {
          label: "Device",
        },
      }}
      className="h-full w-full"
      data={data}
    >
      <ChartPie
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </ChartPie>
      <ChartTooltip content={<ChartTooltipContent className="border bg-background p-2 shadow-sm" />} />
    </ChartContainer>
  )
}
