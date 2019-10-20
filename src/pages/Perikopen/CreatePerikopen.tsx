import * as React from 'react';
import Form from './_Form';
import NetworkService from '../../service/network';

class CreatePerikopen extends React.Component
{
  formSubmitHandler = async(formData: object) => {
    const response = await NetworkService.createPerikopen(formData);
    console.log(response);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    )
  }
}

export default CreatePerikopen;
