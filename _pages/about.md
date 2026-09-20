---
layout: profile
permalink: /
---

<section class="profile-section" id="projects" aria-labelledby="work-heading">
  <div class="section-heading"><h2 id="work-heading">Projects & experience</h2></div>
  {% include profile-projects.html detailed=true %}
</section>

<section class="profile-section" id="education" aria-labelledby="education-heading">
  <div class="section-heading"><h2 id="education-heading">Education</h2><span class="entry-date">{{ site.data.profile.education.period }}</span></div>
  <h3>{{ site.data.profile.education.institution }}</h3>
  <p class="education-degree">{{ site.data.profile.education.degree }}</p>
  <p class="muted">{{ site.data.profile.education.focus }}</p>
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
  <p>{{ site.data.profile.interests }}</p>
</section>

<section class="profile-section" id="awards" aria-labelledby="recognition-heading">
  <div class="section-heading"><h2 id="recognition-heading">Recognition</h2></div>
  <ul class="recognition-list">
    {% for award in site.data.profile.awards %}
    <li><div><span class="award-name">{{ award.name }}</span><span class="muted">{{ award.institution }}</span></div><span class="entry-date">{{ award.period }}</span></li>
    {% endfor %}
  </ul>
</section>
