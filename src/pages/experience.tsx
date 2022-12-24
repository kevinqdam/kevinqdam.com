import Anchor from "../components/Anchor";
import Container from "../components/Container";

type TechnologyListProps = {
  company: string;
  technologies: readonly string[];
};

const TechnologyPills: React.FC<TechnologyListProps> = ({
  company,
  technologies,
}) => (
  <ul className="flex flex-row">
    {technologies.map((tech) => (
      <li
        key={`${company}-${tech}`}
        className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-teal-200 dark:text-teal-800"
      >
        {tech}
      </li>
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
              technologies={["TypeScript", "AWS"]}
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
              Fast, I did a lot of stuff here
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PSC, I did a lot of stuff here
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Oct 2018 - Jun 2019</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Student Intern III</p>
            <p className="pb-1 text-sm">
              @ Santa Clara County Registrar of Voters
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ROV, I did a lot of stuff here
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2016 - Dec 2017</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">SI Leader (Peer Tutor for Math)</p>
            <p className="pb-1 text-sm">
              @ UC San Diego Teaching + Learning Commons
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              SI, I did a lot of stuff here
            </p>
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              UCSD, I did a lot of stuff here
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Experience;
