const Ticket = require('../models/Ticket')

class MyDB{
    constructor(){
        this.tickets = []
    }
/**
 * create and save a new ticket
 * @param {string} username 
 * @param {number} price 
 * @returns {Ticket} return a ticket object
 */
    // Create new ticket
    create(username, price){
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket 
    }


    /**
     * create multiple ticket for a single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
    // sell multiple ticket
    bulkCreate(username, price, quantity){
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket)
        }
        return result
    }


    /**
     * return all available tickets
     */

    // return all tickets
    find(){
        return this.tickets;
    }



    /**
     * find all tickets for a given user 
     * @param {string} username 
     * @returns {Array<Ticket></Ticket>}
     */
    findByUsername(username){
        const ticket = this.tickets.filter(
            /**
             * @param {Ticket} ticket
             */
            ticket => ticket.username === username
        )
        return ticket
    }


    /**
     * find ticket by ticker id
     * @param {string} ticketId 
     * @returns {Ticket} 
     */
    // single ticket
    findById(ticketId){
        const ticket = this.tickets.find(
            /**
             * 
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.id === ticketId
        );

        return ticket
    }



    /**
     * 
     * @param {string} ticketId 
     * @param {{username:string, price: number}} ticketBody 
     * @return {Ticket}
     */
    // update ticket info
    updateById(ticketId, ticketBody){
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()

        return ticket
    }


    /**
     * @param {string} ticket
     * 
     */

    // Delete ticket form db
    deleteById(ticketId){
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)

        if(index !== -1){
            this.tickets.splice(index, 1)
            return true
        } else {
            return false;
        }
    }


    /**
     * find winners 
     * @param {number} winnerCount 
     * @return {Array<Ticket>}
     */

    // draw
    draw(winnerCount){
        let winnerIndexes = new Array(winnerCount)
        
        let index = 0;
        while(index < winnerCount){
            let winnerIndex = Math.floor(Math.random() * this.tickets.length)
            console.log("Winner index ", winnerIndex)
            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex;
                continue;
            }
        }


        // for (let i = 0; i < indexes.length; i++) {
        //     let index = Math.floor(Math.random() * this.tickets.length)
        //     indexes[i] = index
        // }

        const winners = winnerIndexes.map(index => this.tickets[index]);
        return winners;
    }

}

const myDB = new MyDB();
module.exports = myDB



