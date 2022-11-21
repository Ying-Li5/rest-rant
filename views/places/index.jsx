const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col'>
                <h2>{place.name}</h2>
                <p className="text-thai">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} className="image-placeholder"/>
                <p className="text-coffee">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant/Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index