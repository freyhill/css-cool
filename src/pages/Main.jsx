import React, { Component } from 'react';
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import {navData} from '../constant/systemData';
import {changeNavAction} from '../store/actions/systemActions';

const { Header, Footer, Sider, Content } = Layout;

class Main extends Component {
    componentDidMount() {
        console.log(this.props.location.pathname);
        const path = this.props.location.pathname.split('/').filter(item=>item)
        this.props.changeNavAction(path[0]);

    }
    
    // header nav点击
    navClick =(link) =>{
        console.log(link)
        console.log(this.props);
        this.props.changeNavAction(link);
    }
    render() {
        console.log(this.props.route.routes);
        return (
            <Layout>
                <Header className="flex">
                    <Logo></Logo>
                    <Nav 
                        data={navData}
                        navClick={this.navClick}
                        currentNav={this.props.currentNav}
                        ></Nav>
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>{renderRoutes(this.props.route.routes)}</Content>
                </Layout>
                <Footer>Footer</Footer>
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
