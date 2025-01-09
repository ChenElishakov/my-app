import AnimeItem from './AnimeItem'
import {useEffect , useState} from 'react'
import '../App.css'; // Use this path to go up one level and access App.css




function Anime() {
   const [animes, setAnime] = useState([]);
  
    useEffect (() => {
  
      const fetchAnime = async () => {
  
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const jsonData = await response.json();
        setAnime(jsonData.data);
      }
      catch(error) {
        console.log(error)
      }
    }
      fetchAnime();
    },[]);


  return(

    <div>
   
   {animes.map((item , index) => (
   <AnimeItem
   title= {item.title_english}
   date = {item.aired.string}
   poster = {item.images.jpg.image_url}
   key = {index}
  />  
  ))}

    </div>
  )
}


export default Anime