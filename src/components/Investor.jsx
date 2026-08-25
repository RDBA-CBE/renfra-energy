// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { ChevronDown, ChevronUp, Check, Info, FileText, Download, X } from "lucide-react";

// // ─── Inner component that uses useSearchParams ───────────────────────────────
// function NewInvestorSectionInner() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   // --- Tab States ---
//   const [activeTab, setActiveTab] = useState(() => {
//     return searchParams.get("tab") || "drhp";
//   });
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Sync activeTab when the URL ?tab= param changes
//   useEffect(() => {
//     const tabFromUrl = searchParams.get("tab");
//     if (tabFromUrl) {
//       setActiveTab(tabFromUrl);
//       const newTabData = tabsData.find((t) => t.id === tabFromUrl);
//       if (newTabData && newTabData.accordions.length > 0) {
//         setExpandedSections({ [newTabData.accordions[0].id]: true });
//       }
//       if (tabFromUrl === "compliance") {
//         setOpenComplianceSectionId("intimation-board-meeting");
//         setExpandedComplianceYears({});
//         setExpandedComplianceQuarters({});
//         setActiveComplianceYear(null);
//         setActiveComplianceQuarter(null);
//       }
//     }
//   }, [searchParams]);

//   // When user clicks a tab, update the URL
//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId);
//     router.push(`/investor-relations?tab=${tabId}`, { scroll: false });
//     if (tabId === "compliance") {
//       setOpenComplianceSectionId("intimation-board-meeting");
//       setExpandedComplianceYears({});
//       setExpandedComplianceQuarters({});
//       setActiveComplianceYear(null);
//       setActiveComplianceQuarter(null);
//     } else {
//       const newTabData = tabsData.find((t) => t.id === tabId);
//       if (newTabData && newTabData.accordions.length > 0) {
//         setExpandedSections({ [newTabData.accordions[0].id]: true });
//       }
//     }
//   };

//   const [expandedSections, setExpandedSections] = useState({
//     "drhp-disclaimer": true,
//   });

//   const [openComplianceSectionId, setOpenComplianceSectionId] = useState("intimation-board-meeting");

//   const [expandedComplianceYears, setExpandedComplianceYears] = useState({
//     "fy-26-27": true,
//     "fy-25-26": true,
//   });
//   const [expandedComplianceQuarters, setExpandedComplianceQuarters] = useState({});

//   const [activeComplianceYear, setActiveComplianceYear] = useState(null);
//   const [activeComplianceQuarter, setActiveComplianceQuarter] = useState(null);

//   const [previewDoc, setPreviewDoc] = useState(null);
//   const [toastMessage, setToastMessage] = useState(null);

//   const [activeVideo, setActiveVideo] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // --- Sub-accordion expanded state for fin-diary ---
//   const [expandedSubAccordions, setExpandedSubAccordions] = useState({});

//   const toggleSubAccordion = (id) => {
//     setExpandedSubAccordions((prev) => {
//       const isOpen = !!prev[id];
//       return isOpen ? {} : { [id]: true };
//     });
//   };

//   // --- Corporate Video Dataset (SEBI AVS Segment) ---
//   const sebiVideos = [
//     {
//       id: "sebi-avs-english",
//       language: "english",
//       englishTitle: "Welcome to the Renfra.",
//       brandText: "Renfra",
//       subtitle: "Welcome to the Renfra",
//       isHindi: false,
//       videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//       description: "Renfra."
//     },
//     {
//       id: "sebi-avs-hindi",
//       language: "english",
//       englishTitle: "Welcome to the Renfra",
//       brandText: "Renfra",
//       brandTextHindi: "डिजिटेक",
//       subtitle: "Welcome to the Renfra",
//       isHindi: false,
//       videoUrl: "https://www.w3schools.com/html/movie.mp4",
//       description: "Renfra"
//     }
//   ];

