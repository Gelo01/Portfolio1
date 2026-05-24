import { useState } from 'react'
import { sendContact } from '../api/client'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact({ intro }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })
    setErrors({})

    try {
      const data = await sendContact(form)
      setStatus({ type: 'success', message: data.message })
      setForm(initialForm)
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {})
        setStatus({ type: 'danger', message: 'Please fix the errors below.' })
      } else {
        setStatus({ type: 'danger', message: 'Could not send message. Is the API running?' })
      }
    } finally {
      setSubmitting(false)
    }
  }

  const fieldError = (name) => errors[name]?.[0]

  return (
    <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <div className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 d-none d-md-block" />
            <div className="col-md-8">
              <div className="contact-form">
                <h4 className="text-white mb-4">{intro}</h4>
                {status.message && (
                  <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} mb-3`} role="alert">
                    {status.message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      name="name"
                      className={`form-control${fieldError('name') ? ' is-invalid' : ''}`}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    {fieldError('name') && <div className="invalid-feedback d-block">{fieldError('name')}</div>}
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="email"
                      name="email"
                      className={`form-control${fieldError('email') ? ' is-invalid' : ''}`}
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    {fieldError('email') && <div className="invalid-feedback d-block">{fieldError('email')}</div>}
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="control-group mb-3">
                    <textarea
                      name="message"
                      className={`form-control${fieldError('message') ? ' is-invalid' : ''}`}
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                    {fieldError('message') && <div className="invalid-feedback d-block">{fieldError('message')}</div>}
                  </div>
                  <div>
                    <button type="submit" className="btn" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
