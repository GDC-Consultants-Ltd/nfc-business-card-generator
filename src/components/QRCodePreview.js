import React, { useState } from "react";
import { Box, Typography, Paper, Button, Grid, Collapse } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { Download, ExpandMore } from "@mui/icons-material";
import Frame1 from "../assets/images/frame1.png";
import Frame2 from "../assets/images/frame2.png";
import Frame3 from "../assets/images/frame3.png";
import CloseIcon from "@mui/icons-material/Close";
import { ChromePicker } from "react-color"; // Import ChromePicker from react-color

const QRCodePreview = ({ qrValue }) => {
  const [frame, setFrame] = useState("default");
  const [shape, setShape] = useState("default");
  const [logo, setLogo] = useState("default");
  const [frameOpen, setFrameOpen] = useState(false);
  const [shapeOpen, setShapeOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [qrColor, setQrColor] = useState("#000000"); // State for QR code color

  const getFrameImage = () => {
    switch (frame) {
      case "frame1":
        return Frame1;
      case "frame2":
        return Frame2;
      case "frame3":
        return Frame3;
      default:
        return null;
    }
  };

  // Handle color change from color picker
  const handleColorChange = (color) => {
    setQrColor(color.hex);
  };

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: "10px",
        textAlign: "center",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* QR Code Display with Frame */}
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          width: "220px",
          height: "220px",
          overflow: "hidden",
        }}
      >
        {frame !== "default" && (
          <img
            src={getFrameImage()}
            alt="QR Frame"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              width: "110%",
              height: "110%",
              zIndex: 1,
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {qrValue ? (
            <QRCodeCanvas
              value={qrValue}
              size={110}
              fgColor={qrColor} // Apply selected color to QR code
            />
          ) : (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              QR code will appear here
            </Typography>
          )}
        </Box>
      </Box>

      {/* Frame Selection Dropdown */}
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => setFrameOpen(!frameOpen)}
          endIcon={<ExpandMore />}
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#f3f3f3",
            color: "black",
            borderRadius: "5px",
            mb: 1,
          }}
        >
          FRAME
        </Button>
        <Collapse in={frameOpen}>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={3}>
              <Button
                onClick={() => setFrame("default")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    frame === "default"
                      ? "2px solid #0077c8"
                      : "1px solid #ccc",
                  backgroundColor: frame === "default" ? "#e3f2fd" : "white",
                  borderRadius: "5px",
                }}
              >
                <CloseIcon sx={{ fontSize: 75, color: "gray" }} />
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => setFrame("frame1")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    frame === "frame1" ? "2px solid #0077c8" : "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <img src={Frame1} alt="Frame 1" style={{ width: "100%" }} />
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => setFrame("frame2")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    frame === "frame2" ? "2px solid #0077c8" : "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <img src={Frame2} alt="Frame 2" style={{ width: "100%" }} />
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => setFrame("frame3")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    frame === "frame3" ? "2px solid #0077c8" : "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <img src={Frame3} alt="Frame 3" style={{ width: "100%" }} />
              </Button>
            </Grid>
          </Grid>
        </Collapse>
      </Box>

      {/* Shape & Color Dropdown */}
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => setShapeOpen(!shapeOpen)}
          endIcon={<ExpandMore />}
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#f3f3f3",
            color: "#333",
            borderRadius: "5px",
            mb: 1,
          }}
        >
          SHAPE & COLOR
        </Button>
        <Collapse in={shapeOpen}>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={3}>
              <Button
                onClick={() => setShape("shape1")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    shape === "shape1" ? "2px solid #0077c8" : "1px solid #ccc",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/path/to/shape1.png"
                  alt="Shape 1"
                  style={{ width: "100%" }}
                />
              </Button>
            </Grid>
          </Grid>
          {/* Color Picker for QR Code */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <ChromePicker color={qrColor} onChangeComplete={handleColorChange} />
          </Box>
        </Collapse>
      </Box>

      {/* Logo Dropdown */}
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => setLogoOpen(!logoOpen)}
          endIcon={<ExpandMore />}
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#f3f3f3",
            color: "#333",
            borderRadius: "5px",
          }}
        >
          LOGO
        </Button>
        <Collapse in={logoOpen}>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={3}>
              <Button
                onClick={() => setLogo("logo1")}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  border:
                    logo === "logo1" ? "2px solid #0077c8" : "1px solid #ccc",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/path/to/logo1.png"
                  alt="Logo 1"
                  style={{ width: "100%" }}
                />
              </Button>
            </Grid>
            <Typography
              variant="caption"
              sx={{ mt: 1, cursor: "pointer", color: "#0077c8" }}
            >
              Upload your own
            </Typography>
          </Grid>
        </Collapse>
      </Box>

      {/* Download and Print Quality Buttons */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: "#8bc34a",
            ":hover": { backgroundColor: "#7cb342" },
            px: 2,
            fontSize: "0.8rem",
          }}
        >
          Download JPG
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: "#00c853",
            ":hover": { backgroundColor: "#00a844" },
            px: 2,
            fontSize: "0.8rem",
          }}
        >
          Print Quality SVG/EPS
        </Button>
      </Box>
    </Paper>
  );
};

export default QRCodePreview;
