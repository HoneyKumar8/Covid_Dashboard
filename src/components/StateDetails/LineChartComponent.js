import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const LineChartComponent = ({title, color, data, dataKey, testid}) => (
  <div className="each-line-chart" testid={testid}>
    <h2 className="chart-title">{title}</h2>

    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data.slice(-10)}>
        <XAxis dataKey="date" tick={{fontSize: 10}} />
        <YAxis tick={{fontSize: 10}} width={40} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default LineChartComponent
