import React, {Component} from "react"
import {render} from "react-dom";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/join" element={<RoomJoinPage/>}/>
                <Route exact path ="/create" element={<CreateRoomPage/>}/>
                <Route exact path="/room/:roomCode" element={<Room/>} />
            </Routes>
            </BrowserRouter>
        );
    }
}

const appDiv =document.getElementById("app");

render(<App /> , appDiv); 