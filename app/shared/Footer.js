import Link from "next/link";
import Image from "next/image";

export default function Footer({ darkMode = false }) {
  const bgColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-700";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
  const headingColor = darkMode ? "text-white" : "text-gray-800";
  const paragraphColor = darkMode ? "text-gray-400" : "text-gray-600";
  const linkColor = darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600";
  const borderColorFooter = darkMode ? "border-gray-700" : "border-gray-200";
  const logo = darkMode ? "/LogoDark.png" : "/Logo.png";
  
  return (
    <footer className={`${bgColor} ${textColor} py-16 border-t ${borderColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="col-span-1">
            <Image 
              src={logo}
              alt="Production AI" 
              width={200}
              height={60}
              className="mb-6"
            />
            <p className={`${paragraphColor} mb-6 max-w-md`}>
              The complete AI-powered platform for production teams to streamline operations, automate communications, and optimize workflow management.
            </p>
            <div className="mb-4">
              <Link 
                href="mailto:info@productionai.ai" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${headingColor}`}>Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className={linkColor}>Home</Link></li>
              <li><Link href="/#features" className={linkColor}>Features</Link></li>
              <li><Link href="/pricing" className={linkColor}>Pricing</Link></li>
              <li><Link href="/privacy" className={linkColor}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkColor}>Terms of Service</Link></li>
              <li><Link href="/page-two" className={linkColor}>Page Two</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t ${borderColorFooter} flex flex-col md:flex-row justify-between items-center`}>
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Production AI Platform. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}