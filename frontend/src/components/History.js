import React, { useState } from "react";

function History() {
  const [isMessageHistoryOpen, setIsMessageHistoryOpen] = useState(false);
  const [isConversationHistoryOpen, setIsConversationHistoryOpen] = useState(false);
  const [isCampaignHistoryOpen, setIsCampaignHistoryOpen] = useState(false);
  const [isTemplateHistoryOpen, setIsTemplateHistoryOpen] = useState(false);
  const [isMediaHistoryOpen, setIsMediaHistoryOpen] = useState(false);
  const [isCallHistoryOpen, setIsCallHistoryOpen] = useState(false);
  const [isActivityHistoryOpen, setIsActivityHistoryOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .history-container {
          min-height: 100vh;
          padding: 35px;
          background: #f5f7fb;
          font-family: Arial, Helvetica, sans-serif;
        }

        .history-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .history-header {
          margin-bottom: 30px;
        }

        .history-header h1 {
          margin: 0 0 8px 0;
          font-size: 30px;
          font-weight: 700;
          color: #1f2937;
        }

        .history-header p {
          margin: 0;
          font-size: 15px;
          color: #6b7280;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .history-option {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .history-option:hover {
          border-color: #d1d5db;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
        }

        .history-button {
          width: 100%;
          min-height: 64px;
          padding: 0 20px;
          border: none;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          color: #1f2937;
          font-size: 16px;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .history-button:hover {
          background: #f9fafb;
        }

        .history-button-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .history-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #f0f4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          font-size: 17px;
          font-weight: 700;
        }

        .history-arrow {
          font-size: 14px;
          color: #6b7280;
          transition: transform 0.25s ease;
        }

        .history-arrow.open {
          transform: rotate(180deg);
        }

        .sub-options {
          padding: 4px 20px 16px 72px;
          background: #ffffff;
          border-top: 1px solid #f0f0f0;
        }

        .sub-option {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 42px;
          padding: 8px 12px 8px 20px;
          margin-top: 5px;
          border-radius: 7px;
          color: #6b7280;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sub-option::before {
          content: "";
          position: absolute;
          left: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #9ca3af;
          transition: all 0.2s ease;
        }

        .sub-option:hover {
          color: #4f46e5;
          background: #f5f7ff;
          padding-left: 24px;
        }

        .sub-option:hover::before {
          background: #4f46e5;
        }

        @media (max-width: 768px) {
          .history-container {
            padding: 20px;
          }

          .history-header h1 {
            font-size: 26px;
          }

          .history-button {
            min-height: 58px;
            padding: 0 15px;
          }

          .history-icon {
            width: 34px;
            height: 34px;
          }

          .sub-options {
            padding-left: 55px;
            padding-right: 15px;
          }
        }

        @media (max-width: 480px) {
          .history-container {
            padding: 15px;
          }

          .history-header {
            margin-bottom: 20px;
          }

          .history-header h1 {
            font-size: 24px;
          }

          .history-button {
            font-size: 14px;
          }

          .history-button-left {
            gap: 10px;
          }

          .history-icon {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .sub-options {
            padding-left: 48px;
          }

          .sub-option {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="history-container">
        <div className="history-wrapper">

          <div className="history-header">
            <h1>History</h1>
            <p>View and manage your messaging and activity history.</p>
          </div>

          <div className="history-list">

            {/* Message History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsMessageHistoryOpen(!isMessageHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">M</div>
                  <span>Message History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isMessageHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isMessageHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Sent Messages</div>
                  <div className="sub-option">Delivered Messages</div>
                  <div className="sub-option">Read Messages</div>
                  <div className="sub-option">Failed Messages</div>
                </div>
              )}
            </div>

            {/* Conversation History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsConversationHistoryOpen(!isConversationHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">C</div>
                  <span>Conversation History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isConversationHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isConversationHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Open Conversations</div>
                  <div className="sub-option">Closed Conversations</div>
                  <div className="sub-option">Archived Conversations</div>
                </div>
              )}
            </div>

            {/* Campaign History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsCampaignHistoryOpen(!isCampaignHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">C</div>
                  <span>Campaign History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isCampaignHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isCampaignHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Completed Campaigns</div>
                  <div className="sub-option">Failed Campaigns</div>
                  <div className="sub-option">Cancelled Campaigns</div>
                </div>
              )}
            </div>

            {/* Template History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsTemplateHistoryOpen(!isTemplateHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">T</div>
                  <span>Template History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isTemplateHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isTemplateHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Sent Templates</div>
                  <div className="sub-option">Approved Templates</div>
                  <div className="sub-option">Rejected Templates</div>
                </div>
              )}
            </div>

            {/* Media History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsMediaHistoryOpen(!isMediaHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">M</div>
                  <span>Media History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isMediaHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isMediaHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Images</div>
                  <div className="sub-option">Videos</div>
                  <div className="sub-option">Documents</div>
                  <div className="sub-option">Audio</div>
                </div>
              )}
            </div>

            {/* Call History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsCallHistoryOpen(!isCallHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">C</div>
                  <span>Call History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isCallHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isCallHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Incoming Calls</div>
                  <div className="sub-option">Outgoing Calls</div>
                  <div className="sub-option">Missed Calls</div>
                </div>
              )}
            </div>

            {/* Activity History */}
            <div className="history-option">
              <button
                className="history-button"
                onClick={() =>
                  setIsActivityHistoryOpen(!isActivityHistoryOpen)
                }
              >
                <div className="history-button-left">
                  <div className="history-icon">A</div>
                  <span>Activity History</span>
                </div>

                <span
                  className={`history-arrow ${
                    isActivityHistoryOpen ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isActivityHistoryOpen && (
                <div className="sub-options">
                  <div className="sub-option">Login Activity</div>
                  <div className="sub-option">Message Activity</div>
                  <div className="sub-option">Campaign Activity</div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default History;

