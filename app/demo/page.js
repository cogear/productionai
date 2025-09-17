'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Footer from "@/app/shared/Footer";
// Removed useEffect import as it's no longer needed

export default function DemoPage() {

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
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
                  className="w-auto h-36 cursor-pointer"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <Link 
                href="https://www.higgshub.pro/en/register?role=contractor" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule Your Demo
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            See how Production AI can transform your production operations with a personalized demonstration
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Replace the URL below with your actual Calendly scheduling link */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/nathan-higgs/new_production_ai_demo" 
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Platform Overview</h3>
                <p className="text-gray-600">We'll show you all the key features and capabilities of Production AI</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Your Use Cases</h3>
                <p className="text-gray-600">We'll discuss your specific needs and show relevant features</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Q&A Session</h3>
                <p className="text-gray-600">Ask any questions and get detailed answers about implementation</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Can't find a time that works? Contact us directly at:
              </p>
              <a href="mailto:support@productionai.com" className="text-blue-600 hover:text-blue-700 font-medium">
                support@productionai.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={false} />
    </div>
  );
}