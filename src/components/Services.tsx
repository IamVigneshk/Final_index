import React from 'react';
import { Shield, Search, Lock, Cloud, Database, Wifi, Globe, Zap, FileCode, AlertTriangle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'RECON Service',
    description: 'Advanced reconnaissance module for gathering target information.',
    icon: Search,
    features: ['Asset Discovery', 'Domain Enumeration', 'Service Identification'],
    premium: true,
    price: 20
  },
  {
    title: 'Attack Surface Mapping',
    description: 'Comprehensive mapping of potential attack vectors and entry points.',
    icon: Globe,
    features: ['Surface Analysis', 'Entry Point Detection', 'Risk Assessment'],
    premium: true,
    price: 30
  },
  {
    title: 'Vulnerability Scanning',
    description: 'Detailed vulnerability assessment and security testing.',
    icon: Shield,
    features: ['Automated Scanning', 'CVE Detection', 'Security Assessment'],
    premium: true,
    price: 35
  },
  {
    title: 'Exploitation Module',
    description: 'Advanced penetration testing capabilities (Under Development).',
    icon: AlertTriangle,
    features: ['Exploit Testing', 'Security Validation', 'Risk Verification'],
    premium: true,
    price: 50,
    development: true
  },
  {
    title: 'Post Exploitation',
    description: 'Post-exploitation analysis and assessment (Under Development).',
    icon: Lock,
    features: ['Access Analysis', 'Privilege Assessment', 'Security Hardening'],
    premium: true,
    price: 45,
    development: true
  },
  {
    title: 'Reporting',
    description: 'Comprehensive security reports and recommendations.',
    icon: FileText,
    features: ['Detailed Reports', 'Remediation Steps', 'Executive Summary'],
    premium: true,
    price: 20
  },
];

export default function Services() {
  const handlePayment = (plan: string, price: number) => {
    // Store selected plan details in localStorage for the payment page
    localStorage.setItem('selectedPlan', JSON.stringify({ plan, price }));
    // Redirect to payment page
    window.location.href = '/payment';
  };

  return (
    <div id="services" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Premium Security Modules
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Advanced security testing modules for premium users
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 bg-opacity-10">
                  <service.icon className="h-8 w-8 text-cyan-500" />
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                {service.title}
                {service.development && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Development
                  </span>
                )}
              </h3>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button 
                  onClick={() => handlePayment(service.title, service.price)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 transition-colors duration-300"
                >
                  ${service.price}/month - Get Premium Access
                </button>
              </div>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">
              Premium Access Pricing
            </h2>
            <div className="bg-gray-900 p-8 rounded-xl max-w-2xl mx-auto">
              <div className="grid gap-6">
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-cyan-500 mb-4">Basic Premium</h3>
                  <p className="text-4xl font-bold text-white mb-4">$20<span className="text-xl text-gray-400">/month</span></p>
                  <p className="text-gray-400 mb-6">Access to basic premium features including RECON Service and Reporting</p>
                  <button 
                    onClick={() => handlePayment('Basic Premium', 20)}
                    className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
                <div className="border-b border-gray-700 pb-6">
                  <h3 className="text-2xl font-bold text-cyan-500 mb-4">Professional</h3>
                  <p className="text-4xl font-bold text-white mb-4">$35<span className="text-xl text-gray-400">/month</span></p>
                  <p className="text-gray-400 mb-6">Full access to all premium features including Vulnerability Scanning</p>
                  <button 
                    onClick={() => handlePayment('Professional', 35)}
                    className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-500 mb-4">Enterprise</h3>
                  <p className="text-4xl font-bold text-white mb-4">$50<span className="text-xl text-gray-400">/month</span></p>
                  <p className="text-gray-400 mb-6">Complete access to all features including upcoming Exploitation Module</p>
                  <button 
                    onClick={() => handlePayment('Enterprise', 50)}
                    className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}