import './index.css'
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            codeNumber: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
    }

    render() {
        return (
            <div className="login-wrap">
                <div className="container">
                    <div className="title">管理平台</div>
                    <form className="form-wrap" onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>用户名：</label>
                                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </li>
                            <li>
                                <label>密码：</label>
                                <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange} />
                            </li>
                            <li>
                                <label>验证码：</label>
                                <input name="codeNumber" type="text" value={this.state.codeNumber} onChange={this.handleInputChange} />
                            </li>
                            <li>
                                <button type="submit">提交</button>
                            </li>
                        </ul>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Login