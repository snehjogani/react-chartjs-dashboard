import React, { useState, useEffect, Fragment } from 'react';
import { Bar } from "react-chartjs-2";

const DiscountChart = ({ chartsData }) => {
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] })
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (chartsData) {
      // console.log("chartsData", chartsData)
      const labels = chartsData.map((product) => `P${product.id}`)
      const prices = chartsData.map(product => product.price < 500 ? product.price * 10 : product.price)
      const discountData = chartsData.map((product) => (product.price < 500 ? product.price * 10 : product.price) * (1 - product.discountPercentage / 100))

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Discounted Price",
            data: discountData,
            backgroundColor: "rgb(255, 99, 132)",
            // borderRadius: 10,
            order: 0,
            categoryPercentage: 0.75
          },
          {
            label: "Original Price",
            data: prices,
            backgroundColor: "rgb(13,110,253)",
            // borderRadius: 10,
            order: 1,
            categoryPercentage: 0.76
          },
        ],
      };
      setRevenueData(dataSource);
      setLoader(false);
    }

  }, [chartsData]);

  const options = {
    responsive: true,
    scales: {
      x: {
        // stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: false
    },
  }

  return <Fragment>
    {loader
      ? <div style={{ paddingTop: '57%' }} />
      : <Bar options={options} data={revenueData} />
    }
  </Fragment>
}

export default DiscountChart;