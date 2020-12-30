import React from 'react'
import {withRouter} from 'react-router'

import './index.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleLogout () {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="header-wrap">
        <div className="left-part">
          <div className="user-info-wrap">用户信息</div>
          <div>操作按钮</div>
        </div>
        <div>管理平台</div>
        <div className="logout-button" onClick={this.handleLogout.bind(this)}>登出</div>
      </div>
    )
  }
}

export default withRouter(Header)