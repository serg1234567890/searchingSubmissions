import React from 'react'
import { connect } from 'react-redux'
import { Page } from './Page'
import { getControls } from './Actions'

class PageContainer extends React.Component {
  render() {
    const { page, getControls } = this.props
    return (
      <Page
        controltype={page.controltype}
        controls={page.controls}
        isFetching={page.isFetching}
        error={page.error}
        getControls={getControls}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getControls: () => dispatch(getControls())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
