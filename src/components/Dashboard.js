import React from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import conimg from './images/Contacts Button.jpg'
import idimg from './images/Ideas.png'
import ranimg from './images/randomizer.png'

export class Dashboard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn previous
                                        btn-danger" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-info float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
  
  SubmitButton(){
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <button 
          className="btn btn-info float-right" 
          href="/signup">
        Sign-Up 
        </button>
          
      )
    }
    return null;
  }
  
    
    render() {    
      return (
        <div className="Dashboard"> 
        <div className='DashboardView'>
        <p className="step-count">STEP {this.state.currentStep} </p>
                  <h3>Welcome to RandomActs!</h3>
  
        <form onSubmit={this.handleSubmit}>
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          {this.previousButton()}
          {this.nextButton()}
                  {this.SubmitButton()}
  
        </form>
        </div>
        </div>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
             <img src ={conimg} alt="Contacts" className="center" />
             <h3>Add your contacts!</h3>
            <p>In order to randomize a service idea with someone you know, you'll need to create a list of contacts.</p>
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
              <img src={idimg} alt="Ideas" class="center" />
              <h3>Discover your service ideas</h3>
              <p>We provide a default list of service ideas that you can edit or delete what's already there. You can also add your own ideas!</p>
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
              <img src={ranimg} alt="randomizer" class="center" />
              <h3>Randomize your contacts and ideas</h3>
              <p>Use the randomizer page to generate a random contact and idea. Build up your completed acts and form kindness habits!</p>
      </div>
      </React.Fragment>
    );
  }
  
  ReactDOM.render(<
  Dashboard />, document.getElementById('root'))

// export default class Dashboard {}