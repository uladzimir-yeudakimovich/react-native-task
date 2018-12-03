import React from 'react';
import { StyleSheet, Button, View  } from 'react-native';
import t from 'tcomb-form-native';

export default class RegisterForm extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={ stylesForm.container }>
        <Form ref={c => this._form = c} type={User} options={options}/>
        <Button title="Submit" onPress={this.handleSubmit}/>
      </View>
    )
  }
}

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  message: t.String
});

const options = {
  fields: {
    name: {
      error: "Name is required"
    },
    email: {
      error: "Email is required"
    },
    message: {
      error: "Message is required"
    },
  },
};

const stylesForm = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  }
});