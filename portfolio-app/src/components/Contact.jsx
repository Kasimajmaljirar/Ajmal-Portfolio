import React from 'react';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch("https://formsubmit.co/ajax/kasimajmaljirar17@gmail.com", {
        method: "POST",
        headers: { 
            'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  };
  return (
    <section id="contact" className="contact section fade-in">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Focused and committed to achieving quality outcomes in every task undertaken. Feel free to reach out for Data Analytics & Python Developer opportunities.</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          <div className="col-12" style={{ marginBottom: '30px' }}>
            <div className="info-wrap" style={{ padding: '30px', background: '#fff', boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.1)', borderRadius: '8px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              
              <div className="info-item d-flex" style={{ flex: '1 1 300px' }}>
                <div style={{ background: '#dff3fc', color: '#149ddd', width: '44px', height: '44px', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '5px', color: '#173b6c' }}>Address</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>Anna Nagar, Chennai</p>
                </div>
              </div>

              <div className="info-item d-flex" style={{ flex: '1 1 300px' }}>
                <div style={{ background: '#dff3fc', color: '#149ddd', width: '44px', height: '44px', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '5px', color: '#173b6c' }}>Phone Number</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>+91 9894468965</p>
                </div>
              </div>

              <div className="info-item d-flex" style={{ flex: '1 1 300px' }}>
                <div style={{ background: '#dff3fc', color: '#149ddd', width: '44px', height: '44px', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '5px', color: '#173b6c' }}>Email Address</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>kasimajmaljirar17@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <form style={{ padding: '30px', background: '#fff', boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.1)', borderRadius: '8px', height: '100%' }} onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="name-field" style={{ paddingBottom: '8px', display: 'block', color: 'var(--text-muted)' }}>Your Name</label>
                    <input type="text" name="name" id="name-field" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px' }} required placeholder="Enter your full name" />
                  </div>

                  <div style={{ flex: 1 }}>
                    <label htmlFor="email-field" style={{ paddingBottom: '8px', display: 'block', color: 'var(--text-muted)' }}>Your Email</label>
                    <input type="email" name="email" id="email-field" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px' }} required placeholder="Enter your email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject-field" style={{ paddingBottom: '8px', display: 'block', color: 'var(--text-muted)' }}>Subject</label>
                  <input type="text" name="_subject" id="subject-field" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px' }} required placeholder="Enter the subject" />
                </div>

                <div>
                  <label htmlFor="message-field" style={{ paddingBottom: '8px', display: 'block', color: 'var(--text-muted)' }}>Message</label>
                  <textarea name="message" id="message-field" rows="5" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', resize: 'vertical' }} required placeholder="Enter the message"></textarea>
                </div>

                <div className="text-center mt-3">
                  <button type="submit" style={{ background: 'var(--accent)', border: 0, padding: '12px 30px', color: '#fff', transition: '0.4s', borderRadius: '50px', cursor: 'pointer', fontSize: '16px', fontWeight: 500 }}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
