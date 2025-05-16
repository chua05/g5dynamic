"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import ApexCharts to avoid SSR issues
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface DashboardChartsProps {
  users: any[]
  posts: any[]
  comments: any[]
}

export default function DashboardCharts({ users, posts, comments }: DashboardChartsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Prepare data for the bar chart
  const barChartOptions = {
    chart: {
      type: "bar" as const,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Users", "Posts", "Comments"],
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => val.toString(),
      },
    },
    colors: ["#7c3aed", "#10b981", "#f59e0b"], // Updated primary color to purple
  }

  const barChartSeries = [
    {
      name: "Total Count",
      data: [users.length, posts.length, comments.length],
    },
  ]

  // Prepare data for the pie chart
  const pieChartOptions = {
    chart: {
      type: "pie" as const,
      height: 350,
    },
    labels: ["Users", "Posts", "Comments"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: ["#7c3aed", "#10b981", "#f59e0b"], // Updated primary color to purple
  }

  const pieChartSeries = [users.length, posts.length, comments.length]

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="h-[350px]">
        <ApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
      </div>
      <div className="h-[350px]">
        <ApexChart options={pieChartOptions} series={pieChartSeries} type="pie" height={350} />
      </div>
    </div>
  )
}
