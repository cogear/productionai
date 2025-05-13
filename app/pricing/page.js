'use client';

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/shared/Footer";
import { CheckCircle2, XCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/Logo.png" 
                  alt="Production AI" 
                  width={525} 
                  height={150} 
                  className="w-auto h-36"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-blue-600 font-medium text-lg transition-colors">
                Pricing
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Perfect Plan</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Flexible pricing options to fit your production management needs
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solo Pro */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
                <h3 className="font-bold text-2xl mb-4">Solo Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$99.99</span>
                  <span className="text-blue-100 ml-1">/month</span>
                </div>
                <p className="text-blue-100 mb-6">Perfect for individual contractors</p>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-blue-500 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "AI order creation",
                    "Order fulfillment",
                    "Crew fulfillment",
                    "Weather forecasting",
                    "Permit inspection scheduling",
                    "Customer notifications: Text or email",
                    "Schedule repairs on jobs installed"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Commander */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105 transform translate-y-[-10px]">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h3 className="font-bold text-2xl mb-4">Commander</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$149.99</span>
                  <span className="text-blue-100 ml-1">/month</span>
                </div>
                <p className="text-blue-100 mb-6">For growing businesses</p>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "AI Takeoffs",
                    "Order fulfillment",
                    "Crew fulfillment",
                    "Photo taking",
                    "Permit inspection scheduling",
                    "Automated Customer notifications: Text & email",
                    "Schedule repairs on jobs installed",
                    "Weather forecasting",
                    "AI job costing",
                    "Automated Crew notifications via Text",
                    "Crew Invoicing inside the platform",
                    "Basic reporting"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contract King */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <h3 className="font-bold text-2xl mb-4">Contract King</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$199.99</span>
                  <span className="text-purple-100 ml-1">/month</span>
                </div>
                <p className="text-purple-100 mb-6">For professional contractors</p>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "AI Takeoffs",
                    "Order fulfillment",
                    "Crew fulfillment",
                    "Photo taking",
                    "Permit inspection scheduling",
                    "Customer notifications: Text & email",
                    "Customer success videos",
                    "Weather forecasting",
                    "Schedule repairs on jobs installed",
                    "AI job costing",
                    "Crew notifications via Text & email",
                    "Crew Invoicing inside the platform",
                    "Multilingual Support",
                    "Voice Assistant",
                    "Google Calendar Sync",
                    "Advance reporting",
                    "Sub-contractor insurance renewal notifications",
                    "CRM two-way connection"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multi-state organization */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105 bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="p-8 border-b border-gray-700">
                <h3 className="font-bold text-2xl text-white mb-4">Multi-state organization</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">Contact</span>
                  <span className="text-gray-400 block">Sales Team</span>
                </div>
                <p className="text-gray-400 mb-6">Enterprise-grade solution</p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "AI Takeoffs",
                    "Order fulfillment",
                    "Crew fulfillment",
                    "Photo taking",
                    "Permit inspection scheduling",
                    "Customer notifications: Text & email",
                    "Customer success videos",
                    "Weather forecasting",
                    "Schedule repairs on jobs installed",
                    "AI job costing",
                    "Crew notifications via Text & email",
                    "Crew Invoicing inside the platform",
                    "Multilingual Support",
                    "Voice Assistant",
                    "Google Calendar Sync",
                    "Advance reporting",
                    "Sub-contractor insurance renewal notifications",
                    "CRM two-way connection",
                    "Custom integration capabilities",
                    "Dedicated account manager"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "Can I upgrade or downgrade my plan later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Is there a discount for annual billing?",
                a: "Yes, we offer a 10% discount when you choose annual billing for any of our plans."
              },
              {
                q: "How many users can I add to each plan?",
                a: "Solo Pro supports 1 user, Commander supports up to 3 users, Contract King supports up to 10 users, and Multi-state organizations have custom user limits."
              },
              {
                q: "How quickly can I get started?",
                a: "You can get started immediately after signing up. Our onboarding process is streamlined to get you up and running within minutes."
              },
              {
                q: "Can I get a demo of the platform?",
                a: "Absolutely! You can schedule a personalized demo with our team to see how Production AI can help your specific business."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Production Management?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Join thousands of contractors who are saving time and reducing costs with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://www.higgshub.pro/en/register?role=contractor" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg w-full sm:w-auto flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
            <Link 
              href="/demo" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg w-full sm:w-auto flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={true} />
    </div>
  );
}