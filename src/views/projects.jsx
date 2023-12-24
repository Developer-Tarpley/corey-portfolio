import sodokuImg from '../stylesheets/img/sodokuapp.png'

const Projects = () => {
    return (
        <section className="projects landingSections">
            <h2>PROJECTS</h2>
            <hr/>
            <section className="projectSection">
                
                <div className="projectsDiv">
                    <div className='viewDiv'>
                        <button className='viewBtn'>view</button>
                        <button className='viewBtn' >src code</button>
                    </div>
                    <img alt="sodoku game " src={sodokuImg} />
                </div>
                <div className="projectsDiv">
                    <div className='viewDiv'>
                        <button className='viewBtn'>view</button>
                        <button className='viewBtn' >src code</button>
                    </div>
                    <img alt="sodoku game " src={sodokuImg} />
                </div>
                <div className="projectsDiv">
                    <div className='viewDiv'>
                        <button className='viewBtn'>view</button>
                        <button className='viewBtn' >src code</button>
                    </div>
                    <img alt="sodoku game " src={sodokuImg} />
                </div>
                <div className="projectsDiv">
                    <div className='viewDiv'>
                        <button className='viewBtn'>view</button>
                        <button className='viewBtn' >src code</button>
                    </div>
                    <img alt="sodoku game " src={sodokuImg} />
                </div>

            </section>
        </section>
    )
}

export default Projects