// "use client";

// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { ExternalLink, ArrowLeft } from "lucide-react";
// import InnerBanner from "@/components/Inner-banner";
// import Link from "next/link";
// import ProjectsSlider from "@/components/ProjectsSlider";
// import ExpandableText from "@/components/ExpandableText";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { axiosGet, BASE_URL } from "@/lib/api";
// import parse from "html-react-parser";
// import InnerBannersol from "@/components/Inner-bannersol";

// const solutionsData = {
//   solar: {
//     title: "Solar PV",
//     heroImage: "/images/sol-bg.png",
//     innerBannerImage: "/images/sol-inner.png",
//     showManufacturing: true,
//     manufacturingTitle: "State-of-the-art Solar PV Panels Manufacturing",
//     manufacturingDescription:
//       "Our planned state-of-the-art PV manufacturing unit is poised to support the ever-increasing demand of solar panels with cutting-edge technology and sustainable production processes. We are committed to delivering high-efficiency, durable solar panels that meet global quality standards while contributing to a greener future.",
//     manufacturingImage: "/images/factory.jpg",
//     intro:
//       "As the leading player in PV solar greenfield project solutions, we have helped numerous clients to harness the power of the Sun!",
//     introLines: [
//       "As the leading player in PV solar greenfield project solutions, we have helped numerous clients to harness the power of the Sun! We offer end-to-end solutions for Ground-mounted and Rooftop solar projects depending on the energy requirements for your businesses. Renfra Energy brings several decades of experience delivering high-quality solar solutions that are tailored to the specific requirements of our clients. Our proven track record and commitment to customer satisfaction sets us apart from our peers. We determine your business's energy needs, then prioritize the panel efficiency, durability, and cost-effectiveness and warranties to maximize output and lifespan. High quality accessories and electrical equipment on both the DC and AC sides, ensuring longer efficiency and effectiveness. Renfra Energy develops, designs, engineers, procures, constructs and maintains captive scale greenfield solar farm projects across India.",
//     ],
//     twoColumnTitle: "Our greenfield and end-end solutions include",
//     twoColumnFeatures: [
//       "Grid capacity allocation and Power evacuation activities",
//       "Feasibility Study & Site Assessment",
//       "Environmental Impact Assessment ",
//       "Land Acquisition ",
//       "Infrastructure development",
//       "Design & Engineering",
//       "Procurement",
//       "Construction & Installation",
//       "Permitting, Approvals and Liaison ",
//       "Commissioning",
//       "Grid Integration",
//       "Power evacuation",
//       "Maintenance",
//     ],
//     twoColumnStats: [
//       { icon: "/images/s1.png", number: "500MW", label: "Ongoing Projects" },
//       { icon: "/images/s2.png", number: "650 MW", label: "Installed Capacity" },
//     ],
//     statPositions: [
//       "bottom-44 right-30 sm:bottom-64 sm:right-40 md:bottom-54 md:-right-4 lg:bottom-54 lg:right-24",
//       "bottom-14 right-30 sm:bottom-34 sm:right-32 md:bottom-24 md:-right-10 lg:bottom-24 lg:right-22",
//     ],
//     centerParagraph:
//       "“100MW Solar PV project construction and connected to grid in record breaking 90 days”",
//     videoUrl: "#",
//     projects: [
//       {
//         image: "/images/about.png",
//         title: "500MW Solar Farm",
//         location: "Rajasthan, India",
//         capacity: "500 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Commercial Rooftop Installation",
//         location: "Mumbai, India",
//         capacity: "50 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Industrial Solar Plant",
//         location: "Gujarat, India",
//         capacity: "200 MW",
//       },
//     ],
//     relatedSolutions: [
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Commercial & Industrial",
//         description:
//           "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
//       },
//       {
//         imgSrc: "/images/sol3.png",
//         subtitle: "Operation & Maintenance ",
//         description:
//           "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
//       },
//       {
//         imgSrc: "/images/sol4.png",
//         subtitle: "Energy Storage System ",
//         description:
//           "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources.",
//       },
//     ],
//   },

//   wind: {
//     title: "Wind",
//     heroImage: "/images/sol-bg.png",
//     innerBannerImage: "/images/wind-banner.svg",
//     intro:
//       "In a short span of time, Renfra Energy has been successful in delivering 100MW of wind energy power projects and has close to 500MW of ongoing projects in the wind sector.",
//     introLines: [
//       "In a short span of time, Renfra Energy has been successful in delivering 100MW of wind energy power projects and has close to 500MW of ongoing projects in the wind sector. We have been successfully assisting companies in reducing their reliability on conventional power and building dependable energy by developing and constructing wind farms.  When commercial & industrial establishments face excessive energy requirements for their operations, a wind farm development is more economical and efficient than a solar farm. ",
//     ],
//     twoColumnTitle: "We offer our C&I customers end to end solutions",
//     twoColumnFeatures: [
//       "Grid capacity allocation and Power evacuation activities",
//       "Feasibility Study & Site Assessment",
//       "Environmental Impact Assessment ",
//       "Land Acquisition ",
//       "Infrastructure development",
//       "Design & Engineering",
//       "Procurement",
//       "Construction & Installation",
//       "Permitting, Approvals and Liaison ",
//       "Commissioning",
//       "Grid Integration",
//       "Maintenance",
//     ],
//     twoColumnStats: [
//       { icon: "/images/s1.png", number: "480MW", label: "Ongoing Projects" },
//       { icon: "/images/s2.png", number: "99MW", label: "Installed Capacity" },
//     ],
//     statPositions: [
//       "bottom-52 right-30 sm:bottom-60 sm:right-28 md:bottom-64 md:-right-8 lg:bottom-64 lg:right-24",
//       "bottom-20 right-30 sm:bottom-30 sm:right-24 md:bottom-28 md:-right-6 lg:bottom-28 lg:right-23",
//     ],
//     centerParagraph:
//       "Renfra Energy develops, designs, engineers, procures, constructs and maintains wind farms for its clients across India. Our sister concerns GWind, Derrick Lifters India (DLI) & Wandse supports the client's operation and maintenance and refurbishment services respectively for its clients. Capacities of WTG for O&M, installations and retrofit/refurbishments 250kW to 3MW. ",
//     videoUrl: "#",
//     projects: [
//       {
//         image: "/images/about.png",
//         title: "99MW Wind Farm",
//         location: "Tamil Nadu, India",
//         capacity: "99 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Offshore Wind Development",
//         location: "Gujarat Coast, India",
//         capacity: "150 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Hybrid Wind-Solar Plant",
//         location: "Rajasthan, India",
//         capacity: "250 MW",
//       },
//     ],
//     relatedSolutions: [
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Commercial & Industrial",
//         description:
//           "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
//       },
//       {
//         imgSrc: "/images/sol4.png",
//         subtitle: "Energy Storage System ",
//         description:
//           "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources.",
//       },
//       {
//         imgSrc: "/images/sol3.png",
//         subtitle: "Operation & Maintenance ",
//         description:
//           "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
//       },
//     ],
//   },

//   commercial: {
//     title: "Commercial and Industrial (C&I)",
//     heroImage: "/images/sol-bg.png",
//     innerBannerImage: "/images/c&i-banner.svg",
//     intro:
//       "Renfra Energy has been in the forefront of providing a range of solutions to help Commercial & Industrial (C&I) customers meet their energy demand goals.",
//     introLines: [
//       "Renfra Energy has been in the forefront of providing a range of solutions to help Commercial & Industrial (C&I) customers meet their energy demand goals. We have assisted our clients to generate their own clean electricity directly by the development, installation and maintenance of renewable energy systems. Our standard SOPs aimed to ensure that we have a profitable and optimized energy production and reduced costs.",
//     ],
//     twoColumnTitle:
//       "Our key greenfield activities supporting your renewable energy transition include",
//     twoColumnFeatures: [
//       "Grid capacity allocation and Power evacuation activities",
//       "Environmental Impact Assessment studies",
//       "Land Acquisition and RoW",
//       "Approvals & Liaison",
//       "Engineering & Design",
//       "Infrastructure Development",
//       "Energy Systems Procurement ",
//       "Construction & Installation",
//       "Commissioning ",
//       "Power evacuation ",
//       "Energy Storage Solutions",
//       "Energy Management Systems",
//       "Maintenance",
//     ],
//     twoColumnStats: [
//       { icon: "/images/s1.png", number: "150", label: "Active Projects" },
//       { icon: "/images/s2.png", number: "2500", label: "MWh Capacity" },
//     ],
//     statPositions: [
//       "bottom-40 right-30 sm:bottom-60 sm:right-36 md:bottom-56 md:-right-6 lg:bottom-56 lg:right-20",
//       "bottom-16 right-30 sm:bottom-30 sm:right-28 md:bottom-24 md:-right-5 lg:bottom-24 lg:right-22",
//     ],
//     centerParagraph:
//       "Renfra Energy acts as strategic partners, helping C&I customers navigate the complexities of the energy transition, reduce operational costs, mitigate risk, and demonstrate a commitment to corporate social responsibility.",
//     videoUrl: "#",
//     projects: [
//       {
//         image: "/images/about.png",
//         title: "500MW Wind Farm",
//         location: "Pune, India",
//         capacity: "75 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "450MW Solar EPC",
//         location: "Bangalore, India",
//         capacity: "40 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Warehouse Solar Rooftop",
//         location: "Delhi NCR, India",
//         capacity: "25 MW",
//       },
//     ],
//     relatedSolutions: [
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Wind",
//         description:
//           "Delivering 100MW+ of wind projects and expanding capacity across India.",
//       },
//       {
//         imgSrc: "/images/sol4.png",
//         subtitle: "Energy Storage System ",
//         description:
//           "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources",
//       },
//       {
//         imgSrc: "/images/sol3.png",
//         subtitle: "Operation & Maintenance ",
//         description:
//           "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
//       },
//     ],
//   },

//   storage: {
//     title: "Energy Storage System",
//     heroImage: "/images/sol-bg.png",
//     innerBannerImage: "/images/energy-banner.svg",
//     showManufacturing: true,
//     manufacturingTitle: "State-of-the-art BESS Manufacturing",
//     manufacturingDescription:
//       "With various technical collaborations signed, Renfra Energy manufactures Battery Energy Storage Systems (BESS) with advanced DC coupling technology, ensuring minimal energy losses and maximum efficiency. Our manufacturing facilities are equipped with state-of-the-art technology to produce high-quality, reliable energy storage solutions that integrate seamlessly with renewable energy installations.",
//     manufacturingImage: "/images/factory.jpg",
//     intro:
//       "As a provider of end-to-end energy solutions, Renfra Energy manufactures and builds Energy Storage Systems for our clients, enabling a more efficient, reliable and sustainable power supply to their facilities.",
//     introLines: [
//       "As a provider of end-to-end energy solutions, Renfra Energy manufactures and builds Energy Storage Systems for our clients, enabling a more efficient, reliable and sustainable power supply to their facilities. We provide this hybrid solution, as Battery Energy Storage System (BESS) are needed since customers can store energy from the grid as it is produced from their farms and use it during peak hours, significantly saving on energy loss, which otherwise will either be banked or incur energy losses due to non utilization (Banking charges for power parking/banking on grid that has been generated from the farms but not immediately used are now either getting expensive or the Discoms are removing this service totally. BESS mitigates this cost, thus not only reducing charges for unused/banked power but also optimize the generation from the plants). Further in areas where there are frequent grid blackouts or maintenance shutdowns, having a BESS solution will ensure smooth and consistent power supply to your facility. Renfra Energy acts as a one stop solution provider to implement the BESS solution in your facility since both the DC and the AC side are handled by our professional team. ",
//     ],
//     twoColumnTitle: "Our commercial & industrial solutions include",
//     twoColumnFeatures: [
//       "Grid capacity allocation and Power evacuation activities",
//       "Design & Engineering",
//       "Technology Selection",
//       "Site readying/Construction",
//       "Procurement",
//       "Installation",
//       "Grid Permits & Approvals",
//       "Commissioning",
//       "Energy Management System (Monitoring & Controlling)",
//       "Fire prevention and detection systems",
//       "Maintenance",
//     ],
//     twoColumnStats: [
//       { icon: "/images/s1.png", number: "250", label: "Industrial Clients" },
//       { icon: "/images/s2.png", number: "10000", label: "MW Capacity" },
//     ],
//     statPositions: [
//       "bottom-48 right-30 sm:bottom-64 sm:right-32 md:bottom-60 md:-right-10 lg:bottom-60 lg:right-18",
//       "bottom-18 right-30 sm:bottom-28 sm:right-26 md:bottom-26 md:-right-4 lg:bottom-26 lg:right-24",
//     ],
//     videoUrl: "#",
//     projects: [
//       {
//         image: "/images/about.png",
//         title: "Industrial BESS Installation",
//         location: "Chennai, India",
//         capacity: "100 MWh",
//       },
//       {
//         image: "/images/about.png",
//         title: "Grid-Scale Storage",
//         location: "Hyderabad, India",
//         capacity: "250 MWh",
//       },
//       {
//         image: "/images/about.png",
//         title: "Hybrid Solar+BESS",
//         location: "Ahmedabad, India",
//         capacity: "150 MWh",
//       },
//     ],
//     relatedSolutions: [
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Commercial & Industrial",
//         description:
//           "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
//       },
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Wind",
//         description:
//           "Delivering 100MW+ of wind projects and expanding capacity across India.",
//       },
//       {
//         imgSrc: "/images/sol3.png",
//         subtitle: "Operation & Maintenance ",
//         description:
//           "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
//       },
//     ],
//   },

