---
layout: profile
permalink: /
redirect_from:
  - /about/
  - /about.html
---

<div class="intro-copy">
  <p>I’m a Computer Engineering undergraduate at the Hong Kong University of Science and Technology, with a minor in Robotics and an extended major in Artificial Intelligence.</p>
  <p>I enjoy turning algorithms into working systems: developing autonomous robot control and deploying AI models on embedded hardware. My interests lie in <strong>aerial robotics, embedded systems</strong>.</p>
</div>

<section class="profile-section" id="projects" aria-labelledby="work-heading">
  <div class="section-heading"><h2 id="work-heading">Projects & experience</h2></div>
  {% include profile-projects.html detailed=true %}
</section>

<section class="profile-section" id="education" aria-labelledby="education-heading">
  <div class="section-heading"><h2 id="education-heading">Education</h2><span class="entry-date">{{ site.data.profile.education.period }}</span></div>
  <h3>{{ site.data.profile.education.institution }}</h3>
  <p class="education-degree">{{ site.data.profile.education.degree }}</p>
  <p class="muted">{{ site.data.profile.education.focus }}</p>
  <dl class="academic-stats">
    <div><dt>Cumulative grade average</dt><dd>{{ site.data.profile.education.cga }}</dd></div>
    <div><dt>Major grade average</dt><dd>{{ site.data.profile.education.major_cga }}</dd></div>
  </dl>
  <h3 class="small-heading">Relevant coursework</h3>
  <p>{{ site.data.profile.education.coursework | join: ' · ' }}</p>
</section>

<section class="profile-section" id="skills" aria-labelledby="skills-heading">
  <div class="section-heading"><h2 id="skills-heading">Skills & interests</h2></div>
  <dl class="skills-list">
    {% for group in site.data.profile.skills %}
    <div><dt>{{ group.name }}</dt><dd>{{ group.items | join: ', ' }}</dd></div>
    {% endfor %}
  </dl>
  <h3 class="small-heading">Languages</h3>
  <p>{{ site.data.profile.languages | join: ' · ' }}</p>
  <h3 class="small-heading">Technical interests</h3>
  <p>{{ site.data.profile.interests | join: ', ' }}</p>
</section>

<section class="profile-section" id="awards" aria-labelledby="recognition-heading">
  <div class="section-heading"><h2 id="recognition-heading">Recognition</h2></div>
  <ul class="recognition-list">
    {% for award in site.data.profile.awards %}
    <li><div><strong>{{ award.name }}</strong><span class="muted">{{ award.institution }}</span></div><span class="entry-date">{{ award.period }}</span></li>
    {% endfor %}
  </ul>
</section>

<section class="contact-panel" id="contact" aria-labelledby="contact-heading">
  <p class="eyebrow">Get in touch</p>
  <h2 id="contact-heading">Open to new challenges.</h2>
  <p>I’m seeking research opportunities and internships where I can contribute to software, embedded systems, and intelligent robots.</p>
  <a class="text-link" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a>
</section>
