import "./bio.css";

import { Assets } from "../../assets/assets";

const { Frame3 } = Assets;

function BioLayout() {
  return (
      <section className="biographie">
          <section className="photo">

          </section>
          <section className="bio">
            <h1 className="biofont">Bio</h1>
            <div className="bio__des">
                <figcaption>
                <div className="swipe-pictures">
              <img src={Frame3} alt="" />
              {/* Add more images as needed */}
            </div>

                </figcaption>
                <p>Albert Paul Moifula is a Sierra Leone Gospel Recording Artist, Instrumentalist, Producer, Author, and Speaker, who goes by the stage name "Moi Albert.” As a craftsman, he brings a different wave of sound by primarily blending different genres to showcase his style of Music. Moi Albert channels his energy through Impact driven solutions and Servant Leadership.</p>
            </div>
          </section>

      </section>
  )
}

export default BioLayout;