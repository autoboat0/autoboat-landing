/**
 * AutoBoat.in - Landing Page Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Showcase Tab Switcher
  const showcaseTabs = document.querySelectorAll('.showcase-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  if (showcaseTabs.length > 0) {
    showcaseTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        showcaseTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const activeContent = document.getElementById(targetTab);
        if (activeContent) {
          activeContent.classList.add('active');
        }
      });
    });
  }

  // 2. Pricing Period Switcher Tabs
  const priceTabBtns = document.querySelectorAll('.price-tab-btn');
  if (priceTabBtns.length > 0) {
    priceTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        priceTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  // 3. Interactive Features Switcher (Section 6)
  const featureItems = document.querySelectorAll('.feature-item');
  const mockupTitle = document.getElementById('mockupTitle');
  const mockupContent = document.getElementById('featureMockupContent');

  const featurePreviews = {
    inbox: {
      title: "Shared Team Inbox",
      badge: "Shared Multi-Agent View",
      items: [
        { avatar: "CS", name: "Rahul M.", msg: "Need urgent quote for 50 licenses.", status: "Assigned: Sales Dept", class: "assigned" },
        { avatar: "SK", name: "Sneh K.", msg: "Completed ₹4,999 UPI payment in WhatsApp.", status: "Auto-Replied & Verified", class: "bot" }
      ]
    },
    miniapp: {
      title: "WhatsApp Mini-Apps",
      badge: "In-Chat Storefront & Booking Mini-App",
      items: [
        { avatar: "📱", name: "WhatsApp Storefront Mini-App", msg: "User opened catalog & selected slot.", status: "Zero Web Drop-off", class: "bot" },
        { avatar: "💳", name: "Instant UPI Checkout", msg: "Order ₹2,499 initialized in WhatsApp chat.", status: "Mini-App Active", class: "assigned" }
      ]
    },
    payments: {
      title: "In-Chat Payments",
      badge: "Instant Native UPI Payment Gateway",
      items: [
        { avatar: "🏦", name: "GPay / PhonePe UPI", msg: "Received ₹4,999 for Enterprise Plan.", status: "UPI Verified ✓", class: "bot" },
        { avatar: "🧾", name: "Automated GST Invoice", msg: "Invoice #AB-9042 emailed & sent on WhatsApp.", status: "Receipt Generated", class: "assigned" }
      ]
    },
    widget: {
      title: "Website Chat Widget",
      badge: "1-Click Web to WhatsApp Bridge",
      items: [
        { avatar: "💬", name: "Website Visitor Lead", msg: "Clicked 'Start WhatsApp Chat' on pricing page.", status: "Opted-In Lead", class: "assigned" }
      ]
    },
    leadsource: {
      title: "Lead Source Attribution",
      badge: "Marketing Campaign Attribution Engine",
      items: [
        { avatar: "📍", name: "Meta Ad #204 Attribution", msg: "Lead converted from Instagram Ad 'Scale API'.", status: "ROI Tracked 100%", class: "bot" }
      ]
    },
    department: {
      title: "Multi-Department Routing",
      badge: "Smart Intent-Based Lead Assignment",
      items: [
        { avatar: "🏢", name: "Support Team Queue", msg: "Routed tech enquiry to Tech Support Dept.", status: "Assigned: Support", class: "assigned" },
        { avatar: "💼", name: "Sales Team Queue", msg: "High intent lead assigned to Senior Rep Vikram.", status: "Assigned: Sales", class: "bot" }
      ]
    },
    chatbot: {
      title: "Chatbot Automation",
      badge: "No-Code Conversational Flow Builder",
      items: [
        { avatar: "🤖", name: "24/7 AI Auto-Responder", msg: "Qualified lead requirement in off-hours.", status: "Automated Qualification", class: "bot" }
      ]
    },
    crm: {
      title: "Sales CRM",
      badge: "Kanban Lead Pipeline Management",
      items: [
        { avatar: "📊", name: "Apex Healthcare Deal", msg: "Stage moved to 'Proposal Sent'.", status: "Pipeline Updated", class: "assigned" }
      ]
    },
    campaign: {
      title: "Broadcast Campaigns",
      badge: "High-Speed Broadcast Engine",
      items: [
        { avatar: "🚀", name: "Diwali Offer Broadcast", msg: "Sent 25,000 messages. 98.4% Open Rate.", status: "Broadcast Completed", class: "bot" }
      ]
    },
    dynamic: {
      title: "Dynamic Experience",
      badge: "Personalized Customer Nurture",
      items: [
        { avatar: "⚡", name: "Re-engagement Trigger", msg: "Sent personalized catalog based on past order.", status: "Converted", class: "bot" }
      ]
    },
    workflow: {
      title: "Workflow Automation",
      badge: "Trigger-Based Drip Sequences",
      items: [
        { avatar: "⚙️", name: "Abandoned Cart Flow", msg: "Sent cart reminder link after 1 hour.", status: "Cart Recovered", class: "assigned" }
      ]
    },
    reports: {
      title: "Reports & Analytics",
      badge: "Real-Time Conversion Metrics",
      items: [
        { avatar: "📈", name: "Weekly Revenue Insight", msg: "Total WhatsApp UPI Revenue: ₹8,45,000", status: "Metrics Ready", class: "bot" }
      ]
    }
  };

  if (featureItems.length > 0) {
    featureItems.forEach(item => {
      item.addEventListener('click', () => {
        featureItems.forEach(fi => fi.classList.remove('active'));
        item.classList.add('active');

        const key = item.getAttribute('data-feature');
        const data = featurePreviews[key] || featurePreviews.inbox;

        if (mockupTitle) mockupTitle.textContent = data.title;
        if (mockupContent) {
          let rowsHtml = data.items.map(it => `
            <div class="pm-row">
              <div class="pm-avatar">${it.avatar}</div>
              <div class="pm-body">
                <strong>${it.name}</strong>
                <p>${it.msg}</p>
              </div>
              <span class="pm-status ${it.class}">${it.status}</span>
            </div>
          `).join('');

          mockupContent.innerHTML = `
            <div class="feature-preview-screen active">
              <div class="preview-badge">${data.badge}</div>
              <div class="preview-mock-chat">
                ${rowsHtml}
              </div>
            </div>
          `;
        }
      });
    });
  }

  // 4. FAQ Accordion Handler
  const faqQuestions = document.querySelectorAll('.faq-question');
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('active');

        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(fi => {
          fi.classList.remove('active');
          fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 5. Demo Modal Trigger
  const demoModal = document.getElementById('demoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalBtns = document.querySelectorAll('.open-demo-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (demoModal) demoModal.classList.add('active');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (demoModal) demoModal.classList.remove('active');
    });
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.remove('active');
      }
    });
  }

  // 6. Floating WhatsApp Widget Toggle
  const waTriggerBtn = document.getElementById('waTriggerBtn');
  const waChatWindow = document.getElementById('waChatWindow');
  const waCloseBtn = document.getElementById('waCloseBtn');

  if (waTriggerBtn && waChatWindow) {
    waTriggerBtn.addEventListener('click', () => {
      waChatWindow.classList.toggle('active');
    });
  }

  if (waCloseBtn && waChatWindow) {
    waCloseBtn.addEventListener('click', () => {
      waChatWindow.classList.remove('active');
    });
  }

  // 7. Mobile Menu Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const navList = document.querySelector('.nav-list');

  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // 8. Lead Capture Form Submission Handlers
  const demoRequestForm = document.getElementById('demoRequestForm');
  const modalDemoForm = document.getElementById('modalDemoForm');

  const handleFormSubmit = (e, formElement) => {
    e.preventDefault();
    const submitBtn = formElement.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>Submitting...</span>";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("🎉 Thank you! Your demo request has been submitted successfully. Our WhatsApp Automation expert will call you shortly on your mobile number.");
        formElement.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        if (demoModal) demoModal.classList.remove('active');
      }, 1000);
    }
  };

  if (demoRequestForm) {
    demoRequestForm.addEventListener('submit', (e) => handleFormSubmit(e, demoRequestForm));
  }

  if (modalDemoForm) {
    modalDemoForm.addEventListener('submit', (e) => handleFormSubmit(e, modalDemoForm));
  }
});
