import {
  XAxis,
  Tooltip,
  BarChart,
  CartesianGrid,
  YAxis,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function ChartActivity({ data }) {
  const { activity } = data;

  return (
    <>
      <h3 className="chartactivity-title">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="95%" >
        <BarChart data={activity} barSize={7} barGap={8}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip
            content={"<CustomToolTip />"}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
            height={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

ChartActivity.propTypes = {
  data: PropTypes.shape({
    activity: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ChartActivity;
