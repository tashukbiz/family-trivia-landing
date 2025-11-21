'use client';

export default function SignupForm() {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('show');
    }
  };

  const handleSubmit = () => {
    setTimeout(() => {
      document.querySelector('.signup-form')?.classList.remove('show');
    }, 500);
  };

  return (
    <div className="signup-form" onClick={handleOutsideClick}>
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <style type="text/css">{`
          #mc_embed_signup {
            background: #fff;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
          }
        `}</style>
        <div id="mc_embed_signup">
          <form
            action="https://github.us14.list-manage.com/subscribe/post?u=d40cc9cab694cb16969088077&amp;id=8a94ea6022&amp;f_id=002db6e5f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            onSubmit={handleSubmit}
          >
            <div id="mc_embed_signup_scroll" className="p-3">
              <h2>We&apos;re still building. Join the waitlist and be among the first users.</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_d40cc9cab694cb16969088077_8a94ea6022" tabIndex={-1} />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Confirm" />
                  <p style={{ margin: '0px auto' }}>
                    <a href="http://eepurl.com/jsvEfA" title="Mailchimp - email marketing made easy and fun">
                      <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      </div>
    </div>
  );
}
