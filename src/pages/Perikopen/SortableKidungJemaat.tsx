import React, { Fragment } from 'react';
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
  return (
    <Fragment>
      <SortableList items={kidungJemaat} onSortEnd={onSortEnd} />
      <div className="uk-inline">
        <select className="uk-select">
          {kjCollections.map((x: any) => (
            <option key={x.id}>{x.title}</option>
          ))}
        </select>
        <button type="button">Tambah</button>
      </div>
    </Fragment>
  )
};

export default SortableKidungJemaat;
