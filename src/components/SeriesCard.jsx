import styles from "./Netflix.module.css";
import styled from "styled-components";
export const SeriesCard = (props) => {
    console.log(props);
    // const {data} = props; // destructuring
    const {id,img_url,name,rating,description,cast,genre,watch_url} = props.data; // destructuring

    // const btnStyle = {};
      // const ButtonThappa = styled.button(
      //   {
      //     padding: "1.2rem 2.4rem",
      //     border: "none",
      //     fontSize : "1.6rem",
      //     backgroundColor: `${rating>8.5 ? "#7dcea0" : "#f7dc6f"}`,
      //     color : "var(--bg-color)",
      //     fontWeight: "bold",
      //     cursor: "pointer",`
      //   }
      // );

      const ButtonThappa = styled.button`
       
          padding: 1.2rem 2.4rem;
          border: none;
          font-size : 1.6rem;
          background-color: ${ (props) => props.rating>=8.5 ? "#7dcea0" : "#f7dc6f"};
          color : var(--bg-color);
          font-weight: bold;
          cursor: pointer;
         `;

         const Rating = styled.h3`
            font-size : 1.6rem;
            color : #7dcea0;
            text-transform : capitalize;
         `;
      
    

    const ratingClass = rating>8.5 ? styles.super_hit : styles.average;

    return (
        // <li key={props.data.id}>
        // <li key={data.id}>
        <li key = {id} className={styles.card} >
  <div >
    <img src={img_url} alt={img_url} height="40%" width="40%" />
  </div>
  {/* <div className={styles["card-content"]}> */}
  <div className="flex flex-col gap-6 px-[1.2rem] py-[3.2rem]">
  <h2>Name: {name}</h2>
      {/* used span tag for using class */}
{/* <h3  >Rating:<span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3> */}
<Rating  >Rating:<span className={`${styles.rating} ${ratingClass}`}>{rating}</span></Rating>
<p className="text-3xl font-bold underline">Summary: {description}</p>
<p>Genre: {genre}</p>
<p>Cast: {cast}</p>
<a>
  {/* comma becuase its an object */}
{/* <button style={btnStyle} >Watch Now</button> */}
<ButtonThappa rating={rating}>Watch Now</ButtonThappa>
</a>
  </div>


</li>
        )
}