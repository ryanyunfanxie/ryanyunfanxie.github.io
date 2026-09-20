# Yunfan (Ryan) Xie — personal website

Personal academic website at https://ryanyunfanxie.github.io, built with Jekyll and Academic Pages.

## Update content

- `_data/profile.yml`: education, project experience, skills, awards, and languages. Rendered together on the single-page homepage.
- `_pages/about.md`: all homepage sections, including full project details, education, skills, awards, and contact.
- `_data/navigation.yml`: same-page section anchors in the header.
- `_config.yml`: site identity, email, resume path, and build settings.
- `files/resume_ryanyunfanxie_en.pdf`: downloadable resume. Replace this file when updating the PDF.
- `_sass/layout/_profile.scss`: personal layout and light/dark styles.
- `_layouts/profile.html`: shared profile sidebar and page structure.

Template sample posts, papers, talks, teaching entries, and guide pages are retained in source but excluded in `_config.yml`. Remove the relevant exclusions only after replacing those examples with real content. Legacy project, portfolio, CV, and sitemap URLs redirect to the homepage; they do not contain separate content pages. The PDF resume remains downloadable.

## Preview locally

Use Ruby and Bundler (on Windows, WSL works):

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000. Restart the server after changing `_config.yml`.

## Validate

```sh
bundle exec jekyll build --strict_front_matter
```

The Jekyll build workflow checks pushes to `master` and `main`, pull requests, and manual runs. Publishing is controlled separately by this repository’s GitHub Pages settings.

## Credits

Based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), which extends [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). See `LICENSE`.
