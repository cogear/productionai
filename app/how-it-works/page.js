'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React from 'react';
import Footer from "@/app/shared/Footer";
import { 
  ArrowRight, 
  HardHat, 
  Briefcase, 
  Calendar, 
  Youtube,
  Play,
  CheckCircle2
} from "lucide-react";

export default function HowItWorksPage() {
  const router = useRouter();
  
  const videos = [
    {
      id: 1,
      title: "Getting Started with ProductionAI",
      url: "https://www.youtube.com/embed/5accT-ulasU",
      description: "Learn the basics of how ProductionAI streamlines your construction project management."
    },
    {
      id: 2,
      title: "Managing Your Projects",
      url: "https://www.youtube.com/embed/hrwZCnzm-pk",
      description: "Discover how to effectively organize and track your construction projects in real-time."
    },
    {
      id: 3,
      title: "JobNimbus Integration",
      url: "https://www.youtube.com/embed/_bV8DKXnWXw",
      description: "Learn how to connect and sync your JobNimbus data with ProductionAI for seamless workflow integration."
    },
    {
      id: 4,
      title: "Acculynx Integration",
      url: "https://www.youtube.com/embed/_5dW3UgPZQU",
      description: "Discover how to integrate Acculynx with ProductionAI to streamline your roofing project management."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <HardHat className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  ProductionAI
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/pricing" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link 
                href="/how-it-works" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                How it Works
              </Link>
              <Link 
                href="https://youtu.be/CjmCL0IXNOM" 
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Video
              </Link>
              <Link 
                href="/demo" 
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium 
                       hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            How ProductionAI Works
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Watch our instructional videos to learn how ProductionAI can transform your construction project management
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {videos.map((video, index) => (
              <div key={video.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                    <div className="aspect-video">
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Play className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Tutorial {video.id}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {video.title}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {video.description}
                  </p>
                  <div className="flex items-center space-x-2 text-green-400 pt-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Watch time: ~5 minutes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Construction Projects?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            See ProductionAI in action with a personalized demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                       rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 
                       transform hover:scale-105"
            >
              Book Your Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-full font-medium 
                       hover:bg-gray-700 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}