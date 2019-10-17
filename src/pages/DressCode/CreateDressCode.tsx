import * as React from 'react';
import Form from './_Form';
import NetworkService from '../../service/network';

class CreateDressCode extends React.PureComponent
{
  handleFormSubmitted = async(formData: Object) => {
    try {
      const { data } = await NetworkService.createDressCode(formData);
      console.log(data);
    } catch (err) {

    }
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleFormSubmitted} />
      </React.Fragment>
    )
  }
}

export default CreateDressCode;
