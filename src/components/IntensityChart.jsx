import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Text,
} from "recharts";
import PropTypes from "prop-types";
import "../styles/charts.css";
import useResponsive from "/public/utils/useResponsive.js";

/**
 * IntensityChart component renders a radar chart displaying various intensity metrics.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data to be displayed in the chart.
 * @param {Array} props.data.data - The array of data points for the chart.
 * @param {Object} props.data.kind - The mapping of data kinds to their labels.
 *
 * @returns {JSX.Element} The rendered IntensityChart component.
 */
function IntensityChart({ data }) {
  const isLargeScreen = useResponsive();
  // console.log(isLargeScreen);
  const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
    const formatLabel = (value) => {
      if (value === "Energy") return "Energie";
      if (value === "Strength") return "Force";
      if (value === "Speed") return "Vitesse";
      if (value === "Intensity") return "Intensité";
      return value;
    };

    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 100}
        fill="#FFFFFF"
        fontSize={isLargeScreen?"0.8rem":"0.75rem"}
      >
        {formatLabel(
          data.kind[payload.value].charAt(0).toUpperCase() +
            data.kind[payload.value].slice(1)
        )}
      </Text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" aspect={isLargeScreen ? .6 : 1}>
        <RadarChart outerRadius={90} data={[...data.data].reverse()}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

IntensityChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IntensityChart;