//   maintenance: {
//     title: "Operations & Maintenance",
//     heroImage: "/images/sol-bg.png",
//     innerBannerImage: "/images/operation-banner.svg",
//     intro:
//       "As a leading developer of renewable energy projects, Renfra Energy ensures consistent system performance through O&M.",
//     introLines: [
//       "At Renfra Energy, our journey to a sustainable energy future doesn't end with the construction of renewable project!!!. The long-term success and profitability of your renewable energy project—whether it's a utility-scale solar farm, a wind power plant, or a sophisticated energy storage system—depend entirely on expert Operations & Maintenance (O&M) and Strategic Asset Management. Renfra Energy offers a fully integrated suite of services designed to ensure your renewable assets perform optimally, reliably, and profitably for their entire lifecycle. We take on the technical and financial complexity so you can focus on your core business. Our core mission is to minimize downtime and maximize energy production through proactive, predictive, and rapid response maintenance. ",
//     ],
//     twoColumnTitle: "Why choose Renfra Energy to power up your home:",
//     twoColumnFeatures: [
//       "Significant Cost Savings",
//       "Energy Independence",
//       "Customised system design",
//       "Guaranteed system efficiency",
//       "Annual and emergency maintenance",
//     ],
//     twoColumnStats: [
//       { icon: "/images/s1.png", number: "1000", label: "Maintained Assets" },
//       { icon: "/images/s2.png", number: "99.5%", label: "Uptime" },
//     ],
//     statPositions: [
//       "bottom-52 right-30 sm:bottom-64 sm:right-30 md:bottom-60 md:-right-8 lg:bottom-60 lg:right-20",
//       "bottom-20 right-33 sm:bottom-28 sm:right-24 md:bottom-26 md:-right-10 lg:bottom-26 lg:right-30",
//     ],
//     videoUrl: "#",
//     projects: [
//       {
//         image: "/images/about.png",
//         title: "Multi-Site O&M Services",
//         location: "Pan-India",
//         capacity: "1000+ Assets",
//       },
//       {
//         image: "/images/about.png",
//         title: "Solar Farm Maintenance",
//         location: "Rajasthan, India",
//         capacity: "500 MW",
//       },
//       {
//         image: "/images/about.png",
//         title: "Wind Turbine Services",
//         location: "Tamil Nadu, India",
//         capacity: "250 MW",
//       },
//     ],
//     relatedSolutions: [
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Commercial & Industrial",
//         description:
//           "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
//       },
//       {
//         imgSrc: "/images/sol2.png",
//         subtitle: "Wind",
//         description:
//           "Delivering 100MW+ of wind projects and expanding capacity across India.",
//       },
//       {
//         imgSrc: "/images/sol4.png",
//         subtitle: "Energy Storage System ",
//         description:
//           "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources",
//       },
//     ],
//   },
// };

// function SolutionInnerContent() {
//   const searchParams = useSearchParams();
//   const solutionId = searchParams.get("id");

//   const [solution, setSolution] = useState(null);
//   const [orderedSections, setOrderedSections] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [allSolutions, setAllSolutions] = useState([]);
//   const [relatedSolutions, setRelatedSolutions] = useState([]);
//   const [bannerImagePath, setBannerImagePath] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [noData, setNoData] = useState(false);


//   const fetchSolutionsList = async () => {
//     try {
//       const res = await axiosGet.get("masters/solutions/get/?web_sts=1");
//       const data = res.data.data;
//       setAllSolutions(data);
//     } catch (err) {
//       console.error("Solutions List Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchSolutionsList();
//   }, []);

//   const loadSolution = async (id) => {
//   setLoading(true);
//   setNoData(false);

//   try {
//     const res = await axiosGet.get(
//       `/masters/solutions/content/get/?solution_id=${id}&web_sts=1`
//     );

//     const root = res.data.data?.[0];
//     if (!root) {
//       setNoData(true);
//       setSolution(null);
//       setOrderedSections([]);
//       return;
//     }

//     const content = root.data;
//     if (!content) {
//       setNoData(true);
//       setSolution(null);
//       setOrderedSections([]);
//       return;
//     }

//     // ------- your existing content building code -------
//     const sections = [];

//     // CONTENT SECTIONS
//     content.content?.forEach((item) => {
//       sections.push({
//         type: "content",
//         position: item.position,
//         data: {
//           description: item.description?.replace(/<[^>]+>/g, "") ?? "",
//           html: item.description ?? "",
//         },
//       });
//     });

//     // TWO COLUMN SECTIONS
//     content.twocolumn?.forEach((item) => {
//       const html = item.description || "";
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");

//       const title = doc.querySelector("h2")?.textContent.trim() || "";
//       const features = Array.from(doc.querySelectorAll("li"))
//         .map((li) => li.textContent.trim())
//         .filter(Boolean);

//       sections.push({
//         type: "twocolumn",
//         position: item.position,
//         data: {
//           title,
//           features,
//           stats: [
//             {
//               icon: "/images/s1.png",
//               number: item.ongoing_projects || "0",
//               label: "Ongoing Projects",
//             },
//             {
//               icon: "/images/s2.png",
//               number: item.installed_capacity || "0",
//               label: "Installed Capacity",
//             },
//           ],
//         },
//       });
//     });

//     // SERVICE CARD SECTIONS
// content.servicecard?.forEach((item) => {
//   sections.push({
//     type: "servicecard",
//     position: item.position,
//     data: {
//       title: item.title,
//       description: item.description,
//       cards: item.service_card.map((card) => ({
//         title: card.title,
//         image:
//            BASE_URL +(card.image_path || card.existing_path)
//       })),
//     },
//   });
// });

// // CORE FOCUS SECTION
// content.corefocus?.forEach((item) => {
//   sections.push({
//     type: "corefocus",
//     position: item.position,
//     data: {
//       title: item.title,
//       description: item.description,
//       items: item.core_focus.map((focus) => ({
//         title: focus.title,
//         image: BASE_URL + (focus.existing_path || focus.image_path)
//       })),
//     },
//   });
// });

// // INFO BLOCK
// content.infoblock?.forEach((item) => {
//   sections.push({
//     type: "infoblock",
//     position: item.position,
//     data: {
//       image: item.file_path
//         ? BASE_URL + item.file_path
//         : "/images/default-info.png",
//       alt: item.file_name || "Info Block",
//     },
//   });
// });


// // SCOPE SECTION
// content.scope?.forEach((item) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(item.description || "", "text/html");

//   const scopeItems = Array.from(doc.querySelectorAll("li"))
//     .map((li) => li.textContent.trim())
//     .filter(Boolean);

//   sections.push({
//     type: "scope",
//     position: item.position,
//     data: {
//       title: item.title,
//       items: scopeItems,
//     },
//   });
// });

// // TWO COLUMN TYPE 1
// content.twocolumntype1?.forEach((item) => {
//   sections.push({
//     type: "twocolumntype1",
//     position: item.position,
//     data: {
//       description: item.description || "",
//       media: item.twocolumn_type1,
//     },
//   });
// });

// // REACH OUT CTA
// // content.reachout?.forEach((item) => {
// //   sections.push({
// //     type: "reachout",
// //     position: item.position,
// //     data: {
// //       description: item.description || "",
// //       url: item.url || "#",
// //     },
// //   });
// // });

// // REACH OUT CTA
// content.reachout?.forEach((item) => {
//   sections.push({
//     type: "reachout",
//     position: item.position,
//     data: {
//       description: item.description || "",
//       url: item.url || "#",
//     },
//   });
// });

//     // VIDEO SECTIONS
//     content.video?.forEach((item) => {
//       sections.push({
//         type: "video",
//         position: item.position,
//         data: { url: item.url || "" },
//       });
//     });

//     // IMAGE SECTIONS
//     content.image?.forEach((item) => {
//       sections.push({
//         type: "image",
//         position: item.position,
//         data: {
//           src: item.file_path ? BASE_URL + item.file_path : "/images/sol-bg.png",
//           alt: item.file_name || "Solution Image",
//         },
//       });
//     });

//     // SORT SECTIONS
//     sections.sort((a, b) => a.position - b.position);
//     setOrderedSections(sections);

//     // BASIC SOLUTION INFO
//     const heroImage =
//       root.banner_image_path !== ""
//         ? BASE_URL + root.banner_image_path
//         : "/images/sol-bg.png";

//     setSolution({
//       title: root.solution_name,
//       sub_title: root.sub_title || "",
//       innerBannerImage: heroImage,
//     });
//   } catch (err) {
//     console.error("Solution Load Error:", err);
//     setNoData(true);
//   } finally {
//     setLoading(false);
//   }
// };


//   useEffect(() => {
//     if (solutionId) {
//       loadSolution(solutionId);
//     }
//   }, [solutionId]);

  
//   const fetchMaster = async () => {
//     axiosGet
//       .get(`masters/projects/get/?web_sts=1`)
//       .then((response) => {
//         const formatted = response.data.data.map((p) => ({
//           image: p.image_path ? BASE_URL + p.image_path : "/images/about.png",
//           title: p.project_title || p.title || "Project",
//           location: p.location || "",
//           capacity: p.capacity || "",
//         }));

//         setProjects(formatted);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   useEffect(() => {
//     fetchMaster();
//   }, []);

//   useEffect(() => {
//     if (!solution || allSolutions.length === 0) return;

//     const filtered = allSolutions.filter(
//       (item) => item.data_uniq_id !== solutionId
//     );

//     const selected = filtered.slice(0, 3);

//     const formatted = selected.map((s) => ({
//       imgSrc: s.image_path ? BASE_URL + s.image_path : "/images/default.png",
//       subtitle: s.title,
//       description: s.description || "Explore this solution",
//       link: `/solutions-details?id=${s.data_uniq_id}`,
//     }));

//     setRelatedSolutions(formatted);
//   }, [allSolutions, solution]);

//   // Render section based on type
//   const renderSection = (section, index) => {
//     switch (section.type) {
//       case "content": {
//   // Extract plain text ONLY for length check
//   const tempDiv = document.createElement("div");
//   tempDiv.innerHTML = section.data.html || "";
//   const plainText = tempDiv.textContent?.replace(/\s+/g, " ").trim() || "";

//   const isShortContent = plainText.length < 100;

//   return (
//     <section
//       key={`content-${index}`}
//       className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-[#293E52] ${
//         isShortContent ? "text-center" : ""
//       }`}
//     >
//       <div
//   className={`prose prose-gray max-w-none ${
//     isShortContent ? "mx-auto text-center" : ""
//   }`}
//   dangerouslySetInnerHTML={{ __html: section.data.html }}
// />

//     </section>
//   );
// }




//       case "twocolumn":
//         return (
//           <section
//             key={`twocolumn-${index}`}
//             className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div className="relative flex justify-center">
//                 <Image
//                   src={"/images/sol-bg.png"}
//                   alt="Solution"
//                   width={400}
//                   height={300}
//                   className="w-full max-w-[450px] h-auto rounded-lg object-cover"
//                 />

