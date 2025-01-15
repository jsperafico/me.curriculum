import * as React from "react"

import { cn } from "@/lib/utils"

import { Flag } from "@/components/flag"
import { Separator } from "@/components/ui/separator"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { ScrollArea } from "@/components/ui/scroll-area"

import me from "../assets/me-mid.jpg"
import { Skills } from "@/components/skills"
import { Social } from "@/components/social"


function renderPhoto() {
  return <section className="group text-cyan-100 italic font-bold text-center h-full border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 bg-cyan-800 from-cyan-500 to-blue-500 shadow-cyan-800 hover:transition-all md:relative md:overflow-hidden md:flex-[3]">
    <img src={me} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 hidden md:block" />
    <div className="flex flex-col items-start justify-start md:absolute md:inset-0">
      <h1 className="w-full my-2 bg-cyan-800 text-xl md:text-2xl">Jonathan Pinto Sperafico</h1>
      <h2 className="w-full my-2 bg-cyan-800 text-lg md:text-lg">Sr. Test Automation Engineer</h2>
    </div>
  </section>
}

function renderAbout() {
  return <section className="group text-center flex border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 shadow-cyan-800 flex-col bg-cyan-100 md:hover:transition-all md:hover:bg-cyan-100 md:bg-cyan-800 md:w-min md:flex-col-reverse md:h-full md:flex-[4] md:hover:flex-[9]">
    <h3 className="text-center text-cyan-100 italic font-bold bg-cyan-800 sticky top-10 text-lg md:relative md:top-0 md:mt-3">About Me</h3>

    <div className="flex-grow m-4 md:@container">
      <div className="grid grid-cols-2">
        <p className="m-0 col-span-2 justify-self-center text-cyan-800 md:text-cyan-100 md:group-hover:text-cyan-800">Citizenship:</p>
        <Flag country="Italy" className="justify-self-end" />
        <Flag country="Brazil" className="justify-self-start" />
      </div>
      <Separator className="my-3 border-y border-cyan-800 md:border-cyan-100 md:group-hover:border-cyan-800" orientation="horizontal"></Separator>
      <p className="w-auto max-w-max text-justify text-cyan-800 md:text-sm md:text-cyan-100 md:group-hover:text-cyan-800 md:hidden md:@sm:block">
        I am an experienced engineer with a strong proficiency in software development and test automation. My career has been marked by a consistent ability to excel in interdisciplinary teamwork, delivering robust and innovative solutions. Among the numerous proofs of concept I have developed, my most notable and recent project is a distributed performance infrastructure. This infrastructure integrates seamlessly with JMeter, Locust, and Gatling, providing results through Grafana and saving statistics in InfluxDB. Additionally, I have extensive experience with Selenium and Rest Assured, and substantial knowledge in using Wiremock, GitLab, Docker, and Kubernetes. My skill set enables me to contribute effectively to complex projects, ensuring high-quality outcomes and continuous improvement in development processes.
      </p>
      <p className="w-auto max-w-max text-justify text-cyan-100 md:text-sm hidden md:block md:@sm:hidden">
        I am an experienced engineer with a strong proficiency in software development and test automation. My career has been marked by a consistent ability to excel in interdisciplinary teamwork, delivering robust and innovative solutions. [...]
      </p>
    </div>
  </section>
}

function renderSkills() {
  return <section className="group text-center flex border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 shadow-cyan-800 flex-col bg-cyan-100 md:hover:transition-all md:hover:bg-cyan-100 md:bg-cyan-800 md:w-min md:flex-col-reverse md:h-full md:flex-[2] md:hover:flex-[3]">
    <h3 className="text-center text-cyan-100 italic font-bold bg-cyan-800 sticky top-10 text-lg md:relative md:top-0 md:mt-3">Notable Skills</h3>

    <div className="flex-grow m-4 md:@container">
      <div className="md:hidden md:@2xs:block">
        <Skills className="text-cyan-800 md:text-cyan-100" />
      </div>
      <p className="w-full text-center text-cyan-100 md:text-sm my-4 hidden md:block md:@2xs:hidden">
        [...]
      </p>
    </div>
  </section>
}

