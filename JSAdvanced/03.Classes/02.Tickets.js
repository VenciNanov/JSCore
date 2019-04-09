    function solve(inputArr, sortCriteria) {
        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination,
                    this.price = price,
                    this.status = status
            }
        }

        let tickets = [];

        Array.from(inputArr).forEach(x => {
            let split = x.split('|');

            let destination = split[0];
            let price = parseFloat(split[1]);
            let status = split[2];

            let ticket = new Ticket(destination, price, status);
            tickets.push(ticket);
        });
        function sortTickets(criteria,tickets){
            let tempTickets = tickets.slice(0);
            tempTickets=Array.from(tempTickets).sort((a,b)=>compareByProperties(a[sortCriteria],b[criteria]))

            return tempTickets;
        }
        function compareByProperties(a,b){
            if(a>b){
                return 1;
            }else if(a==b){
                return 0 ;
            }else {
                return -1;
            }
        }

        tickets= sortTickets(sortCriteria,tickets);

        return tickets;
    }