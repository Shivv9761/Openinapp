
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Chart = dynamic(import('react-apexcharts'), { ssr: false });

function PieChartUser() {
  const [productName, setProductName] = useState([]);
  const [countings, setCountings] = useState([]);

  useEffect(() => {
    const productName = [];
    const counting = [];
    const getStudentdata = async () => {
      const reqData1= await fetch("https://mocki.io/v1/1be1b544-6179-472d-ae82-b285a610b17b");
      const resData1= await reqData1.json();
    
      for (let i = 0; i < resData1.array.length; i++) {
        productName.push(resData1.array[i].products);
        counting.push(parseInt(resData1.array[i].percent));
      }
      setProductName(productName);
      setCountings(counting);
      //console.log(resData);
    };

    getStudentdata();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid  mb-3 p-9 ">
        <div className="flex justify-between ">
          <h1 className="font-bold text-2xl ">Top Products</h1>
          <div className="opacity-70">May - June 2023 ▽ </div>
        </div>
        <div className="mt-10 ">
     
          <Chart
            type="pie"
            width={380}
            // height={320}
            series={countings}
            options={{
              colors:["#98D89E","#F6DC7D","#EE8484"],
              labels: productName,
            }}
          ></Chart>
        </div>
      </div>
    </React.Fragment>
 
  );
}

export default PieChartUser;
