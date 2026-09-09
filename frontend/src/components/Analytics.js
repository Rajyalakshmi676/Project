import React, { useEffect, useRef, useState } from "react";

function Analytics() {
  const [openSection, setOpenSection] = useState(null);
  const [isCampaignDetailsOpen, setIsCampaignDetailsOpen] = useState(false);

  const analyticsContainerRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? null : section
    );

    // Close Campaign Details when switching away from Campaign
    if (section !== "campaign") {
      setIsCampaignDetailsOpen(false);
    }
  };

  // Close opened section when clicking outside the Analytics options
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        analyticsContainerRef.current &&
        !analyticsContainerRef.current.contains(event.target)
      ) {
        setOpenSection(null);
        setIsCampaignDetailsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .analytics-container {
            min-height: 100vh;
            padding: 40px;
            background: linear-gradient(
              135deg,
              #f5f7ff 0%,
              #f8faff 45%,
              #fdf8ff 100%
            );
            font-family: "Inter", "Segoe UI", Arial, sans-serif;
          }

          .analytics-container h1 {
            margin: 0 0 30px;
            color: #202938;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          /* OPTIONS AREA */
          .analytics-options {
            width: 100%;
            max-width: 900px;
          }

          .analytics-option {
            position: relative;
            width: 100%;
            margin-bottom: 16px;
            background: #ffffff;
            border: 1px solid #e4e8f2;
            border-radius: 14px;
            overflow: hidden;
            box-shadow:
              0 2px 5px rgba(79, 70, 229, 0.04),
              0 8px 20px rgba(31, 41, 55, 0.05);
            transition:
              box-shadow 0.2s ease,
              border-color 0.2s ease;
          }

          .analytics-option:hover {
            border-color: #d7dcf2;
            box-shadow:
              0 4px 8px rgba(79, 70, 229, 0.07),
              0 12px 25px rgba(31, 41, 55, 0.08);
          }

          /* MAIN BUTTON */
          .analytics-option > button {
            position: relative;
            width: 100%;
            padding: 19px 50px 19px 26px;
            border: none;
            background: #ffffff;
            color: #263247;
            font-size: 16px;
            font-weight: 600;
            font-family: inherit;
            text-align: left;
            cursor: pointer;
            transition:
              background 0.2s ease,
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .analytics-option > button::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(
              180deg,
              #6366f1,
              #8b5cf6
            );
            opacity: 0.85;
          }

          .analytics-option > button::after {
            content: "›";
            position: absolute;
            right: 22px;
            top: 50%;
            transform: translateY(-50%);
            color: #8b93a7;
            font-size: 23px;
            font-weight: 400;
            transition:
              transform 0.2s ease,
              color 0.2s ease;
          }

          .analytics-option > button:hover {
            background: linear-gradient(
              90deg,
              #fafaff,
              #ffffff
            );
            color: #4f46e5;
            padding-left: 30px;
          }

          .analytics-option > button:hover::after {
            color: #6366f1;
            transform: translateY(-50%) translateX(4px);
          }

          /* DIFFERENT OPTION COLORS */

          .overview-option > button::before {
            background: linear-gradient(
              180deg,
              #6366f1,
              #8b5cf6
            );
          }

          .campaign-option > button::before {
            background: linear-gradient(
              180deg,
              #ec4899,
              #f472b6
            );
          }

          .channel-option > button::before {
            background: linear-gradient(
              180deg,
              #06b6d4,
              #3b82f6
            );
          }

          .delivery-option > button::before {
            background: linear-gradient(
              180deg,
              #10b981,
              #34d399
            );
          }

          .engagement-option > button::before {
            background: linear-gradient(
              180deg,
              #f59e0b,
              #fbbf24
            );
          }

          .reports-option > button::before {
            background: linear-gradient(
              180deg,
              #8b5cf6,
              #a78bfa
            );
          }

          /* SUB OPTIONS */

          .sub-options {
            padding: 11px 22px 17px 42px;
            background: linear-gradient(
              135deg,
              #fafbff,
              #f8faff
            );
            border-top: 1px solid #edf0f6;
          }

          .sub-options p {
            position: relative;
            margin: 4px 0;
            padding: 11px 14px;
            color: #626b7d;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.5;
            border-radius: 8px;
            transition:
              background 0.2s ease,
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .sub-options p::before {
            content: "•";
            margin-right: 9px;
            color: #8b5cf6;
            font-size: 14px;
          }

          .sub-options p:hover {
            background: linear-gradient(
              90deg,
              #f1efff,
              #faf9ff
            );
            color: #5b4acb;
            padding-left: 18px;
          }

          .sub-options p:hover::before {
            color: #ec4899;
          }

          /* CAMPAIGN DETAILS BUTTON */

          .sub-options button {
            position: relative;
            width: 100%;
            margin: 4px 0;
            padding: 11px 40px 11px 14px;
            border: none;
            background: transparent;
            color: #626b7d;
            font-size: 14px;
            font-weight: 600;
            font-family: inherit;
            text-align: left;
            border-radius: 8px;
            cursor: pointer;
            transition:
              background 0.2s ease,
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .sub-options button::before {
            content: "▸";
            margin-right: 9px;
            color: #6366f1;
            font-size: 12px;
          }

          .sub-options button::after {
            content: "›";
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #9aa2b2;
            font-size: 19px;
            transition:
              transform 0.2s ease,
              color 0.2s ease;
          }

          .sub-options button:hover {
            background: linear-gradient(
              90deg,
              #f1efff,
              #faf9ff
            );
            color: #5b4acb;
            padding-left: 18px;
          }

          .sub-options button:hover::before {
            color: #ec4899;
          }

          .sub-options button:hover::after {
            color: #6366f1;
            transform: translateY(-50%) translateX(4px);
          }

          /* NESTED CAMPAIGN DETAILS */

          .nested-sub-options {
            margin: 5px 0 10px 18px;
            padding: 8px 10px 8px 17px;
            background: #ffffff;
            border-left: 3px solid #a78bfa;
            border-radius: 0 10px 10px 0;
            box-shadow:
              0 2px 7px rgba(99, 102, 241, 0.05);
          }

          .nested-sub-options p {
            padding: 9px 12px;
            margin: 2px 0;
            color: #70798b;
            font-size: 13px;
            font-weight: 500;
            border-radius: 7px;
            transition:
              background 0.2s ease,
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .nested-sub-options p::before {
            content: "•";
            margin-right: 8px;
            color: #a78bfa;
          }

          .nested-sub-options p:hover {
            background: #f6f3ff;
            color: #5b4acb;
            padding-left: 16px;
          }

          .nested-sub-options p:hover::before {
            color: #ec4899;
          }

          /* RESPONSIVE */

          @media (max-width: 900px) {
            .analytics-container {
              padding: 30px;
            }

            .analytics-options {
              max-width: 100%;
            }
          }

          @media (max-width: 600px) {
            .analytics-container {
              padding: 22px 16px;
            }

            .analytics-container h1 {
              margin-bottom: 22px;
              font-size: 25px;
            }

            .analytics-option {
              margin-bottom: 12px;
              border-radius: 11px;
            }

            .analytics-option > button {
              padding: 17px 45px 17px 22px;
              font-size: 15px;
            }

            .analytics-option > button:hover {
              padding-left: 25px;
            }

            .analytics-option > button::after {
              right: 17px;
            }

            .sub-options {
              padding: 9px 14px 14px 25px;
            }

            .sub-options p,
            .sub-options button {
              font-size: 13px;
            }

            .nested-sub-options {
              margin-left: 12px;
              padding-left: 12px;
            }
          }

          @media (max-width: 400px) {
            .analytics-container {
              padding: 18px 12px;
            }

            .analytics-container h1 {
              font-size: 23px;
            }

            .analytics-option > button {
              padding: 15px 40px 15px 20px;
            }

            .sub-options {
              padding-left: 20px;
            }
          }
        `}
      </style>

      <div className="analytics-container">
        <h1>Analytics</h1>

        <div
          className="analytics-options"
          ref={analyticsContainerRef}
        >
          {/* OVERVIEW */}
          <div className="analytics-option overview-option">
            <button onClick={() => toggleSection("overview")}>
              Overview
            </button>

            {openSection === "overview" && (
              <div className="sub-options">
                <p>Total Activity</p>
                <p>Success Rate</p>
                <p>Failure Rate</p>
                <p>Overall Reach</p>
              </div>
            )}
          </div>

          {/* CAMPAIGN PERFORMANCE */}
          <div className="analytics-option campaign-option">
            <button onClick={() => toggleSection("campaign")}>
              Campaign Performance
            </button>

            {openSection === "campaign" && (
              <div className="sub-options">
                <p>Top Campaigns</p>
                <p>Campaign Comparison</p>

                <button
                  onClick={() =>
                    setIsCampaignDetailsOpen(
                      (current) => !current
                    )
                  }
                >
                  Campaign Details
                </button>

                {isCampaignDetailsOpen && (
                  <div className="nested-sub-options">
                    <p>Campaign Name</p>
                    <p>Created Date & Time</p>
                    <p>Status</p>
                    <p>Performance</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CHANNEL PERFORMANCE */}
          <div className="analytics-option channel-option">
            <button onClick={() => toggleSection("channel")}>
              Channel Performance
            </button>

            {openSection === "channel" && (
              <div className="sub-options">
                <p>WhatsApp</p>
              </div>
            )}
          </div>

          {/* DELIVERY STATUS */}
          <div className="analytics-option delivery-option">
            <button onClick={() => toggleSection("delivery")}>
              Delivery Status
            </button>

            {openSection === "delivery" && (
              <div className="sub-options">
                <p>Successful</p>
                <p>Pending</p>
                <p>Bounced</p>
              </div>
            )}
          </div>

          {/* ENGAGEMENT */}
          <div className="analytics-option engagement-option">
            <button onClick={() => toggleSection("engagement")}>
              Engagement
            </button>

            {openSection === "engagement" && (
              <div className="sub-options">
                <p>Open Rate</p>
                <p>Click Rate</p>
                <p>Response Rate</p>
              </div>
            )}
          </div>

          {/* REPORTS */}
          <div className="analytics-option reports-option">
            <button onClick={() => toggleSection("reports")}>
              Reports
            </button>

            {openSection === "reports" && (
              <div className="sub-options">
                <p>Daily Report</p>
                <p>Weekly Report</p>
                <p>Monthly Report</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;

