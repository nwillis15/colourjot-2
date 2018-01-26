import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteUpdate, noteSave, noteDelete } from './../actions';
import { Card, CardSection, Button, Confirm } from './common';
import NoteForm from './NoteForm';

class NoteUpdate extends Component {
  state = { showModal: false };

  componentWillMount() {
      _.each(this.props.note, (value, prop) => {
        this.props.noteUpdate({ prop, value });
      });
  }

  onButtonPress() {
    const { title, body } = this.props;
    this.props.noteSave({ title, body, uid: this.props.note.uid });
  }

  onAccept() {
    const { uid } = this.props.note;
    this.props.noteDelete({ uid });
  }

  onDecline() {
    this.toggleModalVisibility();
  }

  toggleModalVisibility() {
    this.setState((previousState) => {
      return { showModal: !previousState.showModal };
    });
  }

  render() {
    return (
      <Card>
        <NoteForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.toggleModalVisibility.bind(this)}>
            Delete Note
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this note?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, body } = state.noteForm;
  return { title, body };
};

export default connect(mapStateToProps, { noteUpdate, noteSave, noteDelete })(NoteUpdate);
