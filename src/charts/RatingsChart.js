import React, { useState, useEffect, Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2';

const RatingChart = ({ chartsData }) => {
  const [ratingData, setRatingData] = useState({
    labels: [],
    datasets: [],
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (chartsData) {
      // const counts = {};    
      // for (const num of arr) {
      //     counts[num] = counts[num] ? counts[num] + 1 : 1;    //occurrence counter
      // }
      const counts = { "5 stars": 0, "4-5 stars": 0, "3-4 stars": 0, "2-3 stars": 0, "1-2 stars": 0, "Below 1 star": 0 };
      for (const num of chartsData) {
        if (num.rating === 5)
          counts["5 stars"] += 1;
        if (num.rating < 5 && num.rating >= 4)
          counts["4-5 stars"] += 1;
        else if (num.rating < 4 && num.rating >= 3)
          counts["3-4 stars"] += 1;
        else if (num.rating < 3 && num.rating >= 2)
          counts["2-3 stars"] += 1;
        else if (num.rating < 2 && num.rating >= 1)
          counts["1-2 stars"] += 1;
        else
          counts["Below 1 star"] += 1;

        // counts[num.rating] = counts[num.rating] ? counts[num.rating] + 1 : 1;
      }

      const data = Object.values(counts);
      const ratingLabels = Object.keys(counts);
      // console.log("Rating", counts)
      const dataSource = {
        labels: ratingLabels,
        datasets: [
          {
            label: 'Products',
            data: data,
            backgroundColor: [
              'rgba(212, 175, 55, 0.75)',
              'rgba(255, 99, 132, 0.75)',
              'rgba(54, 162, 235, 0.75)',
              'rgba(255, 165, 86, 0.75)',
              'rgba(75, 192, 192, 0.75)',
              'rgba(153, 102, 255, 0.75)'
            ],
          },
        ],
      };
      setRatingData(dataSource);
      setLoader(false);
    }
  }, [chartsData]);

  const options = {
    responsive: true,
    circumference: 360
  };

  return (
    <Fragment>
      {loader
        ? <div style={{ paddingTop: '57%' }} />
        : <Doughnut data={ratingData} options={options} />
      }
    </Fragment>
  )
}

export default RatingChart;