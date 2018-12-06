import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Diet from './components/Diet';
import Activity from './components/Activity';
import { VictoryContainer } from 'victory'



class App extends Component {

  state = {
    data: [],
  }

  componentDidMount(){
    console.log("LOADED")
    fetch("https://kajoban.lib.id/twilio-hub@dev/readDataMongo/")
    .then((result) => result.json())
    .then(result => 
      // console.log(result)
        this.setState({
            data: JSON.parse(result).reverse()
        })
    )
      
  }

  render() {
    if(this.state.data.length === 0){
      return <div></div>
    }
    const mood = [];
    const sleep = [];
    const diet = [];
    const activity = [];
    for(var elem of this.state.data){
      mood.push({x: elem.obj.date, y: elem.obj.mood});
      sleep.push({x: elem.obj.date, y: elem.obj.sleep});
      diet.push({x: elem.obj.date, y: elem.obj.diet/1000});
      activity.push({x: elem.obj.date, y: elem.obj.exercise});
    }

    return (
      
      <div >
      <head >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </ link>
      </ head>
      <div className="App">
      <nav >
        <div class="nav-wrapper green darken-4">
          <a class="brand-logo center"><i class="material-icons">camera_alt</i>MENTAL PICTURE</a>
        </div>
      </nav>

      <div class="card-panel teal lighten-3">
        <div class="row">
        <div class="col s12 m6">
        <div class="card-panel blue lighten-5">
        <Mood data={mood}/>
        </div>
        </div>
        <div class="col s12 m6">
        <div class="card-panel blue lighten-5">
        <Sleep data={sleep}/>
        </div>
        </div>
        </div>

     
        <div class="row">
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Diet data={diet}/>
          </div>
          </div>
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Activity data={activity}/>
          </ div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
