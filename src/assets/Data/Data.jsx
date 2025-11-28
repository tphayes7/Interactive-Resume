const boxData = {
    boxArr: [
        {
            divId: 'intro',
            title: 'Introduction',
            data: (
                <>
                    <p><strong>Welcome to my interactive resume!</strong>  A few quick notes on usage:</p>
                    <ol>
                        <li>Any links you see with standard link styling will take you to external web pages in new tabs.</li>
                        <li>Internal links will bring up message boxes similar to the one you're looking at right now.</li>
                        <li>Pretty much everything on this page is clickable.</li>
                    </ol>
                    <p>Feel free to poke around.  If you like what you see, don't hesitate to send me an email using the <strong>Email Me</strong> link.</p>
                </>
            )
        },
        {
            divId: 'name',
            title: 'My Story',
            data: (
                <>
                    <p>If you just take a quick glance at my resume, you might be wondering what exactly it is that I do.  I've done a little bit of a lot of things:  theater, carpentry, teaching, administrative...  Right now I'm looking for a software development position.  So, how exactly did I get here?  Well, that's a bit of a story:</p>
                    <br />
                    <p>Some people will tell you that people are naturally either logical or creative, left-brained or right-brained.  Personally, I've always been a bit of both.  I enjoyed math and science as a kid, but I also always liked to create things and use my imagination.  As an illustration, here was my class lineup my senior year in high school:  AP Calculus (BC), AP Chemistry, AP Physics, Advanced Programming, and Drama IV.  All my teachers thought I should go into their respective fields, but ultimately I decided on theater.</p>
                    <br />
                    <p>And so, I got a degree in theater, with a minor in math (I hadn't completely given up my logical side).  And the natural progression of this was that I got a job at a theater company:  the AD Players in Houston, TX.  This seemed like a dream come true for me.  The AD Players was what is called a 'resident theater company' at the time.  That means that everyone who worked for the company had a job they did within the company, but they also had the opportunity to audition for any shows we produced.  So, if you got cast, some of your work time was shifted from your normal duties toward rehearsals and performances.  But if you didn't get cast, you still had a regular job to do, and you still got a paycheck.  This is extremely rare; most theater companies bring freelancers in to perform in their shows on a show by show basis.  But freelance work never seemed like a good path for me; I didn't want to have my ability to pay rent be based on whether or not I got cast in a show.</p>
                    <br />
                    <p>Working for the AD Players was great, at least for awhile.  A few years after I started working there, the company did some restructuring.  Some positions (including the position I was in) were changed from being salary to hourly positions.  One of the effects of this change was that salaried employees were prioritized for parts in the shows, because the company didn't need to pay them extra for their time in rehearsals and performances, but hourly employees had to be contracted for any shows they did.  We were still a resident theater company, but since I was de-prioritized for casting decisions, my opportunites to perform started to dwindle.  Additionally, my hours were cut because my position didn't need to be full time, so I had to get another part-time job to make ends meet.  Regardless, I stuck with it, at least for awhile.  A few years later, we finished construction on a new and larger theater.  After construction was finished, the company moved to contract out our acting roles, rather than casting actors in-house.  I found myself one day cleaning the bathrooms in the theater and realizing that's all I did.  While I didn't mind doing janitorial work, that's not why I got into theater.  And if I wasn't going to be able to perform, why was I still there?  While I was still considering this, about a week later, I was informed that my position would also be contracted out, and I was no longer needed, so I was spared having to make the decision to leave.</p>
                    <br />
                    <p>After leaving the AD Players, I decided that while I didn't necessarily want to never act again, I didn't want acting to be my livelihood either.  By this time, I had been working at Communities in Schools for about a year, and I was really enjoying it.  Communities in Schools is an after-school program that serves the southern Greater Houston area.  We helped kids with homework, taught them lessons extending on their normal school lessons, and facilitated extra-curricular activities.  During my interview, it came up that I had taken several programming classes in high school, and I was asked if I could teach elementary kids how to code.  I said I would need to brush up my skills, but yeah I could probably teach them the basics.  So I was hired as an Activity Coordinator, with an emphasis on teaching STEM subjects, and in particular, I was given the opportunity to teach weekly programming classes for any of the kids at my school who were interested.</p>
                    <br />
                    <p>It was through Communities in Schools that I got back into programming.  This is when I discovered <a href="https://www.codecademy.com" target="_blank">codecademy.com</a>, and started learning about more modern languages.  However, Codecademy was a bit above the level of elementary school kids, so I wasn't able to use that for teaching them.  Intead, I took them through an age-appropriate course on <a href="https://www.code.org" target="_blank">code.org</a>.  Additionally, I discovered <a href="https://gamemaker.io/en" target="_blank">GameMaker Studio</a> at this time, which was then at version 1.4 and could be downloaded for free.  After they completed the course on code.org, I used GameMaker Studio to guide the kids through the process of making the classic game, Asteroids.</p>
                    <br />
                    <p>Although I loved the work at Communities in Schools, it was a part-time job, and I was barely making enough money to get by.  This was further exacerbated when the CEO of the company retired toward the end of my second school year with them.  The new CEO put a hard cap on the hourly rate for Activity Coordinators, which resulted in a pay cut for me.  Although both my Site Director and Regional Director appealed this decision because I was a specialist, the decision stood.  So I started looking elsewhere for work.  At this time I made 2 decisions:  first, I wanted a stable full-time job, and second, I wanted to eventually work my way into a software development position.  I knew my resume did not lend itself to software development at that time, so instead I looked for administrative positions, with the intention of continuing to learn about programming and eventually transfer.  This is how I ended up at Reynolds and Reynolds, working in Sales Administration.</p>
                    <br />
                    <p>Sales Administration was a more or less typical administrative job.  I was specifically put on the Contract Terminations team, so I was handling the paperwork when one of our customers decided they did not want to do business with us anymore.  This position involved a lot of repetitive tasks, which gave me an opportunity.  During my time with Sales Administration, I created scripts and macros to automate some of those more repetitive tasks.  This not only led to increased efficiency, it also allowed me to show that I had at least some skill in writing code.  Additionally, I continued my learning on Codecademy.  After I had been with the company for about a year and a half, I approached my supervisor and told her I would like to move toward a transfer to software development.  I asked her if she could speak with one of the VPs over software development to see if we could get an idea of what concepts I would be expected to know if I were to transfer.  To my surprise, rather than being given guidance for my own continued learning, I was instead called in for an interview.  About 2 weeks later, they decided to transfer me to software development.</p>
                    <br />
                    <p>So, finally, I have arrived at my first experience with professional software development.  The team I was assigned to worked on the front-end and top-level server layers of the F&I Application, which were written in COBOL and Pick BASIC.  Both of these languages were unfamiliar to me at the time, which meant I had to learn on the job.  Additionally, I had to learn the specific coding standards I was expected to abide by, and familiarize myself with the existing processes of the F&I Application.  Although there was a bit of a learning curve, I did eventually become proficient as an Application Developer, and was even considered the expert on some processes.  During my time there, I helped integrate two new features and completely re-wrote the eContracting process, in addition to numerous smaller modifications and bug fixes.</p>
                    <br />
                    <p>Although I found myself both enjoying and excelling at software development, I eventually had to leave for personal reasons.  After 15 years in Houston, I found that my community of friends had slowly evaporated over time, and so I decided to move back home to be closer to family.  Reynolds and Reynolds, unfortunately, was not willing to allow me to work fully remote, so I had to walk away from that position.</p>
                    <br />
                    <p>And so, I found myself back in Oklahoma without a job.  To me, this seemed like an opportunity, because it allowed me to return to my alma mater for a degree in Computer Science.  Although I already have 4 years of professional software development experience, as well as additional training via Codecademy, I felt that pursuing a formal degree would help fill in some of the gaps in my software education.  My time at OBU also afforded me the opportunity to work a tech support internship at <a href="https://www.hobbylobby.com/" target="_blank">Hobby Lobby</a>, during which time I learned a lot about a side of computer science that I had less experience with.  Ultimately, I believe this process has made me a better programmer, and I hope to use this experience as I resume my software development career.</p>
                </>
            )
        },
        {
            divId: 'dev-knowledge',
            title: 'Coding Proficiencies',
            data: (
                <>
                    <p>Here's a short list of programming languages I have some proficiency in.  I've rated my proficiency from 1 to 10; here's a reference for what different ratings mean:</p>
                    <ul>
                        <li>1: I have never written code in this language.</li>
                        <li>3: I know the basics, like variable declarations, conditionals, and loops.</li>
                        <li>5: I know some of the more complicated concepts, like creating classes and objects, or byte-level memory manipulation.</li>
                        <li>7: I'm very comfortable with this language.  I may have written automated testing or worked in multiple frameworks/environments.</li>
                        <li>10: I know everything there is to know about this language.  I could write code in my sleep.</li>
                    </ul>
                    <div className="justify-content-center">
                        <table id="coding-prof-table">
                            <thead>
                                <tr>
                                    <th>Language</th>
                                    <th className="text-align-center">Proficiency</th>
                                    <th className="text-align-center">Where I Learned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Java</td>
                                    <td className="text-align-center">9</td>
                                    <td className="text-align-center">College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>C#</td>
                                    <td className="text-align-center">7</td>
                                    <td className="text-align-center">Codecademy</td>
                                </tr>
                                <tr>
                                    <td>Javascript</td>
                                    <td className="text-align-center">8</td>
                                    <td className="text-align-center">College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td className="text-align-center">6</td>
                                    <td className="text-align-center">College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>Redux</td>
                                    <td className="text-align-center">4</td>
                                    <td className="text-align-center">Codecademy</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td className="text-align-center">7</td>
                                    <td className="text-align-center">College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>Numpy</td>
                                    <td className="text-align-center">4</td>
                                    <td className="text-align-center">College</td>
                                </tr>
                                <tr>
                                    <td>Pandas</td>
                                    <td className="text-align-center">4</td>
                                    <td className="text-align-center">College</td>
                                </tr>
                                <tr>
                                    <td>HTML/CSS</td>
                                    <td className="text-align-center">9</td>
                                    <td className="text-align-center">High School, College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                    <td className="text-align-center">6</td>
                                    <td className="text-align-center">College, Codecademy</td>
                                </tr>
                                <tr>
                                    <td>COBOL</td>
                                    <td className="text-align-center">6</td>
                                    <td className="text-align-center">Reynolds and Reynolds</td>
                                </tr>
                                <tr>
                                    <td>Pick BASIC</td>
                                    <td className="text-align-center">7</td>
                                    <td className="text-align-center">Reynolds and Reynolds</td>
                                </tr>
                                <tr>
                                    <td>C++</td>
                                    <td className="text-align-center">4</td>
                                    <td className="text-align-center">High School</td>
                                </tr>
                                <tr>
                                    <td>VBA</td>
                                    <td className="text-align-center">6</td>
                                    <td className="text-align-center">Self Taught</td>
                                </tr>
                                <tr>
                                    <td>XAML</td>
                                    <td className="text-align-center">5</td>
                                    <td className="text-align-center">Reynolds and Reynolds</td>
                                </tr>
                                <tr>
                                    <td>GML</td>
                                    <td className="text-align-center">3</td>
                                    <td className="text-align-center">Self Taught</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )
        },
        {
            divId: 'tools',
            title: 'Dev Tools',
            data: (
                <>
                    <p>At Reynolds and Reynolds we had our own IDE that was built in-house, and it had built-in version management software that updated repositories stored on our own servers.  So while I'm familiar with a lot of the concepts associated with other IDEs, Git, and Github, I have only used them for my own personal projects and for school.  Other developer tools include use of Chrome Dev Tools for debugging web applications, Postman for testing back end processes, and PostgreSQL for SQL databases.  This page was created using Visual Studio Code, and is stored on a private GitHub repository.</p>
                    <br />
                    <p>As for Microsoft Office, I've been using Word and Excel since I was in junior high for various school, work, and personal activities.  I grew up with these programs, and would consider myself to be highly proficient with them.</p>
                    <br />
                    <p>In addition to those tools listed on the main page, I am also familiar with other tools.  I have used Chrome Dev Tools extensively to modify and monitor web pages and Javascript/React/Redux applications.  Additionally, I have some familiarity with testing web APIs using Postman, and manipulating SQL databases using Postbird.</p>
                </>
            )
        },
        {
            divId: 'soft-skills',
            title: 'Soft Skills',
            data: (
                <>
                    <p>As they say in Houston, "This ain't my first rodeo."  I've been working in some capacity since I was first in college, about 20 years ago.  Over the years I've run into my fair share of challenges to overcome, difficult conversations, and been tempted many times to cut corners or pass the buck.  But at the end of the day, I'd rather go into the office, do good work, and go home feeling like I accomplished something, rather than spending all day avoiding my responsibilities.  I strive to communicate both thoroughly and respectfully, and would much prefer to see my coworkers as friends and colleagues than as rivals.  If this is the kind of environment you want to cultivate, I like to think I'd be a good addition to your team.</p>
                </>
            )
        },
        {
            divId: 'tutorcom-header',
            title: 'Tutor.com',
            data: (
                <>
                    <p><a href="https://www.tutor.com/" target="_blank">Tutor.com</a> is an online tutoring platform that provides learning assistance in a variety of subjects to students from elementary school through college.</p>
                </>
            )
        },
        {
            divId: 'tutor',
            title: 'Tutor',
            data: (
                <>
                    <p>As a tutor, I help students in a variety of math subjects.  This includes basic arithmetic, algebra I and II, and geometry, among others.  I also help students with computer programming, typically in introductory Python, Java, and C#.</p>
                </>
            )
        },
        {
            divId: 'hobbylobby-header',
            title: 'Hobby Lobby',
            data: (
                <>
                    <p><a href="https://www.hobbylobby.com/" target="_blank">Hobby Lobby</a> is a well-known arts and crafts store with branches across the United States.</p>
                </>
            )
        },
        {
            divId: 'intern-tier3',
            title: 'IT - Tier 3',
            data: (
                <>
                    <p>As Tier 3 support, I worked to configure our Ivanti ticketing system.  This involved creation of new forms, writing regex expressions, writing scripts in javascript, and updating CSS documents.</p>
                    <p>During my tenure, I spearheaded a project to integrate our Ecom Customer Service team into the platform.  This involved creation of new processes, objects, and relationships within the system.  Through this, both my trainer and I discovered functionality within the Ivanti system that allowed for things that we had previously thought were not possible.</p>
                </>
            )
        },
        {
            divId: 'reyrey-header',
            title: 'Reynolds and Reynolds',
            data: (
                <>
                    <p><a href="https://www.reyrey.com/" target="_blank">Reynolds and Reynolds</a> is a software and marketing company that primarily focuses on providing services to car dealerships.  Headquartered in Dayton, OH, Reynolds and Reynolds has several locations around the US, Canada, and the UK, including the location I worked at in Houston, TX.</p>
                </>
            )
        },
        {
            divId: 'app-dev',
            title: 'Application Developer',
            data: (
                <>
                    <p>As an Application Developer for Reynolds and Reynolds, I worked on the Finance and Insurance Application.  When you buy a car, you will inevitably speak to the F&I Manager at the car dealership, who will have all kinds of paperwork for you to sign, including the contract, any add-ons, and paperwork to get a loan.  The Reynolds and Reynolds F&I Application helps streamline this process.  Some of the notable features I worked with include:</p>
                    <ul>
                        <li>docuPAD - a digital form display and signature platform</li>
                        <li>OneSpan integration - a web-based form display and signature platform</li>
                        <li>eContracting - streamlines communications with the bank to cut down on delays while waiting for loan approval</li>
                    </ul>
                    <br />
                    <p>Typical workflow for projects while I was an Application Developer went something like this:</p>
                    <ol>
                        <li>Customer encounters an unexpected issue and submits a ticket.</li>
                        <li>Product Management receives the ticket and determines if it needs to be forwarded to devs.  Product Management teams also design modifications, which are sent to devs without a customer ticket.</li>
                        <li>Dev management looks at request, discusses with Product Management, and determines whether or not the request is possible, then sends it to an Application Developer.</li>
                        <li>Application Developer researches the issue (tries to duplicate error, looks at code, looks at record data, etc.) to determine how to resolve the request.  If necessary, dev creates a design outlining changes.</li>
                        <li>After discussing any potential issues with their supervisor, the Application Developer writes the coding solution.</li>
                        <li>Application Developer manually tests new code (we did not have a setup that allowed for automated testing) before sending it to their supervisor for review.</li>
                        <li>After resolving any issues that came up during review, solution is sent to QA teams for additional testing.</li>
                        <li>Once QA tests are completed successfully, solution is deployed.</li>
                    </ol>
                </>
            )
        },
        {
            divId: 'sales-admin',
            title: 'Sales Administration',
            data: (
                <>
                    <p>Sales Administration was a pretty standard administrative position.  I handled paperwork, fielded phone calls, created documents, etc.  My primary duties during this time revolved around contract terminations.  When customers would determine they no longer wanted to do business with us, they would send in a request to terminate their contract.  My job was to look at the terms of the contract and decide what needed to be done, and when, in order to terminate services.  After determining the termination path, I would generate a form letter indicating the date service would be ending, as well as any other documents that would need to be signed in order to make that happen.  Then, on the date of termination, I would mark the contract as terminated.</p>
                    <br />
                    <p>In addition to my duties directly related to contract terminations, I also fielded phone calls and emails from sales reps.  These calls and emails were generally either asking for information about a customer contract, or were requests for contract amendments or other paperwork.</p>
                    <br />
                    <p>Many of my tasks in this position were repetitive and time-consuming, so I took it upon myself to streamline them whenever possible.  We had a program called AutoHotKey, which would allow you to write scripts to simulate keystrokes.  I used this program to automate some of my more repetitive tasks.  Additionally, I wrote several macros in Excel to streamline creation of some of our documents.</p>
                </>
            )
        },
        {
            divId: 'cis-header',
            title: 'Communities in Schools',
            data: (
                <>
                    <p><a href="https://cistxjv.org/" target="_blank">Communities in Schools Texas Joint Venture</a> is an afterschool program that covers much of the southern and southeastern portions of the Greater Houston Area.  CIS prioritizes low-income neighborhoods, and does not charge for its standard programming, which consists of homework help, lessons extending on normal school learning, and a variety of other fun activities.</p>
                </>
            )
        },
        {
            divId: 'activity-coord',
            title: 'Activity Coordinator',
            data: (
                <>
                    <p>As an Activity Coordinator, I worked with elementary level students.  CIS does have junior high level programming, but I do not know how much of my experience applied at the junior high level.  Activity Coordinators administer the various activities planned for the students.  A single Activity Coordinator can be placed with up to 22 students.  Program is split into 3 blocks:</p>
                    <ol>
                        <li>For the first hour, students work on their homework.  During this time, Activity Coordinators make sure the kids stay on task and answer questions.</li>
                        <li>For the second hour, those students who finished their homework are led through a lesson/activity which extends on what they are learning during the normal day at school.  These lessons can cover any subject they are learning, and generally involve them making something that demonstrates the concept.  Kids who did not finish their homework during the first hour continue working on homework for the second hour.  However, depending on the activity, those students who needed additional homework help may be able to join the activity after completing their homework.</li>
                        <li>For the third hour, students get to choose between several fun activities.  For this block, there is generally at least one physical activity, at least one arts and crafts activity, and at least one technology-related activity.</li>
                    </ol>
                    <p>During my time at CIS, I was a STEM specialist.  For first and second block, this really didn't matter a whole lot, though if our second block activity was STEM-related, I was generally involved.  Where I really got to use my specialty was during third block.  I guided kids through all kinds of STEM activities.  Here's a short list of some of the more memorable ones:</p>
                    <ul>
                        <li>Coding classes - Over the course of a semester, I taught those kids who wanted to participate the basics of writing code, culminating in them creating their own version of Asteroids.</li>
                        <li><a href="https://modrobotics.com/" target="_blank">Cubelets</a> - These fun little toys are magnetic blocks with some very basic programming built in.  There are battery blocks, sensor blocks, action blocks, and logic blocks.  By combining different blocks of different types together, you can make a simple machine.</li>
                        <li>Legos - In addition to just general play, I was able to teach several lessons on architecture using Legos.  The cubelets also had Lego attachments.</li>
                        <li><a href="https://www.playpiper.com/pages/piper-computer-kit" target="_blank">Piper Computer Kit</a> - With this kit I was able to guide the kids through the process of building a basic computer, including wiring controls into a Raspberry Pi.</li>
                        <li>Video games - of course the kids loved this, so we did it often.</li>
                    </ul>
                </>
            )
        },
        {
            divId: 'players-header',
            title: 'AD Players',
            data: (
                <>
                    <p><a href="https://www.adplayers.org/" target="_blank">The AD Players</a> is a non-profit Christian theater located in Houston, TX.</p>
                </>
            )
        },
        {
            divId: 'ops',
            title: 'Operations Assistant',
            data: (
                <>
                    <p>As Operations Assistant, my job was maintenance of the facilities.  Primarily, this meant cleaning and yard work.  I was also occassionally called on to fix something that was broken.  It was not a complicated job, but I enjoyed it.</p>
                </>
            )
        },
        {
            divId: 'dev',
            title: 'Development Coordinator',
            data: (
                <>
                    <p>My job as Development Coordinator was maintenance of our donor database.  We used a program called Raiser's Edge to interact with the database; it allowed for data entry, record updating, queries, report generation, and importing/exporting data.  Interacting with the database was by far the bulk of my job, but I was occasionally called on to perform other duties, such as sending mass emails and helping prepare for events.  My primary duties included the following:</p>
                    <ul>
                        <li>Daily inputting new donations to the database, generating thank you letters, and sending the check/cash/credit card information to Finance for processing.</li>
                        <li>Generating reports as requested.</li>
                        <li>Creating lists for mailouts.</li>
                        <li>Sending mass emails.</li>
                    </ul>
                    <p>In addition to these tasks, I had a long-running project to clean up the database.  When my predecessor left, I discovered that over the years the database had accumulated numerous issues, including duplicate data, innacurate data, and inconsistency in data formatting.  I took it upon myself to correct these errors, heavily utilizing Raiser's Edge's query functionality to pinpoint problems in the database.  Over the years I made many data integrity improvements, and left the database in a much better state than when I found it.</p>
                </>
            )
        },
        {
            divId: 'carpenter',
            title: 'Scenic Carpenter',
            data: (
                <>
                    <p>The Scenic Carpenter position was, unsurprisingly, a carpentry position.  I primarily did woodwork:  sawing boards to length/width, screwing and nailing things together, etc.  We did have a few steel sets, though I did not do the welding on those.  I also helped with lighting, and from time to time had to wire a plug.</p>
                </>
            )
        },
        {
            divId: 'general',
            title: 'General Responsibilities',
            data: (
                <>
                    <p>If you've ever worked for a small non-profit, you may have found that job descriptions are a bit fuzzy at times.  There are any number of things that pop up that someone needs to do, but no one is necessarily assigned to do.  So if you're in that situation, and something comes up that you know how to handle, you do it even if it's not in your job description.  So, over the years, I did a lot of things that weren't really part of any particular job.  As they say in the theater:  the show must go on.</p>
                </>
            )
        },
        {
            divId: 'obu-cis',
            title: 'Oklahoma Baptist University, Computer Science',
            data: (
                <>
                    <p><a href="https://www.okbu.edu/" target="_blank">OBU</a> is a small, private Christian college in Shawnee, OK.  OBU is a liberal arts college, so I was expected to take courses in many different subjects while there, in addition to those specifically required for my major.  This included classes in business, management, and economics.</p>
                    <br />
                    <p>As a computer science major, I am required to have a working knowledge of several programming languages, including Python, Java, and JavaScript, among others.  While there are classes for these specific languages, it was determined that I was proficient prior to my enrollment, and so I was not required to take them.  Additionally, this degree requires study in web design, computational circuits, operating systems, data science, and AI.</p>
                </>
            )
        },
        {
            divId: 'obu-thea',
            title: 'Oklahoma Baptist University, Theater',
            data: (
                <>
                    <p><a href="https://www.okbu.edu/" target="_blank">OBU</a> is a small, private Christian college in Shawnee, OK.  OBU is a liberal arts college, so I was expected to take courses in many different subjects while there, in addition to those specifically required for my major.  This included classes in history, literature, philosophy, sociology, and Biblical studies.  I did not have to take any science or math courses because I made a 5 of both the AP Calculus (BC) and AP Chemistry exams.  However, since I got a minor in Mathematics, I took math classes anyway.</p>
                    <br />
                    <p>As a theatre major, I took a wide variety of classes.  It was not just a bunch of acting classes, although I did have 4 of those.  I also took classes in scene design, lighting design, costume design, makeup design, directing, and theater history.  For my math minor, I took Calc 3, Calc 4, Differential Equations, and Numerical Analysis.</p>
                </>
            )
        },

        {
            divId: 'exemplary-2021',
            title: 'Exemplary Project Recognition 2021',
            data: (
                <>
                    <p>The Exemplary Project Recognition is awarded to those who worked on a project that had an outsized benefit to the company and its customers.  In 2021, I was part of the team that integrated OneSpan into our F&I Application.  OneSpan is a web-based signing platform; integrating it allowed paperwork to be signed when the buyer was not physically at the car dealership.  This was particularly timely in light of COVID lockdowns.</p>
                    <br />
                    <p>My particular part in this project was to build the two specs screens associated with the new service, building out the OneSpan reports processing, and helping with the processing to prepare the form and send it to OneSpan.</p>
                </>
            )
        },
        {
            divId: 'exemplary-2022',
            title: 'Exemplary Project Recognition 2022',
            data: (
                <>
                    <p>The Exemplary Project Recognition is awarded to those who worked on a project that had an outsized benefit to the company and its customers.  In 2022, I was part of the team that integrated <a href="https://www.reyrey.com/solutions/online-retailing/virtual-retailing" target="_blank">Gubagoo</a> into the existing applications.  Gubagoo allows options selected by the buyer online to automatically populate deals that can be used by salespeople at the dealership.</p>
                    <br />
                    <p>My part in this project was to create the process by which specs settings selected on the Gubagoo server were synced with the specs settings selected on the F&I server.  This insured that calculations presented to the buyer would match those presented through the F&I application to the dealership.</p>
                </>
            )
        },
        {
            divId: 'HFBC',
            title: "Houston's First Baptist Church",
            data: (
                <>
                    <p><a href="https://houstonsfirst.org/" target="_blank">Houston's First Baptis Church</a> has several locations throughout Houston.  I went to the Loop location, located at I-10 and the 610 West Loop.  During my time there, I went to various classes in the Summit Singles group, as well as teaching in the children's ministry.</p>
                </>
            )
        },
        {
            divId: 'associate-dir',
            title: 'Associate Director for Axiom Class',
            data: (
                <>
                    <p>As Associate Director I participated in leadership meetings, helped plan events, made announcements, created the calendar, and generally was expected to be active and involved with the class.  I was also expected to provide a good example of Christian service to the class.</p>
                </>
            )
        },
        {
            divId: 'kids-worship',
            title: "Teacher for Kids' Worship",
            data: (
                <>
                    <p>Kids' Worship should not be confused with regular Sunday School classes.  We did have those for the kids, but Kids' Worship was the group worship service, rather than the small group class.  Program generally involved many short segments of teaching, singing, videos, and playing games.  My job was to help with the teaching, which meant I would go over our Bible verse, Bible story, and "Life Point" with the kids, and generally facilitate the flow of the service.  When not on stage, I was in the audience monitoring behavior and helping when the kids needed something.</p>
                </>
            )
        },
        {
            divId: 'full-stack',
            title: 'Full-Stack Engineer',
            data: (
                <>
                    <p><strong>Issuer:</strong> <a href="https://www.codecademy.com/" target="_blank">Codecademy.com</a></p>
                    <p><strong>Issue Date:</strong> April 24, 2024</p>
                    <p><strong>Covered Topics:</strong></p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Git and GitHub</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>Web Security</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </>
            )
        },
        {
            divId: 'front-end',
            title: 'Front-End Engineer',
            data: (
                <>
                    <p><strong>Issuer:</strong> <a href="https://www.codecademy.com/" target="_blank">Codecademy.com</a></p>
                    <p><strong>Issue Date:</strong> May 1, 2024</p>
                    <p><strong>Covered Topics:</strong></p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Git and GitHub</li>
                        <li>Web Design</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Build Tools</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </>
            )
        },
        {
            divId: 'back-end',
            title: 'Back-End Engineer',
            data: (
                <>
                    <p><strong>Issuer:</strong> <a href="https://www.codecademy.com/" target="_blank">Codecademy.com</a></p>
                    <p><strong>Issue Date:</strong> May 3, 2024</p>
                    <p><strong>Covered Topics:</strong></p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>Web Security</li>
                        <li>Software Infrastructure and Scalability</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </>
            )
        },
        {
            divId: 'comp-sci',
            title: 'Computer Science',
            data: (
                <>
                    <p><strong>Issuer:</strong> <a href="https://www.codecademy.com/" target="_blank">Codecademy.com</a></p>
                    <p><strong>Issue Date:</strong> June 14, 2024</p>
                    <p><strong>Covered Topics:</strong></p>
                    <ul>
                        <li>Python</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>Git and Github</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>Computer Architecture</li>
                        <li>Discrete Math</li>
                        <li>Proofs</li>
                    </ul>
                </>
            )
        },
    ]
};

export const getBoxDataById = divId => {
    return boxData.boxArr.find(box => box.divId === divId);
};