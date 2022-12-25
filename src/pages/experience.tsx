import Anchor from "../components/Anchor";
import Container from "../components/Container";

type TechnologyPillsProps = {
  company: string;
  technologies: readonly string[];
};

const TechnologyPills: React.FC<TechnologyPillsProps> = ({
  company,
  technologies,
}) => (
  <ul className="items-top flex flex-row space-x-1">
    {technologies.map((tech) => (
      <div key={`${company}-${tech}`}>
        <li className="rounded bg-pink-100 px-2.5 py-0.5 text-xs font-semibold text-pink-800 dark:bg-teal-200 dark:text-teal-800">
          {tech}
        </li>
      </div>
    ))}
  </ul>
);

const Experience: React.FC = () => (
  <Container>
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Current Job Title</h1>
        <p>Software Development Engineer at AWS</p>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Experience</h1>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">June 2022 - Present</p>
          <div className="col-span-2">
            <p className="text-sm">Software Development Engineer</p>
            <p className="pb-1 text-sm">@ Amazon Web Services</p>
            <TechnologyPills
              company="AWS"
              technologies={["TypeScript", "Node.js", "React", "AWS"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Mar 2021 - May 2022</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Software Engineer</p>
            <p className="pb-1 text-sm">@ ServiceNow</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Developed features for{" "}
              <Anchor href="https://docs.servicenow.com/bundle/sandiego-platform-user-interface/page/get-started/servicenow-overview/concept/next-experience-ui.html">
                Next Experience UI (Polaris)
              </Anchor>{" "}
              in the San Diego release of ServiceNow, finally delivering it
              after its delay for two releases. Part of the team that delivered{" "}
              <Anchor href="https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/script/JavaScript-engine-upgrade/concept/c_JS_engine_upgrade.html">
                ECMAScript 2021
              </Anchor>{" "}
              in the Tokyo release of ServiceNow.
            </p>
            <TechnologyPills
              company="ServiceNow"
              technologies={["Java", "JavaScript", "Now Experience Framework"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2019 - Feb 2021</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Implementation Consultant</p>
            <p className="pb-1 text-sm">@ Fast Enterprises</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Developed vehicle titling and registration interfaces as part of
              the{" "}
              <Anchor href="https://www.startribune.com/smooth-start-seen-this-week-for-mndrive-the-state-s-new-vehicle-and-license-registration-system/573118001/">
                successful release
              </Anchor>{" "}
              of{" "}
              <Anchor href="https://dps.mn.gov/divisions/dvs/mndrive/Pages/default.aspx">
                MNDRIVE
              </Anchor>{" "}
              which serve all Minnesota motorists.
            </p>
            <TechnologyPills
              company="Fast Enterprises"
              technologies={["Microsoft SQL Server", "VB .NET"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Oct 2018 - Jun 2019</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Implementation Specialist</p>
            <p className="pb-1 text-sm">@ PSC Biotech</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Implemented FDA-compliant enterprise software solutions for
              pharmaceutical companies. Collaborated with project managers,
              product managers, engineering, and operations to ensure the
              solution was flexible and met all stakeholder needs.
            </p>
            <TechnologyPills company="PSC" technologies={["PSC Software"]} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Oct 2018 - Jun 2019</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Student Intern III</p>
            <p className="pb-1 text-sm">
              @ Santa Clara County Registrar of Voters
            </p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Maintained precinct boundaries to ensure all Santa Clara county
              voters could vote safely and efficiently in transparent, honest
              elections.
            </p>
            <TechnologyPills
              company="Santa Clara County ROV"
              technologies={["ArcGIS", "SQL"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2016 - Dec 2017</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">SI Leader (Peer Tutor for Math)</p>
            <p className="pb-1 text-sm">
              @ UC San Diego Teaching + Learning Commons
            </p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Served as a{" "}
              <Anchor href="https://aah.ucsd.edu/supplemental-instruction/index.html">
                Supplemental Instruction
              </Anchor>{" "}
              (SI) leader for calculus and linear algebra, empowering student
              peers to earn a half letter grade higher than those who did not
              participate in the program.
            </p>
            <TechnologyPills
              company="UCSD Teaching + Learning Commons"
              technologies={["MATLAB", "LaTeX"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Education</h1>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">2014 - 2018</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">
              B.S. Bioengineering, Minor in Organic Chemistry
            </p>
            <p className="pb-1 text-sm">@ UC San Diego</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Attended as a{" "}
              <Anchor href="https://fas.ucsd.edu/types/scholarships/chancellors-scholarships-for-entering-freshmen.html">
                Boyer Chancellor&#39;s scholarship
              </Anchor>{" "}
              recipient, Graduated with{" "}
              <span className="italic">magna cum laude</span> honors and awarded
              provost honors every academic quarter. Two-year team member and
              one-year co-captain of the{" "}
              <Anchor href="https://recreation.ucsd.edu/competitive-sports/dragon-boat/">
                UCSD Dragon Boat team
              </Anchor>
              .
            </p>
            <TechnologyPills
              company="UCSD"
              technologies={[
                "Tau Beta Pi Engineering Honor Society",
                "Phi Beta Kappa Honor Society",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Experience;