//   // --- Special Nested Compliance Data Model ---
//   const nestedComplianceData = [
//     {
//       id: "intimation-board-meeting",
//       title: "INTIMATION OF BOARD MEETING",
//       years: [
//         {
//           id: "fy-26-27",
//           label: "FY 26-27",
//           quarters: [
//             {
//               id: "fy-26-27-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-meet-26-27-q1",
//                 name: "Intimation of Board Meeting dt May 14, 2026",
//                 filename: "Intimation_of_Board_Meeting_14_May_2026.pdf",
//                 src: "/documents/images/1.pdf",
//               }
//             }
//           ]
//         },
//         {
//           id: "fy-25-26",
//           label: "FY 25-26",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-meet-25-26-q1",
//                 name: "Intimation of Board Meeting dt October 25, 2025",
//                 filename: "Intimation_of_Board_Meeting_25_Oct_2025.pdf",
//                 src: "/documents/compliance/Intimation_of_Board_Meeting_25_Oct_2025.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q2",
//               label: "Q2",
//               document: {
//                 id: "doc-meet-25-26-q2",
//                 name: "Intimation of Board Meeting dt January 12, 2026",
//                 filename: "Intimation_of_Board_Meeting_12_Jan_2026.pdf",
//                 src: "/documents/compliance/Intimation_of_Board_Meeting_12_Jan_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q3",
//               label: "Q3",
//               document: {
//                 id: "doc-meet-25-26-q3",
//                 name: "Intimation of Board Meeting dt February 28, 2026",
//                 filename: "Intimation_of_Board_Meeting_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Intimation_of_Board_Meeting_28_Feb_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q4",
//               label: "Q4",
//               document: {
//                 id: "doc-meet-25-26-q4",
//                 name: "Intimation of Board Meeting dt February 28, 2026",
//                 filename: "Intimation_of_Board_Meeting_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Intimation_of_Board_Meeting_28_Feb_2026.pdf",
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "outcome-board-meeting",
//       title: "OUTCOME OF BOARD MEETING",
//       years: [
//         {
//           id: "fy-26-27",
//           label: "FY 26-27",
//           quarters: [
//             {
//               id: "fy-26-27-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-outcome-26-27-q1",
//                 name: "Outcome of Board Meeting dt May 14, 2026",
//                 filename: "Outcome_of_Board_Meeting_14_May_2026.pdf",
//                 src: "/documents/compliance/Outcome_of_Board_Meeting_14_May_2026.pdf",
//               }
//             }
//           ]
//         },
//         {
//           id: "fy-25-26",
//           label: "FY 25-26",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-outcome-25-26-q1",
//                 name: "Outcome of Board Meeting dt October 25, 2025",
//                 filename: "Outcome_of_Board_Meeting_25_Oct_2025.pdf",
//                 src: "/documents/compliance/Outcome_of_Board_Meeting_25_Oct_2025.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q2",
//               label: "Q2",
//               document: {
//                 id: "doc-outcome-25-26-q2",
//                 name: "Outcome of Board Meeting dt January 12, 2026",
//                 filename: "Outcome_of_Board_Meeting_12_Jan_2026.pdf",
//                 src: "/documents/compliance/Outcome_of_Board_Meeting_12_Jan_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q3",
//               label: "Q3",
//               document: {
//                 id: "doc-outcome-25-26-q3",
//                 name: "Outcome of Board Meeting dt February 28, 2026",
//                 filename: "Outcome_of_Board_Meeting_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Outcome_of_Board_Meeting_28_Feb_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q4",
//               label: "Q4",
//               document: {
//                 id: "doc-outcome-25-26-q4",
//                 name: "Outcome of Board Meeting dt February 28, 2026",
//                 filename: "Outcome_of_Board_Meeting_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Outcome_of_Board_Meeting_28_Feb_2026.pdf",
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "quarterly-compliances",
//       title: "QUARTERLY COMPLIANCES",
//       years: [
//         {
//           id: "fy-26-27",
//           label: "FY 26-27",
//           quarters: [
//             {
//               id: "fy-26-27-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-quarterly-26-27-q1",
//                 name: "Quarterly Compliance dt May 14, 2026",
//                 filename: "Quarterly_Compliance_14_May_2026.pdf",
//                 src: "/documents/compliance/Quarterly_Compliance_14_May_2026.pdf",
//               }
//             }
//           ]
//         },
//         {
//           id: "fy-25-26",
//           label: "FY 25-26",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-quarterly-25-26-q1",
//                 name: "Quarterly Compliance dt October 25, 2025",
//                 filename: "Quarterly_Compliance_25_Oct_2025.pdf",
//                 src: "/documents/compliance/Quarterly_Compliance_25_Oct_2025.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q2",
//               label: "Q2",
//               document: {
//                 id: "doc-quarterly-25-26-q2",
//                 name: "Quarterly Compliance dt January 12, 2026",
//                 filename: "Quarterly_Compliance_12_Jan_2026.pdf",
//                 src: "/documents/compliance/Quarterly_Compliance_12_Jan_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q3",
//               label: "Q3",
//               document: {
//                 id: "doc-quarterly-25-26-q3",
//                 name: "Quarterly Compliance dt February 28, 2026",
//                 filename: "Quarterly_Compliance_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Quarterly_Compliance_28_Feb_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q4",
//               label: "Q4",
//               document: {
//                 id: "doc-quarterly-25-26-q4",
//                 name: "Quarterly Compliance dt February 28, 2026",
//                 filename: "Quarterly_Compliance_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Quarterly_Compliance_28_Feb_2026.pdf",
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "reg-30-intimations",
//       title: "REG 30 INTIMATIONS",
//       years: [
//         {
//           id: "fy-26-27",
//           label: "FY 26-27",
//           quarters: [
//             {
//               id: "fy-26-27-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-reg30-26-27-q1",
//                 name: "Reg 30 Intimation dt May 14, 2026",
//                 filename: "Reg_30_Intimation_14_May_2026.pdf",
//                 src: "/documents/compliance/Reg_30_Intimation_14_May_2026.pdf",
//               }
//             }
//           ]
//         },
//         {
//           id: "fy-25-26",
//           label: "FY 25-26",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-reg30-25-26-q1",
//                 name: "Reg 30 Intimation dt October 25, 2025",
//                 filename: "Reg_30_Intimation_25_Oct_2025.pdf",
//                 src: "/documents/compliance/Reg_30_Intimation_25_Oct_2025.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q2",
//               label: "Q2",
//               document: {
//                 id: "doc-reg30-25-26-q2",
//                 name: "Reg 30 Intimation dt January 12, 2026",
//                 filename: "Reg_30_Intimation_12_Jan_2026.pdf",
//                 src: "/documents/compliance/Reg_30_Intimation_12_Jan_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q3",
//               label: "Q3",
//               document: {
//                 id: "doc-reg30-25-26-q3",
//                 name: "Reg 30 Intimation dt February 28, 2026",
//                 filename: "Reg_30_Intimation_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Reg_30_Intimation_28_Feb_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q4",
//               label: "Q4",
//               document: {
//                 id: "doc-reg30-25-26-q4",
//                 name: "Reg 30 Intimation dt February 28, 2026",
//                 filename: "Reg_30_Intimation_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Reg_30_Intimation_28_Feb_2026.pdf",
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "earnings-call",
//       title: "EARNINGS CALL",
//       years: [
//         {
//           id: "fy-26-27",
//           label: "FY 26-27",
//           quarters: [
//             {
//               id: "fy-26-27-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-earnings-26-27-q1",
//                 name: "Earnings Call dt May 14, 2026",
//                 filename: "Earnings_Call_14_May_2026.pdf",
//                 src: "/documents/compliance/Earnings_Call_14_May_2026.pdf",
//               }
//             }
//           ]
//         },
//         {
//           id: "fy-25-26",
//           label: "FY 25-26",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Q1",
//               document: {
//                 id: "doc-earnings-25-26-q1",
//                 name: "Earnings Call dt October 25, 2025",
//                 filename: "Earnings_Call_25_Oct_2025.pdf",
//                 src: "/documents/compliance/Earnings_Call_25_Oct_2025.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q2",
//               label: "Q2",
//               document: {
//                 id: "doc-earnings-25-26-q2",
//                 name: "Earnings Call dt January 12, 2026",
//                 filename: "Earnings_Call_12_Jan_2026.pdf",
//                 src: "/documents/compliance/Earnings_Call_12_Jan_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q3",
//               label: "Q3",
//               document: {
//                 id: "doc-earnings-25-26-q3",
//                 name: "Earnings Call dt February 28, 2026",
//                 filename: "Earnings_Call_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Earnings_Call_28_Feb_2026.pdf",
//               }
//             },
//             {
//               id: "fy-25-26-q4",
//               label: "Q4",
//               document: {
//                 id: "doc-earnings-25-26-q4",
//                 name: "Earnings Call dt February 28, 2026",
//                 filename: "Earnings_Call_28_Feb_2026.pdf",
//                 src: "/documents/compliance/Earnings_Call_28_Feb_2026.pdf",
//               }
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "general-meeting-documents",
//       title: "GENERAL MEETING DOCUMENTS",
//       years: [
//         {
//           id: "fy-25-26",
//           label: "POSTAL BALLOT",
//           quarters: [
//             {
//               id: "fy-25-26-q1",
//               label: "Postal Ballot Dated April 23,2026",
//               documents: [
//                 {
//                   id: "doc-agm-25-26-q1",
//                   name: "Intimation-Postal Ballot Notice-April 23, 2026",
//                   filename: "Intimation_Postal_Ballot_Notice_April_23_2026.pdf",
//                   src: "/documents/compliance/Intimation_Postal_Ballot_Notice_April_23_2026.pdf",
//                 },
//                 {
//                   id: "doc-agm-25-26-q2",
//                   name: "Postal Ballot Document 2",
//                   filename: "Postal_Ballot_Document_2.pdf",
//                   src: "/documents/compliance/Postal_Ballot_Document_2.pdf",
//                 },
//                 {
//                   id: "doc-agm-25-26-q3",
//                   name: "Postal Ballot Document 3",
//                   filename: "Postal_Ballot_Document_3.pdf",
//                   src: "/documents/compliance/Postal_Ballot_Document_3.pdf",
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ];

