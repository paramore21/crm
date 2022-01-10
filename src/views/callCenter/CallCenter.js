import React, { useState, useEffect } from 'react'
import { axios } from '../../axios'
import {
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const CallCenter = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      setItems(data.data)
    })
  }, [])
  return (
    <CTable bordered>
      <CTableHead color="dark">
        <CTableRow>
          {['userId', 'id', 'title', 'body'].map((item, index) => (
            <CTableHeaderCell scope="col" key={index}>
              {item}
            </CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {items.map((_, index) => (
          <CTableRow key={index}>
            {['userId', 'id', 'title', 'body'].map((item, subIndex) => (
              <CTableDataCell key={subIndex}>{items[index][item]}</CTableDataCell>
            ))}
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default CallCenter
