import React, { useState } from "react";

function Analytics() {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isCampaignOpen, setIsCampaignOpen] = useState(false);
  const [isCampaignDetailsOpen, setIsCampaignDetailsOpen] = useState(false);
  const [isChannelOpen, setIsChannelOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isEngagementOpen, setIsEngagementOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .analytics-container {
            min-height: 100vh;
            padding: 30px;
            background: #f5f7fb;
            font-family: Arial, sans-serif;
          }

          .analytics-container h1 {
            margin: 0 0 25px;
            color: #1f2937;
            font-size: 28px;
            font-weight: 700;
          }

          .analytics-option {
            width: 100%;
            max-width: 850px;
            margin-bottom: 12px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          }

          .analytics-option > button {
            width: 100%;
            padding: 17px 20px;
            border: none;
            background: #ffffff;
            color: #1f2937;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            cursor: pointer;
            transition: background 0.2s ease;
          }

          .analytics-option > button:hover {
            background: #f3f4f6;
          }

          .sub-options {
            padding: 8px 20px 15px 40px;
            background: #fafbfc;
            border-top: 1px solid #eeeeee;
          }

          .sub-options p {
            margin: 2px 0;
            padding: 10px 12px;
            color: #5f6775;
            font-size: 14px;
            border-radius: 6px;
          }

          .sub-options p:hover {
            background: #eef2ff;
            color: #4f46e5;
          }

          .sub-options button {
            width: 100%;
            margin: 2px 0;
            padding: 10px 12px;
            border: none;
            background: transparent;
            color: #5f6775;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            border-radius: 6px;
            cursor: pointer;
          }

          .sub-options button:hover {
            background: #eef2ff;
            color: #4f46e5;
          }

          .nested-sub-options {
            margin: 4px 0 8px 18px;
            padding-left: 15px;
            border-left: 2px solid #e1e5eb;
          }

          .nested-sub-options p {
            padding: 8px 10px;
            font-size: 13px;
          }

          @media (max-width: 600px) {
            .analytics-container {
              padding: 20px;
            }

            .analytics-container h1 {
              font-size: 24px;
            }

            .sub-options {
              padding-left: 25px;
            }
          }
        `}
      </style>

      <div className="analytics-container">
        <h1>Analytics</h1>

        <div className="analytics-option">
          <button onClick={() => setIsOverviewOpen(!isOverviewOpen)}>
            Overview
          </button>

          {isOverviewOpen && (
            <div className="sub-options">
              <p>Total Activity</p>
              <p>Success Rate</p>
              <p>Failure Rate</p>
              <p>Overall Reach</p>
            </div>
          )}
        </div>

        <div className="analytics-option">
          <button onClick={() => setIsCampaignOpen(!isCampaignOpen)}>
            Campaign Performance
          </button>

          {isCampaignOpen && (
            <div className="sub-options">
              <p>Top Campaigns</p>
              <p>Campaign Comparison</p>

              <button
                onClick={() => setIsCampaignDetailsOpen(!isCampaignDetailsOpen)}>
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

        <div className="analytics-option">
          <button onClick={() => setIsChannelOpen(!isChannelOpen)}>
            Channel Performance
          </button>

          {isChannelOpen && (
            <div className="sub-options">
              <p>WhatsApp</p>
            </div>
          )}
        </div>

        <div className="analytics-option">
          <button onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}>
            Delivery Status
          </button>

          {isDeliveryOpen && (
            <div className="sub-options">
              <p>Successful</p>
              <p>Pending</p>
              <p>Bounced</p>
            </div>
          )}
        </div>

        <div className="analytics-option">
          <button onClick={() => setIsEngagementOpen(!isEngagementOpen)}>
            Engagement
          </button>

          {isEngagementOpen && (
            <div className="sub-options">
              <p>Open Rate</p>
              <p>Click Rate</p>
              <p>Response Rate</p>
            </div>
          )}
        </div>

        <div className="analytics-option">
          <button onClick={() => setIsReportsOpen(!isReportsOpen)}>
            Reports
          </button>

          {isReportsOpen && (
            <div className="sub-options">
              <p>Daily Report</p>
              <p>Weekly Report</p>
              <p>Monthly Report</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Analytics;