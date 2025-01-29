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
import ActivityToolTip from "./ActivityToolTip";

function ChartActivity({ data }) {
  const { activity } = data;

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activity} barSize={8} barGap={9}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={18}
            tickFormatter={(day) => new Date(day).getDate()}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={25}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin-2", "dataMax+1"]}
            tickCount={3}
          />
          <YAxis hide yAxisId="calories" />
          <Tooltip
            content={<ActivityToolTip />}
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
            iconSize="8"
            height={60}
            formatter={(value) => (
              <span style={{ color: "#74798C" }} className="activity_titleChart">{value}</span>
            )}
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
