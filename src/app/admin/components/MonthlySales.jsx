"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlySalesChart() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const options = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      background: "transparent",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: { text: undefined },
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
      labels: {
        colors: isDark ? "#f9fafb" : "#111827",
      },
    },
    grid: {
      borderColor: isDark ? "#374151" : "#e5e7eb",
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      theme: isDark ? "dark" : "light",
      x: { show: false },
      y: { formatter: (val) => `${val}` },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        Monthly Sales
      </h3>

      <div className="max-w-full  overflow-x-auto custom-scrollbar no-scrollbar">
        <div className="-ml-5 min-w-[650px]  xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