//   // --- Corporate Dataset ---
//   const tabsData = [
//     {
//       id: "drhp",
//       label: "DRHP DOCUMENTS",
//       title: "DRHP DOCUMENTS",
//       accordions: [
//         {
//           id: "drhp-disclaimer",
//           title: "DISCLAIMER TO VIEW DRHP",
//           items: [
//             {
//               id: "drhp-disclaimer-1",
//               name: "Disclaimer to view DRHP",
//               filename: "Disclaimer_to_view_DRHP.pdf",
//               src: "/documents/drhp/Disclaimer_to_view_DRHP.pdf",
//             }
//           ]
//         },
//         {
//           id: "drhp-industry",
//           title: "INDUSTRY REPORT",
//           items: [
//             {
//               id: "drhp-industry-1",
//               name: "Industry Report",
//               filename: "Comprehensive_Industry_Report_Enterprise_SaaS.pdf",
//               src: "/documents/drhp/Comprehensive_Industry_Report_Enterprise_SaaS.pdf",
//             }
//           ]
//         },
//         {
//           id: "drhp-dues",
//           title: "OUTSTANDING DUES TO MATERIAL CREDITORS",
//           items: [
//             {
//               id: "drhp-dues-1",
//               name: "Outstanding Due to Material Creditors",
//               filename: "Trade_Payables_and_Creditors_Ledger.pdf",
//               src: "/documents/drhp/Trade_Payables_and_Creditors_Ledger.pdf",
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "management",
//       label: "MANAGEMENT",
//       title: "MANAGEMENT",
//       accordions: [
//         {
//           id: "mgmt-board",
//           title: "Composition of Committees",
//           items: [
//             {
//               id: "mgmt-board-1",
//               name: "Composition of Committees",
//               filename: "Board_of_Directors_Directory.pdf",
//               src: "/documents/management/Board_of_Directors_Directory.pdf",
//             }
//           ]
//         },
//         {
//           id: "mgmt-committees",
//           title: "Brief Profiles of all Directors",
//           items: [
//             {
//               id: "mgmt-committees-1",
//               name: "Brief Profiles of all Directors",
//               filename: "Board_Committees_Charters.pdf",
//               src: "/documents/management/Board_Committees_Charters.pdf",
//             }
//           ]
//         },
//         {
//           id: "mgmt-brief",
//           title: "Brief Profiles of all KMP and SMP",
//           items: [
//             {
//               id: "mgmt-brief-1",
//               name: "Brief Profiles of all KMP and SMP",
//               filename: "Board_Committees_Charters.pdf",
//               src: "/documents/management/Board_Committees_Charters.pdf",
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "reg46",
//       label: "REG 46",
//       title: "REG 46",
//       accordions: [
//         {
//           id: "reg46-disclosures",
//           title: "Regulation 46",
//           items: [
//             {
//               id: "reg46-disclosures-1",
//               name: "Regulation 46",
//               filename: "LODR_Regulation_46_Verification.pdf",
//               src: "/documents/reg46/LODR_Regulation_46_Verification.pdf",
//             }
//           ]
//         },
//         {
//           id: "reg46-moa",
//           title: "MOA",
//           items: [
//             {
//               id: "reg46-moa-1",
//               name: "MOA",
//               filename: "LODR_Regulation_46_Verification.pdf",
//               src: "/documents/reg46/LODR_Regulation_46_Verification.pdf",
//             }
//           ]
//         },
//         {
//           id: "reg46-aoa",
//           title: "AOA",
//           items: [
//             {
//               id: "reg46-aoa-1",
//               name: "MOA",
//               filename: "LODR_Regulation_46_Verification.pdf",
//               src: "/documents/reg46/LODR_Regulation_46_Verification.pdf",
//             }
//           ]
//         },
//         {
//           id: "reg46-policies",
//           title: "POLICIES",
//           items: [
//             { id: "reg46-policies-1", name: "Dividend Distribution Policy", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-2", name: "Policy for evaluation of performance of board", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-3", name: "Whistleblower Vigil Mechanism Policy", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-4", name: "Policy for identification of outstanding material Litigation", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-5", name: "Policy for determining Material Subsidiaries", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-6", name: "PT Policy Pace Digitek", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-7", name: "Risk Management Policy", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-8", name: "Policy on preservation of documents or Archival Policy", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-9", name: "Code of conduct to regulate, monitor and report trading by its employees and other connected persons", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-10", name: "Code of Conduct for Directors and Sm", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-11", name: "Nomination Remuneration policy", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-12", name: "Code of Practices and Procedures for Fair Disclosures of UPSI", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-13", name: "Policy on determination of Materiality for Disclouser of event or information", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-14", name: "Policy on Familiarization program for Independent Directors Pace", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-15", name: "Policy on Succession plan for appointment of directors and senior management Pace", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-policies-16", name: "Policy for operating guideline for determination of legitimate purpose Pace", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-familiar",
//           title: "Familarisation program for ID",
//           items: [
//             { id: "reg46-familiar-1", name: "Familarisation program for ID", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-terms",
//           title: "Terms and conditions of appointment of Independent Directors",
//           items: [
//             { id: "reg46-terms-1", name: "Terms and conditions of appointment of Independent Directors", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-fin",
//           title: "Financial line items of our Group Companies",
//           items: [
//             { id: "reg46-fin-1", name: "Financial line items of our Group Companies", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-brief",
//           title: "BRIEF PROFILE OF BOARD OF DIRECTORS INCLUDING DIRECTORSHIP AND FULL-TIME POSITIONS IN BODY CORPORATES",
//           items: [
//             { id: "reg46-brief-1", name: "BRIEF PROFILE OF BOARD OF DIRECTORS INCLUDING DIRECTORSHIP AND FULL-TIME POSITIONS IN BODY CORPORATES", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-board",
//           title: "COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS",
//           items: [
//             { id: "reg46-board-1", name: "COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-email",
//           title: "EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS",
//           items: [
//             { id: "reg46-email-1", name: "EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-info",
//           title: "CONTACT INFORMATION OF THE DESIGNATED OFFICIALS OF THE LISTED ENTITY WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES",
//           items: [
//             { id: "reg46-info-1", name: "CONTACT INFORMATION OF THE DESIGNATED OFFICIALS OF THE LISTED ENTITY WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-annual",
//           title: "Annual Returns",
//           items: [
//             { id: "reg46-annual-1", name: "Annual Returns 2021-22", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-annual-2", name: "Annual Returns 2022-23", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-annual-3", name: "Annual Returns 2023-24", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-annual-4", name: "Annual Returns 2024-25", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" },
//             { id: "reg46-annual-5", name: "Annual Returns 2025-26", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-detail",
//           title: "Details of the Business",
//           items: [
//             { id: "reg46-detail-1", name: "Details of the Business", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         },
//         {
//           id: "reg46-mech",
//           title: "Whistle Mechanism",
//           items: [
//             { id: "reg46-mech-1", name: "Whistle Mechanism", filename: "LODR_Regulation_46_Verification.pdf", src: "/documents/reg46/LODR_Regulation_46_Verification.pdf" }
//           ]
//         }
//       ]
//     },
//     {
//       id: "financials",
//       label: "FINANCIALS",
//       title: "FINANCIALS",
//       accordions: [
//         {
//           id: "fin-audited",
//           title: "Annual Reports - Standalone",
//               items: [
//                 { id: "fin-diary-renfra-2", name: "Annual Report 2022-23", filename: "Renfra_Annual_Report_Doc2.pdf", src: "/images/document/financials/renfra/Annual Report 2022-23.pdf"},
//                 { id: "fin-diary-renfra-2", name: "Annual Report 2023-24", filename: "Renfra_Annual_Report_Doc2.pdf", src: "/images/document/financials/renfra/Annual Report 2023-24.pdf"},
//                 { id: "fin-diary-renfra-3", name: "Annual Report 2024-25", filename: "Renfra_Annual_Report_Doc3.pdf", src: "/images/document/financials/renfra/Annual Report 2024-25.pdf"}
//               ]
//         },
//         {
//           id: "fin-annualrepo",
//           title: "Annual Reports - Consolidated",
//           items: []
//         },
//         // ─── CHANGED: Annual Reports - Subsidiary now has 3 subitems ───────────
//         {
//           id: "fin-diary",
//           title: "Annual Reports - Subsidiary",
//           subAccordions: [
//             {
//               id: "fin-diary-speed",
//               title: "Speed Mectronics Pvt Ltd",
//               items: [
//                 { id: "fin-diary-speed-1", name: "Annual Report 2022-23", filename: "Speed_Mectronics_Doc1.pdf", src: "/images/document/financials/speed/Annual Report 2022-23.pdf" },
//                 { id: "fin-diary-speed-1", name: "Annual Report 2023-24", filename: "Speed_Mectronics_Doc1.pdf", src: "/images/document/financials/speed/Annual Report 2023-24.pdf" },
//                 { id: "fin-diary-speed-1", name: "Annual Report 2024-25", filename: "Speed_Mectronics_Doc1.pdf", src: "/images/document/financials/speed/Annual Report 2024-25.pdf" }
//               ]
//             },
//             {
//               id: "fin-diary-derrick",
//               title: "Derrick Lifters India Pvt Ltd",
//               items: [
//                 { id: "fin-diary-derrick-1", name: "Annual Report 2024-25", filename: "Derrick_Lifters_Doc1.pdf", src: "/images/document/financials/dli/Annual Report 2024-25.pdf" }
//               ]
//             }
//           ],
//           items: []
//         },
//         {
//           id: "fin-rein",
//           title: "Reinstated Financials",
//           items: []
//         },
//         {
//           id: "fin-result",
//           title: "Financial Results",
//           items: []
//         }
//       ]
//     },
//     {
//       id: "investor",
//       label: "INVESTOR CONTACTS",
//       title: "INVESTOR CONTACTS",
//       accordions: [
//         {
//           id: "inv-compliance",
//           title: "Details Of Designated Officials For Investor Grievances",
//           items: [
//             {
//               id: "inv-compliance-1",
//               name: "Details Of Designated Officials For Investor Grievances",
//               filename: "Grievance_Contacts_and_Registrar_Coordinates.pdf",
//               src: "/documents/investor/Grievance_Contacts_and_Registrar_Coordinates.pdf",
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "sebi",
//       label: "SEBI AVS",
//       title: "SEBI AVS",
//       accordions: []
//     },
//     {
//       id: "compliance",
//       label: "STOCK EXCHANGE COMPLIANCE",
//       title: "STOCK EXCHANGE COMPLIANCE",
//       accordions: []
//     },
//     {
//       id: "newspaper",
//       label: "NEWS PAPER PUBLICATION",
//       title: "Press Release",
//       accordions: [
//         {
//           id: "news-press",
//           title: "Press Release",
//           items: [
//             { id: "news-press-1", name: "The file name has to be 'Renfra India Limited Secures \u20b9185.87 Crore Operation & Maintenance Order from Tata Teleservices'", filename: "IPO_Newspaper_Notice_English.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_English.pdf" },
//             { id: "news-press-2", name: "SECI Order Intimation Sd", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-3", name: "Publication of Financials in Newspaper_Intimation_Sd", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-4", name: "Press Release \u2013 Q3 Financial Results", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-5", name: "Publication of Financials _Q3 Results", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-6", name: "Financials Press Release_Q3 Results", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-7", name: "Newspaper Publications of Financials \u2013 Q3 Results", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-8", name: "Renfra_FY26_Q3", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" },
//             { id: "news-press-9", name: "Press Release-Order Intimation_LPPL", filename: "IPO_Newspaper_Notice_Hindi.pdf", src: "/documents/newspaper/IPO_Newspaper_Notice_Hindi.pdf" }
//           ]
//         }
//       ]
//     }
//   ];

