import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Progress, Row } from 'reactstrap';
import {
  Chart as ChartJS, Title, Tooltip, Legend,
  CategoryScale, LinearScale,
  BarElement,
  PointElement, LineElement, Filler,
  ArcElement,
} from "chart.js";

import { ProductContext } from '../context';
import RevenueChart from '../charts/RevenueChart';
import DiscountChart from '../charts/DiscountChart';
import RatingChart from '../charts/RatingsChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
);


const Dashboard = (props) => {
  useEffect(() => { document.title = "Dashboard" }, []);
  const { products, filteredProducts } = useContext(ProductContext);

  const [orders, setOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true)
    if (products && filteredProducts) {
      let revenue = filteredProducts?.reduce((res, object) => res + object.price, 0);
      setRevenue(revenue);
      setOrders(products.length);
      setLoader(false);
    }
  }, [products, filteredProducts]);

  const cards = [{
    title: "Total Profit",
    value: "9.8k",
    progress: 75,
  }, {
    title: "Monthly Visitors",
    value: "5400",
    progress: 45,
  }, {
    title: "New Users",
    value: "3400",
    progress: 90,
  }, {
    title: "Bounce Rate",
    value: "38%",
    progress: 60,
  }]

  return <Container className='pb-2'>
    <Row className='mb-4'>
      {cards.map((val, index) => <Col key={index}>
        <Card>
          <CardBody>
            <Row>
              <Col xs="auto" className='flex-grow-1'>
                <CardTitle>{val.title}</CardTitle>
              </Col>
              <Col xs="auto" className='text-end'>
                <CardTitle>{val.value}</CardTitle>
              </Col>
            </Row>
            <CardSubtitle className='text-muted mb-1' style={{ fontSize: 12 }}>{"This month"}</CardSubtitle>
            <Progress className='mb-2' value={val.progress} style={{ height: "10px" }} />
            <Row>
              <Col xs="auto" className='flex-grow-1'>
                <CardSubtitle className='text-muted' style={{ fontSize: 12 }}>{"Last month"}</CardSubtitle>
              </Col>
              <Col xs="auto" className='text-end'>
                <CardSubtitle className='text-muted' style={{ fontSize: 12 }}>{`${val.progress}%`}</CardSubtitle>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      )}
    </Row>
    <Row className='mb-4'>
      <Col sm="auto" className='flex-grow-1'>
        <Card>
          <CardBody>
            <CardTitle>{"Total Revenue this year"}</CardTitle>
            {!loader && <RevenueChart chartsData={filteredProducts || []} />}
          </CardBody>
        </Card>
      </Col>
      <Col sm="auto">
        <Card>
          <CardBody>
            <CardTitle>{"Product Ratings"}</CardTitle>
            {!loader && <RatingChart chartsData={products || []} />}
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className='mb-4'>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>{"Product Pricing"}</CardTitle>
            {!loader && <DiscountChart chartsData={products || []} />}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
}

export default Dashboard