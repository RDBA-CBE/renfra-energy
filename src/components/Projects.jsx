"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { axiosGet, BASE_URL } from "@/lib/api";

const TABS_DATA = [
  {
    id: "solar-pv",
    label: "Solar PV",
    cards: [
      {
        id: "1",
        image: "/images/solar1.png",
        title: "650MW Solar PV",
        status: "Completed",
        location: "Chennai",
        description:
          "Successfully delivered 650MW of solar PV projects, generating clean and sustainable energy.",
      },
      {
        id: "2",
        image: "/images/solar2.png",
        title: "500MW Solar PV",
        status: "Ongoing",
        location: "Coimbatore",
        description:
          "Currently executing 500MW of solar PV projects, ensuring optimal design and performance.",
      },
      {
        id: "3",
        image: "/images/solar3.png",
        title: "650MW Solar PV",
        status: "Completed",
        location: "Chennai",
        description:
          "Successfully delivered 650MW of solar PV projects, generating clean and sustainable energy.",
      },
      {
        id: "4",
        image: "/images/solar4.png",
        title: "500MW Solar PV",
        status: "Ongoing",
        location: "Coimbatore",
        description:
          "Currently executing 500MW of solar PV projects, ensuring optimal design and performance.",
      },
      {
        id: "5",
        image: "/images/solar5.png",
        title: "500MW Solar PV",
        status: "Completed",
        location: "Coimbatore",
        description:
          "Currently executing 500MW of solar PV projects, ensuring optimal design and performance.",
      },
    ],
  },
  {
    id: "wind",
    label: "Wind",
    cards: [
      {
        id: "3",
        image: "/images/wind1.png",
        title: "300MW Wind Farm",
        status: "Completed",
        location: "Tamil Nadu",
        description:
          "Successfully completed 300MW wind energy project with advanced turbine technology.",
      },
      {
        id: "4",
        image: "/images/wind2.png",
        title: "250MW Wind Project",
        status: "Ongoing",
        location: "Rajasthan",
        description:
          "Currently developing 250MW wind energy project with sustainable practices.",
      },
    ],
  },
  {
    id: "commercial-industrial",
    label: "Commercial & Industrial",
    cards: [
      {
        id: "5",
        image: "/images/s03.png",
        title: "150MW Commercial Solar",
        status: "Completed",
        location: "Bangalore",
        description:
          "Delivered comprehensive commercial solar solutions for industrial facilities.",
      },
      {
        id: "6",
        image: "/images/s03.png",
        title: "120MW Industrial Complex",
        status: "Ongoing",
        location: "Pune",
        description:
          "Implementing integrated energy solutions for large industrial complexes.",
      },
    ],
  },
  {
    id: "energy-storage",
    label: "Energy Storage System",
    cards: [
      {
        id: "7",
        image: "/images/s04.png",
        title: "500MWh Storage System",
        status: "Completed",
        location: "Gujarat",
        description:
          "Deployed advanced battery storage systems for grid stabilization.",
      },
      {
        id: "8",
        image: "/images/s04.png",
        title: "300MWh Storage Project",
        status: "Ongoing",
        location: "Telangana",
        description:
          "Building state-of-the-art energy storage facility for renewable integration.",
      },
    ],
  },
  {
    id: "residential",
    label: "Residential",
    cards: [
      {
        id: "9",
        image: "/images/s05.png",
        title: "50MW Residential Solar",
        status: "Completed",
        location: "Hyderabad",
        description:
          "Installed solar systems for thousands of residential properties.",
      },
      {
        id: "10",
        image: "/images/s05.png",
        title: "40MW Residential Project",
        status: "Ongoing",
        location: "Delhi",
        description:
          "Expanding residential solar adoption with innovative financing solutions.",
      },
    ],
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("");
  const [masterTitle, setMasterTitle] = useState([]);
  const [projectData, setProjectData] = useState([]);
  console.log(activeTab, "activeTab");
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  const fetchMaster = async () => {
    try {
      setLoading(true);
      const res = await axiosGet.get(
        `masters/solutions/get/?web_sts=1&order_type=asc&order_field=created_date&get_sts=1`
      );

      const data = res.data?.data || [];

      if (data.length === 0) {
        setNoData(true);
        setLoading(false);
        return;
      }

      setMasterTitle(data);
      setActiveTab(data[0].data_uniq_id); // SAFE: only sets if exists
    } catch (e) {
      console.error("Master Error:", e);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchProject = async () => {
    if (!activeTab) return;

    try {
      setLoading(true);

      const res = await axiosGet.get(
        `masters/projects/get/?web_sts=1&solution_id=${activeTab}`
      );

      const data = res.data?.data || [];

      setProjectData(data);
      setNoData(data.length === 0);
    } catch (err) {
      console.error("Project Error:", err);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaster();
  }, []);

  useEffect(() => {
    fetchProject();
  }, [activeTab]);

  // ------------------------------------
  // 🔥 LOADING UI (your UI unchanged)
  // ------------------------------------
  if (loading) {
    return (
      <section className="w-full px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center py-20 text-[#293E52] font-semibold">
          Loading...
        </div>
      </section>
    );
  }

 
  if (noData) {
    return (
      <section className="w-full px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center py-20 text-red-600 font-semibold">
          <div className="mb-12 text-center">
          <p className="text-sm text-[#293E52] md:text-base max-w-3xl mx-auto">
            Renfra Energy delivers large-scale solar, wind, and storage projects
            across India, powering a cleaner, sustainable future.{" "}
          </p>
        </div>
          No Data Found
        </div>
      </section>
    );
  }
  return (
    <section className="w-full px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <p className="text-sm text-[#293E52] md:text-base max-w-3xl mx-auto">
            Renfra Energy delivers large-scale solar, wind, and storage projects
            across India, powering a cleaner, sustainable future.{" "}
          </p>
        </div>

        {/* Tabs Section */}
        <div className="mb-8 flex flex-wrap gap-2 md:gap-4 justify-center">
          {masterTitle.map((tab) => (
            <button
              key={tab.data_uniq_id}
              onClick={() => setActiveTab(tab.data_uniq_id)}
              className={`
        rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-6 md:py-2.5 cursor-pointer
        ${
          activeTab === tab.data_uniq_id
            ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD] text-white shadow-md"
            : "bg-background text-[#293E52]"
        }
      `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Grid Cards Section */}
        {projectData && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {projectData.map((project) => (
              <div
                key={project.data_uniq_id}
                className="overflow-hidden rounded-lg bg-card"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted md:h-64 rounded-lg">
                  <img
                    src={`${BASE_URL}${project.image_path}`}
                    alt={project.image_name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="py-2 px-0">
                  {/* Title and Status */}
                  <div className="mb-3 flex items-center justify-between gap-3 mt-4">
                    <h3 className="text-md sm:text-smdm md:text-lg lg:text-xl font-semibold text-[#293E52] md:text-xl">
                      {project.title}
                    </h3>
                    <div
                      className={`inline-block rounded-full p-[1.5px] ${
                        project.project_status === 3
                          ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD]"
                          : "bg-gradient-to-r from-[#293E52] to-[#293E52]"
                      }`}
                    >
                      <span className="block whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-[#293E52]">
                        {project.project_status === 3 ? "Completed" : "Ongoing"}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#3CA948]">
                    <img
                      src="/images/con-loc.png"
                      alt="Location"
                      className="h-4 w-4"
                    />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] md:text-base"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
