import { SocialLinks } from './social-links'
import Logo2 from "../logo.svg";
export const Footer = (props) => {

  return (
    <div >
      <div id='footer' >
        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="d-flex align-items-center justify-content-center text-center"> <SocialLinks /></div>

          <div className='container-fluid text-center lg:justify-end md:justify-end sm:justify-end'>
            <div>
              &copy; 2022 Anagha Agile Systems. Design by{' '}
              <a href='http://www.aas-ai.tech' rel='nofollow'>
                aas-ai.tech
              </a>
              <div className='row'>
                <div className=" d-flex align-items-center justify-content-center text-center" >
                  <img src={Logo2} alt="Home Img" className='ftrlogoheight'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
