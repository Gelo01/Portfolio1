import SocialIcons from './SocialIcons'
import VisitCounter from './VisitCounter'

export default function Footer({ name, year, social, email }) {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container-fluid">
        <div className="container">
          <div className="footer-info">
            <h2>{name}</h2>
            <h3>Software Engineer</h3>
            <div className="footer-menu">
              <p>{email}</p>
            </div>
            <div className="footer-social-custom">
              <SocialIcons links={social} />
            </div>
            <VisitCounter />
          </div>
        </div>
        <div className="container copyright">
          <p>
            &copy; {year} {name}, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
