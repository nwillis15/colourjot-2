import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { notesFetch } from '../actions';
import ListTile from './ListTile';

class NoteList extends Component {
  componentWillMount() {
    this.props.notesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props this component will be rendered with and this.props
    // is the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ notes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(notes);
  }

  renderRow(note) {
    return <ListTile note={note} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const notes = _.map(state.notes, (val, uid) => {
    return { ...val, uid };
  });

  return { notes };
};


export default connect(mapStateToProps, { notesFetch })(NoteList);
