// src/QrCodeGenerator.js
import React, { useState } from 'react';
import { db } from './firebase'; // Assuming your firebase config is set up in firebase.js
import { collection, addDoc } from 'firebase/firestore';
import { QRCodeCanvas } from 'qrcode.react';

const QrCodeGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    website: '',
  });
  const [qrValue, setQrValue] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate QR code value and store data in Firestore
  const generateQrCode = async (e) => {
    e.preventDefault();
    const qrData = `Name: ${formData.name}, Contact: ${formData.contact}, Email: ${formData.email}, Company: ${formData.company}, Website: ${formData.website}`;
    setQrValue(qrData);

    // Optionally save the data in Firestore
    try {
      await addDoc(collection(db, 'vCards'), formData);
      alert('vCard information saved successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="qr-generator">
      <h2>QR Code Generator</h2>
      <form onSubmit={generateQrCode}>
        {/* Your form inputs */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Add other inputs */}
        <button type="submit">Generate QR Code</button>
      </form>

      {qrValue && (
        <div className="qr-display">
          {/* Use QRCodeCanvas for rendering the QR code */}
          <QRCodeCanvas value={qrValue} size={256} />
          <p>Scan the QR code to view the vCard details.</p>
        </div>
      )}
    </div>
  );
}

export default QrCodeGenerator;
