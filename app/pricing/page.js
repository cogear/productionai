'use client';

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/shared/Footer";
import PricingFAQSchema from "@/components/PricingFAQSchema";
import { CheckCircle2, XCircle } from "lucide-react";
import { trackSignUpClick, trackPricingView } from '@/utils/metaPixelEvents';
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(() => {
    trackPricingView('all-plans');
  }, []);
  
  return (
    <div className="font-sans overflow-x-hidden">
      <PricingFAQSchema />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple Job-Based Pricing</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pay only for the jobs you create. No monthly fees, no commitments.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pay As You Go */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-400 to-cyan-500 text-white">
                <h3 className="font-bold text-2xl mb-4">Pay As You Go</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$89</span>
                  <span className="text-blue-100 ml-1">/job</span>
                </div>
                <p className="text-blue-100 mb-6">No commitments needed</p>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-blue-500 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                  onClick={() => trackSignUpClick('pay-as-you-go')}
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "No upfront commitment",
                    "Pay only for jobs you create",
                    "Full access to all features",
                    "Invoiced weekly",
                    "Residential only"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Starter Package */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h3 className="font-bold text-2xl mb-4">Starter Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$395</span>
                  <span className="text-blue-100 ml-1 block text-sm">5 jobs @ $79/job</span>
                </div>
                <p className="text-blue-100 mb-6">Save $50.00</p>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                  onClick={() => trackSignUpClick('starter-package')}
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "5 job credits",
                    "Credits good for 30 days",
                    "Full access to all features",
                    "Priority support",
                    "Residential only"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105 transform translate-y-[-10px]">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-purple-500 to-pink-600 text-white relative">
                <h3 className="font-bold text-2xl mb-4">Standard Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$690</span>
                  <span className="text-purple-100 ml-1 block text-sm">10 jobs @ $69/job</span>
                </div>
                <p className="text-purple-100 mb-6">Save $200.00</p>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                  onClick={() => trackSignUpClick('standard-package')}
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "10 job credits",
                    "Credits good for 30 days",
                    "Full access to all features",
                    "Priority support",
                    "Residential only"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
                <h3 className="font-bold text-2xl mb-4">Premium Package</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$1,180</span>
                  <span className="text-indigo-100 ml-1 block text-sm">20 jobs @ $59/job</span>
                </div>
                <p className="text-indigo-100 mb-6">Save $600.00</p>
                <Link 
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="block w-full bg-white text-indigo-600 text-center py-3 rounded-lg font-medium transition-colors hover:bg-gray-100"
                  onClick={() => trackSignUpClick('premium-package')}
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "20 job credits",
                    "Credits good for 30 days",
                    "Full access to all features",
                    "Priority support",
                    "Residential only"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enhance Your Jobs with Add-ons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* One-Click Report */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">One-Click Report</h3>
                <span className="text-2xl font-bold text-blue-600">$20</span>
              </div>
              <p className="text-gray-600">Generate comprehensive reports with a single click. Perfect for client presentations and record keeping.</p>
            </div>
            
            {/* Aerial Measurement */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Aerial Measurement</h3>
                <span className="text-2xl font-bold text-blue-600">$40</span>
              </div>
              <p className="text-gray-600">Get accurate roof measurements using advanced aerial technology. Save time and improve accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "How does job-based pricing work?",
                a: "You only pay for the jobs you create. With Pay As You Go, you're charged $89 per job weekly. With packages, you purchase job credits upfront at discounted rates."
              },
              {
                q: "Do job credits expire?",
                a: "Job credits are good for 30 days from the date of purchase. Use your credits within this time period."
              },
              {
                q: "What's included in 'full access to all features'?",
                a: "Every pricing tier includes all platform features - AI takeoffs, order fulfillment, crew management, weather forecasting, permit scheduling, notifications, and more."
              },
              {
                q: "Can I mix Pay As You Go with packages?",
                a: "Yes! You can start with Pay As You Go and purchase packages whenever you want to save money on multiple jobs."
              },
              {
                q: "Are add-ons available for all pricing tiers?",
                a: "Yes, both One-Click Reports ($20) and Aerial Measurements ($40) can be added to any job, regardless of your pricing plan."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards and invoice weekly for Pay As You Go. Package purchases are charged immediately."
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
          <h2 className="text-3xl font-bold mb-6">Start Creating Jobs Today</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
            No monthly fees, no commitments. Pay only for the jobs you create.
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