//                 {section.data.stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className={`absolute flex flex-col items-center gap-4 sm:gap-6 ${
//                       idx === 0
//                         ? "bottom-44 right-30 sm:bottom-64 sm:right-40"
//                         : "bottom-14 right-30 sm:bottom-34 sm:right-40"
//                     } transform md:-translate-x-1/2 lg:-translate-x-1/2`}
//                   >
//                     <div className="flex items-center gap-4">
//                       <Image
//                         src={stat.icon}
//                         alt={stat.label}
//                         width={56}
//                         height={56}
//                         className="w-10 sm:w-14 h-auto"
//                       />
//                       <div className="text-[#293E52] text-center sm:text-left">
//                         <div className="font-bold text-2xl sm:text-3xl">
//                           {stat.number}
//                         </div>
//                         <div className="text-xs sm:text-sm">{stat.label}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* <div className="mt-8 md:mt-0" dangerouslySetInnerHTML={{__html: section.data.featuresRaw}}/> */}
//               {/* <div className="mt-8 md:mt-0 prose">
//                 {parse(section.data.featuresRaw)}
//               </div> */}
//               <div className="mt-8 md:mt-0">
//                 <h2 className="text-xl sm:text-2xl font-bold text-[#293E52] mb-6">
//                   {section.data.title}
//                 </h2>
//                 <ul className="space-y-3">
//                   {section.data.features.map((feature, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <div className="w-5 h-5 flex items-center justify-center rounded-md bg-gradient-to-r from-[#3CA948] to-[#329ACD] mt-0.5 flex-shrink-0">
//                         <svg
//                           className="w-3 h-3 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-gray-700 text-sm sm:text-base">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>
//         );


//         case "servicecard":
//   return (
//     <section
//       key={`servicecard-${index}`}
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//     >
//       {/* Title */}
//       <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-[#293E52] font-bold text-center  mb-4">
//         {section.data.title}
//       </h2>

//       {/* Description */}
//       {section.data.description && (
//         <p className="text-center text-[#293E52] max-w-4xl mx-auto mb-10">
//           {section.data.description}
//         </p>
//       )}

//       {/* Cards */}
// {/* Cards */}
// <div
//   className={`grid border border-gray-200 rounded-xl overflow-hidden ${
//     section.data.cards.length === 1
//       ? "grid-cols-1"
//       : section.data.cards.length === 2
//       ? "grid-cols-2"
//       : section.data.cards.length === 3
//       ? "grid-cols-3"
//       : section.data.cards.length === 4
//       ? "grid-cols-4"
//       : "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
//   }`}
// >
//   {section.data.cards.map((card, i) => {
//     const total = section.data.cards.length;

//     return (
//       <div
//         key={i}
//         className={`
//           flex flex-col items-center justify-center
//           text-center
//           py-10 px-4
//           ${
//             i !== total - 1
//               ? "border-r border-[#DBDBDB]"
//               : ""
//           }
//           ${
//             total > 5
//               ? "border-b"
//               : ""
//           }
//         `}
//       >
//         <Image
//           src={card.image}
//           alt={card.title}
//           width={120}
//           height={120}
//           className="w-20 h-20 object-contain mb-6"
//         />

//         <p className="text-sm sm:text-base text-[#293E52] font-medium whitespace-pre-line">
//           {card.title}
//         </p>
//       </div>
//     );
//   })}
// </div>
//     </section>
//   );


//   case "corefocus":
//   return (
//     <section
//       key={`corefocus-${index}`}
//       className="relative w-full py-12 my-6 overflow-hidden bg-no-repeat bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/images/famain-bg.png')",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//         <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-white mb-8">
//           {section.data.title}
//         </h2>

