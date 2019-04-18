class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.rooms = {
            single: Math.floor(+this.capacity / 2),
            double: Math.floor(+this.capacity * 0.3),
            maisonette: Math.floor(+this.capacity * 0.2)
        }
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135,
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.hasRoom(roomType)) {
            let booking = {
                clientName: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber
            };

            this.rooms[roomType] -= 1;

            this.bookings.push(booking);
            this.currentBookingNumber += 1;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;

        } else {
            let msg = `No ${roomType} rooms available!`
            for (const room in this.rooms) {
                if (this.rooms.hasOwnProperty(room)) {
                    if (this.hasRoom(room)) {
                        msg += ` Available ${room} rooms: ${this.rooms[room]}.`;
                    }
                }
            }
            return msg;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        let booking = this.bookings.find(x => x.roomNumber === currentBookingNumber);

        if (!booking) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        if (!booking.hasOwnProperty('services')) {
            booking['services'] = [];
        }

        booking['services'].push(serviceType);

        return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;

    }

    checkOut(currentBookingNumber) {
        let booking = this.bookings.find(x => x.roomNumber === currentBookingNumber);

        if (!booking) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        this.rooms[booking.roomType] += 1;

        let totalMoney = +booking.nights * +this.roomsPricing[booking.roomType];
        let result;
        if (!booking.hasOwnProperty('services')) {
            result = `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        } else {
            let totalServiceMoney = 0;
            for (const service of booking.services) {
                totalService += this.servicesPricing[service];
            }

            result = `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
        }

        var index = this.bookings.bookings.findIndex(function (x) {
            return x.roomNumber === booking.roomNumber;
        });

        if (index !== -1) this.bookings.splice(index, 1);

        return result
    }

    report() {
        if (this.bookings.length === 0) {
            return `${this.name.toUpperCase()} DATABASE:\n--------------------\nThere are currently no bookings.`;
        } else {

            let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
            let bookingsArray = [];
            // let services = booking.services.join(', ');
            for (const booking of this.bookings) {
                bookingsArray.push(`bookingNumber - ${booking.roomNumber}\nclientName - ${booking.clientName}\nroomType - ${booking.roomType}\nnights - ${booking.nights}${booking.hasOwnProperty('services') ? '\nservices: ' + booking.services.join(', ') : ''}`);
            }

            result += bookingsArray.join('\n----------\n');
            return result.trim();
        }
    }


    hasRoom(roomType) {
        return this.rooms[roomType] > 0;
    }
}