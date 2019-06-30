import React from 'react';

import { BaseContext } from '../../pages/Bible/Book/ListBookContext';

class TableBooks extends React.Component
{
  render() {
    return (
      <BaseContext.Consumer>
        {((context: any) => (
          <table className="uk-table">
            <thead>
              <tr>
                <th>
                  Key
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {context.state.books.map((book: any) => (
                <tr key={book.id}>
                  <td>{book.key}</td>
                  <td>
                    <button className="uk-button uk-button-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </BaseContext.Consumer>
    )
  }
}

export default TableBooks;
