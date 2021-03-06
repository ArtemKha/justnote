import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Input from 'material-ui/Input/Input'

const styleSheet = theme => ({
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  input: {
    margin: theme.spacing.unit,
  },
})

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearchDrawer: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
}

function Search({classes, search, handleSearchDrawer, handleSearchInput}) {
  return (
    <Drawer
      anchor="bottom"
      open={search}
      onRequestClose={handleSearchDrawer}
      onClick={handleSearchDrawer}
    >
      <Input
        placeholder="Search"
        autoFocus
        onKeyPress={e => {
          e.key === 'Enter' && handleSearchDrawer()
        }}
        className={classes.input}
        onChange={e => handleSearchInput(e.target.value)}
      />
    </Drawer>
  )
}

export default withStyles(styleSheet)(Search)
