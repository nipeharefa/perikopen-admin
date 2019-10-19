import * as React from 'react';
import Form from './_Form';
import NetworkService from '../../service/network';

const CreateDressCode = (props: any) => {
  const handleFormSubmitted = async(formData: Object) => {
    try {
      const { history } = props;
      const { data } = await NetworkService.createDressCode(formData);
      history.push('/dress-code');
    } catch (err) {
    }
  }
  return (
    <React.Fragment>
      <Form onSubmit={handleFormSubmitted} />
    </React.Fragment>
  );
}

export default CreateDressCode;
