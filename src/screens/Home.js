import React, { Component } from "react"
import { connect } from "react-redux"

import { devlog } from "../utils/log"
import RepositoryList from '../components/RepositoryList'
import CommitList from '../components/CommitList'
import TestChart from '../components/TestChart';
import RepositoryProgressChart from '../components/RepositoryProgressChart';
import DeveloperRankingList from '../components/DeveloperRankingList';
import ContributorList from '../components/ContributorList';
import { Container, Row, Col, NoWrapRow } from "../components/HomeContainer"

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    devlog("Home", this.props)
    return (
      <Container>
        <NoWrapRow>
          <Col><RepositoryList/></Col>
          <Col><ContributorList/></Col>
          <Col>
            <Row>
              <Col><TestChart/></Col>
            </Row>
            <NoWrapRow>
              <Col><CommitList/></Col>
              <Col><RepositoryProgressChart/></Col>
              <Col><DeveloperRankingList/></Col>
            </NoWrapRow>
            <Row>
          </Row>
          </Col>
        </NoWrapRow>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
