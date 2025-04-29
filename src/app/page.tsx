
  'use client'
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { Tabla } from "./component/tabla/tabla";

  async function getInventario() {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/inventario');
          const data = response.data.data;

          return { data };
      } catch (error) {
          console.error(error);
          return { data: []};
      }
  }

  export default function Home() {
      const [data, setData] = useState([]);

      useEffect(() => {
          const fetchData = async () => {
              const { data} = await getInventario();
              setData(data);
          };
          fetchData();
      }, []);

      return (
          <div className="w-full">
              <Tabla headers={['id','producto_id','tipoMovimiento','cantidad','precio']} data={data} />
          </div>
      );
  }