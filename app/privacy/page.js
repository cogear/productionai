'use client';

import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/shared/Footer";

export default function PrivacyPage() {
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
                <h1 className="text-4xl font-bold mb-8 text-blue-400">Privacy Policy</h1>
                <div className="prose prose-lg max-w-4xl prose-invert">
                    <p className="mb-6 text-gray-300">At Higgs Hub, we are committed to protecting the privacy of our customers and visitors. This privacy policy outlines how we collect, use, and safeguard the personal information you provide when using our website and services.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Information Collection and Use</h2>
                    <p className="mb-4 text-gray-300">When you interact with our website or services, we may collect personal information such as your name, contact details (email address, phone number), billing information, and any other relevant information necessary to provide our services effectively.</p>
                    <p className="mb-6 text-gray-300">We may also collect non-personal information, such as your IP address, browser type, and usage data, to analyze website traffic and improve our services.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Use of Personal Information</h2>
                    <ol className="list-decimal list-inside mb-6 text-gray-300 space-y-2 pl-4">
                        <li>To process and fulfill your orders for roofing services and materials.</li>
                        <li>To assign and manage crews for your roofing projects.</li>
                        <li>To provide funding options and process payments.</li>
                        <li>To communicate with you regarding your orders, projects, and customer service inquiries.</li>
                        <li>To improve our products, services, and overall customer experience.</li>
                    </ol>
                    <p className="mb-6 text-gray-300">We will not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Data Security</h2>
                    <p className="mb-6 text-gray-300">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Third-Party Services</h2>
                    <p className="mb-6 text-gray-300">We may use third-party service providers to assist us in operating our website, delivering our services, or conducting business activities on our behalf. These service providers may have access to your personal information solely for the purpose of performing their designated tasks and are obligated not to disclose or use it for any other purpose.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Cookies and Tracking Technologies</h2>
                    <p className="mb-6 text-gray-300">Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can adjust your browser settings to refuse cookies or be notified when cookies are being sent.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Links to Third-Party Websites</h2>
                    <p className="mb-6 text-gray-300">Our website may contain links to third-party websites or services that are not owned or controlled by Higgs Hub. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Children&apos;s Privacy</h2>
                    <p className="mb-6 text-gray-300">Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Changes to this Privacy Policy</h2>
                    <p className="mb-6 text-gray-300">We reserve the right to modify or update this privacy policy at any time. Any changes will be effective upon posting the revised policy on our website. We encourage you to review this policy periodically for any updates.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">SMS and Text Messaging</h2>
                    
                    <h3 className="text-xl font-bold mb-3 text-blue-300">Consent & Purpose</h3>
                    <p className="mb-4 text-gray-300">By providing your mobile number to Higgs Hub, you expressly consent to receive SMS/text messages from us. These messages may include account notifications, service updates, promotions, and other relevant information. Standard messaging rates may apply.</p>

                    <h3 className="text-xl font-bold mb-3 text-blue-300">Data Collection & Use</h3>
                    <p className="mb-4 text-gray-300">We collect and store your mobile phone number solely for the purpose of providing our SMS services. This information is used to:</p>
                    <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2 pl-4">
                        <li>Send transactional messages (e.g., account alerts, order confirmations)</li>
                        <li>Deliver promotional and informational content related to our products and services</li>
                    </ul>
                    <p className="mb-6 text-gray-300">We do not share your mobile number or any associated data with third parties for marketing purposes without your explicit consent, except as required by law.</p>

                    <h3 className="text-xl font-bold mb-3 text-blue-300">Opt-Out Process</h3>
                    <p className="mb-6 text-gray-300">If you prefer not to receive SMS/text messages, you can opt out at any time by replying "STOP" to any message you receive or by contacting our support team. Once you opt out, you will no longer receive marketing or non-essential texts, though you may still receive critical transactional messages.</p>

                    <h3 className="text-xl font-bold mb-3 text-blue-300">Security & Compliance</h3>
                    <p className="mb-6 text-gray-300">We implement industry-standard security measures to protect your data. Our practices comply with applicable laws and regulations concerning SMS communication. We reserve the right to update this policy section to reflect changes in legal requirements or our practices.</p>

                    <h3 className="text-xl font-bold mb-3 text-blue-300">Updates to This Policy</h3>
                    <p className="mb-6 text-gray-300">Any changes to our text messaging practices will be updated in this section of our Privacy Policy. We encourage you to review this policy periodically.</p>

                    <h2 className="text-2xl font-bold mb-4 text-blue-400 mt-10">Contact Us</h2>
                    <p className="mb-6 text-gray-300">If you have any questions or concerns about our privacy policy or the handling of your personal information, please contact us at <a href="mailto:info@productionai.ai" className="text-blue-400 hover:underline">info@productionai.ai</a>.</p>
                    <p className="text-gray-300">By using our website and services, you acknowledge that you have read and understood this privacy policy.</p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20">
                <Footer darkMode={true} />
            </div>
        </div>
    );
}