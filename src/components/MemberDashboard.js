import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'react-icons-kit'
import { tasks } from 'react-icons-kit/fa/tasks'
import { Box, Heading, Tile, Container, Columns } from 'react-bulma-components'
import TaskCard from './TaskCard'
import { getMemberTasks, deleteTask, updateTask } from '../actions/tasks'


class MemberDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount = () => {
    this.props.getMemberTasks(this.props.userId)

  }
  render() {

    return (
      <div className="taskview_container">
        <Box classNAme="taskview_box">
          <Heading>
            <div className="title_signin">
              <span style={{ color: '#addfe2' }}>
                <Icon icon={tasks} size={40} />
              </span>
              <span> Task Overview</span>
            </div>
          </Heading>
          <Container>
            <Tile kind="ancestor" flex-wrap="wrap">
              <Tile>
                <Columns>
                  {
                    this.props.tasks.map(task => {
                      return <TaskCard
                        key={task.id}
                        {...task}
                        deleteTask={() => this.props.deleteTask(this.props.userId, task.id)}
                        updateTask={() => this.props.updateTask(this.props.userId, task.id, { isFocus: !task.isFocus })}
                      />
                    })
                  }
                </Columns>
              </Tile>
            </Tile>
          </Container>

          <div class="breadcrumbs">
            <Link to={'/toggle'}>Create Team     |      </Link >
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMemberTasks: getMemberTasks,
  deleteTask: deleteTask,
  updateTask: updateTask

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard);
