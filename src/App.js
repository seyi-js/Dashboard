import React, { useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import SideBar from '../src/components/SideNav/sidenav'
import Main from '../src/components/Main/main'
export const App = ( props ) => {
    

    

    
  



    return (

        
            
            <div className="wrapper">
                <SideBar/>
            <div class="main">
                <Main/>
            </div>
            </div>
            

      

    )

}



export default App;
