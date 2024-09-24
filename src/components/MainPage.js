// src/MainPage.js
import React, { useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import Header from './Header';
import FormSection from './FormSection';
import QRCodePreview from './QRCodePreview';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const MainPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    phone: '',
    email: '',
    company: '',
    jobTitle: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    website: '',
    fax: '',
  });

  const [qrValue, setQrValue] = useState('');
  const [frame, setFrame] = useState(''); // Frame customization state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateQrCode = async (e) => {
    e.preventDefault();
    const qrData = `Name: ${formData.firstName} ${formData.lastName}, Contact: ${formData.mobile}, Email: ${formData.email}, Company: ${formData.company}, Website: ${formData.website}`;
    setQrValue(qrData);

    try {
      await addDoc(collection(db, 'vCards'), formData);
      alert('vCard information saved successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <FormSection
              formData={formData}
              handleChange={handleChange}
              generateQrCode={generateQrCode}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <QRCodePreview qrValue={qrValue} frame={frame} setFrame={setFrame} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;
