import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
  FaClock,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const contactCards = [
  {
    title: "Phone Support",
    detail: "+91 9848682327",
    note: "Priority voice support for urgent service concerns.",
    icon: <FaPhoneAlt />,
    actionLabel: "Call Now",
    action: () => window.open("tel:+919848682327", "_self"),
  },
  {
    title: "WhatsApp Support",
    detail: "+91 9848682327",
    note: "Quick assistance for follow-ups and status updates.",
    icon: <FaWhatsapp />,
    actionLabel: "Open WhatsApp",
    action: () =>
      window.open(
        "https://wa.me/919848682327",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    title: "Global Availability",
    detail: "24/7 Worldwide Coverage",
    note: "Regional teams available across major time zones.",
    icon: <FaGlobe />,
    actionLabel: "View Service Hours",
    action: null,
  },
];

const ContactSupportPage = () => {
  return (
    <div className="support-page">
      <style>
        {`
          .support-page {
            min-height: 100vh;
            padding: 32px 36px;
            box-sizing: border-box;
            background: #f4fbfa;
          }

          .support-header {
            margin-bottom: 28px;
          }

          .support-title-row {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 8px;
          }

          .support-title-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e2f7f3;
            color: #45a99b;
            font-size: 20px;
            border: 1px solid #cceee8;
          }

          .support-title {
            margin: 0;
            color: #3f625f;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.4px;
          }

          .support-subtitle {
            margin: 0;
            color: #8aa5a2;
            font-size: 14px;
            line-height: 1.6;
          }

          .support-container {
            background: #ffffff;
            border: 1px solid #dff0ed;
            border-radius: 18px;
            padding: 27px;
            box-shadow: 0 6px 24px rgba(91, 170, 158, 0.08);
          }

          .support-section-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 22px;
          }

          .support-section-heading h3 {
            margin: 0;
            color: #52736f;
            font-size: 18px;
            font-weight: 700;
          }

          .support-section-heading span {
            color: #9ab3b0;
            font-size: 12px;
          }

          .support-cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .support-card {
            position: relative;
            padding: 22px;
            background: #ffffff;
            border: 1px solid #e0efed;
            border-radius: 15px;
            transition: all 0.25s ease;
            overflow: hidden;
          }

          .support-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #9bd8ce;
          }

          .support-card:hover {
            transform: translateY(-4px);
            border-color: #c5e7e1;
            box-shadow: 0 12px 28px rgba(101, 180, 167, 0.13);
          }

          .support-card-top {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 19px;
          }

          .support-card-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eaf8f5;
            color: #62b5a8;
            font-size: 17px;
            border: 1px solid #d6eee9;
            flex-shrink: 0;
          }

          .support-card-title {
            margin: 0;
            color: #597773;
            font-size: 15px;
            font-weight: 700;
          }

          .support-card-detail {
            margin: 0 0 9px;
            color: #60807c;
            font-size: 16px;
            font-weight: 700;
          }

          .support-card-note {
            min-height: 42px;
            margin: 0 0 20px;
            color: #91a7a4;
            font-size: 13px;
            line-height: 1.6;
          }

          .support-button {
            width: 100%;
            padding: 11px 14px;
            border: 1px solid #bfe5de;
            border-radius: 9px;
            background: #e7f8f4;
            color: #4fa397;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.2s ease;
          }

          .support-button:hover {
            background: #d8f2ed;
            border-color: #a9dcd4;
            box-shadow: 0 5px 12px rgba(102, 181, 168, 0.13);
            transform: translateY(-1px);
          }

          .support-availability {
            width: 100%;
            box-sizing: border-box;
            padding: 10px 14px;
            border-radius: 9px;
            background: #f0faf8;
            border: 1px solid #dcefeb;
            color: #82a19d;
            font-size: 13px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .support-status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #79c5a9;
            box-shadow: 0 0 0 4px #e5f6ef;
          }

          @media (max-width: 1000px) {
            .support-cards {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 700px) {
            .support-page {
              padding: 24px 18px;
            }

            .support-container {
              padding: 20px;
            }

            .support-cards {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 500px) {
            .support-page {
              padding: 20px 14px;
            }

            .support-container {
              padding: 16px;
              border-radius: 14px;
            }

            .support-title {
              font-size: 23px;
            }

            .support-title-icon {
              width: 43px;
              height: 43px;
            }

            .support-section-heading span {
              display: none;
            }

            .support-card {
              padding: 19px;
            }
          }
        `}
      </style>

      <div className="support-header">
        <div className="support-title-row">
          <div className="support-title-icon">
            <FaHeadset />
          </div>

          <h2 className="support-title">Contact Support</h2>
        </div>

        <p className="support-subtitle">
          Reach the support team through your preferred channel.
        </p>
      </div>

      <div className="support-container">
        <div className="support-section-heading">
          <h3>Support Channels</h3>
          <span>Choose an option below</span>
        </div>

        <div className="support-cards">
          {contactCards.map((card) => (
            <div className="support-card" key={card.title}>
              <div className="support-card-top">
                <div className="support-card-icon">
                  {card.icon}
                </div>

                <h4 className="support-card-title">
                  {card.title}
                </h4>
              </div>

              <p className="support-card-detail">
                {card.detail}
              </p>

              <p className="support-card-note">
                {card.note}
              </p>

              {card.action ? (
                <button
                  className="support-button"
                  onClick={card.action}
                >
                  {card.actionLabel}
                  <FaArrowRight size={11} />
                </button>
              ) : (
                <div className="support-availability">
                  <span className="support-status-dot"></span>
                  <FaClock size={12} />
                  <span>Always available</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;

