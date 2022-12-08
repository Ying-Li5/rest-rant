const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">
                        {c.rant ? 'Rant! 😡' : 'Rave! 😊»'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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

                <div className=''>
                    <h3>Comments</h3>
                    {comments}
                </div>
            </div>
            
            <br />

            <div className="add-review">
                <form method="POST" action={`/places/${data.place.id}/comment?_method=POST`}>
                <h3>Leave Review</h3>
                    <div className="row">
                        <div className="add-ratings">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlText" className='contents'>Content</label>
                                <br />
                                <textarea 
                                class='form-control'
                                type="text"
                                name='content'
                                id='content' 
                                rows='3'
                                placeholder='Write your review....' />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="author">Author</label>
                                <input 
                                type="text" 
                                name="author" 
                                id="author" />
                            </div>

                            <div className="stars">
                                <label for="customRange3" class="form-label">Rating</label>
                                <input 
                                type="range" 
                                class="stars" 
                                name='stars'
                                min="0"
                                max="5"
                                step="0.5"
                                id="customRange3" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="rant">Rant? </label>
                                <input 
                                type="checkbox" 
                                name="rant" 
                                id="rant" />
                            </div>

                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
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