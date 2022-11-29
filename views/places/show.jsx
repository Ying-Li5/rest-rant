const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} className="image-placeholder" />
            <div>
                <h3>Rating</h3>
                <p>Not Rated</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            </div>
            <div>
                <h3>Comments</h3>
                <p>No comments yet!</p>
            </div>
          </main>

          <footer>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
          </footer>

        </Def>
    )
}

module.exports = show