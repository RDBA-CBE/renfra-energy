"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { axiosGet, BASE_URL } from "@/lib/api";
import { IMG_ENDPOINT } from "@/lib/config";

export function TabSolutionSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsData, setTabsData] = useState([]);
  const [tabContent, setTabContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentTab = tabsData[activeTab]; // ✅ correct
  console.log(currentTab, "currentTab");

  // Load all solution tabs
  const fetchTabsData = async () => {
    try {
      setLoading(true);
      const response = await axiosGet.get(
        "masters/solutions/get/?web_sts=1&active_status=1&order_type=asc&order_field=created_date"
      );
      const tabs = response.data.data;
      setTabsData(tabs);

      if (tabs.length > 0) {
        fetchContentData(tabs[0].data_uniq_id);
      }
    } catch (err) {
      console.error("Tabs Error:", err);
    }
    finally {
    setLoading(false);  
    }
  };

  // Load content for specific solution
  const fetchContentData = async (uniqId) => {
    if (!uniqId) return;

    setLoading(true);
    try {
      const response = await axiosGet.get(
        `masters/solutions/content/get/?solution_id=${uniqId}&web_sts=1`
      );

      const contentObj = response.data.data?.[0]?.data;
      setTabContent(contentObj || null);
    } catch (err) {
      console.error("Content Error:", err);
      setTabContent(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTabsData();
  }, []);

  useEffect(() => {
    if (currentTab?.data_uniq_id) {
      fetchContentData(currentTab.data_uniq_id);
    }
  }, [activeTab]);

  if (loading) {
  return (
    <div className="w-full py-16 text-center text-[#293E52] text-lg font-semibold">
      Loading...
    </div>
  );
}

    if (tabsData.length === 0 && !loading) {
    return (
      <div className="w-full py-16 text-center text-[#293E52] text-lg font-semibold">
        No Solutions Found
      </div>
    );
  }

  if (!tabContent && !loading) {
    return (
      <div className="w-full py-16 text-center text-[#293E52] text-lg font-semibold">
        No Data Found
      </div>
    );
  }

  // Extract content
  const mainDesc = tabContent?.content?.[0]?.description || "";

  const mainImage = tabContent?.image?.[0]?.file_path
    ? tabContent.image[0].file_path
    : currentTab?.image;

  console.log(tabContent, "tabContent");

  const stats = [
    {
      img: "/images/s1.png",
      number: tabContent?.stats?.[0]?.stats_data?.[0]?.value,
      label: tabContent?.stats?.[0]?.stats_data?.[0]?.label,
    },
    {
      img: "/images/s2.png",
      number: tabContent?.stats?.[0]?.stats_data?.[1]?.value,
      label: tabContent?.stats?.[0]?.stats_data?.[1]?.label,
    },
  ];


  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tabs */}
      <div className="flex gap-4 overflow-x-auto mb-10 scrollbar-hide py-4 md:justify-center flex-nowrap pl-2">
        {tabsData.map((tab, index) => (
          <button
        key={tab.data_uniq_id}
        onClick={() => setActiveTab(index)}
        className={`
          flex flex-col items-center justify-between
          rounded-lg border 
          w-32                  /* ⭐ FIXED WIDTH */
          h-32                  /* ⭐ FIXED HEIGHT */
          md:w-40 md:h-auto       
          lg:w-56 lg:h-40
          p-3
          cursor-pointer
          flex-shrink-0        
          transition
          ${activeTab === index
            ? "bg-[#EDEDED] border-[#293E52] scale-105"
            : "bg-white border-gray-200 hover:scale-105"
          }
        `}
      >
            <img
              src={`${IMG_ENDPOINT}${tab.image_path}`}
              alt={tab.title}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <span className="text-sm md:text-base font-semibold text-[#293E52] text-center line-clamp-2">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab.data_uniq_id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 border p-6 rounded-lg border-[#329ACD]"
        >
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={`${IMG_ENDPOINT}${currentTab.card_image_path}`}
              alt={currentTab.title}
              className="w-full h-auto rounded-lg object-cover max-h-84"
            />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#293E52]">
                {currentTab.title}
              </h2>

              <Link href={`/solutions-details?id=${currentTab.data_uniq_id}`}>
                <ExternalLink className="w-7 h-7 text-[#329ACD]" />
              </Link>
            </div>

            <div
  className="text-[#293E52] mb-4"
  dangerouslySetInnerHTML={{
    __html:
      (mainDesc?.length > 550
        ? mainDesc.slice(0, 550) + "..."
        : mainDesc) || "",
  }}
/>


            <Link
              href={`/solutions-details?id=${currentTab.data_uniq_id}`}
              className="text-[#329ACD] font-bold hover:underline"
            >
              Read More →
            </Link>

            {/* Stats */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 flex-1"
                >
                  <img
                    src={stat.img}
                    alt={stat.label}
                    className="w-10 h-10 object-contain"
                  />

                  <div>
                    <div className="text-lg md:text-2xl font-bold text-[#293E52]">
                      {stat.number}
                    </div>
                    <div className="text-lg md:text-sm font-medium text-[#293E52]">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
