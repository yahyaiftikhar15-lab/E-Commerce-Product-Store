import React from 'react';
import { Shield, BookOpen, AlertCircle, RefreshCw, Scale, Award } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Terms of Service</h1>
        <p className="page-subtitle">Please read these terms and conditions carefully before using our service.</p>
      </div>

      <div className="policy-layout">
        <div className="policy-card">
          <div className="policy-meta">
            <span className="last-updated">Last Updated: June 3, 2026</span>
          </div>

          <div className="policy-intro">
            <p>
              Welcome to LuxeStore. These Terms of Service ("Terms") govern your access to and use of LuxeStore's website, 
              products, and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>

          <div className="policy-sections">
            <div className="policy-section">
              <div className="section-title-wrapper">
                <BookOpen className="policy-section-icon" />
                <h3>1. Acceptance of Terms</h3>
              </div>
              <p>
                By accessing this website, you represent that you are at least the age of majority in your state or province of residence, 
                and that you have given us your consent to allow any of your minor dependents to use this site. If you do not agree to all the 
                terms and conditions of this agreement, then you may not access the website or use any services.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <Shield className="policy-section-icon" />
                <h3>2. Account Registration</h3>
              </div>
              <p>
                To access certain features of the service, you may be required to register for an account. You agree to provide accurate, 
                current, and complete information during the registration process and to update such information to keep it accurate, current, 
                and complete. You are responsible for safeguarding your password and agree not to disclose your password to any third party.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <Award className="policy-section-icon" />
                <h3>3. Intellectual Property</h3>
              </div>
              <p>
                All content on LuxeStore, including text, graphics, logos, images, audio clips, digital downloads, and software, is the 
                property of LuxeStore or its content suppliers and is protected by international copyright, trademark, patent, trade secret, 
                and other intellectual property laws.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <AlertCircle className="policy-section-icon" />
                <h3>4. Prohibited Uses</h3>
              </div>
              <p>
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: 
                (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any 
                international, federal, provincial, or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our 
                intellectual property rights or the intellectual property rights of others.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <RefreshCw className="policy-section-icon" />
                <h3>5. Returns & Refund Policy</h3>
              </div>
              <p>
                Please review our returns policy section on the product details. Items can generally be returned within 30 days of receipt 
                if they are in their original packaging and in unused condition. Refunds will be processed to the original payment method.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <Scale className="policy-section-icon" />
                <h3>6. Governing Law</h3>
              </div>
              <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in 
                accordance with the laws of Pakistan, without regard to conflict of law principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
