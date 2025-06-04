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
  BrainCircuit
} from "lucide-react";

export default function EnPage() {
  const router = useRouter();
  
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
                  href="https://www.higgshub.pro/en/register?role=contractor" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-lg shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors group"
                >
                  Start Free Trial 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/demo" 
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
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
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Automated Communications</h3>
                    <p className="text-gray-600 text-sm">Customer notifications and crew updates</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden image-container">
                    <Image 
                      src="https://higgsvideo.s3.us-east-1.amazonaws.com/email.png?v=refresh"
                      alt="Automated Communications"
                      width={800}
                      height={600}
                      quality={85}
                      className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                      onLoad={() => logImageLoad('email')}
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
                    <div className="flex items-center justify-center h-full bg-pink-200">
                      <Upload className="h-16 w-16 text-pink-500" />
                    </div>
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
                    <div className="flex items-center justify-center h-full bg-blue-200">
                      <ClipboardCheck className="h-16 w-16 text-blue-500" />
                    </div>
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
                    <div className="flex items-center justify-center h-full bg-purple-200">
                      <Users className="h-16 w-16 text-purple-500" />
                    </div>
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
                    <div className="flex items-center justify-center h-full bg-green-200">
                      <FileSpreadsheet className="h-16 w-16 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Duplicate first few slides for seamless loop */}
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-orange-600">Automated Communications</h3>
                    <p className="text-gray-600 text-sm">Customer notifications and crew updates</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="flex items-center justify-center h-full bg-orange-200">
                      <MessageSquare className="h-16 w-16 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="carousel-slide min-w-full sm:min-w-[80%] md:min-w-[50%] lg:min-w-[33.333%] p-3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg mb-1 text-pink-600">Messaging Center</h3>
                    <p className="text-gray-600 text-sm">Centralized communication with all project stakeholders</p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="flex items-center justify-center h-full bg-pink-200">
                      <FileText className="h-16 w-16 text-pink-500" />
                    </div>
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

      {/* Feature Sections - Staggered */}
      
      {/* 1. Automated Customer Communications */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                STREAMLINED COMMUNICATION
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Automated Customer and Team Communications</h2>
              <p className="text-gray-600 text-lg mb-6">
                Send automated notifications to keep everyone informed throughout the project lifecycle. Welcome messages, delivery alerts, installation notifications, crew updates, and job reminders are delivered seamlessly.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Automated welcome emails for new customers",
                  "Real-time delivery notifications with tracking details",
                  "Pre-installation reminders and instructions",
                  "Custom crew notifications for assignments and schedule changes",
                  "Automatically translated messages based on recipient preference"
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
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-70 -z-10"></div>
                <div className="bg-blue-100 p-3 rounded-xl shadow-xl border border-blue-200">
                  <Image 
                    src="https://higgsvideo.s3.us-east-1.amazonaws.com/email.png?v=refresh"
                    alt="Automated Communications Dashboard"
                    width={1200}
                    height={800}
                    quality={85}
                    loading="lazy"
                    className="rounded-lg object-contain w-full"
                    onLoad={() => logImageLoad('feature-email')}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-xl border border-blue-100 z-20 max-w-[220px] hidden md:block">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Message sent successfully</p>
                      <p className="text-xs text-gray-500">3 team members notified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Job Email and Text */}
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
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
      
      {/* 3. Job Task Tracking */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gray-50 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-24 bg-white">
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
                href="https://www.higgshub.pro/en/register?role=contractor" 
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

      {/* Footer */}
      <Footer darkMode={false} />

      <style jsx global>{`
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