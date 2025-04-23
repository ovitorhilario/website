import { BriefcaseBusiness, FolderCode, GraduationCap, Quote } from "lucide-react";
import IconWhatsapp from "../components/icons/whatsapp";
import { Button } from "../components/button";
import { Experiencie } from "../components/experience";
import IconExpo from "../components/icons/expo";
import IconReact from "../components/icons/react";
import IconGithub from "../components/icons/github";
import IconLinkedin from "../components/icons/linkedin";
import IconFirebase from "../components/icons/firebase";
import IconTypescript from "../components/icons/typescript";
import IconAndroid from "../components/icons/android";
import IconJavascript from "../components/icons/javascript";
import IconKotlin from "../components/icons/kotlin";
import { Formation } from "../components/formation";
import { Project } from "../components/project";
import { Stack } from "../components/stack";

import { projects } from "../content/projects";
import { experiences } from "../content/experiencies";
import { formations } from "../content/formations";
import IconApple from "../components/icons/apple";
import IconDrizzle from "../components/icons/drizzle";

export function Home() {

  // Customização do portfólio
  const porfolioOwner = {
    name: "Vitor Hilário",
    actualRole: "Desenvolvedor de Software",
    actualCompany: "@Pull Up Eletronic Systems",
    description: "Programador de aplicativos para Android e iOS, com foco em React Native e Expo. Além disso, atuo como desenvolvedor Front-End usando React.js.",
    linkedin: "https://www.linkedin.com/in/vitor-hilario/",
    github: "https://github.com/ovitorhilario",
    whatsapp: "https://wa.me/5518998017842",
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-2xl w-full flex flex-col items-stretch">
        
        {/* Gradient Blur */}
        <div className="w-full min-h-16 bg-gradient-to-bl from-slate-900 via-orange-600/35 to-black opacity-80 blur-3xl">
        </div>
        {/* <div className="w-full min-h-16 bg-gradient-to-bl from-slate-900 via-blue-900 to-black opacity-80 blur-3xl">
        </div> */}

        <header className="flex flex-col min-h-32 gap-4 pb-6 -mt-12">
          {/* Avatar */}
          <div className="w-full flex flex-row items-center gap-3 sm:gap-4 z-50 py-3 pl-4">
            <div className="border-2 border-zinc-600 rounded-full">
              <div className="min-w-20 min-h-20 max-w-20 max-h-20 rounded-full overflow-hidden border-[3px] border-transparent">
                <img src="https://avatars.githubusercontent.com/u/81326138?v=4" alt="Vitor" />
              </div>  
            </div>
            <div className="flex flex-col mt-2">
              <h1 className="text-lg sm:text-xl font-bold text-zinc-200" translate="no">
                {porfolioOwner.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-zinc-400">
                <span>
                  {porfolioOwner.actualRole}
                </span>
                <a className="text-zinc-300/90" href="https://www.pullup.com.br/" target="_blank" translate="no">
                  {` ${porfolioOwner.actualCompany}`}
                </a>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col items-start px-4 xl:px-0 sm:flex-row gap-3">
            <div className="pt-1 sm:-scale-x-100">
              <Quote
                size={22} 
                className="text-zinc-300"
                strokeWidth={2}
              /> 
            </div>
            <p className="text-base font-medium text-zinc-300">
              {porfolioOwner.description}
            </p>
          </div>

          {/* Links (GitHub, LinkedIn) */}
          <div className="flex flex-row flex-wrap my-2 gap-3 px-4 xl:px-0">
            <Button 
              title="LinkedIn"
              color="default"
              url={porfolioOwner.linkedin}
              icon={<IconLinkedin className="w-4 h-4" />}
              expandable
            />
            <Button 
              title="GitHub"
              color="default"
              url={porfolioOwner.github}
              icon={<IconGithub className="w-4 h-4" />}
              expandable
            />
            <Button 
              title="Entrar em contato"
              color="default"
              url={porfolioOwner.whatsapp}
              icon={<IconWhatsapp className="w-4 h-4" />}
            />
          </div>
        </header>
      
        {/* Main Content */} 
        <main className="flex flex-col gap-4">
          
          <Stack 
            title="Tecnologias"
          />
          <div className="flex flex-row flex-wrap gap-3 pb-4 pt-2 px-4 xl:px-0">
            <Button 
              title="Expo"
              color="default"
              icon={<IconExpo className="w-4 h-4" />}
            />
            <Button 
              title="React Native"
              color="cyan"
              icon={<IconReact className="w-5 h-5 text-cyan-400" />}
            />
            <Button
              title="Android"
              color="green"
              icon={<IconAndroid className="w-4 h-4 text-green-500" />}
            />
            <Button
              title="iOS"
              color="indigo"
              icon={<IconApple className="w-4 h-4 text-[#007AFF]" />}
            />
            <Button 
              title="TypeScript"
              color="blue"
              icon={<IconTypescript className="w-4 h-4 text-blue-400" />}
            />
            <Button 
              title="JavaScript"
              color="yellow"
              icon={<IconJavascript className="w-4 h-4 text-yellow-400" />}
            />
            <Button 
              title="Kotlin"
              color="purple"
              icon={<IconKotlin className="w-4 h-4 text-purple-400" />}
            />
            <Button 
              title="Firebase"
              color="yellow"
              icon={<IconFirebase className="w-4 h-4 text-yellow-400" />}
            />
            <Button 
              title="Drizzle"
              color="green-neon"
              icon={<IconDrizzle className="w-4 h-4 text-[#C5F74F]" />}
            />
          </div>

          <Stack 
            title="Projetos"
            icon={<FolderCode className="w-6 h-6 text-zinc-300" />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pb-4 pt-2 xl:px-0">
            {projects.map(({ title, description, link, tags, img }, index) => {
              return (
                <Project 
                  key={index}
                  title={title}
                  description={description}
                  tags={tags}
                  link={link}
                  img={img}
                />
              );
            })}
          </div>

          <Stack 
            title="Experiências"
            icon={<BriefcaseBusiness className="w-6 h-6 text-zinc-300" />}
          />
          <div className="flex flex-col gap-6 pb-4 pt-2 px-4 xl:px-0">
            {experiences.map(({ role, company, companyImg, companyUrl, period, description }, index) => {
              return (
                <Experiencie 
                  key={index}
                  role={role}
                  company={company}
                  companyImg={companyImg}
                  companyUrl={companyUrl}
                  period={period}
                  description={description}
                />
              );
            })}
          </div>

          <Stack 
            title="Formações"
            icon={<GraduationCap className="w-6 h-6 text-zinc-300" />}
          />
          <div className="flex flex-col gap-6 pb-4 pt-2 px-4 xl:px-0">
            {formations.map(({ school, course, period, schoolImg }, index) => {
              return (
                <Formation 
                  key={index}
                  school={school}
                  course={course}
                  period={period}
                  schoolImg={schoolImg}
                />
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center mb-6 mt-8">
          <span className="text-sm font-semibold text-zinc-500" translate="no">
            © {porfolioOwner.name}, {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  );
}