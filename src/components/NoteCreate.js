import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteCreate } from './../actions';
import { noteNew } from './../actions';
import { Card, CardSection, Button } from './common';
import NoteForm from './NoteForm';

class NoteCreate extends Component {

  componentWillMount() {
    this.props.noteNew();
  }

  onButtonPress() {
    const { title, body } = this.props;

    this.props.noteCreate({ title, body });
  }

  render() {
    return (
      <Card>
        <NoteForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, body } = state.noteForm;

  return { title, body };
};

export default connect(mapStateToProps, { noteCreate, noteNew })(NoteCreate);
