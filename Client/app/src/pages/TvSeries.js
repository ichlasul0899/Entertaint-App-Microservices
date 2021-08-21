import React, { useEffect } from 'react';
import Card from '../component/Card2'
import {GET_TVSERIES} from '../queries/index'
import { useQuery } from '@apollo/client';

const TvSeries = () => {
  const { loading, error, data, refetch } = useQuery(GET_TVSERIES)

  useEffect(() => {
    refetch()
  }, [data])

  if (loading) return <p>Loading</p>
  if (error) return <p>error...{JSON.stringify(error)}</p>
  if (data.getTvSeries.length === 0) {
    return (
      <div>
        <h4>Data tvseries Kosong</h4>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', position: 'static' }}>
      <div style={{ flexDirection: 'column' }}>
        <h3>List Tv Series</h3>
        <div style={{ display: "flex", flexDirection: 'column', flexWrap: 'wrap' }}>
          {data.getTvSeries.map((tv, index) => {
            return (
              <Card tv={tv} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default TvSeries