import React, { useState } from 'react';
import Button from '../../components/button';
import Modal from '../../components/modal/modal'
import Select from '../../components/select';
import styles from './filter.module.scss';
import { Formik, Form } from 'formik';
import Image from 'next/image';
import CloseIcon from '../../public/close.png';

export interface Props {
  isOpen: boolean;
  isClose: () => void;
  setFilteredData: (data: {
    earth_date: string, camera: string
  }) => {};

}

const Filter = ({ isOpen, isClose, setFilteredData }: Props) => {
  const [selectCamera, setSelectedCamera] = useState({
    name: '',
    id: ''
  });



  const handleSubmit = (values: any) => {
    setFilteredData({ ...values, camera: selectCamera.id })
    isClose()
  };


  const options = [{
    id: 'FHAZ',
    name: 'Front Hazard Avoidance Camera'
  }, {
    id: 'RHAZ',
    name: 'Rear Hazard Avoidance Camera'
  }, {
    id: 'MAST',
    name: 'Mast Camera'
  }, {
    id: 'CHEMCAM',
    name: 'Chemistry and Camera Complex'
  }, {
    id: 'MAHLI',
    name: 'Mars Hand Lens Imager'
  }, {
    id: 'MARDI',
    name: 'Mars Descent Imager'
  }, {
    id: 'NAVCAM',
    name: 'Navigation Camera'
  }, {
    id: 'PANCAM',
    name: 'Panoramic Camera'
  }, {
    id: 'MINITES',
    name: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  }];

  return (
    <Modal isOpen={isOpen} isClose={isClose} width={464} height={700}>
      <div className={styles.filter__heading}>
        <h3>Filter</h3>
        <Image src={CloseIcon} alt="cancel" width={24} height={24} onClick={isClose} />
      </div>
      <Formik initialValues={{ earth_date: '', camera: '' }} onSubmit={handleSubmit}>
        {(formik) => (
          <Form>
            <div className={styles.filter__form}>
              <div className={styles.filter__form__field}>
                <p>Date</p>
                <input type="date" value={formik.values.earth_date} name="earth_date" onChange={formik.handleChange} id="earth_date" />
              </div>
              <div className={styles.filter__form__field}>
                <p>Camera</p>
                <Select options={options} selected={selectCamera}
                  handleChange={setSelectedCamera} />
              </div>
              <div className={styles.filter__form__btn}>
                <Button type="submit">Search</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default Filter