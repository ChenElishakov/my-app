import '../App.css'; // Use this path to go up one level and access App.css


function AnimeItem(props) {
  return (
    <div className="anime-item">
      <img src={props.poster} alt={props.title} />
      <div className="anime-details">
        <div className="anime-title">{props.title}</div>
        <div className="anime-date">{props.date}</div>
      </div>
    </div>
  );
}

export default AnimeItem;
