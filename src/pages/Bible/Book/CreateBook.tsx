import React from 'react';

const BookForm = React.lazy(() => import('./_Form'));

class CreateBook extends React.Component
{
  render() {
    return (
      <React.Fragment>
        <React.Suspense fallback={<div>Loading Form</div>}>
          <BookForm onSubmit={() => console.log('submitted')}/>
        </React.Suspense>
      </React.Fragment>
    )
  }
}

export default CreateBook;
