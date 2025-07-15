'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Footer from "@/app/shared/Footer";
import { trackSignUpClick, trackDemoRequest, trackLead } from '@/utils/metaPixelEvents';
import { 
  ArrowRight, 
  HardHat, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Users, 
  BarChart3, 
  Shield,
  Upload,
  ClipboardCheck,
  FileSpreadsheet,
  NotebookPen,
  MessageSquare,
  Building2,
  LayoutDashboard,
  CloudUpload,
  Bot,
  BrainCircuit,
  Youtube
} from "lucide-react";

export default function EnPage() {
  const router = useRouter();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission to Zapier
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '' });
        
        // Track lead event for Meta Pixel
        trackLead(0, 'USD'); // You can adjust the value if needed
        
        // Also track as a custom event with more details
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('trackCustom', 'LeadFormSubmission', {
            lead_type: 'Production AI Website Form',
            form_location: 'Homepage',
            company: formData.company
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Track when critical images are loaded
  const logImageLoad = (src) => {
    console.log(`Image loaded: ${src}`);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Image 
                src="/Logo.png" 
                alt="Production AI" 
                width={525} 
                height={150} 
                className="w-auto h-36"
                onLoad={() => logImageLoad('logo')}
                priority
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">
                Pricing
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UCZbBkM2LT7YgBl0KMhBnpKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </Link>
              <Link 
                href="https://www.higgshub.pro/en/register-contractor" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="absolute top-24 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-white">Production</span> <span className="text-blue-200">AI</span> <span className="text-white">Platform</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-xl leading-relaxed">
                Streamline your production operations with automated communications, AI assistance, and comprehensive job management in one powerful platform.
              </p>
              
            
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="https://www.higgshub.pro/en/register-contractor" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors group"
                  onClick={() => trackSignUpClick('hero-free-trial')}
                >
                  Start Free Trial 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/demo" 
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
                  onClick={() => trackDemoRequest()}
                >
                  Request Demo
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="bg-white p-2 rounded-xl shadow-2xl border border-blue-100 relative z-10">
                <Image 
                  src="/hero.png"
                  alt="Production AI Platform Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  onLoad={() => logImageLoad('hero')}
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium flex items-center">
                  <Bot className="h-4 w-4 mr-1.5" /> AI-Powered Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Carousel Section */}
      <section className="py-16 bg-gray-50 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">          
          <div className="carousel-container relative overflow-hidden rounded-xl shadow-lg">
            <div className="carousel-track animate-image-carousel flex">
              {/* Feature Screenshots */}
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-purple-600">Messaging Center</h3>
                    <p className="text-gray-600 text-sm">Centralized communication with all project stakeholders</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden image-container">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/Contractor%20Communications.png"
                      alt="Messaging Center"
                      width={800}
                      height={600}
                      quality={85}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                      onLoad={() => logImageLoad('communications')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-green-600">AI Task Management</h3>
                    <p className="text-gray-600 text-sm">Intelligent project tracking and analysis</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden image-container">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/ManageTasks.png"
                      alt="Task Tracking"
                      width={800}
                      height={600}
                      quality={85}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                      onLoad={() => logImageLoad('tasks')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-orange-600">Job Builder</h3>
                    <p className="text-gray-600 text-sm">Complete job creation and management</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden image-container">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/jobbuilder.png"
                      alt="Job Construction"
                      width={800}
                      height={600}
                      quality={85}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                      onLoad={() => logImageLoad('jobbuilder')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-pink-600">Photo Management</h3>
                    <p className="text-gray-600 text-sm">Smart organization of all job-related images</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/jobphotos.png"
                      alt="Photo Management"
                      fill
                      className="object-cover"
                      onLoad={() => logImageLoad('photomanagement')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Document Generation</h3>
                    <p className="text-gray-600 text-sm">Professional forms and agreements</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/details.png"
                      alt="Document Generation"
                      fill
                      className="object-cover"
                      onLoad={() => logImageLoad('documentgeneration')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-purple-600">Team Coordination</h3>
                    <p className="text-gray-600 text-sm">Team assignment and schedule management</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/crewassignment.png"
                      alt="Team Coordination"
                      fill
                      className="object-cover"
                      onLoad={() => logImageLoad('teamcoordination')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-green-600">File Management</h3>
                    <p className="text-gray-600 text-sm">Centralized storage for all job documents</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/files.png"
                      alt="File Management"
                      fill
                      className="object-cover"
                      onLoad={() => logImageLoad('filemanagement')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-indigo-600">Integrations</h3>
                    <p className="text-gray-600 text-sm">Import jobs from AccuLynx and JobNimbus</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src="/Integrations.png"
                      alt="Integrations"
                      fill
                      className="object-cover"
                      onLoad={() => logImageLoad('integrations')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
              
              {/* Duplicate first few slides for seamless loop */}
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-purple-600">Messaging Center</h3>
                    <p className="text-gray-600 text-sm">Centralized communication with all project stakeholders</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden image-container">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/Contractor%20Communications.png"
                      alt="Messaging Center"
                      width={800}
                      height={600}
                      quality={85}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                      onLoad={() => logImageLoad('communications-duplicate')}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACETDRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="#features" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Collection Form */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Call to Action Side */}
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Ready to Transform Your Production Process?
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Discover how Production AI can streamline your operations and boost productivity.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Automated communications & notifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">AI-powered task management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Complete job & team coordination</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600">✓ No Setup Fees</span>
                    <span className="text-gray-600">✓ 24/7 Support</span>
                    <span className="text-gray-600">✓ Cancel Anytime</span>
                  </div>
                </div>
                
                {/* Form Side */}
                <div className="order-1 lg:order-2">
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm text-gray-900 placeholder-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm text-gray-900 placeholder-gray-400"
                          placeholder="john@company.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm text-gray-900 placeholder-gray-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm text-gray-900 placeholder-gray-400"
                          placeholder="ABC Productions Inc."
                        />
                      </div>
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm">
                        Thank you! We'll be in touch within 24 hours.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get More Information
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Staggered */}
      
      {/* 1. Job Email and Text */}
      <section id="features" className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-purple-100 p-3 rounded-xl shadow-xl border border-purple-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/Contractor%20Communications.png"
                    alt="Messaging Center Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-comm')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                UNIFIED COMMUNICATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-purple-600">Job Email and Text Message Center</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our centralized message center brings together all project participants. Easily contact anyone assigned to the job with automatic language translation ensuring clear communication regardless of preferred language.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Centralized messaging for all job participants",
                  "Automatic language translation for multilingual teams",
                  "Email and SMS text messaging from a single interface",
                  "Message history tracking for complete communication records",
                  "Template-based messaging for consistent communication"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Integrations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                SEAMLESS INTEGRATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">Import Jobs from AccuLynx and JobNimbus</h2>
              <p className="text-gray-600 text-lg mb-6">
                Seamlessly import your existing jobs from AccuLynx and JobNimbus. Our integration ensures a smooth transition and continuous workflow without losing any critical project data.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "One-click import from AccuLynx and JobNimbus",
                  "Automatic data mapping and field conversion",
                  "Import job details, contacts, and documents",
                  "Bi-directional sync to keep data updated",
                  "Bulk import capabilities for multiple jobs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-indigo-100 p-3 rounded-xl shadow-xl border border-indigo-200">
                  <Image 
                    src="/Integrations.png"
                    alt="Integrations with AccuLynx and JobNimbus"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-integrations')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACETMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Job Task Tracking */}
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                INTELLIGENT TASK MANAGEMENT
              </div>
              <h2 className="text-3xl font-bold mb-6 text-green-600">AI-Assisted Task Tracking</h2>
              <p className="text-gray-600 text-lg mb-6">
                Keep track of every project's progress with our AI-assisted task manager. Monitor critical stages with intelligent tracking and get insights that help you optimize workflow.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Visual pipeline view of all project stages",
                  "Automated task status updates and notifications",
                  "AI-powered insights on project bottlenecks",
                  "Real-time progress tracking for all stakeholders",
                  "Custom workflow templates for different project types"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-green-100 p-3 rounded-xl shadow-xl border border-green-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/ManageTasks.png"
                    alt="Task Tracking Dashboard"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-tasks')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Job Construction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-orange-100 p-3 rounded-xl shadow-xl border border-orange-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/jobbuilder.png"
                    alt="Job Construction Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-jobbuilder')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                COMPREHENSIVE JOB CREATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-orange-600">Job Construction and Management</h2>
              <p className="text-gray-600 text-lg mb-6">
                Build complete job profiles with our intuitive job builder. Enter address information, upload photos, and request materials whether you're working with insurance or measurement data.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Intuitive job creation interface for quick setup",
                  "Address validation and geolocation capabilities",
                  "Photo management with automatic categorization",
                  "Material requests tied directly to job specifications",
                  "Seamless integration with measurement data"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. AI Voice Interface */}
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                CONVERSATIONAL AI
              </div>
              <h2 className="text-3xl font-bold mb-6 text-pink-600">AI Voice Assistant</h2>
              <p className="text-gray-600 text-lg mb-6">
                Simply ask for information about any job. Our advanced AI voice assistant can access job details, schedules, materials, and status updates to keep you informed without typing a single keystroke.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Natural language queries about any job information",
                  "Hands-free access to critical project details",
                  "Real-time status updates and schedule information",
                  "Material lists and specifications via voice command",
                  "Integration with other platform features for seamless workflow"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-pink-100 p-3 rounded-xl shadow-xl border border-pink-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/ruby.png"
                    alt="AI Voice Assistant"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-ruby')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute bottom-10 right-10 bg-pink-600 text-white p-4 rounded-full shadow-lg pulse-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 6. Job Photo Organization */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-blue-100 p-3 rounded-xl shadow-xl border border-blue-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/jobphotos.png"
                    alt="Photo Organization Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-photos')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                VISUAL DOCUMENTATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Job Photo Organization</h2>
              <p className="text-gray-600 text-lg mb-6">
                Upload, organize, and access all photos associated with a job in one central location. Our intelligent tagging system makes it easy to categorize and find the exact images you need, when you need them.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Centralized photo repository for each job",
                  "Intelligent auto-categorization of uploaded images",
                  "Custom tagging system for precise organization",
                  "Before and after comparisons for quality assurance",
                  "Secure storage with controlled access permissions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contract and Form Generation */}
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                DOCUMENT AUTOMATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-purple-600">Contract and Form Generation</h2>
              <p className="text-gray-600 text-lg mb-6">
                Generate professional work orders, invoices, and other documents with just a few clicks. Our streamlined document system enhances the approval process for faster project progression.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "One-click generation of professional documents",
                  "Efficient document approval workflows",
                  "Custom templates for various document types",
                  "Auto-population of job data for accuracy",
                  "Secure document storage and retrieval"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-purple-100 p-3 rounded-xl shadow-xl border border-purple-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/details.png"
                    alt="Contract Generation Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-details')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 8. Team Coordination */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-green-100 p-3 rounded-xl shadow-xl border border-green-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/crewassignment.png"
                    alt="Team Coordination Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-crew')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                TEAM MANAGEMENT
              </div>
              <h2 className="text-3xl font-bold mb-6 text-green-600">Team Coordination</h2>
              <p className="text-gray-600 text-lg mb-6">
                Create, manage, and track teams with ease. Assign team members, designate team leads, and monitor activities on an intuitive calendar interface for optimal resource allocation.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Intuitive team creation and management",
                  "Team member assignment with role designation",
                  "Calendar view for scheduling and coordination",
                  "Real-time location tracking for field teams",
                  "Performance metrics for quality assurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 9. File Management */}
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                DOCUMENT MANAGEMENT
              </div>
              <h2 className="text-3xl font-bold mb-6 text-orange-600">File Management</h2>
              <p className="text-gray-600 text-lg mb-6">
                Keep all job-related files organized and accessible in one secure location. Store, categorize, and retrieve important documents whenever you need them, from any device.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Centralized file storage for all job documentation",
                  "Intelligent file categorization and tagging",
                  "Secure access with permission controls",
                  "Version history tracking for document changes",
                  "Mobile-friendly access from any location"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="bg-orange-100 p-3 rounded-xl shadow-xl border border-orange-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/files.png"
                    alt="File Management Interface"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-files')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-24 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Production Management Today
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of professionals who are saving time, reducing costs, and delivering exceptional results with the Production AI platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="https://www.higgshub.pro/en/register-contractor" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg w-full sm:w-auto flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/demo" 
                className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium text-lg w-full sm:w-auto flex items-center justify-center hover:bg-indigo-800 transition-colors shadow-lg"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Seamlessly integrates with leading construction management platforms:
            </p>
            <div className="flex justify-center items-center gap-8">
              <Link 
                href="https://www.acculynx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                AccuLynx
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="https://www.jobnimbus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                JobNimbus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={false} />

      <style jsx={true} global={true}>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        
        .animate-image-carousel {
          animation: imageCarousel 35s linear infinite;
        }
        
        @keyframes imageCarousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200%); }
        }
        
        .carousel-slide {
          transition: all 0.3s ease;
        }
        
        .carousel-slide:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}