"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Box, Button, TextField, InputAdornment, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";



const ContactForm = () => {
  const form = useRef();
  const [tech, setTech] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    setTech(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h47i3re",        // Replace with your Service ID
        "template_xv30v5t",       // Replace with your Template ID
        form.current,
        "wQKzlegMqt9a2-gNX"            // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          e.target.reset(); // Clear form after submission
          setTimeout(() => setIsSent(false), 5000); // Reset success message
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-3 sm:p-6">
      <h1
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold"
      >
        Let's Work Together!
      </h1>
      <p
        data-aos="fade-right"
        className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo!
      </p>

      <div className="cont mt-5" data-aos="fade-right">
        <Box sx={{ m: "auto" }}>
          <div className="cont-box">
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing={1}>
                <TextField
                  name="from_name"
                  sx={{ border: "2px solid white",input: { color: "white" }, }}
                  placeholder="First name"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  name="last_name"
                  sx={{ border: "2px solid white" ,input: { color: "white" },}}
                  placeholder="Last name"
                  type="text"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  name="email"
                  sx={{ border: "2px solid white",input: { color: "white" }, }}
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  Select Technology
                </InputLabel>
                <Select
                  name="technology"
                  sx={{ border: "2px solid white", color: "white",input: { color: "white" }, }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tech}
                  onChange={handleChange}
                >
                  <MenuItem value="React js">React js</MenuItem>
                  <MenuItem value="Next js">Next js</MenuItem>
                </Select>

                <TextField
                  name="message"
                  sx={{ border: "2px solid white",input: { color: "white" }, }}
                  placeholder="Write Message"
                  type="text"
                  variant="outlined"
                />

                <Box sx={{ textAlign: "center" }}>
                  <Button
                    id="s-btn"
                    type="submit"
                    variant="outlined"
                    color="success"
                    style={{
                      width: "150px",
                      backgroundColor: "#0c96ff",
                      color: "white",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
                {isSent && (
                  <p className="text-green-500 text-center mt-2">
                    Message sent successfully!
                  </p>
                )}
              </Stack>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ContactForm;
