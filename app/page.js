import Nav from "./components/sections/nav/nav";
import Section from "./components/sections/section";
import Profile from "./components/sections/profile/profile";
import Experience from "./components/sections/experience/experience";
import Certificates from "./components/sections/certificates/certificates";
import Projects from "./components/sections/projects/projects";
import { ThemeSwitcher } from "./components/common/buttons/mobileThemeSwitcher";
import LightswitchButton from "./components/common/buttons/lightSwitchButton";
import About_data from "../data/about_data";
import Contact from "./components/sections/contact/contact";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="fixed -left-12 top-3 z-20 flex w-full justify-end sm:-left-12 lg:hidden">
        <ThemeSwitcher />
      </div>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <Profile />
          <Nav />
        </div>
        <ul className="mt-8 flex items-center gap-3" aria-label="Social media">
          <Contact />
          <LightswitchButton />
        </ul>
      </header>
      <main
        className="pt-24 text-lightFaded dark:text-nightFaded lg:w-1/2 "
        id="container"
      >
        <Section name="About">
          <About_data />
        </Section>
        <Section name="Projects">
          <Projects />
        </Section>
        <Section name="Certificates">
          <Certificates />
        </Section>

        <Section name="Previous Experience">
          <Experience />
        </Section>
      </main>
    </div>
  );
}
