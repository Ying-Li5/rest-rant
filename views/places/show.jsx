const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6 ">
                    <h1>{ data.place.name }</h1>
                    <img src={data.place.pic} alt={data.place.name} className="image-placeholder" />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                
                <div className='col-sm-6'>
                    <h3>Rating</h3>
                    <p>Not Rated</p>
                </div>

                <div className='col-sm-6'>
                    <h2>Description</h2>
                    <h3> {data.place.showEstablished()} </h3>
                    <h4> Serving {data.place.cuisines} </h4>
                </div>

                <div className='col-sm-6'>
                    <h3>Comments</h3>
                    <p>No comments yet!</p>
                </div>
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