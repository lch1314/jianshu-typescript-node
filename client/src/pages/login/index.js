import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox,  Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.accout = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.accout, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/" />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(accountEle, passwordEle) {
        dispatch(actionCreators.login(accountEle.value, passwordEle.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

