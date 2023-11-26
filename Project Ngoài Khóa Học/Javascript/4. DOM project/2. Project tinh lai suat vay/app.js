const handlePeriod = (period, dateString, month) => {
  if(month === 0) {
    const currentDate = new Date(dateString)
    period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  } else {
    const pre = new Date(dateString)
    let month = pre.getMonth() + 2,
      year = pre.getFullYear(),
      date = pre.getDate()
    if(month > 12) {
      month = 1
      year +=1
    }
    const currentDate = new Date(`${year}-${month}-${date}`)
    period.push(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
    )
  }
  return period[month]
}


document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  // Clear table
  document.querySelector('table tbody').innerHTML = ''

  // Gốc vay
  const loan = Number(document.getElementById('loan').value)
  // Thời hạn vay
  const months = Number(document.getElementById('months').value)
  // Lãi suất
  const rate = Number(document.getElementById('rate').value)
  // Ngày giải ngân
  const disbursementDate = document.getElementById('disbursementDate').value
  // Lãi phải trả
  const interest = Math.round((loan * months * rate) / 1200)
  // Tổng gốc và lãi phải trả
  const originalAndInterest = loan + interest

  document.getElementById('interest').value = interest.toLocaleString()
  document.getElementById('originalAndInterest').value = originalAndInterest.toLocaleString()
  const period = []
  for (let i = 0; i<= months; i++) {
    let html
    if(i === 0) {
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, disbursementDate, i)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `
    } else if(i === months) {
      // Gốc hằng tháng
      const originalPerMonth = loan - Math.round(loan / months)*(months - 1)
      // Lãi hàng tháng
      const interestPerMonth = interest - Math.round((loan * rate) / 1200)*(months - 1)
      // Gốc và lãi hằng tháng
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i-1], i)}</td>
        <td>${originalPerMonth.toLocaleString()}</td>
        <td>${interestPerMonth.toLocaleString()}</td>
        <td>${originalAndInterestPerMonth.toLocaleString()}</td>
        <td>0</td>
      `
    } else {
      // Gốc hằng tháng
      const originalPerMonth = Math.round(loan/ months)
      // Lãi hằng tháng
      const interestPerMonth = Math.round((loan * rate)/ 1200)
      // Gốc và lãi hằng tháng
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      // Gốc còn lại
      const remainingOriginal = loan - originalPerMonth*i
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i-1], i)}</td>
        <td>${originalPerMonth.toLocaleString()}</td>
        <td>${interestPerMonth.toLocaleString()}</td>
        <td>${originalAndInterestPerMonth.toLocaleString()}</td>
        <td>${remainingOriginal.toLocaleString()}</td>
      `
    }
    const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
  }

})