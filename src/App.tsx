import { useEffect, useState } from 'react';
import { Award, ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Finance and business analytics professional pursuing an MS in Quantitative Management at Duke Fuqua, with FP&A, financial services, and pharmaceutical finance experience across OneAdvanced, Viatris, Deloitte, and EY. Skilled in financial modeling, forecasting, SQL, Python, R, Anaplan, NetSuite, Power BI, Tableau, and advanced Excel, with a record of improving forecast accuracy, reducing reporting turnaround, and identifying multi-million-dollar cost optimization opportunities.";

  const experience = [
    {
      company: "OneAdvanced, Workflow Application Software",
      role: "FP&A Analyst",
      location: "Bangalore, India",
      dates: "Dec 2024 - Apr 2025",
      highlights: [
        "Analyzed $120M+ in COGS across 6 cost centers using SQL, uncovered $2M in cost optimization opportunities, and delivered a roadmap to finance leadership that improved operational efficiency by 5%.",
        "Developed 15+ automated KPI dashboards in Anaplan and Power BI, reducing reporting turnaround by 40% and enabling near-real-time financial performance monitoring.",
        "Designed NetSuite-to-Anaplan data integration to improve annual budget forecast accuracy by 10%, aligning rolling forecasts with quarterly financial targets."
      ]
    },
    {
      company: "Viatris Pharmaceuticals",
      role: "Finance Intern",
      location: "Bangalore, India",
      dates: "May 2024 - Jul 2024",
      highlights: [
        "Created SQL-based revenue forecast models for a $1B business unit, improving forecast accuracy by 15% and strengthening the analytical baseline for capital allocation reviews.",
        "Identified $2M in cost-saving opportunities by mapping company-wide COGS initiatives, with findings adopted into Q3 cost control strategy and presented to the VP of Finance.",
        "Developed product-level contribution margin models in Python across diversified product lines, providing leadership with granular visibility into portfolio margin performance."
      ]
    },
    {
      company: "Deloitte Touche Tohmatsu Limited",
      role: "Financial Services Analyst",
      location: "Bangalore, India",
      dates: "Sep 2022 - Nov 2023",
      highlights: [
        "Led financial analysis and audit procedures for a global alternative asset manager with $1T+ AUM, verifying GAAP compliance across 50+ fund-level financial statements representing $200B+ in combined AUM.",
        "Designed an Excel VBA and Power Query tracking system that reduced audit cycle time by 15%, managed 6+ concurrent workstreams, and provided real-time visibility into 200+ outstanding deliverables.",
        "Reconciled complex fund structures, including capital contributions, carried interest, and waterfall distributions, across monthly and quarterly reporting cycles, maintaining 100% tie-out accuracy for investor reporting."
      ]
    },
    {
      company: "Ernst & Young",
      role: "Business Process Management Intern",
      location: "Bangalore, India",
      dates: "May 2021 - Jul 2021",
      highlights: [
        "Evaluated Celonis, UiPath, ARIS, and Signavio across integration complexity, licensing cost, scalability, and implementation fit, delivering a ranked process mining recommendation to support client adoption and workflow optimization."
      ]
    }
  ];

  const projects = [
    {
      title: "VC Fund Performance & Portfolio Strategy",
      subtitle: "Duke MQM Capstone",
      category: "Private Markets Analytics",
      introduction: "Analyzed PitchBook private markets data using Python and R to evaluate fund performance, startup success drivers, and portfolio strategy across venture capital portfolios.",
      problem: "Private market investors need evidence-backed insight into how fund scale and portfolio construction influence return outcomes and startup success probability.",
      objective: "Evaluate venture fund performance patterns and identify strategic signals that can inform portfolio construction and capital allocation decisions.",
      methodology: [
        "Analyzed PitchBook private markets data using Python and R.",
        "Evaluated fund performance drivers, startup success indicators, and portfolio strategy variables.",
        "Compared AUM thresholds and return behavior to identify scale-related performance tradeoffs."
      ],
      results: [
        "Identified a $500M AUM threshold linked to a 5-percentage-point return decline.",
        "Found portfolio strategy signals associated with 20% higher startup success.",
        "Translated private markets data into actionable portfolio strategy insights."
      ],
      conclusion: "The project connected private market data analysis with investment strategy, showing how fund scale and portfolio choices can influence venture outcomes."
    },
    {
      title: "Online Auction Marketplace Revenue Analysis",
      subtitle: "Marketplace Analytics Project",
      category: "Revenue Analytics",
      introduction: "Evaluated multi-year auction marketplace data in Tableau to identify revenue drivers, bidder competition patterns, and geographic demand gaps.",
      problem: "Auction marketplaces need to understand which bidder, category, and regional patterns drive final sale prices and revenue variance.",
      objective: "Surface revenue levers and demand gaps that can guide marketplace pricing, regional targeting, and seller strategy.",
      methodology: [
        "Built Tableau views to analyze multi-year auction marketplace performance.",
        "Compared final sale price patterns across bidder competition and region dimensions.",
        "Mapped geographic demand gaps and revenue variance across market segments."
      ],
      results: [
        "Showed 18% higher final sale prices where bidder competition was stronger.",
        "Identified 25% revenue variance across regions.",
        "Produced revenue insights to support marketplace growth and demand targeting."
      ],
      conclusion: "The analysis clarified the auction dynamics most closely tied to revenue performance and regional opportunity."
    },
    {
      title: "Leveraged Buyout Model & Private Equity Valuation",
      subtitle: "Excel-Based LBO Model",
      category: "Valuation & Financial Modeling",
      introduction: "Built an Excel-based LBO model with unit-level revenue forecasts, capital expenditure schedule, three-statement integration, debt repayment waterfalls, and IRR sensitivity analysis.",
      problem: "Private equity investment evaluation requires a structured model that captures operating assumptions, financing structure, cash flow generation, and exit scenarios.",
      objective: "Create a transaction model to evaluate deal economics and test investment returns across operating and financing sensitivities.",
      methodology: [
        "Built unit-level revenue forecasts and capital expenditure schedules.",
        "Integrated income statement, balance sheet, and cash flow statements.",
        "Modeled debt repayment waterfalls and return sensitivities."
      ],
      results: [
        "Produced IRR sensitivity analysis ranging from 10% to 25%.",
        "Created a private equity valuation framework for investment evaluation.",
        "Linked operational assumptions to debt paydown and equity return outcomes."
      ],
      conclusion: "The model provided a complete LBO framework for evaluating transaction feasibility, leverage capacity, and return potential."
    },
    {
      title: "Fixed Income Valuation & Credit Risk Modeling",
      subtitle: "R-Based Term Structure and Credit Risk Models",
      category: "Risk Modeling",
      introduction: "Built term structure and credit risk models in R using SOFR OIS data, logistic regression, and 250,000+ observations for valuation and bankruptcy prediction.",
      problem: "Fixed income valuation and credit analysis require reliable rate modeling and predictive credit risk signals across large datasets.",
      objective: "Develop quantitative models that support bond valuation and improve bankruptcy risk prediction accuracy.",
      methodology: [
        "Built term structure models in R using SOFR OIS data.",
        "Applied logistic regression to 250,000+ observations.",
        "Evaluated predictive performance using classification and risk modeling techniques."
      ],
      results: [
        "Improved bankruptcy prediction accuracy to 80%+ AUC.",
        "Developed fixed income valuation support using modern reference rate data.",
        "Combined valuation modeling with credit risk analytics."
      ],
      conclusion: "The project demonstrated quantitative finance, credit risk modeling, and large-scale analytical execution in R."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Financial Analysis & Modeling',
      skills: ['Financial Modeling', 'FP&A', 'Budgeting', 'Forecasting', 'Revenue Forecasting', 'Contribution Margin Analysis', 'LBO Modeling', 'Portfolio Management', 'Capital Allocation Analysis']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics & Programming',
      skills: ['SQL', 'Python', 'R', 'Alteryx', 'Data Cleaning', 'Data Analysis', 'Regression Modeling', 'Credit Risk Modeling', 'Predictive Analytics']
    },
    {
      icon: Users,
      title: 'Business Intelligence & Visualization',
      skills: ['Tableau', 'Power BI', 'KPI Dashboards', 'Data Visualization', 'Executive Reporting', 'Performance Monitoring']
    },
    {
      icon: Lightbulb,
      title: 'Platforms & Automation',
      skills: ['NetSuite', 'Anaplan', 'Bloomberg', 'PitchBook', 'Advanced Excel', 'Pivot Tables', 'XLOOKUP', 'INDEX MATCH', 'Solver', 'Power Query', 'Excel VBA']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Science in Quantitative Management, Business Analytics, Finance Track",
      location: "Durham, NC",
      dates: "May 2026",
      details: "Merit Scholarship; Engagement Manager, Duke Advanced Degree Consulting Club"
    },
    {
      school: "Christ (Deemed to be University)",
      degree: "Bachelor of Commerce Honors, Finance and Investment Specialization",
      location: "Bangalore, India",
      dates: "Jul 2022",
      details: "GPA: 3.72/4.00"
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  const certifications = [
    {
      title: "CMA USA",
      platform: "Certified Management Accountant",
      description: "Credential focused on management accounting, financial planning, analysis, control, decision support, and professional ethics."
    },
    {
      title: "CFA Level II Candidate",
      platform: "CFA Institute",
      description: "Candidate for CFA Level II, with focus areas including equity valuation, fixed income, derivatives, portfolio management, and financial reporting."
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0 pr-4 text-lg sm:text-xl md:text-2xl font-display text-black tracking-wide leading-tight truncate">
              MALIKA SINGH
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Malika Singh"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              MALIKA SINGH
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              CMA USA | CFA LEVEL II CANDIDATE
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'COGS ANALYZED', value: '$120M+', detail: 'Across 6 Cost Centers' },
              { label: 'REPORTING TURNAROUND', value: '40%', detail: 'Reduction Through Automation' },
              { label: 'ASSETS REVIEWED', value: '$200B+', detail: 'Fund-Level Financial Statements' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Finance and analytics specialist combining FP&A execution, investment analysis, and data-driven decision support across technology, pharmaceutical, and financial services environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'FP&A and Forecasting',
                detail: 'Build revenue forecasts, budget models, KPI dashboards, and data integrations that improve reporting speed and forecast accuracy for leadership decision-making.'
              },
              {
                icon: Rocket,
                title: 'Investment Analytics',
                detail: 'Analyze fund performance, valuation scenarios, LBO returns, contribution margins, and portfolio strategy using financial modeling and market data.'
              },
              {
                icon: Lightbulb,
                title: 'Data Fluency',
                detail: 'Use SQL, Python, R, Tableau, Power BI, Anaplan, NetSuite, and advanced Excel to turn complex financial data into clear operating and capital allocation insights.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              FP&A, revenue forecasting, financial services analysis, and business process management experience across global finance and operating teams.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Private markets analytics, marketplace revenue analysis, LBO valuation, and fixed income credit risk modeling projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or financial modeling work?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Financial modeling, analytics, business intelligence, finance platforms, and automation expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in finance, analytics, and quantitative modeling.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-brown mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                    <p className="text-brown font-medium">{cert.platform}</p>
                    <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss FP&A, investment analytics, financial modeling, or business analytics opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19192257460"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (919) 225-7460
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/malikasinghh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:ms.malika2701@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                ms.malika2701@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Malika Singh | Finance, FP&A & Business Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
