import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CommitList from './CommitList'
import CommitRadar from './CommitRadar'
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Container, Row, Col, NoWrapRow } from "../../HomeContainer"

class CommitsGrid extends Component {
  render() {
    return (
      <Paper>
        <Subheader>Commits Scores</Subheader>
        <Container>
          <NoWrapRow>
            <Col><CommitList/></Col>
            <Col><CommitRadar/></Col>
          </NoWrapRow>
        </Container>
      </Paper>
    );
  }
}


export default CommitsGrid;
