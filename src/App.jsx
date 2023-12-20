import LANDING_SECTION from './views/landingSection'
// import parallax_pic from './stylesheets/img/images.jpeg'

const App = (props) => {
  return (
    <>
      <div className="appStyle">
      {/* parallax'em */}

    <LANDING_SECTION/>

      <div className='parallax '>
        {/* <div className='round-logo' >
      <img width={300}height={400} src={parallax_pic} alt=''/> 
          </div>  */}
          
      </div>
      {/* <div className='parallax '> 
      <img width={300}height={400} src={parallax_pic} alt=''/> 
      </div> */}
      <div className='appStyle2'>  </div>
      <div className='parallax'>  </div>
      <div className='appStyle2'>  </div>
      <div className='parallax'>  </div>

    </div>
    </>
  
  );
}

export default App;
