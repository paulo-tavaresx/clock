setInterval(() => {
  const date = new Date()

  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  updateClockHands({ hours, minutes, seconds })
  updateDigitalClock({ hours, minutes, seconds })
}, 1000)

function updateClockHands({ hours, minutes, seconds }) {
  const hourHand = document.querySelector('.hourHand')
  const minuteHand = document.querySelector('.minuteHand')
  const secondHand = document.querySelector('.secondHand')

  const rotateForHour = 360 / 12
  const angleHour = hours * rotateForHour + 180

  const rotateForMinute = 360 / 60
  const angleMinute = minutes * rotateForMinute + 180

  const rotateForSecond = 360 / 60
  const angleSecond = seconds * rotateForSecond + 180

  hourHand.style.setProperty('--rotation', `${angleHour}deg`)
  minuteHand.style.setProperty('--rotation', `${angleMinute}deg`)
  secondHand.style.setProperty('--rotation', `${angleSecond}deg`)
}

function updateDigitalClock({ hours, minutes, seconds }) {
  const hoursDisplay = document.querySelector('.hours')
  const minutesDisplay = document.querySelector('.minutes')
  const secondsDisplay = document.querySelector('.seconds')

  hoursDisplay.textContent = hours.toString().padStart(2, '0')
  minutesDisplay.textContent = minutes.toString().padStart(2, '0')
  secondsDisplay.textContent = seconds.toString().padStart(2, '0')
}

const hourMarkers = document.querySelectorAll('.marker')

hourMarkers.forEach((marker) => {
  const markerNumber = marker.getAttribute('data-marker')
  console.log(markerNumber)
  marker.style.setProperty('--rotation', `${markerNumber * (360 / 12)}deg`)
})
