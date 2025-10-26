"use client"

import { useEffect, useRef, useState } from "react"
import ApexCharts from "apexcharts"
import { Badge } from "@/components/utils/Badge"
import { mockPriceData } from "@/mocks/mockPriceData"
import { ArrowUpIcon, ArrowDownIcon } from "@phosphor-icons/react"
import { formatNumberWithCommas } from "../../../../utils/numberFormatter"

export type Timeframe = "1h" | "24h" | "7d" | "30d" | "90d" | "1y" | "All"
const timeframes: Timeframe[] = ["1h", "24h", "7d", "30d", "90d", "1y", "All"]

export const Chart = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>("24h")

  const now = new Date()

  // Prepare realistic OHLC data
  let lastClose = mockPriceData[selectedTimeframe][0]
  const ohlcData = mockPriceData[selectedTimeframe].map((price, i) => {
    const open = lastClose
    const changePct = Math.random() * 0.03 * (Math.random() < 0.8 ? 1 : -1)
    const close = open * (1 + changePct)
    const high = Math.max(open, close) * (1 + Math.random() * 0.02)
    const low = Math.min(open, close) * (1 - Math.random() * 0.02)
    lastClose = close

    let timestamp: Date
    switch (selectedTimeframe) {
      case "1h":
        timestamp = new Date(
          now.getTime() -
            (mockPriceData[selectedTimeframe].length - 1 - i) * 60 * 1000
        )
        break
      case "24h":
        timestamp = new Date(
          now.getTime() -
            (mockPriceData[selectedTimeframe].length - 1 - i) * 60 * 60 * 1000
        )
        break
      case "7d":
      case "30d":
      case "90d":
        timestamp = new Date(
          now.getTime() -
            (mockPriceData[selectedTimeframe].length - 1 - i) *
              24 *
              60 *
              60 *
              1000
        )
        break
      case "1y":
      case "All":
        // calculate first month based on token age
        const monthsOld = mockPriceData[selectedTimeframe].length
        const startMonthDate = new Date(
          now.getFullYear(),
          now.getMonth() - (monthsOld - 1),
          1
        )
        timestamp = new Date(
          startMonthDate.getFullYear(),
          startMonthDate.getMonth() + i,
          1
        )
        break
      default:
        timestamp = now
    }

    return { x: timestamp, y: [open, high, low, close] }
  })

  // Price change
  const firstClose = ohlcData[0].y[3]
  const lastClosePrice = ohlcData[ohlcData.length - 1].y[3]
  const priceChange = ((lastClosePrice - firstClose) / firstClose) * 100
  const isUp = priceChange >= 0

  // Current price independent of timeframe
  const currentPrice = mockPriceData.All[mockPriceData.All.length - 1]
  const formattedCurrentPrice = currentPrice.toFixed(2) // 2 decimals

  useEffect(() => {
    if (!chartRef.current) return

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: "candlestick",
        height: 500,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { enabled: true, easing: "easeinout", speed: 800 }
      },
      series: [{ name: "Price", data: ohlcData }],
      plotOptions: {
        candlestick: {
          colors: { upward: "#00B746", downward: "#EF403C" }
        }
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: { colors: "#FFFFFF" },
          formatter: (value: string, timestamp?: number) => {
            const date = timestamp ? new Date(timestamp) : new Date(value)
            if (selectedTimeframe === "1y" || selectedTimeframe === "All") {
              return date.toLocaleString("en-US", { month: "short" })
            }
            return date.toLocaleDateString("en-US")
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickAmount: Math.min(ohlcData.length, 10)
      },
      yaxis: {
        labels: {
          formatter: (val) => "$" + Number(val).toFixed(2),
          style: { colors: "#FFFFFF" }
        }
      },
      tooltip: {
        y: { formatter: (val: number) => "$" + val.toFixed(2) }
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

      {/* Current price + badge */}
      <div className='absolute top-4 right-6 flex items-center gap-4'>
        <Badge
          variant={isUp ? "increase" : "decrease"}
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
          ${formattedCurrentPrice}
        </div>
      </div>

      <div ref={chartRef} className='w-full h-full'></div>
    </div>
  )
}
