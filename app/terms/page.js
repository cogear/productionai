'use client';

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/shared/Footer";

export default function TermsPage() {
    return (
        <div className="font-sans overflow-x-hidden bg-gray-900">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md shadow-sm border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image 
                                    src="/LogoDark.png" 
                                    alt="Production AI" 
                                    width={525} 
                                    height={150} 
                                    className="w-auto h-36"
                                />
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/#features" className="text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors">
                                Features
                            </Link>
                            <Link href="/pricing" className="text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors">
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

            <div className="container mx-auto py-16 px-4">
                <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">Terms of Service</h1>
                <div className="prose prose-lg max-w-4xl mx-auto prose-invert">
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Agreement to Terms</h2>
                        <p className="mb-6 text-gray-300">
                            By accessing and using Higgs Hub&apos;s platform and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access or use our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Description of Services</h2>
                        <p className="mb-6 text-gray-300">
                            Higgs Hub provides a comprehensive platform for HOA management companies, community managers, and contractors to streamline their operations, manage communities, and handle maintenance requests.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. User Accounts</h2>
                        <p className="mb-4 text-gray-300">
                            To access certain features of our platform, you must register for an account. You agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                            <li>Provide accurate and complete registration information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Promptly notify us of any unauthorized use of your account</li>
                            <li>Accept responsibility for all activities that occur under your account</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Privacy and Data Protection</h2>
                        <p className="mb-6 text-gray-300">
                            Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using our services, you consent to our data practices as described in our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. User Responsibilities</h2>
                        <p className="mb-4 text-gray-300">
                            When using our services, you agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe on the intellectual property rights of others</li>
                            <li>Upload or transmit malicious code or content</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Use our services to harass, abuse, or harm others</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Service Modifications</h2>
                        <p className="mb-6 text-gray-300">
                            We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will provide reasonable notice of any significant changes that affect your use of our platform.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Payment Terms</h2>
                        <p className="mb-6 text-gray-300">
                            Certain services may require payment. You agree to provide accurate billing information and pay all fees on time. All payments are non-refundable unless otherwise specified.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Limitation of Liability</h2>
                        <p className="mb-6 text-gray-300">
                            To the maximum extent permitted by law, Higgs Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Termination</h2>
                        <p className="mb-6 text-gray-300">
                            We reserve the right to terminate or suspend your account and access to our services for any violation of these terms. You may also terminate your account at any time by following our account closure procedures.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Changes to Terms</h2>
                        <p className="mb-6 text-gray-300">
                            We may update these terms from time to time. We will notify you of any material changes and obtain your consent where required by law. Continued use of our services after such changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. Contact Information</h2>
                        <p className="mb-6 text-gray-300">
                            If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@productionai.ai" className="text-blue-400 hover:underline">info@productionai.ai</a>.
                        </p>
                    </section>

                    <div className="text-sm text-gray-400 pt-6 border-t border-gray-700">
                        Last updated: December 25, 2024
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20">
                <Footer darkMode={true} />
            </div>
        </div>
    );
}