// src/FormSection.js
import React from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  Box
} from "@mui/material";
import { Refresh } from "@mui/icons-material";

const FormSection = ({ formData, handleChange, generateQrCode }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        border: "1px solid #ddd",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        vCard QR Code
      </Typography>
      <form onSubmit={generateQrCode}>
        <Grid container spacing={2}>
          {/* Your Name */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>
                Your Name:
              </Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>
                Contact:
              </Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="Fax"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>Email:</Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="your@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>
                Company:
              </Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="Your Job"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Street */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>Street:</Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="Street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* City */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>City:</Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="ZIP"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* State */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>State:</Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
                <TextField
                  variant="outlined"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>

          {/* Website */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography sx={{ flex: 1, fontWeight: 500 }}>
                Website:
              </Typography>
              <Box sx={{ flex: 2, display: "flex", gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="www.your-website.com"
                name="website"
                value={formData.website}
                onChange={handleChange}
                fullWidth
              />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Button
            type="submit"
            variant="contained"
            color="success"
            startIcon={<Refresh />}
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              backgroundColor: "#4caf50",
              ":hover": { backgroundColor: "#388e3c" },
              px: 4,
            }}
          >
            Generate QR Code
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default FormSection;
