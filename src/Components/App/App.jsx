import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import Porto from '../Porto/Porto';
import Footer from '../Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import React, { Component } from 'react'
import Notfound from '../Notfound/Notfound';

export default class App extends Component {

  routes=createBrowserRouter([{
    path:"/",element:<MasterLayout/>,errorElement:<Notfound/>,children:[
      {index:true,element:<MainPage/>},
      {path:'porto',element:<Porto/>},
      {path:'about',element:<About/>},
      {path:'contact', element:<Contact/>}
  
    ]
  }])
  render() {
    return (
      <RouterProvider router={this.routes}/>
      )
  }
}


