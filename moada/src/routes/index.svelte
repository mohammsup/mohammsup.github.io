<script>
  import Hero from "$lib/Hero.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import About from "$lib/About.svelte";
  import Skills from "$lib/Skills.svelte";
  import Timeline from "$lib/Timeline.svelte";
  import Education from "$lib/Education.svelte";
  import Experiences from "$lib/Experiences.svelte";
  import Projects from "$lib/Projects.svelte";
  import Certifications from "$lib/Certifications.svelte";
  import Courses from "$lib/Courses.svelte";
  import Footer from "$lib/Footer.svelte";
import Contact from "$lib/Contact.svelte";
</script>
<div class="flex flex-col w-full">
  <Navbar />
  <div class="mt-10" />
  <Hero />
  <About />
  <Skills />
  <Timeline />
  <Education />
  <Experiences />
  <Projects />
  <Certifications />
  <Courses />
  <Contact />
  <Footer />
</div>
<!-- About Me -> Specialties -> Timeline -> Projects -> Skills  -->