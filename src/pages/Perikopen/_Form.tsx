
import * as React from 'react';
import NetworkService from '../../service/network';

type Props = {
  onSubmit: (data: any) => any
};

type State = {
  perikopen: {
    color?: any,
    worship?: any,
    week?: any,
    dressCode?: any,
    schedule: string
  },
  selectData: {
    weeks: any,
    agendre: any,
    schedule: any,
    colors: any,
  }
};

class PerikopenForm extends React.Component<Props, State>
{
  state : State = {
    perikopen: {
      worship: '',
      week: '',
      dressCode: '',
      schedule: '',
    },
    selectData: {
      weeks: [],
      agendre: [],
      schedule: [],
      colors: [],
    }
  }
  componentDidMount() {
    this.loadSelectData();
  }
  loadSelectData = async() =>  {
    console.log('loadSelectData');
    const objPromise = [
      {
        state: 'weeks',
        fungsi: () => NetworkService.getWeeks(),
      },
      {
        state: 'colors',
        fungsi: () => NetworkService.getDressCodes(),
      },
      {
        state: 'agendre',
        fungsi: () => NetworkService.getAgendrees(),
      },
      {
        state: 'schedule',
        fungsi: () => NetworkService.getSchedules(),
      }
    ];

    objPromise.forEach(async (obj: any) => {
      const { data } = await obj.fungsi();
      const changes = {
        [obj.state]: data,
      };

      this.setState(prevState => ({
        selectData: {
          ...prevState.selectData,
          ...changes,
        }
      }));
    });
  }
  processForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    if (onSubmit) {
      const { perikopen } = this.state;
      this.props.onSubmit(perikopen);
    }
  }
  handleSelectChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
    const target: HTMLSelectElement = event.currentTarget;

    const name: string = target.name;
    const value = target.value;

    const changes: object = {
      [name]: parseInt(value)
    };
    this.setState(prevState => ({
      perikopen: {
        ...prevState.perikopen,
        ...changes,
      }
    }));
  }
  render() {
    const WeekOpsi = (props: any): any => {

      const { data } = props;
      const selectedValue: any = props.selectedValue || false;
      if (null == data || !data.length) {
        return (<option key={0} value="">Pilih Warna</option>)
      }

      const opsi = data.map((o: any, key: any) => {
        return (
          <option
            key={o.id}
            value={o.id}
          >
              {o[props.textProperty]}
          </option>
        )
      });

      return [<option key={0} value="">Pilih</option>, ...opsi];
    };

    return (
      <form className="uk-form">
        <div>
            <label className="uk-form-label">
              Minggu
            </label>
            <div className="uk-form-controls">
              <select
                name="week"
                value={this.state.perikopen.week}
                className="uk-select"
                onChange={this.handleSelectChange}>
                <WeekOpsi
                  textProperty="code"
                  data={this.state.selectData.weeks} />
              </select>
            </div>
        </div>
        <div>
            <label className="uk-form-label">
              Tata Ibadah / Agendre
            </label>
            <div className="uk-form-controls">
              <select
                name="worship"
                className="uk-select"
                value={this.state.perikopen.worship}
                onChange={this.handleSelectChange}>
                <WeekOpsi
                  textProperty="idName"
                  data={this.state.selectData.agendre}
                />
              </select>
            </div>
        </div>
        <div>
            <label className="uk-form-label">
              Jadwal
            </label>
            <div className="uk-form-controls">
              <select
                name="schedule"
                className="uk-select"
                value={this.state.perikopen.schedule}
                onChange={this.handleSelectChange}>
                <WeekOpsi
                  textProperty="date"
                  data={this.state.selectData.schedule } />
              </select>
            </div>
        </div>
        <div>
            <label className="uk-form-label">
              Warna
            </label>
            <div className="uk-form-controls">
              <select
                name="dressCode"
                className="uk-select"
                value={this.state.perikopen.dressCode}
                onChange={this.handleSelectChange}>
                <WeekOpsi
                  textProperty="colorKey"
                  data={this.state.selectData.colors } />
              </select>
            </div>
        </div>
        <button className="uk-button uk-button-primary" onClick={this.processForm}>Save</button>
      </form>
    )
  }
}

export default PerikopenForm;
