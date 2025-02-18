import React from 'react';
import '../CSS/Offer.css';
import { Link } from 'react-router-dom';

const Offer = () => {
  const offers = [
    { title: 'livres math', description: 'Lorem ipsum...', price: '5 000', type: 'sell' },
    { title: 'livres math', description: 'Lorem ipsum...', price: '', type: 'exchange' },
    { title: 'livres math', description: 'Lorem ipsum...', price: '', type: 'donation' }
  ];

  return (
    <>
    <div className="app-containerrs">
      <div className="main1-content">
        <h4 style={{fontWeight:"600",color:'black' , padding:'2px'}}>Mes Offers :</h4>                           
        <button className="new1-offer-button">Partager une nouvelle offre</button>
        <div className="offer-list">
            <div className='cardd2'>
                <img src="/ranger-ses-livres_900.jpg" style={{height:"35px", width:'35px',borderRadius:" 80px",margin:'0px 20px'}}></img>
                <h4 style={{fontWeight:"800",color:'black' , padding:'2px'}}>Livres 3eme années</h4>                           
            </div>
          <div className="offers">
            {offers.map((offer, index) => (
              <div key={index} className="offer-card">
                <div className="offer-image">
                  <img src="/livres.jpg" alt="Books" style={{borderRadius:'12px'}} />
                </div>
                <br/>
                <div className="offer-details">
                <span style={{backgroundColor:"#F3BCA6",padding:"5px",borderRadius:'15px' , color:'#FF6666'}}>Etudiant</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  {offer.type === 'sell' && <p className="price">{offer.price} DT</p>}
                  {offer.type === 'exchange' && <p className="exchange">Échange</p>}
                  {offer.type === 'donation' && <p className="donation">Don</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="other-offer">
        <div className='cardd2'>
                <img src="/ranger-ses-livres_900.jpg" style={{height:"35px", width:'35px',borderRadius:" 80px",margin:'0px 20px'}}></img>
                <h4 style={{fontWeight:"800",color:'black' , padding:'2px'}}>Garderie scolaire</h4>                           
            </div>
          <div className="garderie">
            <div className="garderie-details">
              <p >Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
              <Link to={"/Consulter"} type="submit" className="consult1-button">Consulter </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
      <div className="sponsored-header">Sponsorisé :</div>
      <div className="sponsored-card">
            <div className="sponsored-content">
                <div className="image-container">
                    <img src="logo2.png"  className="imageees" />
                </div>
                <div className="text-content">
                    <h2 className="title">librairie</h2>
                    <span className="badge">Détaillant</span>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and .</p>
                </div>
                <div className="arrow-container">
                    <div className="arrow">&#10230;</div>
                </div>
            </div>
        </div>
        <br/>
        <div className="sponsored-card">
            <div className="sponsored-content">
                <div className="image-container">
                    <img src="logo2.png"  className="imageees" />
                </div>
                <div className="text-content">
                    <h2 className="title">librairie</h2>
                    <span className="badge">Détaillant</span>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and .</p>
                </div>
                <div className="arrow-container">
                    <div className="arrow">&#10230;</div>
                </div>
            </div>
        </div>
        <div className="news">
        <h4 style={{fontWeight:"800",color:'black' , padding:'2px'}}>Nouveautés :</h4>                           

          <ul>
            <li><a href="#!">Acheter des libres neuf</a></li>
            <li><a href="#!">Article two</a></li>
            <li><a href="#!">Article three</a></li>
            <li><a href="#!">Article Four</a></li>

          </ul>
        </div>
      </div>
    </div>
    <div className="foteer">
        <hr style={{color:'#00B4CC'}}></hr>
        <div className="nav-footer">
                    <span className="footer-spa">ACCUEIL</span>
                    <span className="footer-spa">SHOP</span>
                    <span className="footer-spa">COMMUNITE</span>
                    <span className="footer-spa">PACK PROMO  </span>
                    <span className="footer-spa">FOIRES</span>
                    <span className="footer-spa">PROFIL</span>
                    <span className="footer-spa">CONTACT</span>
        </div>            
        <hr style={{color:'#00B4CC'}}></hr>
    </div>
    </>
  );
};

export default Offer;
