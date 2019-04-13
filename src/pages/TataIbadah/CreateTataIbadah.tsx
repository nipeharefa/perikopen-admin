import * as React from 'react';
import Form from './_Form';
import NetworkService from '../../service/network';

class CreateTataIbadah extends React.Component
{
  formSubmitHandler = async(formData: object) => {
    try {
      const response = await NetworkService.createAgendre(formData);
      console.log(response);
      return;
    }catch(e) {
      return;
    }
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    )
  }
}

export default CreateTataIbadah;
