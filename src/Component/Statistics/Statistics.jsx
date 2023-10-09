import { useEffect, useState } from "react";
import getStoreddata from "../../utilities/getelemen";
import { PieChart, Pie, Cell,Legend,  } from 'recharts';

const Statistics = () => {
    
    const [mydonatNumber , setDOntenumber]=useState();
    useEffect(()=>{
        const myDonations = getStoreddata();
        setDOntenumber(myDonations.length)
       

    },[])
    const data = [
        { name: 'Total Donation', value: 12 },
        { name: 'Your Donations.', value: mydonatNumber}
       
      ];
     
      const COLORS = ['red','#00C49F'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
 

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent*100).toFixed(0)}%`}
    </text>
  );
};
    return (
        
       
        <div width="100%" height="100%" className="flex justify-center mx-auto container">
        <div>
        <PieChart width={400} height={400}>
        <Legend /> 
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            fill="#8884d8"
           
           
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