import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Hidden from 'material-ui/Hidden'
import { AnimatedBox } from '../_styledComponents'

const styleSheet = () => ({
  button: {
    margin: '0 auto',
  },
  paper: {
    margin: '20px',
    width: '100%',
    height: 'auto',
  }
})

Greeting.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

function Greeting({ classes, history }) {

  const addNew = () => {
    history.push('/notes/new')
  }

  return (
    <div className={classes.paper}>
      <AnimatedBox>
        <AppBar position="static" color="default">
          <Toolbar className={classes.container}>
            <Hidden smDown>
              <Typography type="subheading" color="inherit">
                Click 'New note' to save your great ideas!
              </Typography>
            </Hidden>
            <Button raised color="primary" className={classes.button} onClick={addNew}>
              New note
            </Button>
          </Toolbar>
        </AppBar>
      </AnimatedBox>
    </div>
  )
}

export default withStyles(styleSheet)(Greeting)
