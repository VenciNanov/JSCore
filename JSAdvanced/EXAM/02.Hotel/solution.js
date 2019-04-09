class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.rooms = {
            'single': (+capacity * 0.50),
            'double': +capacity * 0.30,
            'maisonette': +capacity * 0.20
        }

        return this
    }

    get roomsPricing() {
        let pricings = {
            single: 50,
            double: 90,
            maisonette: 135
        }
        return pricings
    }

    get servicesPricing() {
        let pricing = {
            food: 10,
            drink: 15,
            housekeeping: 25,
        }

        return pricing
    }


    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] > 1) {

            let bookingNumber = this.currentBookingNumber;
            let booking = {
                bookingNumber,
                clientName,
                roomType,
                nights,
            }
            this.bookings.push(booking);
            this.currentBookingNumber++;
            this.rooms[roomType]--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;
        } else {
            let result = `No ${roomType} rooms available!`

            let a = Object.keys(this.rooms).filter(x => this.rooms[x] > 1).forEach(x => {
                result += `\n Available ${x} rooms: ${x}`;
            })
            return result;
        }

    }

    roomService(currentBookingNumber, serviceType) {
        if (currentBookingNumber < this.currentBookingNumber) {
            let booking = this.bookings.find(x => {
                return x.bookingNumber === currentBookingNumber
            });
            if (serviceType == 'housekeeping' || serviceType == 'drink' || serviceType == 'food') {
                if (booking.services == undefined) {
                    booking.services = [];
                }
                booking.services.push(serviceType)

                return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
            }

            return `We do not offer ${serviceType} service.`



        }
        else {
            return `The booking ${currentBookingNumber} is invalid.`
        }



    }

    checkOut(currentBookingNumber) {
        if (currentBookingNumber < this.currentBookingNumber) {
            let booking = this.bookings.find(x => {
                return x.bookingNumber === currentBookingNumber
            });
            let clientName = booking.clientName;
            let totalMoney = 0;
            let serviceMoney = 0
            let roomPrice = this.roomsPricing[booking.roomType] * booking.nights;
            debugger
            totalMoney += roomPrice
            this.rooms[booking.roomType]++;
            if (booking.services != undefined) {

                Array.from(booking.services).forEach(item => {
                    serviceMoney += this.servicesPricing[item];
                })

                totalMoney += serviceMoney;
                return `We hope you enjoyed your time here, Mr./Mrs. ${clientName}. The total amount of money you have to pay is ${totalMoney} BGN. You have used additional room services, costing ${serviceMoney} BGN`
            }

            return `We hope you enjoyed your time here, Mr./Mrs. ${clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`

        } else {
            return `The booking ${currentBookingNumber} is invalid.`
        }
    }

    report() {

        let result = `${this.name.toUpperCase()} DATABASE:\n`;
        result += `--------------------\n`;
        if (this.currentBookingNumber != 1) {
            var counter = 0
            Array.from(this.bookings).forEach(booking => {
                result += `bookingNumber - ${booking.bookingNumber}\n`;
                result += `clientName - ${booking.clientName}\n`;
                result += `roomType - ${booking.roomType}\n`;
                result += `nights - ${booking.nights}\n`;
                if (booking.services != null) {
                    result += `services: ${booking.services.join(', ')}`
                    if (counter < this.bookings.length - 1) { 
                        result += `\n`
                    }
                    
                }
                if (counter < this.bookings.length - 1) {
                    result += `----------\n`;
                }
                counter++



            })
        }


        return result
    }
}
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());
