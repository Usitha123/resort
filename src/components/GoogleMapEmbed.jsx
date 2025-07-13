// GoogleMapEmbed.jsx
import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-[400px] bg-[#4A4630]">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.852620374355!2d80.75966992485743!3d8.05388586520853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc9f62fffffff9%3A0x6e27753e03301850!2sKings%20Lodge%20Habarana!5e0!3m2!1sen!2slk!4v1751086115921!5m2!1sen!2slk"
        width="700px"
        height="350px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg border"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
