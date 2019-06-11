import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, page, handleMouseEnter, handleMouseLeave, mouseIn, 
            handleChangePage, totalPage, iconRotate } = this.props;
        // 将immutable对象转换成js对象
        const jsList = list.toJS();
        const pageList = [];
        if(jsList.length) {
            for(let i = (page -1)*10; i < page*10; i++) {
                jsList[i] && pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        return (
            <HeaderWrapper>
                <Link to="/">
                <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe64d;</span>
                        <SearchInfo 
                            className={focused || mouseIn? 'show': 'hidden'} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <SearchInfoTitle>
                                热门搜索
                                {/* <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}> */}
                                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, iconRotate)}>
                                    {/* <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>换一批 */}
                                    <span className="iconfont spin" rotate={iconRotate}>&#xe851;</span>换一批
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {pageList}
                            </SearchInfoList>
                        </SearchInfo>
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
}


const mapStateToProps = (state) => {
    return {
        // 相当于这种用法state.header.get('focused') 但是state.header是按照js对象获取header  而header.get('focused')是按照immutable对象获取focused的 
        // 这样就没有统一，所以我们在../../../store中的reducer.js中import { combineReducers } from 'redux-immutable'把store也设置成immutable对象
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),   
        mouseIn: state.getIn(['header', 'mouseIn']),  
        totalPage: state.getIn(['header', 'totalPage']),
        iconRotate:  state.getIn(['header', 'iconRotate']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // 只有list的size为0的时候才让它去请求数据
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, iconrotate) {
            // 第一种方式
            // 将deg(非数字)替换成'',这样就可以拿到纯数字了
            // let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            // originAngle = originAngle? parseInt(originAngle, 10) : 0;
            // spinIcon.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
            // 第二种方式
            dispatch(actionCreators.rotateIcon(iconrotate + 360))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