//   // --- Find current Active Tab Data ---
//   const activeTabData = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

//   const toggleSection = (id) => {
//     setExpandedSections((prev) => {
//       const isCurrentlyOpen = !!prev[id];
//       return isCurrentlyOpen ? {} : { [id]: true };
//     });
//   };

//   const toggleComplianceSection = (sectionId) => {
//     setOpenComplianceSectionId((prev) => {
//       return prev === sectionId ? null : sectionId;
//     });
//     setExpandedComplianceYears({});
//     setExpandedComplianceQuarters({});
//     setActiveComplianceYear(null);
//     setActiveComplianceQuarter(null);
//   };

//   const toggleComplianceYear = (yearId) => {
//     const isCurrentlyExpanded = !!expandedComplianceYears[yearId];

//     if (isCurrentlyExpanded) {
//       setExpandedComplianceYears((prev) => ({
//         ...prev,
//         [yearId]: false,
//       }));
//       setExpandedComplianceQuarters({});
//       setActiveComplianceYear(null);
//       setActiveComplianceQuarter(null);
//     } else {
//       setExpandedComplianceYears({ [yearId]: true });
//       setExpandedComplianceQuarters({});
//       setActiveComplianceYear(yearId);
//       setActiveComplianceQuarter(null);
//     }
//   };

//   const toggleComplianceQuarter = (quarterId) => {
//     const isCurrentlyOpen = !!expandedComplianceQuarters[quarterId];
//     if (isCurrentlyOpen) {
//       setExpandedComplianceQuarters({});
//       setActiveComplianceQuarter(null);
//     } else {
//       setExpandedComplianceQuarters({ [quarterId]: true });
//       setActiveComplianceQuarter(quarterId);
//       setActiveComplianceYear(null);
//     }
//   };

//   // const triggerDownload = (doc) => {
//   //   const link = document.createElement("a");
//   //   link.href = doc.src;
//   //   link.download = doc.filename;
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);

//   //   setToastMessage(`Downloading: ${doc.filename}`);
//   //   setTimeout(() => {
//   //     setToastMessage(null);
//   //   }, 3000);
//   // };

// const triggerDownload = (doc) => {
//   window.open(doc.src, "_blank");
// };

//   return (
//     <div className="min-h-screen bg-white text-[#333333] antialiased flex flex-col">
//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 z-50 bg-[#222222] text-white px-5 py-3 rounded shadow-lg flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase animate-fade-in border border-gray-700">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
//           <span>{toastMessage}</span>
//         </div>
//       )}

//       <div className="max-w-[1350px] w-full mx-auto px-4 md:px-8 py-6 md:py-10 flex-grow flex flex-col bg-white">

//         {/* Navigation */}
//         <nav className="mb-8 md:mb-12 border-b border-b-transparent lg:border-gray-100 pb-2">
//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-start flex-wrap gap-y-3 sm:gap-y-4 text-xs md:text-sm font-black select-none no-scrollbar">
//             {tabsData.map((tab, idx) => {
//               const isTabActive = activeTab === tab.id;

//               return (
//                 <div key={tab.id} className="flex items-start self-start">
//                   {idx > 0 && (
//                     <span className="text-gray-300 font-normal mx-3 select-none text-3xl md:text-4xl">
//                       |
//                     </span>
//                   )}

//                   <button
//                     id={`tab-button-${tab.id}`}
//                     onClick={() => handleTabChange(tab.id)}
//                     className={`flex flex-col justify-start uppercase transition-all duration-200 outline-none hover:opacity-85 text-left text-[18px] sm:text-[20px] md:text-lg lg:text-[20px] leading-tight cursor-pointer ${
//                       isTabActive
//                         ? "bg-gradient-to-r from-[#329ACD] to-[#3AB257] bg-clip-text text-transparent font-black"
//                         : "text-[#293E52] font-semibold"
//                     }`}
//                   >
                    // {tab.id === "drhp" && (
                    //   <>
                    //     <span>DRHP</span>
                    //     <span>DOCUMENTS</span>
                    //   </>
                    // )}
                    // {tab.id === "rhp" && (
                    //   <>
                    //     <span>RHP</span>
                    //     <span>DOCUMENTS</span>
                    //   </>
                    // )}
                    // {tab.id === "management" && <span>MANAGEMENT</span>}
                    // {tab.id === "reg46" && (
                    //   <>
                    //     <span>REG</span>
                    //     <span>46</span>
                    //   </>
                    // )}
                    // {tab.id === "financials" && <span>FINANCIALS</span>}
                    // {tab.id === "investor" && (
                    //   <>
                    //     <span>INVESTOR</span>
                    //     <span>CONTACTS</span>
                    //   </>
                    // )}
                    // {tab.id === "sebi" && (
                    //   <>
                    //     <span>SEBI</span>
                    //     <span>AVS</span>
                    //   </>
                    // )}
                    // {tab.id === "compliance" && (
                    //   <>
                    //     <span>STOCK EXCHANGE</span>
                    //     <span>COMPLIANCE</span>
                    //   </>
                    // )}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Mobile Dropdown Navigation */}
//           <div className="block lg:hidden relative w-full mb-6 select-none">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="sm:w-[500px] md:w-[700px] bg-[#EDEDED] text-gray-700 font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-6 flex justify-between items-center rounded-lg border border-gray-300 focus:outline-none transition-colors hover:bg-[#E2E2E2]"
//             >
//               <span>{activeTabData.label}</span>
//               <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
//             </button>
//             {isDropdownOpen && (
//               <div className="sm:w-[500px] md:w-[700px] absolute left-0 right-0 mt-1 z-40 bg-[#EDEDED] border border-gray-300 rounded-lg p-5 flex flex-col gap-3 shadow-md">
//                 {tabsData.map((tab) => {
//                   const isTabActive = activeTab === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => {
//                         handleTabChange(tab.id);
//                         setIsDropdownOpen(false);
//                       }}
//                       className={`text-left uppercase font-bold tracking-wider text-[11px] sm:text-xs transition-colors duration-150 focus:outline-none py-1 ${
//                         isTabActive ? "text-[#293E52]" : "text-gray-500 hover:text-gray-700"
//                       }`}
//                     >
//                       {tab.label}
//                     </button>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Title */}
//         <header className="mb-8">
//           <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-gray-800">
//             {activeTabData.title}
//           </h1>
//         </header>

