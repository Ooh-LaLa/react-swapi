import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api"
import { Link } from "react-router-dom"



const StarshipDetails = () => {

  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      console.log(starshipData);
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      <div className="StarshipDetailsPage">
         {getStarshipDetails.name?
        <>
            <h1>Name:{starshipDetails.name}</h1>
            <h1>Model:{starshipDetails.model}</h1>
            <Link to="/">
                <p>Return</p>
                </Link>
          </>
          :
          <>
          <p>Loading Starship Details..</p>
          </>

         }

         </div>
         </>
  )
}
export default StarshipDetails