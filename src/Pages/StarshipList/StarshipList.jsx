import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"


const StarshipList = () => {
    const [ starshipList, setAllStarships ] = useState([])

    useEffect(() => {
        const fetchAllStarships = async () => {
          const starshipData = await getAllStarships()
          setAllStarships(starshipData.results)
        }
        fetchAllStarships()
      }, [])
    
      return(
        <>
          <h3>Starship Fleet Manifest</h3>
          {starshipList.length ?
            <>
              {starshipList.map(starship =>
                 <div class="manifest"> <Link to='/starships' state={{starship}} key={starship.name}>{starship.name}</Link></div>
              )}
            </>
            :
            <>
              <h4 class="loading">Loading Starships...</h4>
            </>
          }
        </>
      )
    }


    export default StarshipList