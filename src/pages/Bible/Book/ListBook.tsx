import * as React from 'react';
import TableBooks from '../../../components/BibleBookComponent/TableBooks';
import { BaseContext, useContext, ContohState } from './ListBookContext';


class ListBook extends React.Component
{
  static contextType : React.Context<Partial<ContohState>> = BaseContext

  componentDidMount = async() => {
    await this.context.getBooksCollection();
  }
  render() {
    return (
      <BaseContext.Consumer>
        {() => (
          <React.Fragment>
            <TableBooks />
          </React.Fragment>
        )}
      </BaseContext.Consumer>
    )
  }
}

export default useContext(ListBook);
