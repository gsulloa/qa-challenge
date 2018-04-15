import React, { Component } from "react"
import { connect } from "react-redux"
import { devlog } from "../utils/log"
import { Container, Row, Col, NoWrapRow } from "../components/HomeContainer"
import Paper from 'material-ui/Paper';

// Components
import RepositoryList from '../components/RepositoryList'
import CommitList from '../components/CommitList'
import DeveloperRankingList from '../components/DeveloperRankingList';
import ContributorList from '../components/ContributorList';

// Grids
import CommitsGrid from '../components/Grids/CommitsGrid';
import ContributorsGrid from '../components/Grids/ContributorsGrid';

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    devlog("Home", this.props)
    return (
      <Container>
        <NoWrapRow>
          <Col><RepositoryList/></Col>
          <Col><Paper><ContributorList/></Paper></Col>
          <Col>
            <NoWrapRow>
              <Col><DeveloperRankingList/></Col>
            </NoWrapRow>
            <Row>
            <Col><CommitsGrid/></Col>
            <Col><ContributorsGrid/></Col>
          </Row>
          </Col>
        </NoWrapRow>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
