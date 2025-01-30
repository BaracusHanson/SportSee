import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "../styles/charts.css";
import AverageSessionTooltip from "./AverageSessionTooltip";

/**
 * AverageSessionChart component renders a line chart displaying average session lengths over a week.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data to be displayed in the chart. Each object in the array should have a `day` and `sessionLength` property.
 * @param {Function} props.setCoordinate - A function to set the coordinates for the tooltip.
 */
function AverageSessionChart({ data, setCoordinate }) {
  const formatLabel = (value) => {
    if (value === 1) return "L";
    if (value === 2) return "M";
    if (value === 3) return "M";
    if (value === 4) return "J";
    if (value === 5) return "V";
    if (value === 6) return "S";
    if (value === 7) return "D";
    return value;
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 20, right: 20, top: 40 }}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
            }}
            tickFormatter={formatLabel}
            tickMargin={2}
          />
          <Tooltip
            content={<AverageSessionTooltip setCoordinate={setCoordinate} />}
            cursor={false}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

AverageSessionChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCoordinate: PropTypes.func.isRequired,
};

export default AverageSessionChart;
