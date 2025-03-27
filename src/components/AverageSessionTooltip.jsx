/**
 * AverageSessionTooltip component displays a tooltip with session duration.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The data payload for the tooltip.
 * @param {Object} props.coordinate - The coordinate for positioning the tooltip.
 * @param {Function} props.setCoordinate - Function to set the coordinate for the tooltip.
 * @returns {JSX.Element|null} The rendered tooltip component or null if inactive.
 */
import PropTypes from "prop-types";
import useResponsive from "/public/utils/useResponsive.js";
function AverageSessionTooltip({ active, payload, setCoordinate, coordinate }) {
  const isLargeScreen = useResponsive();
  if (active && payload && payload.length) {
    setCoordinate({
      left: `${coordinate.x}px`,
      transition: "left 0.5s",
    });
    return (
      <div className="AverageSessionTooltip">
        <p
          style={{ fontSize: isLargeScreen ? 16 : 8 }}
        >{`${payload[0].value}min`}</p>
      </div>
    );
  }
  return null;
}

AverageSessionTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  coordinate: PropTypes.object,
  setCoordinate: PropTypes.func.isRequired,
};

export default AverageSessionTooltip;
