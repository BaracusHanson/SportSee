import PropTypes from "prop-types";

function AverageSessionTooltip({ active, payload, setCoordinate, coordinate }) {
  if (active && payload && payload.length) {
    setCoordinate({
      left: `${coordinate.x}px`,
      transition: "left 0.5s",
    });
    return (
      <div className="AverageSessionTooltip">
        <p>{`${payload[0].value}min`}</p>
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
