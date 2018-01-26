import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { noteUpdate } from '../actions';

class NoteForm extends Component {
  render() {
   return (
     <View>
       <CardSection>
         <Input
           label="Title"
           placeholder="Title"
           value={this.props.title}
           onChangeText={value => this.props.noteUpdate({ prop: 'title', value })}
         />
       </CardSection>

       <CardSection>
         <Input
           label="Body"
           placeholder="Body"
           value={this.props.body}
           onChangeText={value => this.props.noteUpdate({ prop: 'body', value })}
         />
       </CardSection>
     </View>
   );
  }
}

const mapStateToProps = (state) => {
  const { title, body } = state.noteForm;
  return { title, body };
};

export default connect(mapStateToProps, { noteUpdate })(NoteForm);
