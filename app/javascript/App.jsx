import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Enter from './components/enter'
import CommonMode from './components/common_mode'
import AdminMode from './components/admin_mode'

function App(props){

    return(
      <div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
          <Switch>
            <Route exact path='/' component={Enter}/>
            <Route exact path='/common_mode' component={CommonMode}/>
            <Route exact path='/admin_mode' component={AdminMode}/>
          </Switch>
      </div>
    )
}

export default App
