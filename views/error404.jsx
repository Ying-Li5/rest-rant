const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOUT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404.jpg" alt="404 image"/>
                    <div>
                        Photo by <a href="AUTHOR_LINK">Google</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404