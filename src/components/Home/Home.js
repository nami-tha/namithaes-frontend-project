import React,{useState} from 'react'
import './Home.css'

function Home() {
    const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="home">
       <p className='heading'>We create award<br/>winning websites</p>
      <div className='home-container'>
     
      <div className='home-side-div'>
      <p>
        Based in San Francisco, we're a digital<br/>
        products design & development studio<br/>
        that's passionate about creating highly<br/>
        applicable digital experiences.<br/>
        {showMore && (
          <span className="additional-content">
            We specialize in building custom web <br/> 
            applications and mobile apps that are<br/>
            not only visually stunning but also<br/> 
            user-friendly and efficient.Our team of<br/>
            experienced developers and designers works<br/>
            closely with clients to understand their<br/> 
            unique needs and deliver tailored solutions.
          </span>
        )}
      </p>
      <button className='explore-btn' onClick={handleButtonClick}>Explore</button>
      <ul className='side-ul'>
        <li>Who are we?</li>
      </ul>
      <div className='side-inner-div'>
      </div>
      </div>
      <div className='home-center-div'>
        <div className='div1'></div>
        <div className='div2'></div>
        <p className='center-div-content'>
          We create mind-blowing visuals, brands,<br/> websites and products that help startups<br/>and innovative companies gaine more exposure.
        </p>
        <button>Learn more</button>
      </div>
    </div>
    </div>
  )
}

export default Home
