import React from 'react';
import { FaEnvelope, FaLocationArrow, FaMobile } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { RiMessage2Fill } from 'react-icons/ri';

// PaymentOptions Component - Now directly applied in styles
const PaymentOptions = () => {
  return (
    <div className="p-4 w-full max-w-screen-md mx-auto">
      <p className="text-gray-900 text-base mb-2" style={{ fontFamily: 'Helvetica Neue', fontWeight: 400, lineHeight: '28px' }}>
        Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
      </p>
      <p className="text-gray-900 text-sm mb-2" style={{ fontFamily: 'Helvetica Neue', fontWeight: 400, fontSize: '15px', lineHeight: '28px' }}>
        If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
      </p>
      <p className="text-gray-900 text-base" style={{ fontFamily: 'Helvetica Neue', fontWeight: 400, lineHeight: '28px' }}>
        Apple Pay
      </p>
    </div>
  );
};

// ContactUs Component - Now applied directly
const ContactUs = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <h1 className="text-xl font-bold mb-4">CONTACT US</h1>
      <div className="mb-8">
        <FaMobile className="w-[40px] h-[40px] mx-auto" />
        <p className="font-semibold">000 800 919 0566</p>
        <p>Products & Orders: 24 hours a day,<br />7 days a week</p>
        <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
      </div>
      <div className="mb-8">
        <RiMessage2Fill className="w-[40px] h-[40px] mx-auto" />
        <p>24 hours a day<br />7 days a week</p>
      </div>
      <div className="mb-8">
        <FaEnvelope className="w-[40px] h-[40px] mx-auto" />
        <p>We'll reply within<br />five business days</p>
      </div>
      <div>
        <IoLocationOutline className="w-[40px] h-[40px] mx-auto" />
        <p className="font-semibold">STORE LOCATOR</p>
        <p>Find Nike retail stores near you</p>
      </div>
    </div>
  );
};

// FAQs Component - Now directly applied
const FAQs = () => {
  return (
    <div className="p-5 max-w-screen-md mx-auto" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#111' }}>
      <h2 className="text-lg font-medium">FAQs</h2>
      <div className="mt-10">
        <p className="font-bold text-lg">
          Does my card need international purchases enabled?
        </p>
        <p className="text-lg mt-8">
          Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
        </p>
        <p className="text-sm mt-2 italic">
          Please note, some banks may charge a small transaction fee for international orders.
        </p>
      </div>
    </div>
  );
};

// HelpSection Component - Now directly applied
const HelpSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 bg-white max-w-screen-xl mx-auto">
      <div className="flex-1 mb-8 lg:mb-0">
        <h1 className="text-2xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
        <p className="mb-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
        <PaymentOptions />
        <p className="mt-4">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <a href="#" className="text-blue-500">join us</a> today.</p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-black text-white px-4 py-2">JOIN US</button>
          <button className="bg-black text-white px-4 py-2">SHOP NIKE</button>
        </div>
        <FAQs />
      </div>
      <div className="flex-1">
        <ContactUs />
      </div>
    </div>
  );
};

// Main Component for the ContactUsPage
const ContactUsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <HelpSection />
    </div>
  );
};

export default ContactUsPage;
