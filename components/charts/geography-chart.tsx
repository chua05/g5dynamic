"use client"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartBar } from "@/components/ui/chart"

const data = [
  { country: "United States", visitors: 12500 },
  { country: "United Kingdom", visitors: 7800 },
  { country: "Canada", visitors: 5400 },
  { country: "Germany", visitors: 4200 },
  { country: "France", visitors: 3800 },
  { country: "Australia", visitors: 3200 },
  { country: "Japan", visitors: 2900 },
  { country: "India", visitors: 2500 },
  { country: "Brazil", visitors: 2100 },
  { country: "Spain", visitors: 1800 },
]

export function GeographyChart() {
  return (
    <ChartContainer
      config={{
        visitors: {
          label: "Visitors",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="h-full w-full"
      data={data}
      layout="horizontal"
    >
      <ChartBar dataKey="visitors" radius={4} className="fill-[hsl(var(--chart-4))]" layout="horizontal" />
      <ChartTooltip
        content={
          <ChartTooltipContent
            className="border bg-background p-2 shadow-sm"
            indicator={{ color: "hsl(var(--chart-4))" }}
          />
        }
      />
    </ChartContainer>
  )
}
