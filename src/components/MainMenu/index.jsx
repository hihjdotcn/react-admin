import { Menu } from 'element-react'
import {Component} from 'react'
import {withRouter} from 'react-router'
import 'element-theme-default'

import './index.css'

class MainMenu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      activeLink: '/'
    }
  }
  onOpen() {

  }
  onClose() {
  
  }
  onSelect(indexPath) {
    this.props.history.push(indexPath)
    this.setState({activeLink: indexPath})
  }
  render() {
    return (
      <Menu defaultActive={this.state.activeLink} className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} onSelect={this.onSelect.bind(this)}>
        <Menu.Item index="/"><i className="el-icon-menu"></i>首页</Menu.Item>
        <Menu.SubMenu title={<span><i className="el-icon-share"></i>设备管理</span>}>
          <Menu.Item index="/products">设备列表</Menu.Item>
          <Menu.Item index="/products/detail">报表详情</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="3" title={<span><i className="el-icon-setting"></i>系统管理</span>}>
          <Menu.Item index="3-1">人员管理</Menu.Item>
          <Menu.Item index="3-2">区域管理</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  }
}

export default withRouter(MainMenu)