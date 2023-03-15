import { useState , useEffect} from 'react';
        
           // We must import axios in each component we want to us it 
import axios from 'axios';


            // All components return what you want them to display
function CreatureList() {
    const [listOfCreatures, setListOfCreatures] = useState ([ ]);
            // name: 'Unicorn';
            // origin: 'Norway';
            // INSERT INTO creatures (name, origin)
            // VALUES ('Jakalope', 'USA'), 
            // ('Chupacabra', 'Mexico'), 
            // ('Phoenix', 'Saudi Arabia');

    const fetchCreatureList = () => {
      axios.get('/creature').then((response) => {
                     // Update the array, React does the rest!
           setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    
    }
             //! Dont do this,first it will potentially mess up Reacts timing 
                        // fetchCreatureList();
     useEffect(() => {
        // At this point, React is ready

        fetchCreatureList();
    }, []);

    return ( 
        <div>
            <h2>Creature List</h2>
            {/* {
                //     This turns our Array into a string
              JSON.stringify(listOfCreatures)
            } */}
            <ul>
                {
                  listOfCreatures.map((creature)=> (
                        //what we want to render
                        <li key={creature.id}> 
                        {creature.name} from {creature.origin}</li>
                    ))
                }
            </ul>
        </div>    
    );
}

// All components must export
export default CreatureList;