"use client"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartBar } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 20000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 25000 },
  { month: "Jul", revenue: 28000 },
  { month: "Aug", revenue: 30000 },
  { month: "Sep", revenue: 32000 },
  { month: "Oct", revenue: 35000 },
  { month: "Nov", revenue: 38000 },
  { month: "Dec", revenue: 42000 },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-full w-full"
      data={data}
    >
      <ChartBar dataKey="revenue" radius={4} className="fill-[hsl(var(--chart-2))]" />
      <ChartTooltip
        content={
          <ChartTooltipContent
            className="border bg-background p-2 shadow-sm"
            indicator={{ color: "hsl(var(--chart-2))" }}
            formatter={(value) => [`$${value}`, "Revenue"]}
          />
        }
      />
    </ChartContainer>
  )
}
