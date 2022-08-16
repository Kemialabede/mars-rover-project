import type { NextPage } from 'next'
import { useQuery } from "react-query";
import Image from 'next/image'
import SearchBox from '../components/searchbox/index'
import FilterIcon from '../public/filter.png';
import DownloadIcon from '../public/download.png';
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router';
import Filter from '../containers/filters/index'
import { useState } from 'react';
import queryFormatter from '../helpers/queryFormatter';
import api from '../services/api';
import GridLoader from '../components/loader/loader';
import dateFormatter from '../helpers/dateFormatter';
import EmptyState from '../containers/emptyState/index';

const Home: NextPage = () => {
  const [filterData, setFilteredData] = useState({
    camera: 'fhaz'
  });
  const [openModal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState({
    camera: '',
  })

  const url = queryFormatter('?', searchValue.camera === '' ? filterData : searchValue)

  const { isLoading, data } = useQuery(
    ["getAllRover", filterData, searchValue],
    () => api.get(url).then((res) => res.data
    ));


  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__banner}>
        <h5 className={styles.homepage__banner__text}>Mars tugs at the human imagination like no other planet. With the force mighter than gravity. It attracts the eye to the shimmering red presence in the clear night</h5>
        <SearchBox onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue({ camera: e.target.value })} />
      </div>

      <div className={styles.homepage__container}>
        {!isLoading ? <div>
          <div className={styles.homepage__filter}>
            <div className={styles.homepage__filter__icon} onClick={() => setModal(true)}>
              <Image src={FilterIcon} width={24} height={24} /><p>Filter</p></div>
          </div>
          <div className={styles.homepage__grid}>
            {data?.photos?.length ? data?.photos?.map((item: any) => {
              const downloadImage = (e: any) => {
                fetch(e.target.href, {
                  method: "GET",
                  headers: {}
                })
                  .then(response => {
                    response.arrayBuffer().then(function (buffer) {
                      const url = window.URL.createObjectURL(new Blob([buffer]));
                      const link = document.createElement("a");
                      link.href = url;
                      link.setAttribute("download", "image.jpg"); //or any other extension
                      document.body.appendChild(link);
                      link.click();
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              };
              return (
                <div>
                  <div className={styles.image_container}>
                    <img src={item.img_src} alt="im" />
                    <div className={styles.image_container__hidden}>
                    </div>
                    <div className={styles.image_container__hidden__text}>
                      <div>
                        <p className={styles.image_container__hidden__text__caption_heading}>{item.camera.full_name}</p>
                        <p>{dateFormatter(item.earth_date)}</p>
                        <div>
                          <a href={item.img_src} onClick={e => downloadImage(e)} className={styles.download_icon}>
                            <Image src={DownloadIcon} width={24} height={24} />
                            <p>Download</p>
                          </a>
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : <EmptyState />}
          </div>
        </div> : <GridLoader />}
      </div>
      {openModal && <Filter isClose={() => setModal(false)} isOpen={true} setFilteredData={setFilteredData} />}
    </div>
  )
}

export default Home
