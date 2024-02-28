import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  { month: "Janv", expenses: 1500, revenue: 3000 },
  { month: "Fév", expenses: 1200, revenue: 500 },
  { month: "Mar", expenses: 1800, revenue: 2200 },
  { month: "Avr", expenses: 2000, revenue: 4000 },
  { month: "Mai", expenses: 2500, revenue: 4200 },
  { month: "Juin", expenses: 1800, revenue: 3500 },
  { month: "Juil", expenses: 2200, revenue: 3800 },
  { month: "Août", expenses: 1700, revenue: 3000 },
  { month: "Sep", expenses: 1900, revenue: 3300 },
  { month: "Oct", expenses: 2100, revenue: 1600 },
  { month: "Nov", expenses: 2400, revenue: 2900 },
  { month: "Déc", expenses: 2800, revenue: 4200 },
];


const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h3>Chiffre d'Affaires Annuel</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="expenses"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
