import React, { useEffect, useState } from 'react'
import dataProvider, { GET } from './api/dataProvider'

export default () => {
  const [data, setData] = useState('')
  const [fetched, setFetched] = useState(false)

  const loader = async () => {
    const d = await dataProvider('/data', GET, '')
    setData(d)
    setFetched(true)
  }

  useEffect(() => { if (!fetched) loader() })

  return (
    <div>{data}</div>
  )
}
