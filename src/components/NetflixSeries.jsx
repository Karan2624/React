import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => { // named export

    return (
      
      <ul className="grid grid-three--cols" > 
        {
          // seriesData.map((curElem) => {
          //   return <SeriesCard key={curElem.id} curElem={curElem} />;
          // })
          seriesData.map((curElem) => <SeriesCard key={curElem.id} data={curElem} />
          )
        }
      
    </ul>
    );
  };

  export default NetflixSeries;

