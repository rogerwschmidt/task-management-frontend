import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'react-icons-kit'
import {tasks} from 'react-icons-kit/fa/tasks'
import { Box, Heading, Tile } from 'react-bulma-components'
import MemberCard from './MemberCard'
import { viewAllTeam, deleteUserFromTeam } from '../actions/manager'


class ManagerDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount = () => {
    this.props.viewAllTeam(this.props.userId)

  }
  render() {

    return (
      <div className="taskview_container">
      <Box classNAme="taskview_box">
        <Heading>
          <div className="title_signin">
            <span style={{ color: '#addfe2' }}>
            <Icon icon={tasks} size={40}/>  
            </span>
            <span> Team Overview</span>
          </div>
        </Heading>  
        <Box>
          <Tile kind="ancestor">
            <Tile size={12}>
            {<div><MemberCard/><MemberCard/><MemberCard/></div>}
              {/* {
                this.props.tasks.team(member => {
                  return <MemberCard 
                  key={member.id} 
                  {...member} 
                  deleteUserFromTeam={() => this.props.deleteUserFromTeam(member.id, this.props.teamId)} 
                  />
                })
              } */}
            </Tile>
          </Tile>
        </Box>
        <div class="breadcrumbs">
          <Link to={'/toggle'}>Go Back      |      </Link >
          <Link to={'/focus'}>Focus      |     </Link >
          <Link to={'/membertaskform'}>Add Task</Link >
        </div>
      </Box>
      </div>
    )
  }

}






const mapStateToProps = state => ({
  tasks: state.tasks,
  userId: state.authentication.user.id
  // teamId: state.
})

const mapDispatchToProps = dispatch => bindActionCreators({
  viewAllTeam: viewAllTeam,
  deleteUserFromTeam: deleteUserFromTeam

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerDashboard);
