---
layout: profile
permalink: /
title: "Hi, I’m Ryan."
eyebrow: "Computer engineering · HKUST"
subtitle: "Building software that connects intelligence with the physical world."
description: "Yunfan (Ryan) Xie is a Computer Engineering undergraduate at HKUST, working on embedded systems, robotics, edge AI, and software development."
redirect_from:
  - /about/
  - /about.html
---

<div class="intro-copy">
  <p>I’m <strong>Yunfan (Ryan) Xie</strong>, a Computer Engineering undergraduate at the Hong Kong University of Science and Technology, with a minor in Robotics and an extended major in Artificial Intelligence.</p>
  <p>I enjoy turning algorithms into working systems: developing autonomous robot control, deploying AI models on embedded hardware, and building useful web applications. My interests lie in <strong>embedded systems, robotics, and algorithms</strong>.</p>
</div>
<div class="profile-actions">
  <a class="profile-button" href="{{ '/projects/' | relative_url }}">Explore my projects <span aria-hidden="true">↗</span></a>
  <a class="profile-button profile-button--secondary" href="{{ site.resume_path | relative_url }}" download>Download résumé <span class="file-label">PDF</span></a>
</div>

<section class="profile-section" aria-labelledby="work-heading">
  <div class="section-heading"><h2 id="work-heading">Selected projects</h2><a class="text-link" href="{{ '/projects/' | relative_url }}">View details <span aria-hidden="true">→</span></a></div>
  {% include profile-projects.html %}
</section>

<section class="profile-section" aria-labelledby="education-heading">
  <div class="section-heading"><h2 id="education-heading">Education</h2><span class="entry-date">{{ site.data.profile.education.period }}</span></div>
  <h3>{{ site.data.profile.education.institution }}</h3>
  <p class="education-degree">{{ site.data.profile.education.degree }}</p>
  <p class="muted">{{ site.data.profile.education.focus }}</p>
  <dl class="academic-stats">
    <div><dt>Cumulative grade average</dt><dd>{{ site.data.profile.education.cga }}</dd></div>
    <div><dt>Major grade average</dt><dd>{{ site.data.profile.education.major_cga }}</dd></div>
  </dl>
</section>

<section class="profile-section" aria-labelledby="recognition-heading">
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
