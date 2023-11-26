const data = [
  {
    name: 'Elsendoorn',
    age: 25,
    gender: 'female',
    location: 'Botsholsedwarsweg',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
  },
  {
    name: 'کامروا',
    age: 40,
    gender: 'female',
    location: 'آفریقا',
    avatar: 'https://randomuser.me/api/portraits/women/38.jpg'
  },
  {
    name: 'Metin',
    age: 43,
    gender: 'female',
    location: 'Hyacintenlaan',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg'
  },
  {
    name: 'Smith',
    age: 46,
    gender: 'male',
    location: 'Flaxmere Ave',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
  }
]

// const profileIterator = (data) => {
//   let index = 0
//   return {
//     next() {
//       return index < data.length
//         ? { value: data[index++], done: false }
//         : { done: true }
//     }
//   }
// }

function* profileGenerator(data) {
  let index = 0
  while (index < data.length) {
    yield data[index++]
  }
}

const profile = profileGenerator(data)
const handleNext = () => {
  const info = profile.next().value
  if (info) {
    document.getElementById('profile-avatar').innerHTML = `
    <img src="${info.avatar}"/>
    `
    document.getElementById('profile-info').innerHTML = `
   <ul class="list-group mb-3">
   <li class="list-group-item">
     Name: ${info.name}
   </li>
   <li class="list-group-item">
     Age: ${info.age}
   </li>
   <li class="list-group-item">
     Gender: ${info.gender}
   </li>
   <li class="list-group-item">
     Location: ${info.location}
   </li>
    </ul>
   `
  } else {
    location.reload()
  }
}

window.addEventListener('DOMContentLoaded', () => {
  handleNext()
  document.getElementById('next').addEventListener('click', handleNext)
})
