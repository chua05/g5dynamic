"use client"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLine } from "@/components/ui/chart"

const data = [
  { date: "Jan 1", visitors: 1200 },
  { date: "Jan 2", visitors: 1300 },
  { date: "Jan 3", visitors: 1400 },
  { date: "Jan 4", visitors: 1100 },
  { date: "Jan 5", visitors: 1500 },
  { date: "Jan 6", visitors: 1700 },
  { date: "Jan 7", visitors: 1600 },
  { date: "Jan 8", visitors: 1800 },
  { date: "Jan 9", visitors: 2000 },
  { date: "Jan 10", visitors: 2200 },
  { date: "Jan 11", visitors: 2100 },
  { date: "Jan 12", visitors: 1900 },
  { date: "Jan 13", visitors: 2300 },
  { date: "Jan 14", visitors: 2400 },
  { date: "Jan 15", visitors: 2500 },
  { date: "Jan 16", visitors: 2600 },
  { date: "Jan 17", visitors: 2750 },
  { date: "Jan 18", visitors: 2900 },
  { date: "Jan 19", visitors: 3000 },
  { date: "Jan 20", visitors: 3100 },
  { date: "Jan 21", visitors: 3200 },
  { date: "Jan 22", visitors: 3300 },
  { date: "Jan 23", visitors: 3400 },
  { date: "Jan 24", visitors: 3600 },
  { date: "Jan 25", visitors: 3700 },
  { date: "Jan 26", visitors: 3800 },
  { date: "Jan 27", visitors: 3900 },
  { date: "Jan 28", visitors: 4000 },
  { date: "Jan 29", visitors: 4100 },
  { date: "Jan 30", visitors: 4300 },
]

export function VisitorsChart() {
  return (
    <ChartContainer
      config={{
        visitors: {
          label: "Visitors",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full"
      data={data}
    >
      <ChartLine
        dataKey="visitors"
        strokeWidth={2}
        dot={false}
        activeDot={{
          r: 4,
          style: { fill: "hsl(var(--chart-1))" },
        }}
      />
      <ChartTooltip
        content={
          <ChartTooltipContent
            className="border bg-background p-2 shadow-sm"
            indicator={{ color: "hsl(var(--chart-1))" }}
          />
        }
      />
    </ChartContainer>
  )
}
