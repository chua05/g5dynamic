"use client"

import { useState } from "react"
import {
  BarChart,
  ArrowDown,
  ArrowUp,
  Calendar,
  Download,
  Users,
  CreditCard,
  Activity,
  Search,
  Bell,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DatePickerWithRange } from "./date-range-picker"
import { VisitorsChart } from "./charts/visitors-chart"
import { RevenueChart } from "./charts/revenue-chart"
import { DeviceChart } from "./charts/device-chart"
import { GeographyChart } from "./charts/geography-chart"
import { TopPagesTable } from "./tables/top-pages-table"
import { TopSourcesTable } from "./tables/top-sources-table"

export default function AnalyticsDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-card shadow-lg transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <h2 className="text-lg font-semibold">Analytics Dashboard</h2>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Activity className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Audience
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart className="h-4 w-4" />
              Behavior
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CreditCard className="h-4 w-4" />
              Conversions
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${isSidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-64"}`}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold">Home</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <form className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-full bg-background pl-8 md:w-80" />
            </form>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Schedule Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Analytics Overview</h2>
              <p className="text-muted-foreground">Track your website performance and user behavior.</p>
            </div>
            <div className="flex items-center gap-2">
              <DatePickerWithRange />
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    12.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">132,541</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    18.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.3%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    3.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 45s</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    7.4%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Visitors Over Time</CardTitle>
                    <CardDescription>Daily visitors for the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <VisitorsChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                    <CardDescription>Monthly revenue for the current year</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <RevenueChart />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Top Pages</CardTitle>
                    <CardDescription>Most visited pages on your website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopPagesTable />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>Where your visitors are coming from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopSourcesTable />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Device Breakdown</CardTitle>
                    <CardDescription>Visitors by device category</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <DeviceChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                    <CardDescription>Visitors by country</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <GeographyChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="audience" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Details</CardTitle>
                  <CardDescription>Detailed audience metrics and demographics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">Select the Audience tab to view detailed metrics</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="acquisition" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Acquisition Channels</CardTitle>
                  <CardDescription>How users are finding your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">Select the Acquisition tab to view detailed metrics</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="behavior" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Behavior</CardTitle>
                  <CardDescription>How users interact with your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">Select the Behavior tab to view detailed metrics</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
