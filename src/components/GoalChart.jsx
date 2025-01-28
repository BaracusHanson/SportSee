import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "../styles/charts.css";
function GoalChart({ data }) {
  console.log(data);
  const score = data ? data : data;
  const dataArray = [{ name: "score", value: score }];
  return (
    <>
      <h3 className="chartgoal-title">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={dataArray}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="#FFF"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="goal-percent">
        <p className="percent">{data * 100}%</p>
        <p className="goal-text">de votre</p>
        <p className="goal-text">objectif</p>
      </div>
    </>
  );
}

GoalChart.propTypes = {
  data: PropTypes.number.isRequired,
};

export default GoalChart;
