"use client"

import type React from "react"

import { ResponsiveContainer, LineChart, Line, BarChart, Bar, Pie, Tooltip } from "recharts"

export function ChartContainer({
  children,
  data,
  config,
  className,
  layout,
}: { children: React.ReactNode; data: any[]; config: any; className?: string; layout?: "horizontal" | "vertical" }) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      {layout === "horizontal" ? (
        <BarChart data={data} layout="vertical">
          {children}
        </BarChart>
      ) : (
        <LineChart data={data}>{children}</LineChart>
      )}
    </ResponsiveContainer>
  )
}

export function ChartTooltip({ content }: { content: React.ReactNode }) {
  return <Tooltip content={content} />
}

export function ChartTooltipContent({
  className,
  indicator,
  formatter,
}: { className?: string; indicator?: { color: string }; formatter?: (value: any) => any }) {
  return (
    <div className={className}>
      {indicator && (
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: indicator.color,
            display: "inline-block",
            marginRight: "4px",
          }}
        ></div>
      )}
      {formatter ? formatter("value") : "value"}
    </div>
  )
}

export function ChartLine({
  dataKey,
  strokeWidth,
  dot,
  activeDot,
}: { dataKey: string; strokeWidth: number; dot: boolean; activeDot: any }) {
  return (
    <Line type="monotone" dataKey={dataKey} stroke="black" strokeWidth={strokeWidth} dot={dot} activeDot={activeDot} />
  )
}

export function ChartBar({
  dataKey,
  radius,
  className,
  layout,
}: { dataKey: string; radius: number; className?: string; layout?: "horizontal" | "vertical" }) {
  return <Bar dataKey={dataKey} barSize={20} cornerRadius={radius} className={className} layout={layout} />
}

export function ChartPie({
  children,
  dataKey,
  nameKey,
  cx,
  cy,
  outerRadius,
  label,
  labelLine,
}: {
  children: React.ReactNode
  dataKey: string
  nameKey: string
  cx: string
  cy: string
  outerRadius: number
  label: any
  labelLine: boolean
}) {
  return (
    <Pie
      dataKey={dataKey}
      nameKey={nameKey}
      cx={cx}
      cy={cy}
      outerRadius={outerRadius}
      fill="#8884d8"
      label={label}
      labelLine={labelLine}
      data={[]}
    >
      {children}
    </Pie>
  )
}