function renderWorkExperience() {
  return <section className="group text-center flex border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 shadow-cyan-800 flex-col bg-cyan-100 md:hover:transition-all md:hover:bg-cyan-100 md:bg-cyan-800 md:w-min md:flex-col-reverse md:h-full md:flex-[1] md:hover:flex-[9]">
    <h3 className="text-center text-cyan-100 italic font-bold bg-cyan-800 sticky top-10 text-lg md:relative md:top-0 md:mt-3">Work Experience</h3>

    <ScrollArea className="flex-grow m-4 md:@container">
      <div className="md:hidden md:@sm:block">
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Finland" asChild />
              <a href="https://www.relexsolutions.com/" target="_blank"><h4>RELEX Solutions</h4></a>
              <h5>Sr. Software Test Automation Engineer</h5>
              <h6>Dec'21 - May'24</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify md:text-sm">
              Since joining, I have proposed multiple proof of concepts (POCs). One notable
              project, saving over €10,000 annually, is a distributed performance infrastructure
              that is technology-flexible, rendering test results in Grafana, saving test
              statistics in InfluxDB, and integrating smoothly with tools such as JMeter,
              Locust, and Gatling. Initially starting as a Docker project, it evolved into
              an Azure Kubernetes Service (AKS) solution with the assistance of the DevOps team.
              My regular activities span both non-functional and functional test automation as
              required by management, with the former being my primary focus. Additionally,
              as time allows, I contribute my expertise in Robot Framework to maintain and enhance
              the test automation scripts and architecture.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Poland" asChild />
              <a href="https://www.epam.com/" target="_blank"><h4>EPAM Systems</h4></a>
              <h5>Sr. Software Test Automation Engineer</h5>
              <h6>Mar'20 - Dec'21</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify md:text-sm">
              My primary focus was utilizing Selenium and Rest Assured to identify improvement
              opportunities and accelerate the delivery cycle of test automation features for clients.
              During my time at the company, I have been actively involved in various agile projects
              and have gained experience in working with distributed systems and cloud technologies
              such as Apache Kafka and Spring Boot. Each day, I continue to enhance my knowledge and
              proficiency in these areas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://procergs.rs.gov.br/inicial" target="_blank"><h4>PROCERGS</h4></a>
              <h5>Test Automation Engineer</h5>
              <h6>Jan'15 - Feb'20</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify md:text-sm">
              As a QA Automation Engineer, I tackled diverse challenges, initially by writing and
              executing Test Cases with Gherkin on TestLink and Microsoft Test Manager. Not long
              after I enhanced colleagues' functional test code, conducted Performance Testing
              with JMeter, Wiremock, and Graphana, and automated UI Functionality using Selenium,
              Selenium Grid and JUnit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://procergs.rs.gov.br/inicial" target="_blank"><h4>PROCERGS</h4></a>
              <h5>Java Software Developer</h5>
              <h6>Dec'13 - Jan'15</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify text-sm">
              Enrolled to work as Java Software Engineer on a Government Company, worked with
              different teams and projects on Agile Methodology. Back then, used: Java, JBoss EAP,
              Primefaces, Hibernate, Maven, Jenkins and JUnit; to build applications for our
              Country’s citizens.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://www.goodcard.com.br/embratec/" target="_blank"><h4>Embratec</h4></a>
              <h5>Java Software Developer</h5>
              <h6>May'13 - Dec'13</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify text-sm">
              First large Company’s Developer Team that I’ve participated. Using the waterfall
              methodology. My role was to work on a Migration team from Sybase/Powerbuilder
              application to Oracle/JBoss platform. As expected, considering our country's situation,
              I've worked with full stack Java.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://iob.com.br/" target="_blank"><h4>IOB (Sage)</h4></a>
              <h5>Java Software Developer</h5>
              <h6>Jul'12 - Apr'13</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify text-sm">
              After a brief time on Ireland, started to work on challenge new experience. Enrolled
              on maintenance of Java Swing applications. That had a workflow management for their
              business model and also allowed to digitized and synthesized Legal Articles of
              Brazilian's Districts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <h4>MS</h4>
              <h5>Software Developer</h5>
              <h6>Mar'10 - Deb'12</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify text-sm">
              With the help of 2 collegues, we developed an application written in Java Swing to
              manage the company's clients and stock. Also we created a website in PHP.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-work p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://www.unisinos.br/" target="_blank"><h4>UNISINOS</h4></a>
              <h5>Front-end Developer</h5>
              <h6>Aug'09 - Mar'10</h6>
            </AccordionTrigger>
            <AccordionContent className="w-auto max-w-max text-justify text-sm">
              As my first professional experience had an unique opportunity to work on a
              Governamental Digital Learning platform. We created digital subjects like Geography,
              Math, Science, Portuguese and many more. That platform was created using JavaScript,
              CSS2 and HTML4.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="hidden md:block md:@2xs:hiddenw-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </ScrollArea>
  </section>
}

