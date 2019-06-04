import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

const Header = ({header, dispatch}) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={header.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={header.focused ? 'focused' : ''}
                            // onFocus={props.handleInputFocus}
                            // onBlur={props.handleInputBlur}
                            onFocus={() => {
                                dispatch(actionCreators.searchFocus())
                            }}
                            onBlur={() => {
                                dispatch(actionCreators.searchBlur())
                            }}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={header.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <span className="iconfont">&#xe6b3;</span>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         focused: state.header.focused
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleInputFocus() {
//             dispatch(actionCreators.searchFocus())
//         },
//         handleInputBlur() {
//             dispatch(actionCreators.searchBlur())
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Header);


export default connect((header) => header)(Header);