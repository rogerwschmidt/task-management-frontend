import React, { Component } from 'react'
import { Hero, Navbar, Button, Form } from 'react-bulma-components'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Icon } from 'react-icons-kit'
import {ic_view_list} from 'react-icons-kit/md/ic_view_list'
import {github} from 'react-icons-kit/icomoon/github'
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/authentication'


class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
          }
    }
    
    toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }
    render () {
        console.log(this.props.user)
        return (
            <Hero.Head>
                <Navbar>
                <Navbar.Brand>
                <NavLink to='/'> 
                    <div>
                        <span style={{ color: '#addfe2' }}>
                        <Icon icon={ic_view_list} size={60}/>
                        </span>
                        Task Manager
                    </div>
                    
                </NavLink>
                    
                </Navbar.Brand>
                {this.props.user ? 
                    <Navbar.Item className="navbtn">
                    <Button className="button is-primary is-inverted is-outlined is-medium topbtn" 
                        onClick={()=>this.props.userLogout(() => this.props.history.push('/'))}>
                        Sign Out
                    </Button>
                    </Navbar.Item>  
                    : null}
                    
                </Navbar>
            </Hero.Head>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user
  })
  
const mapDispatchToProps = dispatch => 
    bindActionCreators({userLogout}, dispatch)
  
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopNav));