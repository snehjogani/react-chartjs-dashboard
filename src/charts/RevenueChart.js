import React, { useState, useEffect, Fragment } from 'react'
import { Line } from 'react-chartjs-2';

const RevenueChart = ({ chartsData }) => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  })
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (chartsData) {
      console.log("chartsData", chartsData)
      const labels = chartsData.map((product) => `P${product.id}`)
      const data = chartsData.map((product) => product.price)

      const dataSource = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Revenue for last year",
            data: [0, 1300, 2200, 3400, 4600, 5500, 7100, 8350, 9700, 11100, 12500, 15750],
            fill: true,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            tension: 0.4,
            pointStyle: "circle"
          },
          {
            label: "Revenue for this year",
            data: [0, 1800, 3200],
            fill: true,
            borderColor: "rgb(13,110,253)",
            backgroundColor: "rgba(13,110,253, 0.5)",
            tension: 0.4,
            pointStyle: "circle"
          },
        ],
      }

      setRevenueData(dataSource)
      setLoader(false)
    }
  }, [chartsData])

  const options = {
    type: "line",
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Product Revenue",
      },
      tooltip: {
        titleColor: "#fff",
        cornerRadius: 15
      }
    },
  };

  return <Fragment>
    {loader
      ? <div style={{ paddingTop: '57%' }} />
      : <Line data={revenueData} options={options} />
    }
  </Fragment>
}

export default RevenueChart;