//         {section.data.description && (
//           <div
//             className="text-white max-w-4xl text-sm sm:text-sm md:text-base lg:text-base mb-10 prose prose-invert"
//             dangerouslySetInnerHTML={{
//               __html: section.data.description,
//             }}
//           />
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {section.data.items.map((item, i) => (
//             <div
//               key={i}
//               className="flex items-start gap-4"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={50}
//                 height={50}
//                 className="w-10 h-10 object-contain flex-shrink-0"
//               />

//               <p className="text-white text-sm sm:text-sm md:text-base lg:text-base leading-relaxed">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );

//   case "infoblock":
//   return (
//     <section
//       key={`infoblock-${index}`}
//       className="w-full"
//     >
//       <div className="relative w-full">
//         <Image
//           src={section.data.image}
//           alt={section.data.alt}
//           width={1920}
//           height={600}
//           className="w-full h-auto object-contain"
//           priority
//         />
//       </div>
//     </section>
//   );

//   case "scope":
//   return (
//     <section
//       key={`scope-${index}`}
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//     >
//       <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-[#293E52] font-bold mb-10">
//         {section.data.title}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {section.data.items.map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-4"
//           >
//             {/* Number Circle */}
//             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-gradient-to-b from-[#329ACD] to-[#3AB257] text-white font-bold text-lg flex items-center justify-center">
//               {i + 1}
//             </div>

//             {/* Scope Text */}
//             <p className="text-[#293E52] text-sm sm:text-base leading-relaxed">
//               {item}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

// //   case "twocolumntype1": {
// //   const media = section.data.media;

// //   return (
// //     <section
// //       key={`twocolumntype1-${index}`}
// //       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
// //     >
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

// //         {/* Left */}
// //         <div
// //           className="prose max-w-none"
// //           dangerouslySetInnerHTML={{
// //             __html: section.data.description,
// //           }}
// //         />

// //         {/* Right */}
// //         <div>

// //           {media?.type === "image" && media.existing_path && (
// //             <Image
// //               src={BASE_URL + media.existing_path}
// //               alt=""
// //               width={600}
// //               height={500}
// //               className="w-full rounded-xl object-cover"
// //             />
// //           )}

// //           {media?.type === "video" && media.existing_path && (
// //             <video
// //               controls
// //               className="w-full rounded-xl"
// //             >
// //               <source
// //                 src={BASE_URL + media.existing_path}
// //                 type="video/mp4"
// //               />
// //             </video>
// //           )}

// //           {media?.type === "video_url" && media.url && (
// //             <iframe
// //               src={media.url}
// //               className="w-full h-[350px] rounded-xl"
// //               allowFullScreen
// //             />
// //           )}

// //           {media?.type === "description" && (
// //             <div
// //               className="prose max-w-none bg-gray-50 p-6 rounded-xl"
// //               dangerouslySetInnerHTML={{
// //                 __html: media.description,
// //               }}
// //             />
// //           )}

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// case "twocolumntype1": {
//   const media = section.data.media;

//   // 👇 ADD THIS HERE
//   const getYouTubeId = (url) => {
//     if (!url) return null;

//     const regExp =
//       /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;

//     const match = url.match(regExp);

//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const videoId =
//     media?.type === "video_url"
//       ? getYouTubeId(media.url)
//       : null;

//   const embedUrl = videoId
//     ? `https://www.youtube.com/embed/${videoId}`
//     : null;

//   return (
//     <section
//       key={`twocolumntype1-${index}`}
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

//         {/* Left Content */}
// <div
// className="max-w-none text-[#293E52] [&_h1]:text-sm [&_h1]:sm:text-sm [&_h1]:md:text-3xl [&_h1]:lg:text-3xl [&_h1]:font-bold [&_h1]:leading-snug [&_h1]:mb-5 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:mb-5 [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:mb-4 [&_p]:text-sm md:[&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:ml-2 [&_ul]:space-y-3 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-6 [&_ol]:ml-2 [&_ol]:space-y-3 [&_ol]:mb-4 [&_li]:text-[#293E52] [&_li]:text-sm md:[&_li]:text-base [&_li]:leading-relaxed [&_li]:font-medium [&_li]:mb-2 [&_li::marker]:text-[#293E52]"
//   dangerouslySetInnerHTML={{
//     __html: section.data.description,
//   }}
// />

//         {/* Right Content */}
//         <div>

//  {/* IMAGE */}
// {media?.type === "image" && media.existing_path && (
//   <div className="relative">
//     <Image
//       src={BASE_URL + media.existing_path}
//       alt=""
//       width={900}
//       height={500}
//       className="w-full h-[230px] object-cover rounded-sm"
//     />
//   </div>
// )}

// {/* VIDEO */}
// {(media?.type === "video" || media?.type === "video_url") && (
//   <>
//     {/* Uploaded Video */}
//     {media?.existing_path ? (
//       <video
//         controls
//         className="w-full h-[350px] object-cover rounded-xl"
//       >
//         <source
//           src={BASE_URL + media.existing_path}
//           type="video/mp4"
//         />
//       </video>
//     ) : (
//       media?.url &&
//       getYouTubeId(media.url) && (
//         <iframe
//           src={`https://www.youtube.com/embed/${getYouTubeId(media.url)}`}
//           className="w-full h-[250px] rounded-xl"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       )
//     )}
//   </>
// )}

//           {/* DESCRIPTION CARD */}
//           {media?.type === "description" && (
//             <div className="relative bg-[#F5F5F5] rounded-2xl overflow-hidden min-h-[260px] py-12 px-8 flex flex-col justify-between">

//               {/* Background Image */}
//               <div className="absolute top-8 right-0 h-[250px] w-auto pointer-events-none">
//                 <img
//                   src="/images/why.png"
//                   alt=""
//                   className="h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div
//                 className="relative z-10 max-w-[380px] [&_h1]:text-[#293E52] [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:leading-snug [&_h1]:mb-4 [&_h2]:text-[#293E52] [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:mb-4 [&_h3]:text-[#293E52] [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:mb-4 [&_h4]:text-[#293E52] [&_h4]:text-2xl [&_h4]:md:text-3xl [&_h4]:font-bold [&_h4]:leading-snug [&_h4]:mb-4 [&_p]:text-[#293E52] [&_p]:text-sm md:[&_p]:text-base [&_p]:leading-relaxed [&_p]:font-normal [&_p]:mb-0"
//                 dangerouslySetInnerHTML={{
//                   __html: media.description,
//                 }}
//               />
//             </div>
//           )}

//         </div>

//       </div>
//     </section>
//   );
// }

// //   case "reachout": {
// //   // Remove HTML tags
// //   const text = section.data.description.replace(/<[^>]*>/g, "").trim();

// //   // Split into words
// //   const words = text.split(" ");

// //   // First 2 words become the clickable link
// //   const linkText = words.slice(0, 2).join(" ");
// //   const remainingText = words.slice(2).join(" ");

// //   return (
// //     <section
// //       key={`reachout-${index}`}
// //       className="py-10"
// //     >
// //       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
// //         <div className="relative bg-[#293D52] rounded-lg py-12 overflow-hidden">

// //           {/* Background Image */}
// //           <div className="absolute bottom-2 right-8 pointer-events-none">
// //             <img
// //               src="/images/reach-bg.png"
// //               alt=""
// //               className="h-32 w-auto object-contain"
// //             />
// //           </div>

// //           {/* Content */}
// //           <div className="relative z-10 text-center px-6">
// //             <p className="leading-snug">

// //               <a
// //                 href={section.data.url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-white hover:text-[#4BC85A] transition-colors"
// //               >
// //                 {linkText}
// //               </a>

// //               <span className="text-base md:text-xl text-white font-medium">
// //                 {" "}
// //                 {remainingText}
// //               </span>

// //             </p>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// case "reachout": {
//   // Add custom classes to the <a> tag coming from the API
//   const formattedDescription = section.data.description.replace(
//     /<a\b([^>]*)>/,
//     `<a$1 class="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-white hover:text-[#4BC85A] transition-colors">`
//   );

//   return (
//     <section
//       key={`reachout-${index}`}
//       className="py-10"
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         <div className="relative bg-[#293D52] rounded-lg py-12 overflow-hidden">

//           {/* Background Image */}
//           <div className="absolute bottom-2 right-8 pointer-events-none">
//             <img
//               src="/images/reach-bg.png"
//               alt=""
//               className="h-32 w-auto object-contain"
//             />
//           </div>

//           {/* Content */}
//           <div className="relative z-10 text-center px-6">
//             <div
//               className="text-base md:text-xl text-white font-medium leading-snug [&_a]:text-xl [&_a]:md:text-2xl [&_a]:lg:text-3xl [&_a]:font-bold [&_a]:uppercase [&_a]:text-white [&_a]:hover:text-[#4BC85A] [&_a]:transition-colors"
//               dangerouslySetInnerHTML={{
//                 __html: formattedDescription,
//               }}
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// case "video": {
//   const getYouTubeId = (url) => {
//     if (!url) return null;

//     const regExp =
//       /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const url = section.data?.url || "";
//   const videoId = getYouTubeId(url);
//   const embedUrl = videoId
//     ? `https://www.youtube.com/embed/${videoId}`
//     : null;

//   return (
//     <section
//       key={`video-${index}`}
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//     >
//       {embedUrl ? (
//         <iframe
//           src={embedUrl}
//           className="w-full h-[350px] rounded-lg"
//           allowFullScreen
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         />
//       ) : (
//         <p className="text-red-500">Invalid video URL</p>
//       )}
//     </section>
//   );
// }
       
//       case "image":
//         return (
//           <section
//             key={`image-${index}`}
//             className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
//           >
//             <div className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[380px] xl:h-[400px] relative rounded-lg overflow-hidden">
//               <Image
//                 src={section.data.src}
//                 alt={section.data.alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </section>
//         );

//       default:
//         return null;
//     }
//   };
//   if (loading) {
//   return (
//     <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
//       Loading...
//     </div>
//   );
// }

// if (noData) {
//   return (
//     <div className="w-full py-20 text-center text-red-600 text-lg font-semibold">
//       No Data Found
//     </div>
//   );
// }


//   if (!solution) return <div className="p-10 text-center">Loading...</div>;

//   return (
//     <>
//       <InnerBannersol
//         title={solution.title}
//         bgImage={solution.innerBannerImage || "/images/sol-inner.png"}
//       />

//       <main className="w-full">
//         {/* Title */}
//         <section className="w-full max-w-7xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8 pt-10">
//           <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-0 text-[#293E52]">
//             {solution.title}
//           </h1>
//           {solution.sub_title && (
//   <p className="mt-2 text-left text-[#293E52] text-md sm:text-md md:text-xl lg:text-xl max-w-2xl font-bold leading-relaxed">
//   {solution.sub_title}
// </p>

// )}
//         </section>
        


//         {/* Render all sections in order */}
//         {orderedSections.map((section, index) => renderSection(section, index))}

        

//         {/* Our Projects Section */}
//         {projects.length > 0 && (
//           <div className="bg-[#F6F6F6]">
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
//                 Our Projects
//               </h2>
//               <ProjectsSlider projects={projects} />
//             </div>
//           </div>
//         )}

//         {/* Go Back to Solutions Page */}
//         <div className="bg-[#F6F6F6]">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <Link
//             href="/solutions"
//             className="inline-flex items-center gap-2 text-[#293E52] hover:text-[#3CA948] font-semibold transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Go back to Solutions
//           </Link>
//         </div>
//         </div>

//         {/* Related Solutions */}
//         {relatedSolutions.length > 0 && (
//           <div className="bg-[#F6F6F6]">
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
//                 Related Solutions
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {relatedSolutions.map((card, i) => (
//                   <div
//                     key={i}
//                     className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 transform transition-all duration-300 ease-in-out
//             hover:scale-[1.03] hover:shadow-lg"
//                   >
//                     <div className="flex items-start justify-between mb-3">
//                       <Image
//                         src={card.imgSrc}
//                         alt={card.subtitle}
//                         width={48}
//                         height={48}
//                         className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
//                       />
//                       <Link
//                         href={card.link}
//                         className="text-blue-600 hover:text-[#3CA948] transition-colors"
//                       >
//                         <ExternalLink className="w-6 sm:w-7 h-6 sm:h-7 flex-shrink-0" />
//                       </Link>
//                     </div>
//                     <p className="text-base sm:text-lg font-semibold text-[#293E52] mb-3">
//                       {card.subtitle}
//                     </p>
//                     <p
//                       className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4"
//                       dangerouslySetInnerHTML={{ __html: card.description }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// export default function SolutionInnerPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex items-center justify-center min-h-screen">
//           Loading...
//         </div>
//       }
//     >
//       <SolutionInnerContent />
//     </Suspense>
//   );
// }

// First based Solutions Dynamic Code (Two Column set)


"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import InnerBanner from "@/components/Inner-banner";
import Link from "next/link";
import ProjectsSlider from "@/components/ProjectsSlider";
import ExpandableText from "@/components/ExpandableText";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { axiosGet, BASE_URL } from "@/lib/api";
import parse from "html-react-parser";
import InnerBannersol from "@/components/Inner-bannersol";

const solutionsData = {
  solar: {
    title: "Solar PV",
    heroImage: "/images/sol-bg.png",
    innerBannerImage: "/images/sol-inner.png",
    showManufacturing: true,
    manufacturingTitle: "State-of-the-art Solar PV Panels Manufacturing",
    manufacturingDescription:
      "Our planned state-of-the-art PV manufacturing unit is poised to support the ever-increasing demand of solar panels with cutting-edge technology and sustainable production processes. We are committed to delivering high-efficiency, durable solar panels that meet global quality standards while contributing to a greener future.",
    manufacturingImage: "/images/factory.jpg",
    intro:
      "As the leading player in PV solar greenfield project solutions, we have helped numerous clients to harness the power of the Sun!",
    introLines: [
      "As the leading player in PV solar greenfield project solutions, we have helped numerous clients to harness the power of the Sun! We offer end-to-end solutions for Ground-mounted and Rooftop solar projects depending on the energy requirements for your businesses. Renfra Energy brings several decades of experience delivering high-quality solar solutions that are tailored to the specific requirements of our clients. Our proven track record and commitment to customer satisfaction sets us apart from our peers. We determine your business's energy needs, then prioritize the panel efficiency, durability, and cost-effectiveness and warranties to maximize output and lifespan. High quality accessories and electrical equipment on both the DC and AC sides, ensuring longer efficiency and effectiveness. Renfra Energy develops, designs, engineers, procures, constructs and maintains captive scale greenfield solar farm projects across India.",
    ],
    twoColumnTitle: "Our greenfield and end-end solutions include",
    twoColumnFeatures: [
      "Grid capacity allocation and Power evacuation activities",
      "Feasibility Study & Site Assessment",
      "Environmental Impact Assessment ",
      "Land Acquisition ",
      "Infrastructure development",
      "Design & Engineering",
      "Procurement",
      "Construction & Installation",
      "Permitting, Approvals and Liaison ",
      "Commissioning",
      "Grid Integration",
      "Power evacuation",
      "Maintenance",
    ],
    twoColumnStats: [
      { icon: "/images/s1.png", number: "500MW", label: "Ongoing Projects" },
      { icon: "/images/s2.png", number: "650 MW", label: "Installed Capacity" },
    ],
    statPositions: [
      "bottom-44 right-30 sm:bottom-64 sm:right-40 md:bottom-54 md:-right-4 lg:bottom-54 lg:right-24",
      "bottom-14 right-30 sm:bottom-34 sm:right-32 md:bottom-24 md:-right-10 lg:bottom-24 lg:right-22",
    ],
    centerParagraph:
      "“100MW Solar PV project construction and connected to grid in record breaking 90 days”",
    videoUrl: "#",
    projects: [
      {
        image: "/images/about.png",
        title: "500MW Solar Farm",
        location: "Rajasthan, India",
        capacity: "500 MW",
      },
      {
        image: "/images/about.png",
        title: "Commercial Rooftop Installation",
        location: "Mumbai, India",
        capacity: "50 MW",
      },
      {
        image: "/images/about.png",
        title: "Industrial Solar Plant",
        location: "Gujarat, India",
        capacity: "200 MW",
      },
    ],
    relatedSolutions: [
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Commercial & Industrial",
        description:
          "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
      },
      {
        imgSrc: "/images/sol3.png",
        subtitle: "Operation & Maintenance ",
        description:
          "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
      },
      {
        imgSrc: "/images/sol4.png",
        subtitle: "Energy Storage System ",
        description:
          "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources.",
      },
    ],
  },

  wind: {
    title: "Wind",
    heroImage: "/images/sol-bg.png",
    innerBannerImage: "/images/wind-banner.svg",
    intro:
      "In a short span of time, Renfra Energy has been successful in delivering 100MW of wind energy power projects and has close to 500MW of ongoing projects in the wind sector.",
    introLines: [
      "In a short span of time, Renfra Energy has been successful in delivering 100MW of wind energy power projects and has close to 500MW of ongoing projects in the wind sector. We have been successfully assisting companies in reducing their reliability on conventional power and building dependable energy by developing and constructing wind farms.  When commercial & industrial establishments face excessive energy requirements for their operations, a wind farm development is more economical and efficient than a solar farm. ",
    ],
    twoColumnTitle: "We offer our C&I customers end to end solutions",
    twoColumnFeatures: [
      "Grid capacity allocation and Power evacuation activities",
      "Feasibility Study & Site Assessment",
      "Environmental Impact Assessment ",
      "Land Acquisition ",
      "Infrastructure development",
      "Design & Engineering",
      "Procurement",
      "Construction & Installation",
      "Permitting, Approvals and Liaison ",
      "Commissioning",
      "Grid Integration",
      "Maintenance",
    ],
    twoColumnStats: [
      { icon: "/images/s1.png", number: "480MW", label: "Ongoing Projects" },
      { icon: "/images/s2.png", number: "99MW", label: "Installed Capacity" },
    ],
    statPositions: [
      "bottom-52 right-30 sm:bottom-60 sm:right-28 md:bottom-64 md:-right-8 lg:bottom-64 lg:right-24",
      "bottom-20 right-30 sm:bottom-30 sm:right-24 md:bottom-28 md:-right-6 lg:bottom-28 lg:right-23",
    ],
    centerParagraph:
      "Renfra Energy develops, designs, engineers, procures, constructs and maintains wind farms for its clients across India. Our sister concerns GWind, Derrick Lifters India (DLI) & Wandse supports the client's operation and maintenance and refurbishment services respectively for its clients. Capacities of WTG for O&M, installations and retrofit/refurbishments 250kW to 3MW. ",
    videoUrl: "#",
    projects: [
      {
        image: "/images/about.png",
        title: "99MW Wind Farm",
        location: "Tamil Nadu, India",
        capacity: "99 MW",
      },
      {
        image: "/images/about.png",
        title: "Offshore Wind Development",
        location: "Gujarat Coast, India",
        capacity: "150 MW",
      },
      {
        image: "/images/about.png",
        title: "Hybrid Wind-Solar Plant",
        location: "Rajasthan, India",
        capacity: "250 MW",
      },
    ],
    relatedSolutions: [
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Commercial & Industrial",
        description:
          "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
      },
      {
        imgSrc: "/images/sol4.png",
        subtitle: "Energy Storage System ",
        description:
          "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources.",
      },
      {
        imgSrc: "/images/sol3.png",
        subtitle: "Operation & Maintenance ",
        description:
          "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
      },
    ],
  },

  commercial: {
    title: "Commercial and Industrial (C&I)",
    heroImage: "/images/sol-bg.png",
    innerBannerImage: "/images/c&i-banner.svg",
    intro:
      "Renfra Energy has been in the forefront of providing a range of solutions to help Commercial & Industrial (C&I) customers meet their energy demand goals.",
    introLines: [
      "Renfra Energy has been in the forefront of providing a range of solutions to help Commercial & Industrial (C&I) customers meet their energy demand goals. We have assisted our clients to generate their own clean electricity directly by the development, installation and maintenance of renewable energy systems. Our standard SOPs aimed to ensure that we have a profitable and optimized energy production and reduced costs.",
    ],
    twoColumnTitle:
      "Our key greenfield activities supporting your renewable energy transition include",
    twoColumnFeatures: [
      "Grid capacity allocation and Power evacuation activities",
      "Environmental Impact Assessment studies",
      "Land Acquisition and RoW",
      "Approvals & Liaison",
      "Engineering & Design",
      "Infrastructure Development",
      "Energy Systems Procurement ",
      "Construction & Installation",
      "Commissioning ",
      "Power evacuation ",
      "Energy Storage Solutions",
      "Energy Management Systems",
      "Maintenance",
    ],
    twoColumnStats: [
      { icon: "/images/s1.png", number: "150", label: "Active Projects" },
      { icon: "/images/s2.png", number: "2500", label: "MWh Capacity" },
    ],
    statPositions: [
      "bottom-40 right-30 sm:bottom-60 sm:right-36 md:bottom-56 md:-right-6 lg:bottom-56 lg:right-20",
      "bottom-16 right-30 sm:bottom-30 sm:right-28 md:bottom-24 md:-right-5 lg:bottom-24 lg:right-22",
    ],
    centerParagraph:
      "Renfra Energy acts as strategic partners, helping C&I customers navigate the complexities of the energy transition, reduce operational costs, mitigate risk, and demonstrate a commitment to corporate social responsibility.",
    videoUrl: "#",
    projects: [
      {
        image: "/images/about.png",
        title: "500MW Wind Farm",
        location: "Pune, India",
        capacity: "75 MW",
      },
      {
        image: "/images/about.png",
        title: "450MW Solar EPC",
        location: "Bangalore, India",
        capacity: "40 MW",
      },
      {
        image: "/images/about.png",
        title: "Warehouse Solar Rooftop",
        location: "Delhi NCR, India",
        capacity: "25 MW",
      },
    ],
    relatedSolutions: [
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Wind",
        description:
          "Delivering 100MW+ of wind projects and expanding capacity across India.",
      },
      {
        imgSrc: "/images/sol4.png",
        subtitle: "Energy Storage System ",
        description:
          "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources",
      },
      {
        imgSrc: "/images/sol3.png",
        subtitle: "Operation & Maintenance ",
        description:
          "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
      },
    ],
  },

  storage: {
    title: "Energy Storage System",
    heroImage: "/images/sol-bg.png",
    innerBannerImage: "/images/energy-banner.svg",
    showManufacturing: true,
    manufacturingTitle: "State-of-the-art BESS Manufacturing",
    manufacturingDescription:
      "With various technical collaborations signed, Renfra Energy manufactures Battery Energy Storage Systems (BESS) with advanced DC coupling technology, ensuring minimal energy losses and maximum efficiency. Our manufacturing facilities are equipped with state-of-the-art technology to produce high-quality, reliable energy storage solutions that integrate seamlessly with renewable energy installations.",
    manufacturingImage: "/images/factory.jpg",
    intro:
      "As a provider of end-to-end energy solutions, Renfra Energy manufactures and builds Energy Storage Systems for our clients, enabling a more efficient, reliable and sustainable power supply to their facilities.",
    introLines: [
      "As a provider of end-to-end energy solutions, Renfra Energy manufactures and builds Energy Storage Systems for our clients, enabling a more efficient, reliable and sustainable power supply to their facilities. We provide this hybrid solution, as Battery Energy Storage System (BESS) are needed since customers can store energy from the grid as it is produced from their farms and use it during peak hours, significantly saving on energy loss, which otherwise will either be banked or incur energy losses due to non utilization (Banking charges for power parking/banking on grid that has been generated from the farms but not immediately used are now either getting expensive or the Discoms are removing this service totally. BESS mitigates this cost, thus not only reducing charges for unused/banked power but also optimize the generation from the plants). Further in areas where there are frequent grid blackouts or maintenance shutdowns, having a BESS solution will ensure smooth and consistent power supply to your facility. Renfra Energy acts as a one stop solution provider to implement the BESS solution in your facility since both the DC and the AC side are handled by our professional team. ",
    ],
    twoColumnTitle: "Our commercial & industrial solutions include",
    twoColumnFeatures: [
      "Grid capacity allocation and Power evacuation activities",
      "Design & Engineering",
      "Technology Selection",
      "Site readying/Construction",
      "Procurement",
      "Installation",
      "Grid Permits & Approvals",
      "Commissioning",
      "Energy Management System (Monitoring & Controlling)",
      "Fire prevention and detection systems",
      "Maintenance",
    ],
    twoColumnStats: [
      { icon: "/images/s1.png", number: "250", label: "Industrial Clients" },
      { icon: "/images/s2.png", number: "10000", label: "MW Capacity" },
    ],
    statPositions: [
      "bottom-48 right-30 sm:bottom-64 sm:right-32 md:bottom-60 md:-right-10 lg:bottom-60 lg:right-18",
      "bottom-18 right-30 sm:bottom-28 sm:right-26 md:bottom-26 md:-right-4 lg:bottom-26 lg:right-24",
    ],
    videoUrl: "#",
    projects: [
      {
        image: "/images/about.png",
        title: "Industrial BESS Installation",
        location: "Chennai, India",
        capacity: "100 MWh",
      },
      {
        image: "/images/about.png",
        title: "Grid-Scale Storage",
        location: "Hyderabad, India",
        capacity: "250 MWh",
      },
      {
        image: "/images/about.png",
        title: "Hybrid Solar+BESS",
        location: "Ahmedabad, India",
        capacity: "150 MWh",
      },
    ],
    relatedSolutions: [
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Commercial & Industrial",
        description:
          "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
      },
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Wind",
        description:
          "Delivering 100MW+ of wind projects and expanding capacity across India.",
      },
      {
        imgSrc: "/images/sol3.png",
        subtitle: "Operation & Maintenance ",
        description:
          "Our bespoken O&M solutions ensures long term efficiency, reliability and profitability of the renewable installations",
      },
    ],
  },

  maintenance: {
    title: "Operations & Maintenance",
    heroImage: "/images/sol-bg.png",
    innerBannerImage: "/images/operation-banner.svg",
    intro:
      "As a leading developer of renewable energy projects, Renfra Energy ensures consistent system performance through O&M.",
    introLines: [
      "At Renfra Energy, our journey to a sustainable energy future doesn't end with the construction of renewable project!!!. The long-term success and profitability of your renewable energy project—whether it's a utility-scale solar farm, a wind power plant, or a sophisticated energy storage system—depend entirely on expert Operations & Maintenance (O&M) and Strategic Asset Management. Renfra Energy offers a fully integrated suite of services designed to ensure your renewable assets perform optimally, reliably, and profitably for their entire lifecycle. We take on the technical and financial complexity so you can focus on your core business. Our core mission is to minimize downtime and maximize energy production through proactive, predictive, and rapid response maintenance. ",
    ],
    twoColumnTitle: "Why choose Renfra Energy to power up your home:",
    twoColumnFeatures: [
      "Significant Cost Savings",
      "Energy Independence",
      "Customised system design",
      "Guaranteed system efficiency",
      "Annual and emergency maintenance",
    ],
    twoColumnStats: [
      { icon: "/images/s1.png", number: "1000", label: "Maintained Assets" },
      { icon: "/images/s2.png", number: "99.5%", label: "Uptime" },
    ],
    statPositions: [
      "bottom-52 right-30 sm:bottom-64 sm:right-30 md:bottom-60 md:-right-8 lg:bottom-60 lg:right-20",
      "bottom-20 right-33 sm:bottom-28 sm:right-24 md:bottom-26 md:-right-10 lg:bottom-26 lg:right-30",
    ],
    videoUrl: "#",
    projects: [
      {
        image: "/images/about.png",
        title: "Multi-Site O&M Services",
        location: "Pan-India",
        capacity: "1000+ Assets",
      },
      {
        image: "/images/about.png",
        title: "Solar Farm Maintenance",
        location: "Rajasthan, India",
        capacity: "500 MW",
      },
      {
        image: "/images/about.png",
        title: "Wind Turbine Services",
        location: "Tamil Nadu, India",
        capacity: "250 MW",
      },
    ],
    relatedSolutions: [
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Commercial & Industrial",
        description:
          "Maximize yield with optimal orientation and accessibility for industries and commercial establishments with high energy demand",
      },
      {
        imgSrc: "/images/sol2.png",
        subtitle: "Wind",
        description:
          "Delivering 100MW+ of wind projects and expanding capacity across India.",
      },
      {
        imgSrc: "/images/sol4.png",
        subtitle: "Energy Storage System ",
        description:
          "To further provide optimal utilisation and enhanced power reliability, we integrate battery energy storage systems with renewable energy sources",
      },
    ],
  },
};

