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
  return <section className="group flex-[3] relative overflow-hidden text-center border border-cyan-900 rounded-r-md h-full hover:transition-all ease-in-out delay-150 duration-500 bg-center bg-cover bg-no-repeat from-cyan-500 to-blue-500 prose prose-sm shadow-cyan-800 shadow-md">
    <img src={me} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0" />
    <div className="absolute inset-0 flex flex-col items-start justify-start">
      <h1 className="w-full text-cyan-100 italic font-bold mb-0 bg-cyan-800">Jonathan Pinto Sperafico</h1>
      <h2 className="w-full text-cyan-100 italic font-bold mt-3 bg-cyan-800">Sr. Test Automation Engineer</h2>
    </div>
  </section>
}

function renderAbout() {
  return <section className="group flex-[4] flex flex-col-reverse w-min border border-cyan-900 rounded-r-md h-full ease-in-out delay-150 duration-500 bg-cyan-800 shadow-cyan-800 shadow-md hover:flex-[9] hover:bg-cyan-100 hover:transition-all">
    <h3 className=" text-center text-cyan-100 italic font-bold mt-3 bg-cyan-800">About Me</h3>

    <div className="@container flex-grow m-4">
      <div className="grid grid-cols-2">
        <p className="col-span-2 justify-self-center prose prose-sm text-cyan-100 group-hover:text-cyan-800">Citizenship:</p>
        <Flag country="Italy" className="justify-self-end" />
        <Flag country="Brazil" />
      </div>
      <Separator className="my-3 border-cyan-100 group-hover:border-cyan-800 border-y" orientation="horizontal"></Separator>
      <p className="hidden @sm:block prose prose-sm w-auto max-w-max text-justify text-cyan-100 group-hover:text-cyan-800">
        I am an experienced engineer with a strong proficiency in software development and test automation. My career has been marked by a consistent ability to excel in interdisciplinary teamwork, delivering robust and innovative solutions. Among the numerous proofs of concept I have developed, my most notable and recent project is a distributed performance infrastructure. This infrastructure integrates seamlessly with JMeter, Locust, and Gatling, providing results through Grafana and saving statistics in InfluxDB. Additionally, I have extensive experience with Selenium and Rest Assured, and substantial knowledge in using Wiremock, GitLab, Docker, and Kubernetes. My skill set enables me to contribute effectively to complex projects, ensuring high-quality outcomes and continuous improvement in development processes.
      </p>
      <p className="block @sm:hidden prose prose-sm w-auto max-w-max text-justify text-cyan-100">
        I am an experienced engineer with a strong proficiency in software development and test automation. My career has been marked by a consistent ability to excel in interdisciplinary teamwork, delivering robust and innovative solutions. [...]
      </p>
    </div>
  </section>
}

function renderSkills() {
  return <section className="group flex-[2] flex flex-col-reverse w-min border border-cyan-900 rounded-r-md h-full hover:transition-all ease-in-out delay-150 duration-500 bg-cyan-800 shadow-cyan-800 shadow-md hover:flex-[3] hover:bg-cyan-100">
    <h3 className="text-center text-cyan-100 italic font-bold mt-3 bg-cyan-800">Notable Skills</h3>

    <div className="@container flex-grow m-4">
      <div className="hidden @3xs:block">
        <Skills className="text-cyan-100" /></div>
      <p className="block @3xs:hidden prose prose-sm w-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </div>
  </section>
}