//         {/* Main Content */}
//         <main className="flex-grow w-full max-w-[1250px]">
//           {activeTab === "sebi" ? (
//             /* --- SEBI AVS SIDE-BY-SIDE VIDEO LAYOUT --- */
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[1200px]">
//               {sebiVideos.map((video) => (
//                 <div
//                   key={video.id}
//                   onClick={() => {
//                     setActiveVideo(video);
//                     setIsPlaying(true);
//                   }}
//                   className="bg-[#6B6B6B] hover:bg-[#606060] transition-colors duration-200 aspect-[4/3] w-full relative flex flex-col justify-between p-6 sm:p-8 cursor-pointer group shadow-sm select-none border border-gray-300"
//                 >
//                   <div className="text-center">
//                     <p className="text-black text-xs sm:text-sm font-semibold leading-relaxed tracking-normal max-w-[90%] mx-auto antialiased">
//                       {video.englishTitle}
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-center justify-center my-auto relative">
//                     <div className="flex items-center gap-1">
//                       <div className="flex flex-col text-left leading-none">
//                         <span className="text-black font-black text-md sm:text-lg tracking-wider block leading-none">
//                           {video.brandText}
//                         </span>
//                         {video.isHindi ? (
//                           <span className="text-black font-extrabold text-[10px] sm:text-[11px] block text-gray-800">
//                             {video.brandTextHindi}
//                           </span>
//                         ) : (
//                           <span className="text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest block text-gray-800">
//                             DIGITEK
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//                       <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full border-2 border-white bg-black/10 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
//                         <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current ml-1" viewBox="0 0 24 24">
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-center mt-auto">
//                     <p className="text-black text-sm sm:text-base font-bold tracking-wide">
//                       {video.subtitle}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           ) : (
//             /* --- STANDARD ACCORDION CONTENT FOR ALL OTHER TABS --- */
//             <div className="space-y-3 w-full">
//               {activeTabData.accordions.map((section) => {
//                 const isExpanded = !!expandedSections[section.id];
//                 return (
//                   <div key={section.id} className="border-b border-gray-200">
//                     <button
//                       id={`accordion-trigger-${section.id}`}
//                       onClick={() => toggleSection(section.id)}
//                       className={`w-full text-left px-5 sm:px-6 py-4 flex justify-between items-center transition-colors duration-150 focus:outline-none group rounded-xl font-semibold ${
//                         isExpanded
//                           ? "bg-[#d5caca]"
//                           : "bg-[#F4F4F4] hover:bg-[#E2E2E2]"
//                       }`}
//                     >
//                       <span className={`text-sm sm:text-sm md:text-base lg:text-base uppercase tracking-wider leading-tight ${
//                         isExpanded
//                           ? "text-[#000] font-black"
//                           : "text-[#3e5973] font-medium"
//                       }`}>
//                         {section.title}
//                       </span>
//                       <div>
//                         {isExpanded ? (
//                           <ChevronUp className="w-4 h-4 text-white transition-transform stroke-[2px]" />
//                         ) : (
//                           <ChevronDown className="w-4 h-4 text-gray-600 transition-transform stroke-[2px]" />
//                         )}
//                       </div>
//                     </button>

//                     {isExpanded && (
//                       <div className="bg-[#d5caca] divide-y divide-gray-200 rounded-xl overflow-hidden transition-all duration-200">
//                         {/* Sub-accordion rendering (for Annual Reports - Subsidiary) */}
//                         {section.subAccordions ? (
//                           section.subAccordions.map((sub) => {
//                             const isSubOpen = !!expandedSubAccordions[sub.id];
//                             return (
//                               <div key={sub.id}>
//                                 <button
//                                   onClick={() => toggleSubAccordion(sub.id)}
//                                   className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors duration-150 focus:outline-none group ${
//                                     isSubOpen ? "bg-[#c4b8b8]" : "bg-[#d5caca] hover:bg-[#ccc0c0]"
//                                   }`}
//                                 >
//                                   <span className={`text-xs sm:text-sm uppercase tracking-wider leading-tight ${
//                                     isSubOpen ? "text-[#000] font-black" : "text-[#3e5973] font-semibold"
//                                   }`}>
//                                     {sub.title}
//                                   </span>
//                                   {isSubOpen ? (
//                                     <ChevronUp className="w-4 h-4 text-gray-700 stroke-[2px]" />
//                                   ) : (
//                                     <ChevronDown className="w-4 h-4 text-gray-600 stroke-[2px]" />
//                                   )}
//                                 </button>
//                                 {isSubOpen && (
//                                   <div className="bg-[#c4b8b8] divide-y divide-gray-300">
//                                     {sub.items.map((doc) => (
//                                       <div
//                                         key={doc.id}
//                                         onClick={() => triggerDownload(doc)}
//                                         className="px-8 py-3.5 flex items-center gap-3.5 cursor-pointer group select-none transition-colors hover:bg-[#bdb0b0]"
//                                       >
//                                         <svg
//                                           className="w-[14px] h-[14px] text-[#000] shrink-0 transition-transform group-hover:translate-y-[1px]"
//                                           viewBox="0 0 24 24"
//                                           fill="none"
//                                           stroke="currentColor"
//                                           strokeWidth="2.8"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                         >
//                                           <path d="M12 5v13M5 12l7 7 7-7" />
//                                           <path d="M4 21h16" />
//                                         </svg>
//                                         <span className="text-xs sm:text-sm font-bold text-[#000] underline decoration-transparent group-hover:decoration-[#293E52] transition-colors duration-200 leading-normal">
//                                           {doc.name}
//                                         </span>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })
//                         ) : (
//                           /* Standard download items */
//                           section.items.map((doc) => (
//                             <div
//                               key={doc.id}
//                               onClick={() => triggerDownload(doc)}
//                               className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors cursor-pointer group select-none"
//                             >
//                               <div className="flex items-start md:items-center text-left flex-1">
//                                 <div className="mt-0.5 md:mt-0 mr-3.5 flex items-center justify-center shrink-0">
//                                   <svg
//                                     className="w-[15px] h-[15px] text-[#000] transition-transform group-hover:translate-y-[1px]"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2.8"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   >
//                                     <path d="M12 5v13M5 12l7 7 7-7" />
//                                     <path d="M4 21h16" />
//                                   </svg>
//                                 </div>
//                                 <div className="space-y-0.5">
//                                   <span className="text-xs sm:text-sm font-bold text-[#000] underline decoration-transparent group-hover:decoration-[#293E52] transition-colors duration-200 leading-normal">
//                                     {doc.name}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </main>
//       </div>

//       {/* SEBI AVS Video Modal */}
//       {activeVideo && (
//         <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in">
//           <div className="bg-white rounded max-w-3xl w-full flex flex-col p-5 md:p-6 shadow-2xl relative">
//             <button
//               onClick={() => {
//                 setActiveVideo(null);
//                 setIsPlaying(false);
//               }}
//               className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black p-1.5 rounded-full z-15 transition-all"
//               aria-label="Close Playback"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <div className="bg-black aspect-video rounded overflow-hidden relative flex items-center justify-center mt-3 border border-gray-800">
//               {isPlaying ? (
//                 <video
//                   className="w-full h-full object-contain"
//                   src={activeVideo.videoUrl}
//                   controls
//                   autoPlay
//                   preload="auto"
//                 />
//               ) : (
//                 <div className="text-center text-gray-400 p-4">
//                   <p>Player stopped.</p>
//                 </div>
//               )}
//             </div>
//             <div className="mt-5 space-y-2">
//               <span className="text-[10px] font-mono tracking-widest text-[#293E52] uppercase font-extrabold block">
//                 SEBI Audio-Video Compliance Ingestion (AVS)
//               </span>
//               <h3 className="text-sm md:text-base font-extrabold text-gray-900 uppercase">
//                 {activeVideo.subtitle}
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                 {activeVideo.description}
//               </p>
//             </div>
//             <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
//               <button
//                 onClick={() => {
//                   setActiveVideo(null);
//                   setIsPlaying(false);
//                   setToastMessage(`Viewed ${activeVideo.subtitle} overview video.`);
//                   setTimeout(() => setToastMessage(null), 3000);
//                 }}
//                 className="bg-[#293E52] hover:bg-[#B53F00] text-white text-xs font-bold uppercase py-2 px-5 rounded transition-all active:scale-95"
//               >
//                 Done Viewing
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Document Preview Modal */}
//       {previewDoc && (
//         <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in">
//           <div className="bg-white rounded-md shadow-2xl max-w-2xl w-full flex flex-col max-h-[85vh] animate-slide-up border border-gray-100">
//             <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
//               <div className="flex items-center gap-2">
//                 <FileText className="w-4 h-4 text-[#293E52]" />
//                 <span className="text-[10px] font-mono tracking-widest text-[#293E52] uppercase font-bold">
//                   Document Preview Tool
//                 </span>
//               </div>
//               <button
//                 onClick={() => setPreviewDoc(null)}
//                 className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-all"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="p-6 md:p-8 overflow-y-auto w-full text-xs sm:text-sm text-gray-700 space-y-4 flex-1 scroll-smooth">
//               <div className="border-b border-gray-100 pb-4">
//                 <h3 className="text-sm md:text-base font-extrabold text-gray-900 uppercase tracking-tight">
//                   {previewDoc.name}
//                 </h3>
//                 <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 font-mono">
//                   Target File: <span className="font-bold underline">{previewDoc.filename}</span>
//                 </p>
//               </div>
//               <div className="bg-amber-50/75 border border-amber-200 p-3 sm:p-4 rounded flex gap-3 text-amber-900 text-[11px] sm:text-xs">
//                 <Info className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
//                 <div>
//                   <span className="font-bold uppercase tracking-wider block mb-0.5">Compliance Document</span>
//                   Click Download to save this document to your device.
//                 </div>
//               </div>
//             </div>
//             <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
//               <button
//                 onClick={() => {
//                   triggerDownload(previewDoc);
//                   setPreviewDoc(null);
//                 }}
//                 className="bg-[#293E52] hover:bg-[#B53F00] text-white text-[11px] md:text-xs font-extrabold uppercase px-5 py-2 rounded transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
//               >
//                 <Download className="w-4 h-4" />
//                 <span>Download file</span>
//               </button>
//               <button
//                 onClick={() => setPreviewDoc(null)}
//                 className="text-gray-500 hover:text-gray-800 border border-gray-300 bg-white hover:bg-gray-100 text-[11px] md:text-xs font-extrabold uppercase px-4 py-2 rounded transition-all"
//               >
//                 Close View
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── Outer exported component — same name, adds Suspense wrapper ─────────────
// export default function NewInvestorSection() {
//   return (
//     <Suspense
//       fallback={
//         <div className="min-h-screen flex justify-center items-center">
//           <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">Loading...</span>
//         </div>
//       }
//     >
//       <NewInvestorSectionInner />
//     </Suspense>
//   );
// }







