import Anchor from "../components/Anchor";
import Container from "../components/Container";
import Pills from "../components/Pills";

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
          <p className="col-span-1 text-sm">Jun 2022 - Present</p>
          <div className="col-span-2">
            <p className="text-sm">Software Development Engineer</p>
            <p className="pb-1 text-sm italic">@ Amazon Web Services</p>
            <Pills
              pills={[
                { pillText: "TypeScript", pillKey: "aws-typescript" },
                { pillText: "Node.js", pillKey: "aws-nodejs" },
                { pillText: "React", pillKey: "aws-react" },
                { pillText: "AWS", pillKey: "aws-aws" },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Mar 2021 - May 2022</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Software Engineer</p>
            <p className="pb-1 text-sm italic">@ ServiceNow</p>
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
            <Pills
              pills={[
                { pillText: "Java", pillKey: "servicenow-java" },
                { pillText: "JavaScript", pillKey: "servicenow-javascript" },
                { pillText: "Now Experience Framework", pillKey: "servicenow-now-experience-framework" },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2019 - Feb 2021</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Implementation Consultant</p>
            <p className="pb-1 text-sm italic">@ Fast Enterprises</p>
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
            <Pills
              pills={[
                { pillText: "Microsoft SQL Server", pillKey: "fast-microsoft-sql-server" },
                { pillText: "Visual Basic", pillKey: "fast-visual-basic" },
                { pillText: ".NET", pillKey: "fast-dot-net" },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Oct 2018 - Jun 2019</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Implementation Specialist</p>
            <p className="pb-1 text-sm italic">@ PSC Biotech</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Implemented{" "}
              <Anchor href="https://pscsoftware.com/software/ace/">
                FDA-compliant enterprise software solutions
              </Anchor>{" "}
              for pharmaceutical companies. Collaborated with project managers,
              product managers, engineering, and operations to ensure the
              solution was flexible and met all stakeholder needs.
            </p>
            <Pills
              pills={[
                { pillText: "PSC Software", pillKey: "psc-psc-software" },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Oct 2018 - Jun 2019</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Student Intern III</p>
            <p className="pb-1 text-sm italic">
              @ Santa Clara County Registrar of Voters
            </p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Maintained{" "}
              <Anchor href="https://sccvote.sccgov.org/register-vote/precinct-maps">
                precinct boundaries
              </Anchor>
              to ensure all Santa Clara county voters could vote safely and
              efficiently in transparent, honest elections.
            </p>
            <Pills
              pills={[
                { pillText: "ArcGIS", pillKey: "scc-rov-arcgis" },
                { pillText: "SQL", pillKey: "scc-rov-sql" },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2016 - Dec 2017</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">SI Leader (Peer Tutor for Math)</p>
            <p className="pb-1 text-sm italic">
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
            <Pills
              pills={[
                { pillText: "MATLAB", pillKey: "ucsd-tlc-matlab" },
                { pillText: "LaTeX", pillKey: "ucsd-tlc-latex" },
              ]}
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
            <p className="pb-1 text-sm italic">@ UC San Diego</p>
            <p className="pb-1 text-sm text-gray-600 dark:text-gray-400">
              Attended as a{" "}
              <Anchor href="https://fas.ucsd.edu/types/scholarships/chancellors-scholarships-for-entering-freshmen.html">
                Boyer Chancellor&#39;s scholarship
              </Anchor>{" "}
              recipient. Graduated with{" "}
              <span className="italic">magna cum laude</span> honors and awarded
              provost honors every academic quarter. Two-year team member and
              one-year co-captain of the{" "}
              <Anchor href="https://recreation.ucsd.edu/competitive-sports/dragon-boat/">
                UCSD Dragon Boat team
              </Anchor>
              .
            </p>
            <Pills
              pills={[
                { pillText: "Tau Beta Pi", pillKey: "ucsd-tbp" },
                { pillText: "Phi Beta Kappa", pillKey: "ucsd-pbk" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Experience;
