const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = ''
  if (data.message) {
      message = (
          <h4 className="alert-danger">
              {data.message}
          </h4>
      )
  }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <div className="new-place">
              <form method='POST' action="/places">
                <div className='form-group col-'>
                  <label htmlFor='name'>Place Name</label>
                  <input className='form-control' id='name' name='name' required />
                </div>

                <div className='form-group col-sm-6 col-md-4 col-lg-3'>
                  <label htmlFor="pic">Place Picture</label>
                  <input className='form-control' type="url" name="pic" id="pic" />
                </div>

                <div className='form-group col-sm-6 col-md-4 col-lg-3'>
                  <label htmlFor="city">City</label>
                  <input className='form-control' name="city" id="city" />
                </div>

                <div className='form-group col-sm-6 col-md-4 col-lg-3'>
                  <label htmlFor="state">State</label>
                  <input className='form-control' name="state" id="state" />
                </div>

                <div className='form-group col-sm-6 col-md-4 col-lg-3'>
                  <label htmlFor="cuisines">Cuisines</label>
                  <input className='form-control' name="cuisines" id="cuisines" required />
                </div>

                <div className='form-group col-sm-6 col-md-4 col-lg-3'>
                  <label for="founded">Founded Year</label>
                  <input 
                    type="number"
                    className="form-control" 
                    id="founded" 
                    name="founded"
                    value={new Date().getFullYear()} />
                </div>

                <div>
                  <input className='btn btn-primary' type="submit" value="Add Place" />
                </div>
              </form>  
            </div>
          </main>
        </Def>
    )
}

module.exports = new_form