import React from 'react'
import { Header } from '../../components/Header/Header'

// Dados da aplicação
import { proInfo, calendar } from '../../components/Data/Data'
import BookTime from '../../components/BookTime/BookTime'

export default function AreaPro() {
  return (
    <div>
      <Header userData={proInfo} />
      <div>
        {calendar.map(data => {
          const bookList = data.times.map(bookItem => {
            return <BookTime data={bookItem} />
          })
          return (
            <>
              <p>{data.day}</p>
              {bookList}
            </>
          )
        })}
      </div>
    </div>
  )
}
