import React, {Component} from 'react'
import {Button} from 'antd';
import Com from './com.jsx';
import {ThemeContext} from './context';
class Test extends Component {
  constructor(props){
    super(props);
    this.btnRef = React.createRef();
  }
  state = {
    loading: false,
    tes:'123',
    testObj: {
      value: '1'
    },
    testArr: ['test'],
    themes: {
      background: 'black',
      color: 'white',
      font: '测试'
    }
  }
  alertsth = () => {
    this.setState({loading:true,testArr:[...this.state.testArr,'test2']});
    setTimeout(this.setfalse,2000);
  }
  setfalse = () => {
    this.setState({loading:false})
  }
  getChange =  (val)=> {
    // this.state.testObj.value = 1;
  }
  handleCLick(index,e){
    console.log(this.btnRef.current);
  }
  
  setProviderValue = () => {
    this.setState((preState,state)=>({
        themes:{
          ...this.state.themes,
          color: preState.themes.color === 'white'?'black':'white',
          background: preState.themes.background==='black'?'red':'black'
        }
    }))
  }

  SetItem = (props) => {
    var list = [
      { name: '1', value:'4' },
      { name: '2', value:'5' },
      { name: '3', value:'6' },
    ]
    const listItem = list.map((element,index) => 
      <p onClick={this.handleCLick.bind(this,index)} key={index}>{element.name}<span>{element.value}</span></p>
    );
    return (
      <div >{listItem}</div>
    )
  }
  render(){
    return (
      <div>
        <ThemeContext.Provider value={this.state.themes}>
          {this.state.testObj.value}
          <Button onClick={this.setProviderValue}>设置provider value</Button>
          <Button ref={this.btnRef} type="danger" icon="search" loading={this.state.loading}  onClick={this.alertsth}>按钮2</Button>
          <Com testState={this.state.loading} value={this.state.testObj} getChange={this.getChange} />
          {this.SetItem()}
          {this.state.testArr}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Test;
