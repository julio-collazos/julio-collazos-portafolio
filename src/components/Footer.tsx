import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/julio-collazos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/julio-collazos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio of data analysis and geospatial services, created by <a href="https://www.linkedin.com/in/julio-collazos/" target="_blank" rel="noreferrer">Julio Collazos</a> to transform data into solutions 💜</p>
    </footer>
  );
}

export default Footer;