function renderWorkExperience() {
  return <section className="flex-[1] flex flex-col-reverse w-min border border-cyan-900 rounded-r-md h-full hover:transition-all ease-in-out delay-150 duration-500 bg-cyan-800 shadow-cyan-800 shadow-md hover:flex-[9] hover:bg-cyan-100">
    <h3 className="text-center text-cyan-100 italic font-bold mt-3 bg-cyan-800">Work Experience</h3>

    <ScrollArea className="@container flex-grow m-4">
      <div className="hidden @sm:block">
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Finland" asChild />
              <h4><a className="prose prose-sm" href="https://www.relexsolutions.com/" target="_blank">RELEX Solutions</a></h4>
              <h5 className="prose prose-sm">Sr. Software Test Automation Engineer</h5>
              <h6 className="prose prose-sm">Dec'21 - May'24</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
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

          <AccordionItem value="item-2" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Poland" asChild />
              <h4><a className="prose prose-sm" href="https://www.epam.com/" target="_blank">EPAM Systems</a></h4>
              <h5 className="prose prose-sm">Sr. Software Test Automation Engineer</h5>
              <h6 className="prose prose-sm">Mar'20 - Dec'21</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              My primary focus was utilizing Selenium and Rest Assured to identify improvement
              opportunities and accelerate the delivery cycle of test automation features for clients.
              During my time at the company, I have been actively involved in various agile projects
              and have gained experience in working with distributed systems and cloud technologies
              such as Apache Kafka and Spring Boot. Each day, I continue to enhance my knowledge and
              proficiency in these areas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://procergs.rs.gov.br/inicial" target="_blank">PROCERGS</a></h4>
              <h5 className="prose prose-sm">Test Automation Engineer</h5>
              <h6 className="prose prose-sm">Jan'15 - Feb'20</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              As a QA Automation Engineer, I tackled diverse challenges, initially by writing and
              executing Test Cases with Gherkin on TestLink and Microsoft Test Manager. Not long
              after I enhanced colleagues' functional test code, conducted Performance Testing
              with JMeter, Wiremock, and Graphana, and automated UI Functionality using Selenium,
              Selenium Grid and JUnit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://procergs.rs.gov.br/inicial" target="_blank">PROCERGS</a></h4>
              <h5 className="prose prose-sm">Java Software Developer</h5>
              <h6 className="prose prose-sm">Dec'13 - Jan'15</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              Enrolled to work as Java Software Engineer on a Government Company, worked with
              different teams and projects on Agile Methodology. Back then, used: Java, JBoss EAP,
              Primefaces, Hibernate, Maven, Jenkins and JUnit; to build applications for our
              Country’s citizens.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://www.goodcard.com.br/embratec/" target="_blank">Embratec</a></h4>
              <h5 className="prose prose-sm">Java Software Developer</h5>
              <h6 className="prose prose-sm">May'13 - Dec'13</h6>
            </AccordionTrigger>
            <AccordionContent>
              First large Company’s Developer Team that I’ve participated. Using the waterfall
              methodology. My role was to work on a Migration team from Sybase/Powerbuilder
              application to Oracle/JBoss platform. As expected, considering our country's situation,
              I've worked with full stack Java.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://iob.com.br/" target="_blank">IOB (Sage)</a></h4>
              <h5 className="prose prose-sm">Java Software Developer</h5>
              <h6 className="prose prose-sm">Jul'12 - Apr'13</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              After a brief time on Ireland, started to work on challenge new experience. Enrolled
              on maintenance of Java Swing applications. That had a workflow management for their
              business model and also allowed to digitized and synthesized Legal Articles of
              Brazilian's Districts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4 className="prose prose-sm">MS</h4>
              <h5 className="prose prose-sm">Software Developer</h5>
              <h6 className="prose prose-sm">Mar'10 - Deb'12</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              With the help of 2 collegues, we developed an application written in Java Swing to
              manage the company's clients and stock. Also we created a website in PHP.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-work">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://www.unisinos.br/" target="_blank">UNISINOS</a></h4>
              <h5 className="prose prose-sm">Front-end Developer</h5>
              <h6 className="prose prose-sm">Aug'09 - Mar'10</h6>
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm w-auto max-w-max text-justify">
              As my first professional experience had an unique opportunity to work on a
              Governamental Digital Learning platform. We created digital subjects like Geography,
              Math, Science, Portuguese and many more. That platform was created using JavaScript,
              CSS2 and HTML4.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="block @2xs:hidden prose prose-sm w-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </ScrollArea>
  </section>
}

function renderEducation() {
  return <section className="group flex-[1] flex flex-col-reverse w-min border border-cyan-900 rounded-r-md h-full hover:transition-all ease-in-out delay-150 duration-500 bg-cyan-800 shadow-cyan-800 shadow-md hover:flex-[9] hover:bg-cyan-100">
    <h3 className="text-center text-cyan-100 italic font-bold mt-3 bg-cyan-800">Education</h3>

    <div className="@container flex-grow m-4">
      <div className="hidden @sm:block">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-education">
              <Flag country="Finland" asChild />
              <h4><a className="prose prose-sm" href="https://www.kktavastia.fi/vanajaveden-opisto/" target="_blank">Vanajaveden Opisto</a></h4>
              <h5 className="prose prose-sm">Finnish A1.3</h5>
              <h6 className="prose prose-sm">Aug'24 - Dec'24</h6>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-education">
              <Flag country="Ireland" asChild />
              <h4><a className="prose prose-sm" href="https://studyinireland.ie/" target="_blank">ISI Dublin</a></h4>
              <h5 className="prose prose-sm">English B2</h5>
              <h6 className="prose prose-sm">Mar'12 - May'12</h6>
            </AccordionTrigger>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-cyan-800 border-b-2">
            <AccordionTrigger className="grid grid-flow-col head-education">
              <Flag country="Brazil" asChild />
              <h4><a className="prose prose-sm" href="https://www.unisinos.br/" target="_blank">UNISINOS</a></h4>
              <h5 className="prose prose-sm">Game Development</h5>
              <h6 className="prose prose-sm">2007 - 2011</h6>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>

      <p className="block @2xs:hidden prose prose-sm w-full text-center text-cyan-100 my-4">
        [...]
      </p>
    </div>
  </section>
}

function renderContact() {
  return <section className="group flex-[2] flex flex-col-reverse w-min border border-cyan-900 rounded-r-md h-full hover:transition-all ease-in-out delay-150 duration-500 bg-cyan-800 shadow-cyan-800 shadow-md hover:flex-[3] hover:bg-cyan-100">
    <h3 className="text-center text-cyan-100 italic font-bold mt-3 bg-cyan-800">Contact</h3>

    <div className="@container flex-grow my-4 group-hover:m-4">
      <div className="hidden @2xs:block">
        <Social className="text-cyan-100 group-hover:text-cyan-800 group-hover:hover:text-cyan-100 hover:bg-cyan-800" />
      </div>
      <p className="block @2xs:hidden prose prose-sm w-full text-center text-cyan-100 my-4">
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
    className={cn("max-w-full max-h-fit fixed m-auto inset-0", className)}
    {...props}>

    <div className="flex flex-row h-[70vh] mx-9">

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