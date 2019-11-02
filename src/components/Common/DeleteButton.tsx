import * as React from 'react';

type Props = {
  text: string,
  deleteService?: any
}

class DeleteButton extends React.PureComponent<Props, {}>
{
  static defaultProps: Props = {
    text: 'Hapus'
  }
  deleteAction = async() => {
    if (!this.props.deleteService) {
      return;
    }
    try {
      await this.props.deleteService();
    } catch(e) {

    }
  }
  render() {
    return (
      <button
        onClick={this.deleteAction}
        className="uk-button uk-button-danger">
        {this.props.text}
      </button>
    )
  }
}

export default DeleteButton;
