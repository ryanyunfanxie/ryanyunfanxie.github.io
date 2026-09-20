---
layout: profile
permalink: /
---

<section class="profile-section" id="projects" aria-labelledby="work-heading">
  <div class="section-heading"><h2 id="work-heading">Projects & Experience</h2></div>
  {% include profile-projects.html detailed=true %}
</section>

<section class="profile-section" id="education" aria-labelledby="education-heading">
  <div class="section-heading"><h2 id="education-heading">Education</h2></div>
  <div class="education-entry">
    <span class="entry-date">{{ site.data.profile.education.period }}</span>
    <h3 class="entry-title">{{ site.data.profile.education.degree }}&#44; <a href="{{ site.data.profile.education.url }}">{{ site.data.profile.education.institution }} &#40;{{ site.data.profile.education.short_name }}&#41;</a></h3>
  </div>
</section>

<section class="profile-section" id="skills" aria-labelledby="skills-heading">
  <div class="section-heading"><h2 id="skills-heading">Skills</h2></div>
  <dl class="skills-list">
    {% for group in site.data.profile.skills %}
    <div><dt>{{ group.name }}</dt><dd>{{ group.items | join: ', ' }}</dd></div>
    {% endfor %}
    <div><dt>Languages</dt><dd>{{ site.data.profile.languages | join: ', ' }}</dd></div>
  </dl>
</section>

<section class="profile-section" id="awards" aria-labelledby="award-heading">
  <div class="section-heading"><h2 id="award-heading">Awards</h2></div>
  <ul class="recognition-list">
    {% for award in site.data.profile.awards %}
    <li><span class="entry-date">{{ award.period }}</span><span>{{ award.summary }}</span></li>
    {% endfor %}
  </ul>
</section>
