import * as React from 'react';
import { EmailButton, PhoneButton } from './Buttons';

const ContactCard: React.FunctionComponent = () => {
  return (
    <div className="contact-card">
      <img
        src="B-SIEGEL-HEADER.JPG"
        style={{ height: '10vh' }}
      />
      <h3 style={{ margin: '10px' }}>Barbara Siegel</h3>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Realtor</p>
      <div>123 Fake Street</div>
      <div>Fake Town, NJ 07000</div>
      <div>(201) 280-7653</div>
      <div>barbaras5@aol.com</div>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginTop: '2.5vh' }}
      >
        <EmailButton /> <PhoneButton />
      </div>
    </div>
  );
};

export default ContactCard;
