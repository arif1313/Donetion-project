import { useEffect, useState } from "react";
import getStoreddata from "../../utilities/getelemen";
import { PieChart, Pie, Cell,Legend } from 'recharts';

const Statistics = () => {
    
    const [mydonatNumber , setDOntenumber]=useState();
    useEffect(()=>{
        const myDonations = getStoreddata();
        setDOntenumber(myDonations.length)
        console.log('may d',mydonatNumber);

    },[])
    const data = [
        { name: 'aTotal Donation', value: 12 },
        { name: 'Your Donation', value: 5 }
       
      ];
     
      const COLORS = ['#00C49F',  '#FF8042'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  console.log('value of x ',x);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent*100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div className="felx justify-between">
       
       
        <div className="ml-96">
         
        <PieChart width={400} height={400}>
        <Legend /> 
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            fill="#8884d8"
            // label={renderCustomizedLabel}
           
            labelLine={false}
            dataKey="value"
          >
               
            <Legend />  
            
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> 
       
        </div>
     
        </div>
    );
};

export default Statistics;