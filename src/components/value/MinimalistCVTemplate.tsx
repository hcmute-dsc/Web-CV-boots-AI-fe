
const MinimalistCVTemplate = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light mb-2">EMMA WILSON</h1>
        <p className="text-lg text-gray-500">UX/UI Designer & Product Manager</p>
        <div className="divider mx-auto w-24 my-4"></div>
        <div className="flex justify-center gap-4 text-sm">
          <p>emma.wilson@example.com</p>
          <p>•</p>
          <p>(987) 654-3210</p>
          <p>•</p>
          <p>San Francisco, CA</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">EDUCATION</h2>
            <div className="mb-4">
              <p className="font-medium">MFA in Interaction Design</p>
              <p className="text-sm">California College of Arts</p>
              <p className="text-sm text-gray-500">2015 - 2017</p>
            </div>
            <div>
              <p className="font-medium">BA in Visual Design</p>
              <p className="text-sm">Rhode Island School of Design</p>
              <p className="text-sm text-gray-500">2011 - 2015</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">SKILLS</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Design</p>
                <p className="text-sm">UI/UX, Wireframing, Prototyping, User Research</p>
              </div>
              <div>
                <p className="font-medium">Tools</p>
                <p className="text-sm">Figma, Sketch, Adobe XD, InVision</p>
              </div>
              <div>
                <p className="font-medium">Development</p>
                <p className="text-sm">HTML/CSS, Basic JavaScript, React</p>
              </div>
              <div>
                <p className="font-medium">Management</p>
                <p className="text-sm">Agile, Scrum, Product Strategy</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">LANGUAGES</h2>
            <div className="space-y-2">
              <p>English (Native)</p>
              <p>French (Fluent)</p>
              <p>Spanish (Intermediate)</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">EXPERIENCE</h2>
            <div className="mb-5">
              <div className="flex justify-between mb-1">
                <p className="font-medium">Senior Product Designer</p>
                <p className="text-sm text-gray-500">2020 - Present</p>
              </div>
              <p className="text-sm mb-2">Design Forward Inc., San Francisco</p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Lead product design for company's flagship SaaS platform</li>
                <li>Conduct user research and usability testing to inform design decisions</li>
                <li>Collaborate with engineering teams to ensure design implementation</li>
                <li>Manage a team of 3 junior designers, providing mentorship and guidance</li>
              </ul>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between mb-1">
                <p className="font-medium">UX Designer</p>
                <p className="text-sm text-gray-500">2017 - 2020</p>
              </div>
              <p className="text-sm mb-2">Creative Solutions Agency, San Francisco</p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Designed user interfaces for web and mobile applications</li>
                <li>Created wireframes, prototypes, and user flows</li>
                <li>Collaborated with clients to understand requirements and project goals</li>
                <li>Participated in design sprints and ideation workshops</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <p className="font-medium">Design Intern</p>
                <p className="text-sm text-gray-500">Summer 2016</p>
              </div>
              <p className="text-sm mb-2">Tech Startup Inc., Boston</p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Assisted senior designers with various projects</li>
                <li>Created visual assets for marketing materials</li>
                <li>Participated in brainstorming sessions for product improvements</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">PROJECTS</h2>
            <div className="mb-3">
              <p className="font-medium">Mobile Banking App Redesign</p>
              <p className="text-sm">Led the complete redesign of a banking app, improving user satisfaction by 45%</p>
            </div>
            
            <div className="mb-3">
              <p className="font-medium">E-commerce UX Optimization</p>
              <p className="text-sm">Redesigned checkout flow, resulting in a 30% reduction in cart abandonment</p>
            </div>
            
            <div>
              <p className="font-medium">Healthcare Patient Portal</p>
              <p className="text-sm">Created an accessible interface for patients to manage appointments and medical records</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistCVTemplate;
