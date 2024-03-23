const customer = {
  name: `Jack Frost`,
  birthYear: 1993,
  birthMonth: `February`,
  birthDay: 1,
  gender: `Male`,
  roomPreference: [`room #: 102`, ` early check in`, ` extra key`, ` late check out`, ` extra bed`],
  paymentMethod: `Credit`,
  mailingAddress: {
    address: `123 Prescot Street`,
    city: `St. John's`,
    province: `NL`,
    postalCode: `A1B5X7`,
    },
  phoneNumber: `709-723-9182`,
  checkIn: {
    year: 2024,
    month: 4,
    day: 2
  },
  checkOut: {
    year: 2024,
    month: 4,
    day: 7
  },


  getAge: function(){
    const today = new Date();
    return today.getFullYear() - this.birthYear;
  },

  getDurationOfStay: function(){
    var date1 = new Date(String(this.checkIn.month)+"/"+String(this.checkIn.day)+"/"+String(this.checkIn.year))
    var date2 = new Date(String(this.checkOut.month)+"/"+String(this.checkOut.day)+"/"+String(this.checkOut.year))
    var time_difference = date2.getTime() - date1.getTime();
    var days_difference = time_difference / (1000 * 60 * 60 * 24); 
    return days_difference;
  },

  getDescription: function(){
    return `Customer ${this.name}, birth day ${this.birthMonth} ${this.birthDay}, ${this.birthYear} - age ${this.getAge()} years old will be checking into The Motel from ${this.checkIn.month}/${this.checkIn.day}/${this.checkIn.year} - ${this.checkOut.month}/${this.checkOut.day}/${this.checkOut.year}, the duration of their stay will be ${this.getDurationOfStay()} days. The room details include in their reservation are - ${this.roomPreference}. The customer will be using ${this.paymentMethod} as method of payment.`
  }
}

let val;
val = customer.getDescription();
html = `<p> ${val} </p>`

console.log(val);
document.body.innerHTML = html;
