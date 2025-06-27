
import Footer from "../shared/Footer";
import Image from "next/image";

export default function PageTwo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/Logo.png"
              alt="Production AI Logo"
              width={200}
              height={60}
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Streamline Your Roofing Business: From Bid to Bill, Smarter & Faster
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            ProductionAI empowers you to automate estimates, track crews, and invoice faster. Stop juggling software and start building your bottom line.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Book a Personalized Demo
            </a>
            <a href="#demo-video" className="inline-block bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition-colors duration-300">
              Watch a 2-min Demo
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof - Founders' Experience */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built by Roofers, for Roofers</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our founders bring decades of combined experience from the front lines of the roofing industry and the forefront of software development. We don't just build software; we build solutions to the problems we've faced ourselves.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Production Expertise</h3>
              <p className="mt-2 text-gray-600">
                With over 20 years in the roofing industry, we understand the daily challenges of managing projects, crews, and customer expectations. We've lived the pain of inefficient workflows and built ProductionAI to solve it.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">Software Innovation</h3>
              <p className="mt-2 text-gray-600">
                Our team has a proven track record of creating successful roofing software. We're passionate about leveraging technology to make roofers' lives easier and their businesses more profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything You Need to Scale Your Business</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From initial lead to final invoice, ProductionAI provides the tools you need to manage your entire workflow in one place.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Automated Estimates</h3>
                <p className="mt-1 text-gray-600">Reduce estimation time by 50% with our AI-powered tool. Create accurate, professional proposals in minutes, not hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Crew & Project Tracking</h3>
                <p className="mt-1 text-gray-600">Know what's happening on every job site, at any time. Track progress, manage schedules, and communicate with your team in real-time.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Seamless Invoicing</h3>
                <p className="mt-1 text-gray-600">Get paid faster with automated invoicing and online payments. Create and send professional invoices with just a few clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="demo-video" className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started in 3 Simple Steps</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">1</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Book Your Demo</h3>
              <p className="mt-2 text-gray-600">Schedule a personalized demo with one of our experts to see how ProductionAI can be tailored to your business.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">2</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Onboard Your Team</h3>
              <p className="mt-2 text-gray-600">We'll help you get your team set up and trained on the platform, ensuring a smooth transition.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">3</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Start Growing</h3>
              <p className="mt-2 text-gray-600">Begin streamlining your operations, winning more bids, and increasing your profitability from day one.</p>
            </div>
          </div>
           <div className="mt-12">
                <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-2xl"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="w-full bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Take Your Roofing Business to the Next Level?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Stop letting outdated software and inefficient processes hold you back. See how ProductionAI can help you build a more profitable and scalable business.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
              Book Your Free Demo Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