function renderEducation() {
  return <section className="group text-center flex border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 shadow-cyan-800 flex-col bg-cyan-100 md:hover:transition-all md:hover:bg-cyan-100 md:bg-cyan-800 md:w-min md:flex-col-reverse md:h-full md:flex-[1] md:hover:flex-[9]">
    <h3 className="text-center text-cyan-100 italic font-bold bg-cyan-800 sticky top-10 text-lg md:relative md:top-0 md:mt-3">Education</h3>

    <div className="flex-grow m-4 md:@container">
      <div className="md:hidden md:@sm:block">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-education p-0 text-sm font-bold my-2">
              <Flag country="Finland" asChild />
              <a href="https://www.kktavastia.fi/vanajaveden-opisto/" target="_blank"><h4>Vanajaveden Opisto</h4></a>
              <h5>Finnish A1.3</h5>
              <h6>Aug'24 - Dec'24</h6>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-education p-0 text-sm font-bold my-2">
              <Flag country="Ireland" asChild />
              <a href="https://studyinireland.ie/" target="_blank"><h4>ISI Dublin</h4></a>
              <h5>English B2</h5>
              <h6>Mar'12 - May'12</h6>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-cyan-800 border-b-2 text-cyan-800">
            <AccordionTrigger className="grid grid-flow-col head-education p-0 text-sm font-bold my-2">
              <Flag country="Brazil" asChild />
              <a href="https://www.unisinos.br/" target="_blank"><h4>UNISINOS</h4></a>
              <h5>Game Development</h5>
              <h6>2007 - 2011</h6>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="hidden md:block md:@2xs:hidden w-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </div>
  </section>
}

function renderContact() {
  return <section className="group text-center flex border border-cyan-900 rounded-r-md shadow-md ease-in-out delay-150 duration-500 shadow-cyan-800 flex-col bg-cyan-100 md:hover:transition-all md:hover:bg-cyan-100 md:bg-cyan-800 md:w-min md:flex-col-reverse md:h-full md:flex-[1] md:hover:flex-[3]">
    <h3 className="text-center text-cyan-100 italic font-bold bg-cyan-800 sticky top-10 text-lg md:relative md:top-0 md:mt-3">Contact</h3>

    <div className="flex-grow w-fit self-center m-4 sm:w-initial sm:self-stretch md:@container">
      <div className="md:hidden md:@2xs:block">
        <Social className="p-1 text-cyan-800 text-xl md:text-sm hover:text-cyan-100 hover:bg-cyan-800 transition-colors" />
      </div>
      <p className="hidden md:block md:@2xs:hidden w-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </div>
  </section>
}

const CurriculumPage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("max-w-full max-h-fit m-auto md:inset-0 md:fixed", className)}
    {...props}>

    <div className="flex flex-col mt-14 w-[100vw] p-0 md:w-[100vw] md:place-self-auto md:px-9 md:place-content-center md:flex-row md:h-[70vh] md:mt-0">
      {renderPhoto()}
      {renderAbout()}
      {renderSkills()}
      {renderWorkExperience()}
      {renderEducation()}
      {renderContact()}
    </div>
  </article >
))
CurriculumPage.displayName = "CurriculumPage"

export { CurriculumPage }