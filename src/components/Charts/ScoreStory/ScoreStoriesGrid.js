import React,{Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ScoreStoryList from './ScoreStoryList'
import ScoreStoryLine from './ScoreStoryLine'
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Container, Row, Col, NoWrapRow } from "../../HomeContainer"

class ScoreStoriesGrid extends Component {
  render() {
    return (
      <Paper>
        <Subheader>Contributors score story</Subheader>
        <Container>
          <NoWrapRow>
            <Col><ScoreStoryList/></Col>
            <Col><ScoreStoryLine/></Col>
          </NoWrapRow>
        </Container>
      </Paper>
    );
  }
}


export default ScoreStoriesGrid;