function SolutionInnerContent() {
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("id");

  const [solution, setSolution] = useState(null);
  const [orderedSections, setOrderedSections] = useState([]);
  const [projects, setProjects] = useState([]);
  const [allSolutions, setAllSolutions] = useState([]);
  const [relatedSolutions, setRelatedSolutions] = useState([]);
  const [bannerImagePath, setBannerImagePath] = useState("");
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);


  const fetchSolutionsList = async () => {
    try {
      const res = await axiosGet.get("masters/solutions/get/?web_sts=1&active_status=1");
      const data = res.data.data;
      setAllSolutions(data);
    } catch (err) {
      console.error("Solutions List Error:", err);
    }
  };

  useEffect(() => {
    fetchSolutionsList();
  }, []);

  const loadSolution = async (id) => {
  setLoading(true);
  setNoData(false);

  try {
    const res = await axiosGet.get(
      `/masters/solutions/content/get/?solution_id=${id}&web_sts=1`
    );

    const root = res.data.data?.[0];
    if (!root) {
      setNoData(true);
      setSolution(null);
      setOrderedSections([]);
      return;
    }

    const content = root.data;
    if (!content) {
      setNoData(true);
      setSolution(null);
      setOrderedSections([]);
      return;
    }

    // ------- your existing content building code -------
    const sections = [];

    // CONTENT SECTIONS
    content.content?.forEach((item) => {
      sections.push({
        type: "content",
        position: item.position,
        data: {
          description: item.description?.replace(/<[^>]+>/g, "") ?? "",
          html: item.description ?? "",
        },
      });
    });

    // TWO COLUMN SECTIONS
    content.twocolumn?.forEach((item) => {
      const html = item.description || "";
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const title = doc.querySelector("h2")?.textContent.trim() || "";
      const features = Array.from(doc.querySelectorAll("li"))
        .map((li) => li.textContent.trim())
        .filter(Boolean);

      sections.push({
        type: "twocolumn",
        position: item.position,
        data: {
          title,
          features,
         stats: (item.inner_stats || [])
  .filter(stat => stat.value !== "" && stat.value !== null && stat.value !== undefined)
  .map((stat, index) => ({
    icon: index === 0 ? "/images/s1.png" : "/images/s2.png",
    number: stat.value,
    label: stat.label,
  })),
        },
      });
    });

    // VIDEO SECTIONS
    content.video?.forEach((item) => {
      sections.push({
        type: "video",
        position: item.position,
        data: { url: item.url || "" },
      });
    });

    // IMAGE SECTIONS
    content.image?.forEach((item) => {
      sections.push({
        type: "image",
        position: item.position,
        data: {
          src: item.file_path ? BASE_URL + item.file_path : "/images/sol-bg.png",
          alt: item.file_name || "Solution Image",
        },
      });
    });

    // SORT SECTIONS
    sections.sort((a, b) => a.position - b.position);
    setOrderedSections(sections);

    // BASIC SOLUTION INFO
    const heroImage =
      root.banner_image_path !== ""
        ? BASE_URL + root.banner_image_path
        : "/images/sol-bg.png";

    setSolution({
      title: root.solution_name,
      sub_title: root.sub_title || "",
      innerBannerImage: heroImage,
    });
  } catch (err) {
    console.error("Solution Load Error:", err);
    setNoData(true);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (solutionId) {
      loadSolution(solutionId);
    }
  }, [solutionId]);

  
  const fetchMaster = async () => {
    axiosGet
      .get(`masters/projects/get/?web_sts=1`)
      .then((response) => {
        const formatted = response.data.data.map((p) => ({
          image: p.image_path ? BASE_URL + p.image_path : "/images/about.png",
          title: p.project_title || p.title || "Project",
          location: p.location || "",
          capacity: p.capacity || "",
        }));

        setProjects(formatted);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchMaster();
  }, []);

  useEffect(() => {
    if (!solution || allSolutions.length === 0) return;

    const filtered = allSolutions.filter(
      (item) => item.data_uniq_id !== solutionId
    );

    const selected = filtered.slice(0, 3);

    const formatted = selected.map((s) => ({
      imgSrc: s.image_path ? BASE_URL + s.image_path : "/images/default.png",
      subtitle: s.title,
      description: s.description || "Explore this solution",
      link: `/solutions-details?id=${s.data_uniq_id}`,
    }));

    setRelatedSolutions(formatted);
  }, [allSolutions, solution]);

  // Render section based on type
  const renderSection = (section, index) => {
    switch (section.type) {
      case "content": {
  // Extract plain text ONLY for length check
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = section.data.html || "";
  const plainText = tempDiv.textContent?.replace(/\s+/g, " ").trim() || "";

  const isShortContent = plainText.length < 100;

  return (
    <section
      key={`content-${index}`}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${
        isShortContent ? "text-center" : ""
      }`}
    >
      <div
  className={`prose prose-gray max-w-none ${
    isShortContent ? "mx-auto text-center" : ""
  }`}
  dangerouslySetInnerHTML={{ __html: section.data.html }}
/>

    </section>
  );
}


      case "twocolumn":
        return (
          <section
            key={`twocolumn-${index}`}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative flex justify-center">
                <Image
                  src={"/images/sol-bg.png"}
                  alt="Solution"
                  width={400}
                  height={300}
                  className="w-full max-w-[450px] h-auto rounded-lg object-cover"
                />

                {section.data.stats?.length > 0 &&
  section.data.stats.map((stat, idx) => (
    <div
      key={idx}
      className={`absolute flex flex-col items-center gap-4 sm:gap-6 ${
        idx === 0
          ? "bottom-44 right-30 sm:bottom-64 sm:right-40"
          : "bottom-14 right-30 sm:bottom-34 sm:right-40"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={stat.icon}
          alt={stat.label}
          width={56}
          height={56}
          className="w-10 sm:w-14 h-auto"
        />
        <div className="text-[#293E52]">
          <div className="font-bold text-2xl sm:text-3xl">
            {stat.number}
          </div>
          <div className="text-xs sm:text-sm">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
))}
              </div>

              {/* <div className="mt-8 md:mt-0" dangerouslySetInnerHTML={{__html: section.data.featuresRaw}}/> */}
              {/* <div className="mt-8 md:mt-0 prose">
                {parse(section.data.featuresRaw)}
              </div> */}
              <div className="mt-8 md:mt-0">
                <h2 className="text-xl sm:text-2xl font-bold text-[#293E52] mb-6">
                  {section.data.title}
                </h2>
                <ul className="space-y-3">
                  {section.data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center rounded-md bg-gradient-to-r from-[#3CA948] to-[#329ACD] mt-0.5 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );

      case "video":
        // Extract YouTube video ID from URL
        const getYouTubeId = (url) => {
          const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          return match && match[2].length === 11 ? match[2] : null;
        };

        const videoId = getYouTubeId(section.data.url);

        // FINAL EMBED URL
        const videoUrl = videoId
          ? `https://www.youtube.com/embed/${videoId}`
          : null;

        return (
          <section
            key={`video-${index}`}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-[400px] rounded-lg"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            ) : (
              <p className="text-red-500">Invalid video URL</p>
            )}
          </section>
        );

       
      case "image":
        return (
          <section
            key={`image-${index}`}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
          >
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src={section.data.src}
                alt={section.data.alt}
                fill
                className="object-cover"
              />
            </div>
          </section>
        );

      default:
        return null;
    }
  };
  if (loading) {
  return (
    <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
      Loading...
    </div>
  );
}

if (noData) {
  return (
    <div className="w-full py-20 text-center text-red-600 text-lg font-semibold">
      No Data Found
    </div>
  );
}


  if (!solution) return <div className="p-10 text-center">Loading...</div>;

  return (
    <>
      <InnerBannersol
        title={solution.title}
        bgImage={solution.innerBannerImage || "/images/sol-inner.png"}
      />

      <main className="w-full">
        {/* Title */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-0 text-[#293E52]">
            {solution.title}
          </h1>
          {solution.sub_title && (
  <p className="mt-2 text-center text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
  {solution.sub_title}
</p>

)}
        </section>
        


        {/* Render all sections in order */}
        {orderedSections.map((section, index) => renderSection(section, index))}

        

        {/* Our Projects Section */}
        {projects.length > 0 && (
          <div className="bg-[#F6F6F6]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
                Our Projects
              </h2>
              <ProjectsSlider projects={projects} />
            </div>
          </div>
        )}

        {/* Go Back to Solutions Page */}
        <div className="bg-[#F6F6F6]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[#293E52] hover:text-[#3CA948] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go back to Solutions
          </Link>
        </div>
        </div>

        {/* Related Solutions */}
        {relatedSolutions.length > 0 && (
          <div className="bg-[#F6F6F6]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
                Related Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSolutions.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 transform transition-all duration-300 ease-in-out
            hover:scale-[1.03] hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Image
                        src={card.imgSrc}
                        alt={card.subtitle}
                        width={48}
                        height={48}
                        className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
                      />
                      <Link
                        href={card.link}
                        className="text-blue-600 hover:text-[#3CA948] transition-colors"
                      >
                        <ExternalLink className="w-6 sm:w-7 h-6 sm:h-7 flex-shrink-0" />
                      </Link>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-[#293E52] mb-3">
                      {card.subtitle}
                    </p>
                    <p
                      className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default function SolutionInnerPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <SolutionInnerContent />
    </Suspense>
  );
}

// Static Based New Our soltuions CR code

// "use client";

// import { Suspense } from "react";
// import Image from "next/image";
// import { ExternalLink, ArrowLeft, Play } from "lucide-react";
// import Link from "next/link";
// import ProjectsSlider from "@/components/ProjectsSlider";
// import InnerBannersol from "@/components/Inner-bannersol";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { axiosGet, BASE_URL } from "@/lib/api";

// // ─── Static data per solution ────────────────────────────────────────────────
// const staticSolutionData = {
//   solar: {
//     subtitle: "Project Development | EPC | Operations & Maintenance | Lifting Solutions ",
//     introParagraphs: [
//       "At Renfra Energy, we deliver end-to-end solar power projects on a turnkey basis, covering the complete project lifecycle—from concept to commissioning and beyond. Our integrated development approach ensures technical excellence, financial viability, regulatory compliance, and long-term performance for every solar asset we build.",
//       "Renfra Energy brings several decades of experience delivering high-quality solar solutions that are tailored to the specific requirements of our clients. Our proven track record and commitment to customer satisfaction sets us apart from our peers.",
//     ],
//     projectTypesTitle: "Project Types We Deliver",
//  projectTypes: [
//   {
//     image: "/images/pt1.jpg",
//     label: "Utility-scale solar\npower plants",
//   },
//   {
//     image: "/images/pt2.jpg",
//     label: "Commercial & Industrial (C&I)\nrooftop systems",
//   },
//   {
//     image: "/images/pt3.jpg",
//     label: "Captive and group\ncaptive solar projects",
//   },
//   {
//     image: "/images/pt4.jpg",
//     label: "Ground-mounted and\nhybrid solar solutions",
//   },
// ],
//     focusAreasTitle: "Our Specific Targets & Focus Areas",
//    focusAreas: [
//   {
//     icon: "/images/fa1.svg",
//     label: "High-performance solar plants\nwith optimized PR & CUF",
//   },
//   {
//     icon: "/images/fa2.svg",
//     label: "Reduced project\nexecution timelines",
//   },
//   {
//     icon: "/images/fa3.svg",
//     label: "Lower LCOE through smart\ndesign & procurement",
//   },
//   {
//     icon: "/images/fa4.svg",
//     label: "Bankable projects aligned with\nlender & investor standards",
//   },
//   {
//     icon: "/images/fa5.svg",
//     label: "Measurable CO₂ emission\nreduction and ESG impact",
//   },
// ],
//     whyTitle: "Why Renfra Energy?",
//     whyPoints: [
//       "Single-point responsibility from development to commissioning",
//       "Bankable design backed by robust feasibility studies",
//       "Proven execution capability across rooftop & utility-scale projects",
//       "Strong focus on safety, quality, and compliance",
//       "Transparent project management and reporting",
//       "End-to-end project ownership",
//       "Experienced multi-disciplinary engineering teams",
//       "Strong vendor ecosystem and quality control",
//       "Focus on long-term asset performance, not just EPC delivery",
//     ],
//     whyCTA: {
//       title: "From Concept to Clean\nPower Delivered.",
//       body: "With Renfra Energy as your turnkey solar development partner, you gain a future-ready, reliable, and high-yield solar asset—engineered for performance, built for longevity, and aligned with sustainability goals.",
//     },
//   statsImage: "/images/info.png",
//     scopeTitle: "Our Turnkey Solar Development Scope",
// scopeItems: [
//   {
//     title: "Project Origination & Feasibility",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Engineering & Design",
//     icon: "/images/tk2.svg",
//   },
//   {
//     title: "Statutory Approvals & Compliance",
//     icon: "/images/tk3.svg",
//   },
//   {
//     title: "Procurement & Supply Chain",
//     icon: "/images/tk4.svg",
//   },
//   {
//     title: "Construction & Installation",
//     icon: "/images/tk5.svg",
//   },
//   {
//     title: "Testing, Commissioning & Handover",
//     icon: "/images/tk6.svg",
//   },
//   {
//     title: "Operations & Maintenance (Optional)",
//     icon: "/images/tk7.svg",
//   },
// ],
//     videoImage: "/images/solar-video-thumb.jpg",
//     videoUrl: "#",
//    ctaLinkText: "Reach out",
// ctaText: "Reach out now to determine how you can SAVE BIG\nwith our sustainable turnkey solutions!",
//     facilitySection: {
//   title: "Manufacturing Facility",
//   description:
//     "Our planned state-of-the-art PV manufacturing unit is poised to support the ever-increasing demand of solar panels with cutting-edge technology and sustainable production processes. We are committed to delivering high-efficiency, durable solar panels that meet global quality standards while contributing to a greener future.",
//   image: "/images/fac.png",
// },
//   },
//   wind: {
//     subtitle: "Project Development | EPC | Operations & Maintenance | Lifting Solutions",
//     introParagraphs: [
//       "At Renfra Energy India Limited, we help businesses achieve stable, cost-effective, and sustainable power through advanced wind energy solutions. ",
//       "In a short span of me, we have successfully delivered 100 MW of wind power projects and are currently execu ng nearly 500 MW of ongoing wind developments across India. ",
//       "For our customers, this means one thing:  Proven experience you can trust! ",
//       "If your opera ons require high and con nuous power, relying only on conven onal grid supply can be costly and unreliable. For many commercial and industrial customers, wind farms are more economical and efficient especially where energy demand is high. ! ",
//     ],
//     projectTypesTitle: "Why choose Wind Energy? ",
// projectTypes: [
//   {
//     image: "/images/sol/wind-deliver1.png",
//     label: "Consistent power\ngeneration",
//   },
//   {
//     image: "/images/sol/wind-deliver2.png",
//     label: "Lower long-term\nenergy costs ",
//   },
//   {
//     image: "/images/sol/wind-deliver3.png",
//     label: "Reduced dependence on\nthe grid   ",
//   },
//   {
//     image: "/images/sol/wind-deliver4.png",
//     label: "Improved energy security ",
//   },
//    {
//     image: "/images/sol/wind-deliver5.png",
//     label: "Support for sustainability\ngoals  ",
//   },
// ],
//     focusAreasTitle: "Our end-to-end EPC Services ",
//  focusAreas: [
//   {
//     icon: "/images/sol/wind-fa1.png",
//     label: "Site identification & wind resource assessment ",
//   },
//   {
//     icon: "/images/sol/wind-fa2.png",
//     label: "Feasibility studies & approvals ",
//   },
//   {
//     icon: "/images/sol/wind-fa3.png",
//     label: "Engineering & system design ",
//   },
//   {
//     icon: "/images/sol/wind-fa4.png",
//     label: "Procurement of certified equipment ",
//   },
//   {
//     icon: "/images/sol/wind-fa5.png",
//     label: "Civil, electrical & structural works",
//   },
//     {
//     icon: "/images/sol/wind-fa6.png",
//     label: "Turbine installation & commissioning ",
//   },
//     {
//     icon: "/images/sol/wind-fa7.png",
//     label: "Grid connectivity ",
//   },
//     {
//     icon: "/images/sol/wind-fa8.png",
//     label: "Performance testing ",
//   },
//     {
//     icon: "/images/sol/wind-fa9.png",
//     label: "Long-term O&M support ",
//   },
// ],
//     whyTitle: "Why Renfra Energy?",
//     whyPoints: [
//       "100 MW+ wind projects delivered ",
//       "500 MW+ ongoing developments",
//       "Strong EPC execu on capability ",
//       "Hybrid system exper se ",
//       "Transparent project management",
//       "Long-term service support ",
//       "Our focus is on performance, reliability, and customer sa sfac on. ",
//     ],
//     whyCTA: {
//       title: "Trusted Clean Energy\nPartner  .",
//       body: "Renfra Energy develops, designs, engineers, procures, constructs and maintains wind farms for its clients across India. Capaci es of WTG for O&M, installa ons and retrofit/refurbishments 250kW to 3MW",
//     },
//   statsImage: "/images/sol/wind-info.png",
//     scopeTitle: "Our Turnkey Wind Development Scope",
// scopeItems: [
//   {
//     title: "Project Origination & Feasibility",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Engineering & Design",
//     icon: "/images/tk2.svg",
//   },
//   {
//     title: "Statutory Approvals & Compliance",
//     icon: "/images/tk3.svg",
//   },
//   {
//     title: "Procurement & Supply Chain",
//     icon: "/images/tk4.svg",
//   },
//   {
//     title: "Construction & Installation",
//     icon: "/images/tk5.svg",
//   },
//   {
//     title: "Testing, Commissioning & Handover",
//     icon: "/images/tk6.svg",
//   },
//   {
//     title: "Operations & Maintenance (Optional)",
//     icon: "/images/tk7.svg",
//   },
// ],
//     videoImage: "/images/video-bg.png",
//     videoUrl: "#",
// ctaLinkText: "Contact Us",
// ctaText: "Whether you need a standalone wind farm or a hybrid renewable energy system, Renfra Energy delivers solu ons that keep your opera ons running — efficiently and sustainably. Contact Us today to know more",
//   },
//   commercial: {
//     subtitle: "EPC | Maintenance",
//     introParagraphs: [
//       "Renfra Energy India Limited delivers complete EPC solu ons for Ba ery Energy Storage Systems (BESS), ensuring reliable, efficient, and future-ready energy infrastructure. From design to commissioning, our expert team manages every stage of the project! We act as a one stop solution provider to implement the BESS solu on in your facility since both the DC and the AC side are handled by our professional team. ",
//     ],
//     projectTypesTitle: "We build safe, scalable, and smart storage solu ons ",
// projectTypes: [
//   {
//     image: "/images/pt1.jpg",
//     label: "Industrial rooftop\nsolar systems",
//   },
//   {
//     image: "/images/pt1.jpg",
//     label: "Commercial building\nsolar installations",
//   },
//   {
//     image: "/images/pt1.jpg",
//     label: "Captive power\nplants",
//   },
//   {
//     image: "/images/pt1.jpg",
//     label: "Ground-mounted\nC&I solutions",
//   },
// ],
//     focusAreasTitle: "Our Specific Targets & Focus Areas",
//  focusAreas: [
//   {
//     icon: "/images/fa1.svg",
//     label: "Maximum energy yield\nfor C&I customers",
//   },
//   {
//     icon: "/images/fa1.svg",
//     label: "Reduced project\nexecution timelines",
//   },
//   {
//     icon: "/images/fa1.svg",
//     label: "Lower LCOE through smart\ndesign & procurement",
//   },
//   {
//     icon: "/images/fa1.svg",
//     label: "Bankable projects aligned with\nlender & investor standards",
//   },
//   {
//     icon: "/images/fa1.svg",
//     label: "Measurable CO₂ emission\nreduction and ESG impact",
//   },
// ],
//     whyTitle: "Why Renfra Energy?",
//     whyPoints: [
//       "Single-point responsibility from development to commissioning",
//       "Bankable design backed by robust feasibility studies",
//       "Proven execution capability across C&I projects",
//       "Strong focus on safety, quality, and compliance",
//       "Transparent project management and reporting",
//       "End-to-end project ownership",
//       "Experienced multi-disciplinary engineering teams",
//       "Strong vendor ecosystem and quality control",
//       "Focus on long-term asset performance",
//     ],
//     whyCTA: {
//       title: "Your Energy Transition\nStarts Here.",
//       body: "Renfra Energy acts as strategic partners, helping C&I customers navigate the complexities of the energy transition, reduce operational costs, mitigate risk, and demonstrate a commitment to corporate social responsibility.",
//     },
//   statsImage: "/images/info.png",
//     scopeTitle: "Our Turnkey C&I Development Scope",
// scopeItems: [
//   {
//     title: "Project Origination & Feasibility",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Engineering & Design",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Statutory Approvals & Compliance",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Procurement & Supply Chain",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Construction & Installation",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Testing, Commissioning & Handover",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Operations & Maintenance (Optional)",
//     icon: "/images/tk1.svg",
//   },
// ],
//     videoImage: "/images/video-bg.png",
//     videoUrl: "#",
// ctaLinkText: "Talk to Our Experts",
// ctaText: "Talk to Our Experts today to reduce your commercial\nenergy costs with renewable solutions!",
//   },
//   storage: {
//     subtitle: "EPC | Maintenance",
//     introParagraphs: [
//       "Renfra Energy India Limited delivers complete EPC solu ons for Ba ery Energy Storage Systems (BESS), ensuring reliable, efficient, and future-ready energy infrastructure. From design to commissioning, our expert team manages every stage of the project! We act as a one stop solution provider to implement the BESS solu on in your facility since both the DC and the AC side are handled by our professional team. ",
//     ],
//     projectTypesTitle: "We build safe, scalable, and smart storage solu ons  ",
// projectTypes: [
//   {
//     image: "/images/sol/bess-deliver1.jpg",
//     label: "Industrial",
//   },
//   {
//     image: "/images/sol/bess-deliver2.jpg",
//     label: "Commercial",
//   },
//   {
//     image: "/images/sol/bess-deliver3.jpg",
//     label: "Utility Scale",
//   },
// ],
//     focusAreasTitle: "Why to go for your Ba ery Energy Storage Systems with Us? ",
//     focusAreas: [
//   {
//     icon: "/images/sol/bess-fa1.png",
//     label: "Improved power reliability ",
//   },
//   {
//     icon: "/images/sol/bess-fa2.png",
//     label: "Peak load management ",
//   },
//   {
//     icon: "/images/sol/bess-fa3.png",
//     label: "Renewable energy opmiza on ",
//   },
//   {
//     icon: "/images/sol/bess-fa4.png",
//     label: "Reduced energy costs",
//   },
//   {
//     icon: "/images/sol/bess-fa5.png",
//     label: "Grid stability & backup power",
//   },
// ],
//     whyTitle: "Why Customers Trust Us with their projects?",
//     whyPoints: [
//       "Transparent Process ",
//       "On-Time Delivery ",
//       "Long-Term Support ",
//       "Maximum ROI ",
//       "Customized Solu ons ",
//     ],
//     whyCTA: {
//       title: "Your Technology Upgrada\non partner .",
//       body: "Deploying a diversified por olio of storage solu ons from 3.3 MWh and 4.179 MWh to 5.015 MWh and 3.420 MWh suppor ng real world applica ons, grid stability, and large-scale renewable energy integration.",
//     },
//  statsImage: "/images/sol/bess-info.png",
//     scopeTitle: "Our EPC Scope Includes",
// scopeItems: [
//   {
//     title: "Energy requirement assessment & system sizing ",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Battery technology selec on (Li-ion / LFP / Hybrid) ",
//     icon: "/images/tk2.svg",
//   },
//   {
//     title: "Engineering & electrical design ",
//     icon: "/images/tk3.svg",
//   },
//   {
//     title: "Procurement of certified components ",
//     icon: "/images/tk4.svg",
//   },
//   {
//     title: "Civil, electrical & structural installation ",
//     icon: "/images/tk5.svg",
//   },
//   {
//     title: "EMS & SCADA integration ",
//     icon: "/images/tk6.svg",
//   },
//   {
//     title: "Testing, commissioning & grid synchronization",
//     icon: "/images/tk7.svg",
//   },
//   //  {
//   //   title: "O&M support with performance monitoring",
//   //   icon: "/images/tk7.svg",
//   // },
// ],
//     videoImage: "/images/storage-video-thumb.jpg",
//     videoUrl: "#",
// ctaLinkText: "Get in Touch",
// ctaText: "Get in Touch with us now to enable a more efficient, reliable and\nsustainable power supply to your facilities!",   
//  facilitySection: {
//   title: "Manufacturing Facility",
//   description:
//     "Our advanced Battery Energy Storage manufacturing facility is designed to deliver high-performance battery systems with world-class safety standards, innovative engineering, and scalable production capabilities to support the growing energy storage market.",
//   image: "/images/fac.png",
// },
//   },
//   maintenance: {
//     subtitle: "Solar | Wind | BESS",
//     introParagraphs: [
//       "The long-term success and profitability of your renewable energy project—whether it's a utility scale solar farm, a wind power plant, or a sophisticated energy storage system—depend en rely  on expert Operations & Maintenance (O&M) and Strategic Asset Management. ",
//       "At Renfra Energy India Limited, our Operation & Maintenance (O&M) services are designed to ensure maximum energy generation, plant reliability, and long-term asset value throughout the lifecycle of your solar and wind power plant. With a proactive, data-driven approach, we help plant owners achieve optimal performance, reduced downtime, and predictable returns.",
//     ],
//     projectTypesTitle: "Sectors We Serve",
//  projectTypes: [
//   {
//     image: "/images/sol/oper-deliver1.jpg",
//     label: "Utility-scale solar\npower plants",
//   },
//   {
//     image: "/images/sol/oper-deliver2.jpg",
//     label: "Commercial & Industrial\n(C&I) rooftops",
//   },
//   {
//     image: "/images/sol/oper-deliver3.jpg",
//     label: "Captive and group\ncaptive solar projects",
//   },
//   {
//     image: "/images/sol/oper-deliver4.jpg",
//     label: "IPPs, developers, and\nasset owners",
//   },
// ],
//     focusAreasTitle: "Why Choose Renfra Energy for O&M? ",
//     focusAreas: [
//   {
//     icon: "/images/sol/oper-fa1.png",
//     label: "Experienced O&M teams across utility scale and rooftop projects ",
//   },
//   {
//     icon: "/images/sol/oper-fa2.png",
//     label: "Advanced monitoring tools and predictive maintenance approach",
//   },
//   {
//     icon: "/images/sol/oper-fa3.png",
//     label: "Faster response time and reduced plant downtime ",
//   },
//   {
//     icon: "/images/sol/oper-fa4.png",
//     label: "Focus on performance improvement and asset longevity ",
//   },
//   {
//     icon: "/images/sol/oper-fa5.png",
//     label: "Transparent reporting and owner centric service model ",
//   },
// ],
//     whyTitle: "Value We Deliver",
//     whyPoints: [
//       "Higher energy yield & improved PR ",
//       "Reduced opera onal risk and maintenance costs",
//       "Extended asset life and stable cash flows",
//       "Measurable CO₂ emission reduction and ESG impact ",
//     ],
//     whyCTA: {
//       title: "Powering Performance.\nSustaining Clean Energy.",
//       body: "With Renfra Energy’s O&M expertise, your plant remains efficient, compliant, and future-ready—delivering clean power and dependable returns, year after year! ",
//     },
//    statsImage: "/images/sol/Operation-info.png",
//     scopeTitle: "Our O&M Services",
// scopeItems: [
//   {
//     title: "Plant Operations",
//     icon: "/images/tk1.svg",
//   },
//   {
//     title: "Preventive & Correc ve Maintenance",
//     icon: "/images/tk2.svg",
//   },
//   {
//     title: "Module Cleaning & Asset Care ",
//     icon: "/images/tk3.svg",
//   },
//   {
//     title: "Performance Opmization ",
//     icon: "/images/tk4.svg",
//   },
//   {
//     title: "Health, Safety & Compliance",
//     icon: "/images/tk5.svg",
//   },
//   {
//     title: "Reporting & Analytics",
//     icon: "/images/tk6.svg",
//   },
// ],
//     videoImage: "/images/video-bg.png",
//     videoUrl: "#",
// ctaLinkText: "Reach out",
// ctaText: "Reach out now to know more how your project can Maximize Performance.\nEnsure Reliability. Protect Returns.",
//   },
// };

// // ID to key mapping — adjust as per your actual API IDs
// const idToKey = {
//   // Example mappings — replace with actual solution IDs from your API
//   "solar": "solar",
//   "wind": "wind",
//   "commercial": "commercial",
//   "storage": "storage",
//   "maintenance": "maintenance",
// };

// // ─── Stat color pattern: alternating blue/green blocks ───────────────────────
// const statColors = [
//   "bg-[#1B3A5C]", // blue
//   "bg-[#2E7D32]", // green
//   "bg-[#1B3A5C]",
//   "bg-[#2E7D32]",
//   "bg-[#1B3A5C]",
//   "bg-[#2E7D32]",
//   "bg-[#1B3A5C]",
//   "bg-[#2E7D32]",
//   "bg-[#1B3A5C]",
// ];

// // ─── Static Section Component ─────────────────────────────────────────────────
// function StaticSolutionSection({ solutionKey, solutionTitle, bannerSubtitle }) {
//   const data = staticSolutionData[solutionKey];
//   if (!data) return null;

//   return (
//     <>
//       {/* ── Title + Subtitle ── */}
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[##293E52] mb-1">
//           {solutionTitle}
//         </h1>
//         <p className="text-sm sm:text-base font-bold text-[#293E52]">
//           {bannerSubtitle || data.subtitle}
//         </p>
//       </section>

//       {/* ── Intro Paragraphs ── */}
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
//         {data.introParagraphs.map((para, i) => (
//           <p key={i} className="text-[#293E52] font-medium text-sm sm:text-sm md:text-base lg:text-base leading-relaxed mb-3">
//             {para}
//           </p>
//         ))}
//       </section>

//       {/* ── Project Types ── */}
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h2 className="text-xl sm:text-2xl font-bold text-center text-[#293E52] mb-6">
//           {data.projectTypesTitle}
//         </h2>
// <div
//   className={`grid border border-gray-200 rounded-xl overflow-hidden
//     grid-cols-2
//     md:grid-cols-3
//     lg:grid-cols-${data.projectTypes.length}
//   `}
//   style={{
//     gridTemplateColumns:
//       typeof window !== "undefined" && window.innerWidth >= 1024
//         ? `repeat(${data.projectTypes.length}, minmax(0, 1fr))`
//         : undefined,
//   }}
// >
//   {data.projectTypes.map((pt, i) => (
//     <div
//       key={i}
//       className={`
//         flex flex-col items-center text-center
//         py-8 sm:py-10 lg:py-12
//         border-r border-b
//         border-[#DBDBDB]
//       `}
//     >
//       <div className="w-16 h-16 flex items-center justify-center pb-6 lg:pb-8">
//         <Image
//           src={pt.image}
//           alt={pt.label}
//           width={160}
//           height={120}
//           className="w-full max-w-[140px] h-auto object-contain"
//         />
//       </div>

//       <p className="text-sm md:text-base text-[#293E52] leading-snug whitespace-pre-line font-medium">
//         {pt.label}
//       </p>
//     </div>
//   ))}
// </div>
//       </section>

//       {/* ── Focus Areas (dark bg) ── */}
// <section
//   className="relative w-full py-12 my-6 overflow-hidden bg-no-repeat bg-cover bg-center"
//   style={{
//     backgroundImage: "url('/images/famain-bg.png')",
//   }}
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <h2 className="text-xl sm:text-2xl font-bold text-white mb-10">
//       {data.focusAreasTitle}
//     </h2>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//       {data.focusAreas.map((fa, i) => (
//         <div
//           key={i}
//           className="flex items-start gap-4 w-full"
//         >
//           {/* Icon */}
//           <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
//             <Image
//               src={fa.icon}
//               alt={fa.label}
//               width={40}
//               height={40}
//               className="object-contain"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <p className="text-white text-sm sm:text-sm md:text-base lg:text-base leading-relaxed whitespace-pre-line text-left">
//               {fa.label}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* ── Why Renfra + CTA card ── */}
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Left: bullet list */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold text-[#293E52] mb-5">
//               {data.whyTitle}
//             </h2>
//             <ul className="space-y-3">
//               {data.whyPoints.map((point, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1A60A4] flex-shrink-0" />
//                   <span className="text-[#293E52] font-medium text-sm sm:text-sm md:text-base lg:text-base">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Right: CTA card */}
//       <div className="relative bg-[#f5f5f5] rounded-2xl p-8 overflow-hidden min-h-[260px] py-12 flex flex-col justify-between">
  
//   {/* Background Image */}
//   <div className="absolute top-8 right-0 h-[250px] w-auto pointer-events-none">
//     <img
//       src="/images/why.png"
//       alt="none"
//       className="h-full object-cover"
//     />
//   </div>

//   {/* Content */}
//   <div className="relative z-10">
//     <h3 className="text-[#293E52] text-2xl sm:text-2xl md:text-3xl font-bold leading-snug whitespace-pre-line mb-4">
//       {data.whyCTA.title}
//     </h3>
//     <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base w-[380px]">
//       {data.whyCTA.body}
//     </p>
//   </div>

// </div>
//         </div>
//       </section>

//       {/* ── Stats Grid (3×3 alternating blue/green) ── */}
// <section className="w-full">
//   <div className="relative w-full">
//     <Image
//       src={data.statsImage}
//       alt={`${solutionTitle} Statistics`}
//       width={1920}
//       height={600}
//       className="w-full h-auto object-contain"
//       priority
//     />
//   </div>
// </section>

//       {/* ── Scope Items ── */}
//       <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-xl sm:text-2xl font-bold text-[#293E52] mb-12">
//           {data.scopeTitle}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//    {data.scopeItems.map((item, i) => (
//   <div key={i} className="flex items-center gap-3">
//     <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
//       <img
//         src={item.icon}
//         alt={item.title}
//         className="w-10 h-10 object-contain"
//       />
//     </div>

//     <span className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base">
//       {item.title}
//     </span>
//   </div>
// ))}
//         </div>
//       </section>

//       {/* ── Video / Image Banner ── */}
//       <section className="w-full max-w-7xl mx-auto px-2 md:px-4 lg:px-6 pb-14 pt-6">
//         <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
//           <Image
//             src={data.videoImage}
//             alt="Video thumbnail"
//             fill
//             className="object-cover"
//             onError={(e) => { e.target.src = "/images/video-bg.png"; }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <a
//               href={data.videoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
//               aria-label="Play video"
//             >
//               <Play className="w-7 h-7 text-[#293E52] ml-1" fill="#293E52" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA Banner ── */}
// {/* <section className="py-10">
//   <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//     <div className="relative bg-[#293d52] overflow-hidden py-12 rounded-lg">

//       <div className="absolute bottom-8 right-8 pointer-events-none">
//         <img
//           src="/images/reach-bg.png"
//           alt="none"
//           className="h-32 w-auto object-contain"
//         />
//       </div>

//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
//         <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug whitespace-pre-line">
//           <a
//             href="/contact"
//             className="text-white font-bold uppercase hover:text-[#4BC85A] transition-colors"
//           >
//             Reach out
//           </a>

//           {data.ctaText.split("\n")[0].split("Reach out")[1] || ""}
//           {"\n"}
//           {data.ctaText.split("\n").slice(1).join("\n")}
//         </p>
//       </div>

//     </div>
//   </div>
// </section> */}

// <section className="py-10">
//   <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//     <div className="relative bg-[#293d52] overflow-hidden py-12 rounded-lg">

//       {/* Background Image */}
//       <div className="absolute bottom-4 right-8 pointer-events-none">
//         <img
//           src="/images/reach-bg.png"
//           alt=""
//           className="h-32 w-auto object-contain"
//         />
//       </div>

//       {/* Content */}
// <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
//   <p className="leading-snug whitespace-pre-line">
//     {data.ctaText
//       .split(new RegExp(`(${data.ctaLinkText})`, "gi"))
//       .map((part, index) =>
//         part.toLowerCase() === data.ctaLinkText.toLowerCase() ? (
//           <a
//             key={index}
//             href="/contact"
//             className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-white hover:text-[#4BC85A] transition-colors"
//           >
//             {part}
//           </a>
//         ) : (
//           <span
//             key={index}
//             className="text-base sm:text-lg md:text-xl font-medium text-white"
//           >
//             {part}
//           </span>
//         )
//       )}
//   </p>
// </div>

//     </div>
//   </div>
// </section>

// {/* ── Manufacturing Facility Section (Solar & Storage Only) ── */}
// {data.facilitySection && (
//   <section className="w-full bg-white py-12">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//       <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

//         {/* Left Content */}
//         <div className="relative">

//           {/* Yellow Accent */}
//           <div className="absolute -left-6 top-14 hidden lg:block">
//             <div className="w-6 h-1 bg-[#F5C542]" />
//           </div>

//           <h2 className="text-[#293E52] text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
//             {data.facilitySection.title}
//           </h2>

//           <p className="text-[#293E52] text-sm sm:text-sm md:text-base lg:text-base leading-relaxed max-w-lg">
//             {data.facilitySection.description}
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <Image
//             src={data.facilitySection.image}
//             alt={data.facilitySection.title}
//             width={900}
//             height={500}
//             className="w-full h-[220px] object-cover rounded-sm"
//           />
//         </div>

//       </div>
//     </div>
//   </section>
// )}

//     </>
//   );
// }

// // ─── Main Page Content ────────────────────────────────────────────────────────
// function SolutionInnerContent() {
//   const searchParams = useSearchParams();
//   const solutionId = searchParams.get("id");

//   const [solution, setSolution] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [allSolutions, setAllSolutions] = useState([]);
//   const [relatedSolutions, setRelatedSolutions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [noData, setNoData] = useState(false);
//   const [solutionKey, setSolutionKey] = useState(null);

//   // Fetch all solutions list for related section
//   const fetchSolutionsList = async () => {
//     try {
//       const res = await axiosGet.get("masters/solutions/get/?web_sts=1&active_status=1");
//       setAllSolutions(res.data.data || []);
//     } catch (err) {
//       console.error("Solutions List Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchSolutionsList();
//   }, []);

//   // Load solution basic info (title, banner)
//   const loadSolution = async (id) => {
//     setLoading(true);
//     setNoData(false);
//     try {
//       const res = await axiosGet.get(
//         `/masters/solutions/content/get/?solution_id=${id}&web_sts=1`
//       );
//       const root = res.data.data?.[0];
//       if (!root) {
//         setNoData(true);
//         setSolution(null);
//         return;
//       }
//       const heroImage =
//         root.banner_image_path !== ""
//           ? BASE_URL + root.banner_image_path
//           : "/images/sol-inner.png";

//       setSolution({
//         title: root.solution_name,
//         sub_title: root.sub_title || "",
//         innerBannerImage: heroImage,
//       });

//       // Determine which static key to use
//       // Try to match by solution_name (case-insensitive keyword match)
//       const name = (root.solution_name || "").toLowerCase();
//       let key = "solar";
//       if (name.includes("wind")) key = "wind";
//       else if (name.includes("commercial") || name.includes("c&i") || name.includes("industrial")) key = "commercial";
//       else if (name.includes("storage") || name.includes("bess")) key = "storage";
//       else if (name.includes("operation") || name.includes("maintenance") || name.includes("o&m")) key = "maintenance";
//       setSolutionKey(key);
//     } catch (err) {
//       console.error("Solution Load Error:", err);
//       setNoData(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (solutionId) loadSolution(solutionId);
//   }, [solutionId]);

//   // Fetch projects
//   useEffect(() => {
//     axiosGet
//       .get(`masters/projects/get/?web_sts=1`)
//       .then((response) => {
//         const formatted = response.data.data.map((p) => ({
//           image: p.image_path ? BASE_URL + p.image_path : "/images/about.png",
//           title: p.project_title || p.title || "Project",
//           location: p.location || "",
//           capacity: p.capacity || "",
//         }));
//         setProjects(formatted);
//       })
//       .catch((error) => console.error("Projects Error:", error));
//   }, []);

//   // Build related solutions
//   useEffect(() => {
//     if (!solution || allSolutions.length === 0) return;
//     const filtered = allSolutions.filter((item) => item.data_uniq_id !== solutionId);
//     const selected = filtered.slice(0, 3);
//     const formatted = selected.map((s) => ({
//       imgSrc: s.image_path ? BASE_URL + s.image_path : "/images/default.png",
//       subtitle: s.title,
//       description: s.description || "Explore this solution",
//       link: `/solutions-details?id=${s.data_uniq_id}`,
//     }));
//     setRelatedSolutions(formatted);
//   }, [allSolutions, solution]);

//   if (loading) {
//     return (
//       <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
//         Loading...
//       </div>
//     );
//   }

//   if (noData) {
//     return (
//       <div className="w-full py-20 text-center text-red-600 text-lg font-semibold">
//         No Data Found
//       </div>
//     );
//   }

//   if (!solution) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   return (
//     <>
//       {/* Inner Banner */}
//       <InnerBannersol
//         title={solution.title}
//         bgImage={solution.innerBannerImage || "/images/sol-inner.png"}
//       />

//       <main className="w-full">
//         {/* ── STATIC SECTION (matches screenshots) ── */}
//         {solutionKey && (
//           <StaticSolutionSection
//             solutionKey={solutionKey}
//             solutionTitle={solution.title}
//             bannerSubtitle={solution.sub_title}
//           />
//         )}

//         {/* ── Our Projects (API) ── */}
//         {projects.length > 0 && (
//           <div className="bg-[#F6F6F6]">
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
//                 Our Projects
//               </h2>
//               <ProjectsSlider projects={projects} />
//             </div>
//           </div>
//         )}

//         {/* ── Go Back to Solutions ── */}
//         <div className="bg-[#F6F6F6]">
//           <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//             <Link
//               href="/solutions"
//               className="inline-flex items-center gap-2 text-[#293E52] hover:text-[#3CA948] font-semibold transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               Go back to Solutions
//             </Link>
//           </div>
//         </div>

//         {/* ── Related Solutions (API) ── */}
//         {relatedSolutions.length > 0 && (
//           <div className="bg-[#F6F6F6]">
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
//                 Related Solutions
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {relatedSolutions.map((card, i) => (
//                   <div
//                     key={i}
//                     className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg"
//                   >
//                     <div className="flex items-start justify-between mb-3">
//                       <Image
//                         src={card.imgSrc}
//                         alt={card.subtitle}
//                         width={48}
//                         height={48}
//                         className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
//                       />
//                       <Link
//                         href={card.link}
//                         className="text-blue-600 hover:text-[#3CA948] transition-colors"
//                       >
//                         <ExternalLink className="w-6 sm:w-7 h-6 sm:h-7 flex-shrink-0" />
//                       </Link>
//                     </div>
//                     <p className="text-base sm:text-lg font-semibold text-[#293E52] mb-3">
//                       {card.subtitle}
//                     </p>
//                     <p
//                       className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4"
//                       dangerouslySetInnerHTML={{ __html: card.description }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// // ─── Export ───────────────────────────────────────────────────────────────────
// export default function SolutionInnerPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex items-center justify-center min-h-screen">
//           Loading...
//         </div>
//       }
//     >
//       <SolutionInnerContent />
//     </Suspense>
//   );
// }
