import React from 'react';
import NetworkService from '../../../service/network';

export interface ContohState {
  state: {
    name: String,
    age: Number,
    cool: boolean,
    books: any,
  }
  growAYearOlder: any,
  getBooksCollection: any,
}

const data : Partial<ContohState> = {
  state: {
    name: "S",
    age: 1,
    cool: false,
    books: [],
  }
}

export const BaseContext: React.Context<Partial<ContohState>> = React.createContext(data);

// Then create a provider Component
export class ProviderComponent extends React.Component {
  state = {
    name: 'Wes',
    age: 1,
    cool: true,
    books: [],
  }
  getBibleBookCollection = async() => {
    try {
      const { data } = await NetworkService.getBibleBookCollection();
      this.setState({
        books: data,
      })
    } catch(err) {
    }
  }
  render() {
    return (
      <BaseContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        }),
        getBooksCollection: this.getBibleBookCollection
      }}>
        {this.props.children}
      </BaseContext.Provider>
    )
  }
}

export const useContext = (Component: any) => {
  return ()  => (
    <ProviderComponent>
      <Component />
    </ProviderComponent>
  )
};
