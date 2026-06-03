import React from 'react';
import { ShieldAlert, Eye, Lock, FileText, Globe, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-subtitle">Your privacy is important to us. Learn how we collect, use, and protect your data.</p>
      </div>

      <div className="policy-layout">
        <div className="policy-card">
          <div className="policy-meta">
            <span className="last-updated">Last Updated: June 3, 2026</span>
          </div>

          <div className="policy-intro">
            <p>
              At LuxeStore, we are committed to protecting your privacy and ensuring your personal information is handled safely 
              and responsibly. This Privacy Policy describes how we collect, use, and share your personal info when you visit 
              or make a purchase from LuxeStore.
            </p>
          </div>

          <div className="policy-sections">
            <div className="policy-section">
              <div className="section-title-wrapper">
                <Eye className="policy-section-icon" />
                <h3>1. Information We Collect</h3>
              </div>
              <p>
                When you visit the site, we collect certain information about your device, your interaction with the site, and 
                information necessary to process your purchases. We may also collect additional information if you contact us 
                for customer support.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <Lock className="policy-section-icon" />
                <h3>2. How We Protect Your Info</h3>
              </div>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal 
                information is contained behind secured networks and is only accessible by a limited number of persons who have 
                special access rights to such systems, and are required to keep the information confidential.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <FileText className="policy-section-icon" />
                <h3>3. Sharing Your Personal Information</h3>
              </div>
              <p>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. 
                For example, we use Vite-based analytics tools to understand how our customers use the Site.
              </p>
            </div>

            <div className="policy-section">
              <div className="section-title-wrapper">
                <Globe className="policy-section-icon" />
                <h3>4. Cookies & Trackers</h3>
              </div>
              <p>
                We use cookies to help remember and process the items in your shopping cart, understand and save your preferences 
                for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better 
                site experiences and tools in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