"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, Info, FileText, Download, X } from "lucide-react";
import { axiosGet, BASE_URL } from "@/lib/api";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const slugify = (str = "") =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildFileSrc = (file) => {
  if (file.url) return file.url;
  if (file.file_path) return `${BASE_URL}${file.file_path}`;
  return "";
};

const buildFileName = (file) => {
  const safeName = file.file_name || "document";
  const ext = file.file_type ? `.${file.file_type}` : "";
  if (ext && safeName.toLowerCase().endsWith(ext.toLowerCase())) return safeName;
  return `${safeName}${ext}`;
};

// ─── Extract YouTube video ID from various URL formats ────────────────────────
const extractYouTubeId = (url = "") => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// ─── Check if a URL is a direct video file ───────────────────────────────────
const isDirectVideoUrl = (url = "") => {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(url);
};

const mapFiles = (files = []) =>
  (files || [])
    .filter((f) => f.active_status !== 0)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    .map((f) => ({
      id: f.data_uniq_id || slugify(f.file_name),
      name: f.file_name,
      filename: buildFileName(f),
      src: buildFileSrc(f),
      fileType: (f.file_type || "").toLowerCase().trim(),
      url: f.url || "",
      youtubeUrl: f.youtube_url || f.youtube_link || "",

      thumbnailPath: f.thumbnail_path
        ? `${BASE_URL}${f.thumbnail_path}`
        : "",

      thumbnailName: f.thumbnail_name || "",

      isUrlVideo:
        !f.file_type &&
        !!f.url
    }));

const mapCategoryNode = (node) => ({
  id: node.data_uniq_id || slugify(node.category_name),
  label: node.category_name || "",
  files: mapFiles(node.files),
  children: (node.children || [])
    .filter((c) => c.active_status !== 0)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    .map(mapCategoryNode),
});

const mapInvestorBlock = (block) => {
  const id = block.investor_id || slugify(block.investor_title);
  const label = (block.investor_title || "").toUpperCase();
  const tree = (block.data || [])
    .filter((n) => n.active_status !== 0)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    .map(mapCategoryNode);
  return { id, label, title: label, tree };
};

const transformTabsData = (apiJson) => {
  if (!apiJson || apiJson.action !== "success" || !Array.isArray(apiJson.data)) {
    return [];
  }
  return apiJson.data.map(mapInvestorBlock);
};



// ─── Determine how to render a video entry ───────────────────────────────────
// Returns: { type: "direct", src } | { type: "youtube", videoId } | { type: "none" }
const resolveVideoSource = (videoUrl = "", youtubeUrl = "") => {
  if (videoUrl && isDirectVideoUrl(videoUrl)) {
    return { type: "direct", src: videoUrl };
  }
  if (videoUrl) {
    const ytId = extractYouTubeId(videoUrl);
    if (ytId) return { type: "youtube", videoId: ytId };
  }
  if (youtubeUrl) {
    const ytId = extractYouTubeId(youtubeUrl);
    if (ytId) return { type: "youtube", videoId: ytId };
  }
  return { type: "none" };
};

// ─── Video Playback Modal ─────────────────────────────────────────────────────
function VideoModal({ video, onClose, onDone }) {
  const source = resolveVideoSource(video.videoUrl, video.youtubeUrl);

  return (
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded max-w-3xl w-full flex flex-col p-5 md:p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black p-1.5 rounded-full z-15 transition-all"
          aria-label="Close Playback"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-black aspect-video rounded overflow-hidden relative flex items-center justify-center mt-3 border border-gray-800">
          {source.type === "direct" && (
            <video
              className="w-full h-full object-contain"
              src={source.src}
              controls
              autoPlay
              preload="auto"
            />
          )}
          {source.type === "youtube" && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${source.videoId}?autoplay=1`}
              title={video.subtitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {source.type === "none" && (
            <div className="text-center text-gray-400 p-4">
              <p>No video source available.</p>
            </div>
          )}
        </div>

        <div className="mt-5 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#293E52] uppercase font-extrabold block">
            Video Content
          </span>
          <h3 className="text-sm md:text-base font-extrabold text-gray-900 uppercase">
            {video.subtitle}
          </h3>
          {video.description && (
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {video.description}
            </p>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onDone}
            className="bg-[#293E52] hover:bg-[#B53F00] text-white text-xs font-bold uppercase py-2 px-5 rounded transition-all active:scale-95"
          >
            Done Viewing
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Video Grid Card ──────────────────────────────────────────────────────────
function VideoCard({ video, onClick }) {
  const source = resolveVideoSource(video.videoUrl, video.youtubeUrl);
  const youtubeThumb =
    source.type === "youtube"
      ? `https://img.youtube.com/vi/${source.videoId}/hqdefault.jpg`
      : null;


  return (
    <div
      onClick={onClick}
      className="bg-[#6B6B6B] hover:bg-[#606060] transition-colors duration-200 h-[280px] sm:h-[300px] w-full relative flex flex-col justify-between p-4 cursor-pointer group shadow-sm select-none border border-gray-300 rounded-lg overflow-hidden"
    >
      {/* YouTube thumbnail as background if available */}
      {/* Uploaded thumbnail has highest priority */}
      {video.thumbnailPath ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity duration-200"
          style={{
            backgroundImage: `url(${video.thumbnailPath})`,
          }}
        />
      ) : youtubeThumb ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-200"
          style={{
            backgroundImage: `url(${youtubeThumb})`,
          }}
        />
      ) : null}




      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full border-2 border-white bg-black/20 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>


      <div className="relative z-10 text-center mt-auto">
        <p className="text-white text-sm sm:text-base font-bold tracking-wide">
          {video.subtitle}
        </p>
        {/* {source.type === "youtube" && (
          <span className="inline-block mt-1 text-[10px] font-mono uppercase tracking-widest text-red-600 font-bold bg-white/60 px-2 py-0.5 rounded">
            YouTube
          </span>
        )} */}
      </div>
    </div>
  );
}

// ─── Collect all video-type files from the full category tree ─────────────────
// File is a "video" if its fileType is "video", "mp4", "webm", "ogg", "mov", "avi"
const VIDEO_FILE_TYPES = new Set(["video", "mp4", "webm", "ogg", "mov", "avi", "mkv"]);

const isVideoFile = (file) => {
  if (!file) return false;

  const ft = (file.fileType || "").toLowerCase();

  if (ft && VIDEO_FILE_TYPES.has(ft)) {
    return true;
  }

  if (isDirectVideoUrl(file.src || file.url || "")) {
    return true;
  }

  // API sends URL-only videos with file_type = null
  if (!ft && file.url) {
    return true;
  }

  return false;
};

