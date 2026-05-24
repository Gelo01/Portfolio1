export default function BackToTop() {
  return (
    <a
      href="#home"
      className="btn back-to-top"
      style={{ display: 'none' }}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <i className="fa fa-chevron-up" />
    </a>
  )
}
