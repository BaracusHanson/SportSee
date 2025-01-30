/**
 * ActivityToolTip component displays a tooltip with activity data.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The data to be displayed in the tooltip.
 * @param {Object} props.payload[].value - The value of the data point.
 * @returns {JSX.Element|null} The rendered tooltip or null if inactive.
 */
import PropTypes from "prop-types";

const ActivityToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="ActivityToolTip">
        <p className="intro">{`${payload[0].value}km`}</p>
        <p className="intro">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

ActivityToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
};

export default ActivityToolTip;
