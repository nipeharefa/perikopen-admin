import React, { Fragment } from 'react';
import { AxiosResponse } from 'axios';
import {SortableContainer, SortableElement, SortEnd } from 'react-sortable-hoc';
import network from '../../service/network';

type KidungJemaatModel = {
  id: Number,
  displayOrder: Number,
  bukuZinuno: {
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
      <p>{perikopen.bukuZinuno.title}</p>
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


type SortableBukuZinunoProps = {
  perikopenId: Number,
}


const SortableBukuZinuno = ({ perikopenId }: SortableBukuZinunoProps ) => {

  const [kjCollections, setKjCollections] = React.useState([]);
  const [kidungJemaat, setKidungJemaat] = React.useState([]);
  const [songSelected, setSongSelected] = React.useState(0);

  React.useEffect(() => {
    let didCancel = false;
    const getKidungJemaat = async () => {
      try {
        const { data } = await network.getPerikopenBukuZinuno(perikopenId);
        if (!didCancel) {
          setKidungJemaat(data);
        }
      } catch (error) {}
    };

    const getkjCollections = async() => {
      try {
        const { data } = await network.getBukuZinuno();
        if (!didCancel) {
          setKjCollections(data);
        }
      } catch (error) {}
    };

    getKidungJemaat();
    getkjCollections();

    return () => {
      didCancel = true
    };

  }, [perikopenId]);

  const onSortEnd = (x: SortEnd) => {
    console.log(x);
  };

  const handleChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const selected: number = parseInt(e.currentTarget.value);
    setSongSelected(selected);
  };

  const _addBZToPerikpen = async(data: Object) => {

    try {
      const response : AxiosResponse = await network.addBZToPerikopen(data);
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
      bukuZinuno: songSelected,
    };
    _addBZToPerikpen(data);
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

export default SortableBukuZinuno;
