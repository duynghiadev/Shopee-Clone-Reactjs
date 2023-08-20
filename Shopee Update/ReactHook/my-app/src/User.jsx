import React from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserProfile from './UserProfile'

const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100, Nicolas, NY',
          house: 'Building'
        }
      })
    }, 3000)
  })
}
const profile = {}

export const UserContext = createContext({
  address: {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  },
  age: 100,
  firstName: 'Alexa',
  increaseAge: () => {}
})

export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initialAddress)
  const [, forceRerender] = useState(0)

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const rerender = () => forceRerender((prevState) => prevState + 1)

  const changeStreet = () => {
    // address.city = 'Hanoi'
    // setAddress(address)
    // setAddress((prevAddress) => ({ ...prevAddress, city: 'Hanoi' }))
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '100 Dien Bien Phu, Da Nang'
      return {
        ...prevAddress,
        city: newCity
      }
    })
  }
  // console.log('Re-render')

  // Giống componentDidUpdate, effect function chạy lại
  // mỗi khi component re-render
  // useEffect(() => {
  //   console.log('useEffect giống componentDidUpdate')
  // })

  // Thường dùng để gọi API
  useEffect(() => {
    // console.log('useEffect giống componentDidMount')
    // console.log(profile)
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress }
        newAddress.city = res.city
        return newAddress
      })
    })

    // cleanup function
    return () => {
      console.log('Huy goi API')
    }
  }, [])

  // useEffect(() => {
  //   console.log('age', age)
  //   return () => {
  //     console.log('Clean Age')
  //   }
  // }, [age])

  return (
    <div>
      <h1>User Functional component</h1>

      <UserProfile />

      <button onClick={rerender}>Rerender</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  )
}
