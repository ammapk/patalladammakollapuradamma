import { SocialLinks } from './social-links'
import Logo2 from "../logo.svg";
export const Footer = (props) => {

  return (
    <div >
      <div id='footer' >
        <div className="col-6 mx-auto">
          <SocialLinks className="offset-3 mb-12 lg-12 d-flex lg:justify-start" />

          <div className='container-fluid text-center lg:justify-end'>
            <div>
              &copy; 2022 Anagha Agile Systems. Design by{' '}
              <a href='http://www.aas-ai.tech' rel='nofollow'>
                aas-ai.tech
              </a>
              <div className='row justify-content-center'>
                <div className="col-sm-12 col-md-9 col-lg-4 order-1 order-lg-2 order-sm-2 header-image lg-p-0 lg-m-0 sm-p-0 sm-m-0 md-p-0 md-m-0">
                  <img src={Logo2} alt="Home Img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
