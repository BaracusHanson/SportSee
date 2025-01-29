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
