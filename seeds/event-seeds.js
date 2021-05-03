const { Event } = require('../models');

const eventData = [
    {
        petId: 67854,
        eventType: "Poop",
        time: "Date",
    },
    {
        petId: 12345,
        event: "Pee",
        time: "Date",
    },
    {
        petId: 78945,
        event: "Poop and Pee",
        time: "Date",
    },
    {
        petId: 78615,
        event: "Poop",
        time: "Date",
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;