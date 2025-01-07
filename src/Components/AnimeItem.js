


function AnimeItem(props) {

  console.log(props.startDate);

return (

<div >

<div>{props.startDate}</div>

<img src = {props.poster} ></img>

<div>{props.title}</div>

</div>


)


}

export default AnimeItem