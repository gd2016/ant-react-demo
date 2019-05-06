import React,{Component} from 'react';
import {Button} from 'antd';
import { ThemeContext } from './context';
class Com extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      value:''
    }
  }
  handleClick = (e1,e2) => {
    console.log(e1,e2);
    
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  handleChange = (e) => {
    console.log(this.props.value);
    this.props.getChange(123)
    if(!isNaN(e.target.value-0)){
      this.setState({
        value: e.target.value.toUpperCase()
      })
    }
  }
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          { themes => (
            <div style={{backgroundColor: themes.background, color: themes.color}}>{themes.font}{JSON.stringify(themes)}</div>
          ) }
          
        </ThemeContext.Consumer>
        <Button onClick={this.handleClick.bind('123')}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>
        <input  value={this.state.value} onChange={this.handleChange}/>
        {this.state.value}
      </div>
    );
  }
}
export default Com