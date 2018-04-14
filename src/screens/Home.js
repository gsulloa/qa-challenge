import React, { Component } from "react"
import { connect } from "react-redux"

import { devlog } from "../utils/log"
import RepositoryList from '../components/RepositoryList'
import CommitList from '../components/CommitList'
import TestChart from '../components/TestChart';
import RepositoryProgressChart from '../components/RepositoryProgressChart';
import TopDevelopers from '../components/TopDevelopers';
import { Container, Row, Col } from "../components/HomeContainer"

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    devlog("Home", this.props)
    return (
      <Container>
        <Row>
          <Col><RepositoryList/></Col>
          <Col><TestChart/></Col>
        </Row>
        <Row>
          <Col><CommitList/></Col>
          <Col><RepositoryProgressChart/></Col>
        </Row>
        <Row>
          <Col><TopDevelopers/></Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
