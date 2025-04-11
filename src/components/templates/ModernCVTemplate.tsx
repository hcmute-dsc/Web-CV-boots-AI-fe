const HarvardCVTemplate = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white text-gray-800 p-4 md:p-10 rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-lg shadow-lg">
          {/* Avatar */}
          <div className="avatar mb-6 md:mb-8 flex justify-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-inner">
              <span className="text-4xl md:text-5xl text-gray-700 font-extrabold">
                JD
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Contact Information
          </h2>
          <div className="divider my-2 md:my-3"></div>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> john.doe@example.com
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> (123) 456-7890
          </p>
          <p className="mb-6">
            <span className="font-semibold">Location:</span> New York, NY
          </p>

          {/* Skills */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Skills
          </h2>
          <div className="divider my-2 md:my-3"></div>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-2 mb-6 md:mb-8">
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>UI/UX</li>
            <li>REST API</li>
            <li>Git</li>
          </ul>

          {/* Education */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Education
          </h2>
          <div className="divider my-2 md:my-3"></div>
          <div className="text-sm md:text-base text-gray-600 space-y-4">
            <div>
              <p className="font-semibold">Masters in Computer Science</p>
              <p>Stanford University, 2016-2018</p>
            </div>
            <div>
              <p className="font-semibold">BS in Software Engineering</p>
              <p>MIT, 2012-2016</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3">
          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 text-gray-800">
            John Doe
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 mb-6 md:mb-8">
            Senior Frontend Developer
          </p>

          {/* Profile */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Profile
          </h2>
          <div className="divider my-2 md:my-3"></div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
            Experienced frontend developer with over 5 years of expertise in
            building responsive web applications using modern JavaScript
            frameworks. Passionate about creating intuitive user interfaces and
            optimizing application performance.
          </p>

          {/* Work Experience */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Work Experience
          </h2>
          <div className="divider my-2 md:my-3"></div>

          {[
            {
              role: "Senior Frontend Developer",
              company: "Tech Innovations Inc., New York",
              time: "2020 - Present",
              items: [
                "Led development of company's flagship SaaS product using React and TypeScript",
                "Improved application performance by 40% through code optimization",
                "Implemented CI/CD pipeline resulting in 30% faster deployment times",
              ],
            },
            {
              role: "Frontend Developer",
              company: "WebSolutions LLC, Boston",
              time: "2018 - 2020",
              items: [
                "Developed responsive web applications for various clients using React",
                "Collaborated with design team to implement UI/UX improvements",
                "Mentored junior developers on best practices and coding standards",
              ],
            },
          ].map((exp, i) => (
            <div className="mb-6 md:mb-10" key={i}>
              <h3 className="font-bold text-lg md:text-xl text-gray-800">
                {exp.role}
              </h3>
              <p className="text-gray-500">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.time}</p>
              <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-2">
                {exp.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Projects */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-700">
            Projects
          </h2>
          <div className="divider my-2 md:my-3"></div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800">E-commerce Platform</h3>
            <p className="text-sm md:text-base text-gray-600">
              Built a full-featured e-commerce platform with React, Node.js, and
              MongoDB
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Task Management App</h3>
            <p className="text-sm md:text-base text-gray-600">
              Developed a collaborative task management application with
              real-time updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvardCVTemplate;
