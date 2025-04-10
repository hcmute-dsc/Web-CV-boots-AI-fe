
const CreativeCVTemplate = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 text-gray-800 p-8 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-8 rounded-lg shadow-lg mb-6">
            <div className="flex justify-center mb-4">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-white ring-offset-2 bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">AL</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-1">ALEX LEE</h1>
            <p className="text-center text-blue-100 mb-4">Creative Director & Motion Designer</p>
            <div className="divider my-4 bg-white/20 h-0.5"></div>
            <p className="text-sm leading-relaxed mb-4">
              Passionate creative professional with a unique vision and approach to design. 
              I blend storytelling with visual elements to create memorable brand experiences.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="font-bold text-xl mb-3 text-purple-600">CONTACT</h2>
            <div className="space-y-2 mb-4">
              <p><span className="font-medium">Email:</span> alex.lee@example.com</p>
              <p><span className="font-medium">Phone:</span> (456) 789-0123</p>
              <p><span className="font-medium">Website:</span> alexleedesign.com</p>
              <p><span className="font-medium">Location:</span> Los Angeles, CA</p>
            </div>
            
            <h2 className="font-bold text-xl mb-3 mt-6 text-purple-600">SKILLS</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-2">
                <p className="font-medium mb-1">After Effects</p>
                <progress className="progress progress-secondary" value="95" max="100"></progress>
              </div>
              <div className="mt-2">
                <p className="font-medium mb-1">Photoshop</p>
                <progress className="progress progress-secondary" value="90" max="100"></progress>
              </div>
              <div className="mt-2">
                <p className="font-medium mb-1">Illustrator</p>
                <progress className="progress progress-secondary" value="85" max="100"></progress>
              </div>
              <div className="mt-2">
                <p className="font-medium mb-1">Cinema 4D</p>
                <progress className="progress progress-secondary" value="80" max="100"></progress>
              </div>
              <div className="mt-2">
                <p className="font-medium mb-1">UI/UX Design</p>
                <progress className="progress progress-secondary" value="75" max="100"></progress>
              </div>
              <div className="mt-2">
                <p className="font-medium mb-1">Blender</p>
                <progress className="progress progress-secondary" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="font-bold text-xl mb-3 text-purple-600">EXPERIENCE</h2>
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Creative Director</h3>
                <span className="badge badge-primary badge-outline">2020 - Present</span>
              </div>
              <p className="text-purple-500 mb-2">Pulse Creative Studios, Los Angeles</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lead a team of 8 designers creating motion graphics for major brands</li>
                <li>Developed brand identities for 12+ clients, increasing their market recognition</li>
                <li>Created award-winning animations for streaming platform promotions</li>
                <li>Oversee project timelines and client relationships</li>
              </ul>
            </div>
            
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Senior Motion Designer</h3>
                <span className="badge badge-primary badge-outline">2017 - 2020</span>
              </div>
              <p className="text-purple-500 mb-2">Digital Waves Agency, San Francisco</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Created motion graphics and animations for tech industry clients</li>
                <li>Collaborated with marketing teams to develop visual storytelling strategies</li>
                <li>Designed interactive elements for web and mobile applications</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Graphic Designer</h3>
                <span className="badge badge-primary badge-outline">2015 - 2017</span>
              </div>
              <p className="text-purple-500 mb-2">Creative Solutions Inc., Portland</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Designed marketing materials and brand assets for diverse clients</li>
                <li>Created illustrations and graphics for print and digital media</li>
                <li>Managed social media visual content for multiple accounts</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-xl mb-3 text-purple-600">EDUCATION</h2>
              <div className="mb-4">
                <p className="font-bold">MFA in Motion Graphics</p>
                <p>California Institute of the Arts</p>
                <p className="text-sm text-gray-500">2013 - 2015</p>
              </div>
              <div>
                <p className="font-bold">BFA in Graphic Design</p>
                <p>Rhode Island School of Design</p>
                <p className="text-sm text-gray-500">2009 - 2013</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-xl mb-3 text-purple-600">AWARDS</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Motion Design Award</p>
                  <p className="text-sm">Best Commercial Animation, 2022</p>
                </div>
                <div>
                  <p className="font-bold">Adobe Design Achievement</p>
                  <p className="text-sm">Finalist, Motion Graphics, 2020</p>
                </div>
                <div>
                  <p className="font-bold">Creative Annual Award</p>
                  <p className="text-sm">Gold in Digital Design, 2019</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="font-bold text-xl mb-3 text-purple-600">FEATURED PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-bold">Global Tech Brand Campaign</h3>
                <p className="text-sm">Motion design for international product launch, viewed by 2M+ people</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-bold">Streaming Platform Rebrand</h3>
                <p className="text-sm">Complete visual identity refresh for leading entertainment provider</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-bold">Music Festival Visuals</h3>
                <p className="text-sm">Stage graphics and animations for 3-day international event</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                <h3 className="font-bold">Mobile App Introduction</h3>
                <p className="text-sm">Explainer animation for fintech startup, increasing conversion by 35%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCVTemplate;
