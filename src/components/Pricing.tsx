import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate('/signup');
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Pricing</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          We offer transparent pricing for our telehealth services. Choose the plan that best fits your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Basic Plan</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 5 virtual consultations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic health tests</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Specialist consultations</span>
                </li>
              </ul>
              <button
                onClick={handleSignUp}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 border-2 border-blue-600">
            <div className="bg-blue-600 p-6 text-center">
              <h3 className="text-xl font-bold text-white">Premium Plan</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$100</span>
                <span className="text-blue-100">/month</span>
              </div>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-800 text-blue-100 text-xs font-bold rounded">MOST POPULAR</span>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited virtual consultations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Complete health test package</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Specialist consultations included</span>
                </li>
              </ul>
              <button
                onClick={handleSignUp}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
          
          {/* Family Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Family Plan</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$180</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Covers up to 5 family members</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited consultations for all</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All health tests included</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Family health records</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Preventive care for all</span>
                </li>
              </ul>
              <button
                onClick={handleSignUp}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        
        {/* Individual Services Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Individual Services</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200 font-medium">Blood Test</td>
                  <td className="py-4 px-4 border-b border-gray-200">Complete blood count, lipid profile</td>
                  <td className="py-4 px-4 border-b border-gray-200">$45</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200 font-medium">Urine Test</td>
                  <td className="py-4 px-4 border-b border-gray-200">Complete urinalysis</td>
                  <td className="py-4 px-4 border-b border-gray-200">$30</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200 font-medium">Blood Pressure Check</td>
                  <td className="py-4 px-4 border-b border-gray-200">Includes heart rate monitoring</td>
                  <td className="py-4 px-4 border-b border-gray-200">$20</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200 font-medium">General Consultation</td>
                  <td className="py-4 px-4 border-b border-gray-200">30-minute session with a general practitioner</td>
                  <td className="py-4 px-4 border-b border-gray-200">$50</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200 font-medium">Specialist Consultation</td>
                  <td className="py-4 px-4 border-b border-gray-200">30-minute session with a specialist doctor</td>
                  <td className="py-4 px-4 border-b border-gray-200">$100</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Vaccination</td>
                  <td className="py-4 px-4">Standard adult vaccines (price varies by type)</td>
                  <td className="py-4 px-4">From $35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom package? Contact us for a personalized quote.</p>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
