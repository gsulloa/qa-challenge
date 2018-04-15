import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ContributorList from '../ContributorList'
import ContributorRadar from './ContributorRadar'
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { Container, Row, Col, NoWrapRow } from "../HomeContainer"

class ContributorsGrid extends Component {
  render() {
    return (
      <Paper>
        <Subheader>Contributors Scores</Subheader>
        <Container>
          <NoWrapRow>
            <Col><ContributorList/></Col>
            <Col><ContributorRadar/></Col>
          </NoWrapRow>
        </Container>
      </Paper>
    );
  }
}

export default ContributorsGrid;
