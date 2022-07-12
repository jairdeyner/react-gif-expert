import PropTypes from "prop-types";

export const GifItem = ({ gif }) => {
  return (
    <div className="card">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

GifItem.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
