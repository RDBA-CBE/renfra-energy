
'use client'
import { axiosGet } from "@/lib/api";
import { IMG_ENDPOINT } from "@/lib/config";
import React, { useEffect, useState } from "react";

export default function StatsSection() {


const [solutionsCard,setSolutionsCard] = useState([])
  const [loading, setLoading] = useState(false)

  
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axiosGet.get(`masters/about/get/?web_sts=1&active_status=1`);
          setSolutionsCard(response.data.data || []);
        } catch (error) {
          console.error("Error:", error);
          setSolutionsCard([]); 
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

      if (loading) {
        return (
          <section className="w-full py-16 text-center text-[#293E52] text-lg font-semibold">
            Loading...
          </section>
        );
      }

      if (!loading && solutionsCard.length === 0) {
        return (
          <section className="w-full py-16 text-center text-[#293E52] text-lg font-semibold">
            No Data Found
          </section>
        );
      }

  return (
    <section className="relative w-full min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full hidden sm:hidden md:block lg:block">
        <img
          src="/images/new-abt1.gif"
          alt="Wind turbines landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* Stats Cards Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {solutionsCard.map((stat, index) => (
            <div
              key={stat.data_uniq_id || index}
              className={`relative flex justify-center ${stat.position}`}
            >
              {/* Connecting Line */}
              {index < stat.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-teal-600/30 -translate-y-1/2"></div>
              )}

              {/* Circular Card */}
              <div className="relative w-40 h-40 rounded-full p-0.5 bg-gradient-to-r from-[#3AB257] to-[#329ACD]">
                <div className="relative w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                  {/* Image */}
                  <div className="mb-2 w-12 h-12">
                    <img
                      src={`${IMG_ENDPOINT}${stat.image_path}`}
                      alt={stat.image_name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Number */}
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-600 text-center px-4 mt-1">
                    {stat.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
