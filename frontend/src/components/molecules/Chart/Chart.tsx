"use client"

import { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"
import { Badge } from "@/components/utils/Badge"
import { mockPriceData } from "@/mocks/mockPriceData"
import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react"

export type Timeframe = "1h" | "24h" | "7d" | "30d" | "90d" | "1y" | "All"
const timeframes: Timeframe[] = ["1h", "24h", "7d", "30d", "90d", "1y", "All"]

export const Chart = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>("24h")

  // The "real" current price is the last price in the 'All' timeframe
  const currentPrice = mockPriceData.All[mockPriceData.All.length - 1]

  // Calculate price change for the selected timeframe
  const data = mockPriceData[selectedTimeframe]
  const firstPrice = data[0]
  const lastPrice = data[data.length - 1]
  const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100
  const isUp = priceChange >= 0

  useEffect(() => {
    if (!chartRef.current) return

    const data = mockPriceData[selectedTimeframe]

    const categories = data.map((_, i) => {
      const now = new Date()
      switch (selectedTimeframe) {
        case "1h":
          const date1h = new Date(now.getTime() - (59 - i) * 60 * 1000)
          return `${date1h.getHours().toString().padStart(2, "0")}:${date1h
            .getMinutes()
            .toString()
            .padStart(2, "0")}`
        case "24h":
          const date24h = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000)
          return `${date24h.getHours().toString().padStart(2, "0")}:00`
        case "7d":
        case "30d":
        case "90d":
          const dateDays = new Date(
            now.getTime() - (data.length - 1 - i) * 24 * 60 * 60 * 1000
          )
          return `${dateDays.getDate().toString().padStart(2, "0")}/${(
            dateDays.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}`
        case "1y":
        case "All":
          const dateMonths = new Date(now.getFullYear(), i, 1)
          return `${(dateMonths.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${dateMonths.getFullYear()}`
      }
    })

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: "area",
        height: 500,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { enabled: true, easing: "easeinout", speed: 800 }
      },
      series: [{ name: "Price", data }],
      stroke: { curve: "smooth", width: 2 },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      xaxis: {
        categories,
        labels: { style: { colors: "#FFFFFF" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickAmount: Math.min(data.length, 10)
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val.toFixed(4)}`,
          style: { colors: "#FFFFFF" }
        }
      },
      tooltip: {
        enabled: true,
        y: { formatter: (val) => `$${val.toFixed(4)}` },
        marker: { show: false }
      },
      dataLabels: { enabled: false },
      markers: { size: 0, hover: { size: 0 } },
      grid: { borderColor: "#2D3953", strokeDashArray: 4 }
    }

    const chart = new ApexCharts(chartRef.current, options)
    chart.render()
    return () => chart.destroy()
  }, [selectedTimeframe])

  return (
    <div
      className='relative w-full max-w-[1200px] rounded-[10px] p-6 shadow-sm'
      style={{
        minHeight: "550px",
        background: "#121B2B",
        border: "2px solid #2D3953",
        boxShadow: "0px 4px 6px 0px #00000017"
      }}
    >
      {/* Timeframe selector */}
      <div className='flex gap-2 mb-4'>
        {timeframes.map((tf) => (
          <button
            key={tf}
            onClick={() => setSelectedTimeframe(tf)}
            className={`px-4 py-1 rounded ${
              selectedTimeframe === tf
                ? "bg-[#6953da] text-white"
                : "bg-[#2D3953] text-white"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Current price + price action badge */}
      <div className='absolute top-4 right-6 flex items-center gap-4'>
        <Badge
          variant={isUp ? "increase" : "decrease"} // you can map this to your variants
          className='flex items-center gap-1 text-sm font-bold'
        >
          {isUp ? (
            <ArrowUpIcon size={16} weight='bold' />
          ) : (
            <ArrowDownIcon size={16} weight='bold' />
          )}
          {priceChange.toFixed(2)}%
        </Badge>

        <div className='text-white font-bold text-[30px]'>
          ${currentPrice.toFixed(4)}
        </div>
      </div>

      <div ref={chartRef} className='w-full h-full'></div>
    </div>
  )
}
