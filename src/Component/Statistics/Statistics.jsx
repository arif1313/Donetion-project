import { useEffect, useState } from "react";
import getStoreddata from "../../utilities/getelemen";
import { PieChart, Pie, Cell,  } from 'recharts';

const Statistics = () => {

    const [mydonatNumber , setDOntenumber]=useState();
    useEffect(()=>{
        const myDonations = getStoreddata();
        setDOntenumber(myDonations.length)
        console.log(mydonatNumber);

    },[])

    const data = [
        { name: 'alldonation', value: 12 },
        { name: 'Mydonation', value: 5 }
       
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div>
          
        
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            // label={renderCustomizedLabel}
           
          
            dataKey="value"
          >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
     
        </div>
    );
};

export default Statistics;