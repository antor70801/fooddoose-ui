import React from 'react';
import './Contact.css'
import header from "../../images/header_Image.16d8d24.png";

const ContactUs = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div class="container main-container" data-v-261aa034="" data-v-419d9ece=""><div class="image-container" data-v-261aa034="">
        <img src={header} alt="imag" data-v-261aa034="" />
        <div class="text" data-v-261aa034=""><h1 class="head-text" data-v-261aa034="">
          CONTACT US
        </h1> <p class="secondary-text" data-v-261aa034="">
            Hello, is it me you’re looking for?
          </p>
        </div>
      </div>
      </div>

      <div class="container main" data-v-419d9ece="">
        <p data-v-419d9ece="">Please carefully read the terms and conditions set out below before ordering any food or services from this website. Because if you do so you agree to be bound by these terms and conditions.</p>
        <div class="address" data-v-419d9ece=""><p class="head-text" data-v-419d9ece="">
          Head Office
        </p> <p data-v-419d9ece="">Hungrynaki HQ</p> <p data-v-419d9ece="">Asfia Tower, House 76, Block E, Road 11,</p> <p data-v-419d9ece="">Banani, Dhaka-1213, Bangladesh.</p> <p data-v-419d9ece="">Contact: 09678-454545</p> <p data-v-419d9ece="">email: support@hungrynaki.com</p></div>
        <div class="map-container" data-v-419d9ece=""><p class="head-text" data-v-419d9ece="">
          Our Location
        </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.216377487616!2d90.38051881506607!3d23.73966218459471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7db3123bb%3A0x33f738dc3ddbe79f!2sDhaka+City+College!5e0!3m2!1sen!2sbd!4v1517767338067"
            title='location ' width="100%" height="400" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>

        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;