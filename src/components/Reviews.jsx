import '../styles/reviews.css';
import {AiFillStar} from 'react-icons/ai'

const Reviews = () => {
    return (
        <section className="reviews-section">
            <h3>Listen to what our <br/>customers have to say</h3>
            <div className="reviews-container">
                <div className="review-box">
                    <div className="stars">
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                    </div>
                    <p>They are brilliant when it comes to do construction job with ease</p>
                    <div className="review-auth-date">
                        <p>John Okweere</p>
                        <p>2023-01-19</p>
                    </div>
                </div>
                <div className="review-box">
                    <div className="stars">
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                    </div>
                    <p>Great service</p>
                    <div className="review-auth-date">
                        <p>Lauren Dobbs</p>
                        <p>2023-01-25</p>
                    </div>
                </div>
                <div className="review-box">
                    <div className="stars">
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                        <AiFillStar className='star-icon' />
                    </div>
                    <p>Hired BHS Structures to repair rotted staircase, exterior siding and some miscellaneous items. Work was very high quality and price was reasonable. Also very responsive and professional. These guys know what they are doing and I would give them six stars if I could.</p>
                    <div className="review-auth-date">
                    <p>Patrick P</p>

            </div>
                    <p>2023-01-15</p>
                </div>
            </div>
            
        </section>
    );
}

export default Reviews;
