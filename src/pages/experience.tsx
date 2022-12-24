import Container from "../components/Container";

const Experience: React.FC = () => (
  <Container>
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Current Job Title</h1>
        <p>Software Development Engineer at AWS</p>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Summary</h1>
        <p>
          I am a software engineer who is passionate about solving problems
          using technology such as TypeScript, Java, etc. My experience ranges
          through the full stack. I have developed enjoyable frontend
          experiences for web applications, implemented flexible backend
          solutions that adapt to customers&#39; changing business needs, and
          maintained healthy operational practices for software that is live in
          production.
        </p>
        <p>Currently, I am building the web at Amazon Web Services ☁️</p>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">Experience</h1>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">June 2022 - Present</p>
          <div className="col-span-2">
            <p className="text-sm">Software Development Engineer</p>
            <p className="text-sm">@ Amazon Web Services</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Mar 2021 - May 2022</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Software Engineer</p>
            <p className="pb-1 text-sm">@ ServiceNow</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ServiceNow, I did a lot of stuff here
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pb-6">
          <p className="col-span-1 text-sm">Aug 2019 - Feb 2021</p>
          <div className="col-span-2 flex flex-col">
            <p className="text-sm">Implementation Consultant</p>
            <p className="pb-1 text-sm">@ Fast Enterprises</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fast, I did a lot of stuff here
            </p>
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
            <p className="text-sm">SI Leader (Peer Tutor)</p>
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
