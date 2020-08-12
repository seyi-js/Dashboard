import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Design1 from './Design1'
import Design2 from './Design2'
export const App = (  ) => {
    

    

    
  



    return (

        <Switch>
        <React.Fragment>

       
        <Route exact  path='/' component={Design1} />
        <Route exact  path='/design2' component={Design2} />
        
        
        
        
   


        
        
    </React.Fragment>
    </Switch>
            

      

    )

}



export default App;
