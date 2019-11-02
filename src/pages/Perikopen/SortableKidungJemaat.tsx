import React, { Fragment } from 'react';
import { AxiosResponse } from 'axios';
import {SortableContainer, SortableElement, SortEnd } from 'react-sortable-hoc';
import network from '../../service/network';

type KidungJemaatModel = {
  id: Number,
  displayOrder: Number,
  kidungJemaat: {
    id: number,
    songNumber: string,
    title: string
  }
};

type SortableItemKidungJemaat = {
  value: KidungJemaatModel
}

const SortableItem = SortableElement((props: SortableItemKidungJemaat) => {
  const perikopen:  KidungJemaatModel = props.value;

  return (
    <Fragment>
      <p>{perikopen.kidungJemaat.title}</p>
    </Fragment>
  )
});


const SortableList = SortableContainer(({items}: any) => {
  return (
    <ul>
      {items.map((value: KidungJemaatModel, index: number ) => (
        <SortableItem key={`item-${value.id}`} index={index} value={value} />
      ))}
    </ul>
  );
});


type SortableKidungJemaatProps = {
  perikopenId: Number,
}


const SortableKidungJemaat = ({ perikopenId }: SortableKidungJemaatProps ) => {

  const [kjCollections, setKjCollections] = React.useState([]);
  const [kidungJemaat, setKidungJemaat] = React.useState([]);
  const [songSelected, setSongSelected] = React.useState(0);

  const getKidungJemaat = async () => {
    try {
      const { data } = await network.getPerikopenKidungJemaat(perikopenId);
      setKidungJemaat(data);
    } catch (error) {

    }
  };

  const getkjCollections = async() => {
    try {
      const { data } = await network.getKidungJemaat();
      setKjCollections(data);
    } catch (error) {

    }
  };

  React.useEffect(() => {
    getKidungJemaat();
    getkjCollections();
  }, [perikopenId]);

  const onSortEnd = (x: SortEnd) => {
    console.log(x);
  };

  const handleChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const selected: number = parseInt(e.currentTarget.value);
    setSongSelected(selected);
  };

  const _addKJToPerikpen = async(data: Object) => {

    try {
      const response : AxiosResponse = await network.addKJToPerikopen(data);
      setSongSelected(0);

      // kidungJemaat.
      const newKidungJemaat : any = [...kidungJemaat, response.data];
      setKidungJemaat(newKidungJemaat);
    } catch (error) {}

  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      displayOrder: 0,
      perikopen: perikopenId,
      kidungJemaat: songSelected,
    };
    _addKJToPerikpen(data);
  };

  return (
    <Fragment>
      <SortableList items={kidungJemaat} onSortEnd={onSortEnd} />
      <form onSubmit={handleSubmit}>
        <div className="uk-margin">
          <select
            value={songSelected}
            onChange={handleChange}
            className="uk-select">
            <option value="0">Pilih</option>
            {kjCollections.map((x: any) => (
              <option key={x.id} value={x.id}>{x.title}</option>
            ))}
          </select>
        </div>
        <div className="uk-margin">
          <input type="submit" className="uk-button uk-button-primary" />
        </div>
      </form>
    </Fragment>
  )
};

export default SortableKidungJemaat;
