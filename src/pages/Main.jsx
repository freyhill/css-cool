import React, { Component } from 'react';
import { renderRoutes } from "react-router-config";
import { Layout } from 'antd';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const { Header, Footer, Sider, Content } = Layout;

class Main extends Component {
    render() {
        console.log(this.props.route.routes);
        return (
            <Layout>
                <Header className="flex">
                    <Logo></Logo>
                    <Nav></Nav>
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

export default Main;
