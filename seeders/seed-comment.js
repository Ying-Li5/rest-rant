const db = require('../models')

// TO USE AWAIT, WE NEED AN ASYNC FUNCTION
async function seed() {
    console.log('here')
    // GET THE PLACE, H-THAI-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // CREATE A FAKE SAMPLE COMMENT
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // ADD THAT COMMENT TO THE PLACE'S COMMENT ARRAY
    place.comments.push(comment.id)

    // SAVE THE PLACE NOW THAT IT HAS COMMENT
    await place.save()
    
    // EXIT THE PROGRAM
    process.exit()
}

seed()