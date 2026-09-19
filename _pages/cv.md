---
layout: profile
title: "Curriculum vitae"
eyebrow: "Background & skills"
subtitle: "Computer engineering, robotics, and software development."
permalink: /cv/
description: "Education, technical skills, projects, and awards of Yunfan (Ryan) Xie, a Computer Engineering undergraduate at HKUST."
redirect_from:
  - /resume
  - /resume/
  - /cv-json/
  - /resume-json
---

<div class="profile-actions">
  <a class="profile-button" href="{{ site.resume_path | relative_url }}" download>Download résumé <span class="file-label">PDF</span></a>
  <a class="text-link" href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
</div>

<section class="profile-section" aria-labelledby="cv-education">
  <div class="section-heading"><h2 id="cv-education">Education</h2><span class="entry-date">{{ site.data.profile.education.period }}</span></div>
  <h3>{{ site.data.profile.education.institution }}</h3>
  <p>{{ site.data.profile.education.degree }}<br><span class="muted">{{ site.data.profile.education.focus }}</span></p>
  <dl class="academic-stats">
    <div><dt>Cumulative grade average</dt><dd>{{ site.data.profile.education.cga }}</dd></div>
    <div><dt>Major grade average</dt><dd>{{ site.data.profile.education.major_cga }}</dd></div>
  </dl>
  <h3 class="small-heading">Relevant coursework</h3>
  <p>{{ site.data.profile.education.coursework | join: ' · ' }}</p>
</section>

<section class="profile-section" aria-labelledby="cv-skills">
  <div class="section-heading"><h2 id="cv-skills">Technical skills</h2></div>
  <dl class="skills-list">
    {% for group in site.data.profile.skills %}
    <div><dt>{{ group.name }}</dt><dd>{{ group.items | join: ', ' }}</dd></div>
    {% endfor %}
  </dl>
</section>

<section class="profile-section" aria-labelledby="cv-projects">
  <div class="section-heading"><h2 id="cv-projects">Project experience</h2></div>
  {% include profile-projects.html detailed=true %}
</section>

<section class="profile-section" aria-labelledby="cv-awards">
  <div class="section-heading"><h2 id="cv-awards">Awards & achievements</h2></div>
  <ul class="recognition-list">
    {% for award in site.data.profile.awards %}
    <li><div><strong>{{ award.name }}</strong><span class="muted">{{ award.institution }}</span></div><span class="entry-date">{{ award.period }}</span></li>
    {% endfor %}
  </ul>
</section>

<section class="profile-section" aria-labelledby="cv-languages">
  <div class="section-heading"><h2 id="cv-languages">Languages & interests</h2></div>
  <p>{{ site.data.profile.languages | join: ' · ' }}</p>
  <p><strong>Technical interests:</strong> {{ site.data.profile.interests | join: ', ' }}.</p>
</section>