const collectVideoFilesFromTree = (nodes = []) => {
  const results = [];
  const walk = (nodeList) => {
    for (const node of nodeList) {
      for (const f of node.files || []) {
        if (isVideoFile(f)) {
          results.push({
            id: f.id,
            englishTitle: f.name,
            brandText: f.name,
            brandTextHindi: "",
            subtitle: f.name,
            isHindi: false,
            videoUrl:
              f.fileType === "video"
                ? (f.src || "")
                : "",

            youtubeUrl:
              (!f.fileType && f.url)
                ? f.url
                : (f.youtubeUrl || ""),
            thumbnailPath: f.thumbnailPath || "",
            thumbnailName: f.thumbnailName || "",
            description: "",
            position: 0,
            fileType: f.fileType,
          });
        }
      }
      if (node.children && node.children.length > 0) {
        walk(node.children);
      }
    }
  };
  walk(nodes);
  return results;
};

// ─── Recursive Category Tree Renderer ────────────────────────────────────────
function CategoryTree({ nodes, depth, onDownload, onVideoPlay }) {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (nodes && nodes.length > 0) {
      setOpenId(nodes[0].id);
    }
  }, [nodes]);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!nodes || nodes.length === 0) return null;

  const headerPadding =
    depth === 0
      ? "px-5 sm:px-6 py-4"
      : depth === 1
        ? "px-6 sm:px-8 py-3.5"
        : "pl-10 sm:pl-14 pr-6 py-3.5";

  const headerTextSize =
    depth === 0
      ? "text-sm sm:text-sm md:text-base lg:text-base uppercase tracking-wider font-bold"
      : depth === 1
        ? "text-xs sm:text-sm md:text-base font-bold tracking-wide"
        : "sm:text-xs md:text-sm lg:text-sm font-semibold tracking-wide";

  const activeHeaderTextClass = depth === 0 ? "text-[#000] font-black" : "text-[#000] font-extrabold";
  const inactiveHeaderTextClass = depth === 0 ? "text-[#3e5973] font-medium" : "text-gray-700";

  const wrapperClass =
    depth === 0
      ? ""
      : depth === 1
        ? "border-b border-gray-100 last:border-0"
        : "";

  const headerBgInactive = depth === 0 ? "bg-[#F4F4F4] hover:bg-[#E2E2E2]" : "bg-white hover:bg-gray-50";

  return (
    <div className={depth === 0 ? "w-full  space-y-4" : "divide-y divide-gray-100 bg-white"}>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0;
        // For files display: only show non-video files in the document tree
        const docFiles = (node.files || []).filter((f) => {
          const ft = (f.fileType || "").toLowerCase();

          return ft === "pdf";
        });
        const hasFiles = docFiles.length > 0;
        const isExpandable = hasChildren || hasFiles;
        const isOpen = openId === node.id;

        if (!isExpandable) {
          return (
            <div
              key={node.id}
              className={`${headerPadding} flex justify-between items-center ${depth === 0 ? "rounded-xl bg-[#F4F4F4]" : ""}`}
            >
              <span className={`${headerTextSize} ${inactiveHeaderTextClass}`}>{node.label}</span>
            </div>
          );
        }

        return (
          <div key={node.id} className={`${wrapperClass} ${depth === 0 ? "" : ""}`}>
            <button
              id={`tree-trigger-${node.id}`}
              onClick={() => toggle(node.id)}
              className={`w-full text-left ${headerPadding} flex justify-between items-center transition-colors duration-150 focus:outline-none group rounded-xl ${isOpen ? "bg-[#d5caca]" : headerBgInactive}`}
            >
              <span className={`${headerTextSize} ${isOpen ? activeHeaderTextClass : inactiveHeaderTextClass}`}>
                {node.label}
              </span>
              <div>
                {isOpen ? (
                  <ChevronUp
                    className={`stroke-[1.8px] ${depth === 0 ? "w-4 h-4 text-white" : depth === 1 ? "w-4 h-4 text-white" : "w-3.5 h-3.5 text-white"}`}
                  />
                ) : (
                  <ChevronDown
                    className={`stroke-[1.5px] ${depth === 0 ? "w-4 h-4 text-gray-600" : depth === 1 ? "w-4 h-4 text-gray-400" : "w-3.5 h-3.5 text-gray-500"}`}
                  />
                )}
              </div>
            </button>

            {isOpen && (
              <div className={depth === 0 ? "bg-white mt-2 mb-2" : ""}>
                {hasChildren && (
                  <CategoryTree
                    nodes={node.children}
                    depth={depth + 1}
                    onDownload={onDownload}
                    onVideoPlay={onVideoPlay}
                  />
                )}

                {hasFiles && (
                  <div
                    className={
                      depth === 0
                        ? "bg-[#d5caca] divide-y divide-gray-200 rounded-xl overflow-hidden transition-all duration-200"
                        : "bg-[#d5caca] border-t border-gray-200 rounded-xl"
                    }
                  >
                    {docFiles.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => onDownload(doc)}
                        className={
                          depth === 0
                            ? "px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors cursor-pointer group select-none"
                            : "pl-12 sm:pl-20 pr-6 py-4 flex items-center justify-between gap-3 transition-colors cursor-pointer group select-none border-b border-gray-300 last:border-b-0"
                        }
                      >
                        <div className="text-left flex items-center gap-1.5 focus:outline-none">
                          {depth === 0 ? (
                            <>
                              <div className="mt-0.5 md:mt-0 mr-3.5 flex items-center justify-center shrink-0">
                                <svg
                                  className="w-[15px] h-[15px] text-[#000] transition-transform group-hover:translate-y-[1px]"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 5v13M5 12l7 7 7-7" />
                                  <path d="M4 21h16" />
                                </svg>
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#000] underline decoration-transparent group-hover:decoration-[#293E52] transition-colors duration-200 leading-normal">
                                {doc.name}
                              </span>
                            </>
                          ) : (
                            <span className="text-[11px] sm:text-[13px] text-[#000] font-medium group-hover:text-[#293E52] underline decoration-transparent group-hover:decoration-[#293E52] transition-colors leading-relaxed">
                              ↓ {doc.name}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Videos Section ───────────────────────────────────────────────────────────
// Renders the full videos section from API + any video-type files found in document tree
function VideosSection({ treeVideoFiles, loading, error, onPlay }) {
  // Merge: API videos first, then any video files from the doc tree (dedupe by id)

  const allVideos = treeVideoFiles;

  if (loading) {
    return (
      <div className="py-6 text-center text-gray-400 text-sm font-medium tracking-wider uppercase">
        Loading videos...
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className="py-6 text-center text-red-500 text-sm font-medium">
        Failed to load videos: {error}
      </div>
    );
  }

  if (!loading && allVideos.length === 0) {
    return (
      <div className="py-6 text-center text-gray-400 text-sm font-medium tracking-wider uppercase">
        No videos available
      </div>
    );
  }

  return (
    // Always 2 columns on md+, 1 column on mobile
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[1200px]">
      {allVideos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onClick={() => onPlay(video)}
        />
      ))}
    </div>
  );
}

const hasDocumentTree = (nodes = []) => {
  return nodes.some((node) => {
    const hasDocs = (node.files || []).some((file) => {
      const type = (file.fileType || "").toLowerCase();
      return type === "pdf";
    });

    return (
      hasDocs ||
      hasDocumentTree(node.children || [])
    );
  });
};


// ─── Inner component that uses useSearchParams ───────────────────────────────
function NewInvestorSectionInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // --- Tab States ---
  const [activeTab, setActiveTab] = useState(() => {
    return searchParams.get("tab") || null;
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // --- Dynamic Tabs/Tree Data State ---
  const [tabsData, setTabsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const [toastMessage, setToastMessage] = useState(null);

  // --- VIDEO STATES ---
  const [activeVideo, setActiveVideo] = useState(null);


  // Fetch all tabs + full nested tree in one call
  const fetchTabsData = async (investorId) => {
    try {
      setLoading(true);
      setLoadError(null);
      const params = new URLSearchParams({
        web_sts: "1",
        active_status: "1",
        order_type: "asc",
        order_field: "created_date",
      });
      if (investorId) params.append("investor_id", investorId);

      const response = await axiosGet.get(
        `masters/investor/all-get/?${params.toString()}`
      );
      const transformed = transformTabsData(response.data);
      setTabsData(transformed);

      setActiveTab((prevTab) => {
        const stillExists = transformed.some((t) => t.id === prevTab);
        if (stillExists) return prevTab;
        return transformed.length > 0 ? transformed[0].id : null;
      });
    } catch (err) {
      console.error("[Tabs] API Error:", err);
      setLoadError(err.message || "Failed to load investor relations data");
    } finally {
      setLoading(false);
    }
  };
  console.log("transformed", tabsData)

  useEffect(() => {
    fetchTabsData();
  }, []);

  // Sync activeTab when URL ?tab= param changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.push(`/investor-relations?tab=${tabId}`, { scroll: false });
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab) || tabsData[0] || null;

  // Collect video-type files from the current tab's document tree
  const treeVideoFiles = activeTabData ? collectVideoFilesFromTree(activeTabData.tree) : [];

  const hasDocuments = activeTabData
    ? hasDocumentTree(activeTabData.tree)
    : false;


  const triggerDownload = (doc) => {
    if (!doc || !doc.src) {
      setToastMessage("File not available yet");
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    window.open(doc.src, "_blank", "noopener,noreferrer");
  };

  const handleVideoPlay = (video) => {
    setActiveVideo(video);
  };

  const handleVideoClose = () => {
    setActiveVideo(null);
  };

  const handleVideoDone = () => {
    const name = activeVideo?.subtitle || "video";
    setActiveVideo(null);
    setToastMessage(`Viewed ${name} overview video.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] antialiased flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#222222] text-white px-5 py-3 rounded shadow-lg flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase animate-fade-in border border-gray-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-[1350px] w-full mx-auto px-4 md:px-8 py-6 md:py-10 flex-grow flex flex-col bg-white">

        {/* Navigation */}
        <nav className="mb-8 md:mb-12 border-b border-b-transparent lg:border-gray-100 pb-2">
          {/* Desktop Navigation */}
          {/* <div className="hidden lg:flex items-start flex-wrap gap-y-3 sm:gap-y-4 text-xs md:text-sm font-black select-none no-scrollbar">
            {tabsData.map((tab, idx) => {
              const isTabActive = activeTab === tab.id;
              return (
                <div key={tab.id} className="flex items-start self-start">
                  {idx > 0 && (
                    <span className="text-gray-300 font-normal mx-3 select-none text-3xl md:text-4xl">|</span>
                  )}
                  <button
                    id={`tab-button-${tab.id}`}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex flex-col justify-start uppercase transition-all duration-200 outline-none hover:opacity-85 text-left text-[18px] sm:text-[20px] md:text-lg lg:text-[20px] leading-tight cursor-pointer ${isTabActive
                      ? "bg-gradient-to-r from-[#329ACD] to-[#3AB257] bg-clip-text text-transparent font-black"
                      : "text-[#293E52] font-semibold"
                      }`}
                  >
                    <>
                      {tab.label.toUpperCase().includes("DRHP") && (
                        <>
                          <span>DRHP</span>
                          <span>DOCUMENTS</span>
                        </>
                      )}

                      {tab.label === "RHP" && (
                        <>
                          <span>RHP</span>
                          <span>DOCUMENTS</span>
                        </>
                      )}

                      {tab.label === "MANAGEMENT" && <span>MANAGEMENT</span>}

                      {tab.label === "REG 46" && (
                        <>
                          <span>REG</span>
                          <span>46</span>
                        </>
                      )}

                      {tab.label === "FINANCIALS" && <span>FINANCIALS</span>}

                      {tab.label === "INVESTOR CONTACTS" && (
                        <>
                          <span>INVESTOR</span>
                          <span>CONTACTS</span>
                        </>
                      )}

                      {tab.label === "SEBI AVS" && (
                        <>
                          <span>SEBI</span>
                          <span>AVS</span>
                        </>
                      )}

                      {tab.label === "STOCK EXCHANGE COMPLIANCE" && (
                        <>
                          <span>STOCK EXCHANGE</span>
                          <span>COMPLIANCE</span>
                        </>
                      )}
                    </>                  </button>
                </div>
              );
            })}
          </div> */}

          <div className="hidden lg:flex items-start flex-wrap gap-y-3 sm:gap-y-4 text-xs md:text-sm font-black select-none no-scrollbar">
            {tabsData.map((tab, idx) => {
              const isTabActive = activeTab === tab.id;

              // Split the title into words
              const words = tab.label.trim().split(/\s+/);

              let firstLine = "";
              let secondLine = "";

              switch (words.length) {
                case 1:
                  firstLine = words[0];
                  break;

                case 2:
                  firstLine = words[0];
                  secondLine = words[1];
                  break;

                case 3:
                  firstLine = words.slice(0, 2).join(" ");
                  secondLine = words[2];
                  break;

                case 4:
                  firstLine = words.slice(0, 2).join(" ");
                  secondLine = words.slice(2).join(" ");
                  break;

                default:
                  // 5 or more words
                  firstLine = words.slice(0, 2).join(" ");
                  secondLine = words.slice(2).join(" ");
              }

              return (
                <div key={tab.id} className="flex items-start self-start">
                  {idx > 0 && (
                    <span className="text-gray-300 font-normal mx-3 select-none text-3xl md:text-4xl">
                      |
                    </span>
                  )}

                  <button
                    id={`tab-button-${tab.id}`}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex flex-col justify-start uppercase transition-all duration-200 outline-none hover:opacity-85 text-left text-[18px] sm:text-[20px] md:text-lg lg:text-[20px] leading-tight cursor-pointer ${isTabActive
                      ? "bg-gradient-to-r from-[#329ACD] to-[#3AB257] bg-clip-text text-transparent font-black"
                      : "text-[#293E52] font-semibold"
                      }`}
                  >
                    <span>{firstLine}</span>
                    {secondLine && <span>{secondLine}</span>}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Dropdown Navigation */}
          <div className="block lg:hidden relative w-full mb-6 select-none">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="sm:w-[500px] md:w-[700px] bg-[#EDEDED] text-gray-700 font-bold uppercase tracking-wider text-xs sm:text-sm py-4 px-6 flex justify-between items-center rounded-lg border border-gray-300 focus:outline-none transition-colors hover:bg-[#E2E2E2]"
            >
              <span>{activeTabData ? activeTabData.label : ""}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="sm:w-[500px] md:w-[700px] absolute left-0 right-0 mt-1 z-40 bg-[#EDEDED] border border-gray-300 rounded-lg p-5 flex flex-col gap-3 shadow-md">
                {tabsData.map((tab) => {
                  const isTabActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        handleTabChange(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`text-left uppercase font-bold tracking-wider text-[11px] sm:text-xs transition-colors duration-150 focus:outline-none py-1 ${isTabActive ? "text-[#293E52]" : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Title */}
        <header className="mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-gray-800">
            {activeTabData ? activeTabData.title : ""}
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full max-w-[1250px]">
          {loading && (
            <div className="py-10 text-center text-gray-400 text-sm font-medium tracking-wider uppercase">
              Loading...
            </div>
          )}

          {!loading && loadError && (
            <div className="py-10 text-center text-red-500 text-sm font-medium">
              Failed to load data: {loadError}
            </div>
          )}



          {(treeVideoFiles.length > 0) && (
            <div className="mb-10">


              <VideosSection
                treeVideoFiles={treeVideoFiles}
                onPlay={handleVideoPlay}
              />
            </div>
          )}

          {/* ── DOCUMENTS SECTION ──────────────────────────────────────────────
              Only non-video files are shown here.
              Video-type files are pulled out and shown in the Videos section above.
          ──────────────────────────────────────────────────────────────────── */}
          {!loading &&
            !loadError &&
            activeTabData &&
            hasDocuments && (
              <CategoryTree
                nodes={activeTabData.tree}
                depth={0}
                onDownload={triggerDownload}
                onVideoPlay={handleVideoPlay}
              />
            )}

          {/* {!loading && !loadError && (!activeTabData || activeTabData.tree.length === 0) && treeVideoFiles.length === 0 && (
            <div className="py-10 text-center text-gray-400 text-sm font-medium tracking-wider uppercase">
              No data available
            </div>
          )} */}
        </main>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={handleVideoClose}
          onDone={handleVideoDone}
        />
      )}
    </div>
  );
}

// ─── Outer exported component — adds Suspense wrapper ─────────────
export default function NewInvestorSection() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center">
          <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">Loading...</span>
        </div>
      }
    >
      <NewInvestorSectionInner />
    </Suspense>
  );
}

