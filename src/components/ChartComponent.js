import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const ChartComponent = ({ transactions }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={transactions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={(tooltipProps) => {
              const { label } = tooltipProps;

              const transaction = transactions.find(
                (item) => item.month === label
              );

              if (transaction) {
                return (
                  <div>
                    <p>ID: {transaction.id}</p>
                    <p>Account: {transaction.account}</p>
                    <p>Debit: {transaction.debit}</p>
                    <p>Credit: {transaction.credit}</p>
                  </div>
                );
              }

              return <p>No data for {label}</p>;
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="debit" stroke="#8884d8" />
          <Line type="monotone" dataKey="credit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>{' '}
    </div>
  );
};

export default ChartComponent;
