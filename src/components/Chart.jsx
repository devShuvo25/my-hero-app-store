import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ data }) => {
  console.log(data);

  return (
    <div className="p-10">
      <div className="p-4 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom:0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill="#00D390"
              barSize={100}
              radius={[0, 0, 0, 0]} // rounded top corners
              isAnimationActive
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
