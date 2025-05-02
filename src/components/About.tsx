const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Telehealth Companion</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-lg mb-6">
            Telehealth Companion is a comprehensive healthcare platform designed to connect patients with healthcare 
            professionals for remote consultations, home testing services, and medical appointments.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            We aim to make healthcare more accessible by providing convenient, efficient, and reliable telehealth services. 
            Our platform bridges the gap between patients and healthcare providers, ensuring quality care is available to everyone, 
            regardless of location or mobility constraints.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Home Testing</h3>
              <p>We offer a range of medical tests that can be performed at your home, including blood tests, urine tests, and general health checkups.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Doctor Consultations</h3>
              <p>Connect with our network of qualified doctors for consultations, follow-ups, and medical advice.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Preventive Care</h3>
              <p>Take proactive steps towards better health with our preventive care services, including vaccinations and regular health screenings.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Flexible Scheduling</h3>
              <p>Book appointments at your convenience, with options for same-day or scheduled future visits.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p className="mb-6">
            Telehealth Companion works with a diverse network of healthcare professionals, including general practitioners, 
            specialists, and certified healthcare technicians. All our medical professionals are fully licensed and vetted to 
            ensure the highest standards of care.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-2">For any inquiries or support, please contact us at:</p>
          <p className="mb-1"><strong>Email:</strong> support@telehealthcompanion.com</p>
          <p className="mb-1"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="mb-6"><strong>Hours:</strong> Monday to Friday, 9AM - 7PM</p>
        </div>
      </div>
    </div>
  );
};

export default About;
