import React, { Component, Suspense} from 'react';
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import MenuComponent from '../components/Menu';
import {navData, menuData} from '../constant/systemData';
import {changeNavAction} from '../store/actions/systemActions';
import {Spin} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class Main extends Component {
    componentDidMount() {
        console.log(this.props.location.pathname);
        const path = this.props.location.pathname.split('/').filter(item=>item)
        console.log('path', path);
        this.props.changeNavAction(path[0]);

    }
    
    // header nav点击
    navClick =(link) =>{
        console.log(link)
        console.log(this.props);
        this.props.changeNavAction(link);
    }
    render() {
        const currentMenu = this.props.currentNav ? menuData[this.props.currentNav] : menuData['less'];
        return (
            <Layout>
                <Header className="flex" id="header">
                    <Logo></Logo>
                    <Nav 
                        data={navData}
                        navClick={this.navClick}
                        currentNav={this.props.currentNav}
                        ></Nav>
                </Header>
                <Layout>
                    <Sider>
                        <MenuComponent
                            data={currentMenu}
                        >
                        </MenuComponent>
                    </Sider>
                    <Content>
                        {renderRoutes(this.props.route.routes)}
                    </Content>
                </Layout>
                
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentNav: state.systemReducer.currentNav
  })
  const mapDispatchToProps = {
        changeNavAction
    }
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
