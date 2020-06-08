import React from 'react';

const Jumbotron = () => {
	return(
	  <div className="top-wrapper">
      <div className="container">
        <h1>BELAJAR CODING.</h1>
        <h1>BELAJAR MENJADI LEBIH KREATIF.</h1>
        <h2>Kunjungi Akun Sosmed Ku</h2>
        <div className="btn-wrapper">
          <a href="https://mail.google.com/" className="btn signup">
           <img src='iconfinder_gmail_1220367.png' /></a>
          <p>atau</p>
          <a href="https://www.facebook.com/muhammad.al.1213/" className="btn facebook">
            <span className= "fa fa-facebook"> <img src='iconfinder_social_style_3_facebook_341099.png' /></span>
          </a>
          <a href="https://twitter.com/login" className="btn twitter">
            <span className= "fa fa-twitter">
             <img src='iconfinder_1_Twitter3_colored_svg_5296516.png' />
            </span>
          </a>
        </div>
      </div>
    </div>
	)

}
export default Jumbotron;
 