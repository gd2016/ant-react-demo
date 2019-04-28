import React, {Component} from 'react'
import {Button} from 'antd';
class Test extends Component {
  state = {
    loading: false
  }
  alertsth = () => {
    this.setState({loading:true});
    setTimeout(this.setfalse,2000);
  }
  setfalse = () => {
    this.setState({loading:false})
  }
  render(){
    return (
      <Button type="danger" icon="search" loading={this.state.loading}  onClick={this.alertsth}>按钮2</Button>
    );
  }
}

export default Test;
