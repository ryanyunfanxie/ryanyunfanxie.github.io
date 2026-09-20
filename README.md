# Yunfan Xie (Ryan) - personal website

Single-page personal website published at <https://ryanyunfanxie.github.io>.

## Content

- `_data/profile.yml`: projects, education, skills, awards, and languages.
- `_pages/about.md`: homepage sections and contact content.
- `_layouts/profile.html`: top profile and portrait.
- `_data/navigation.yml`: same-page navigation links.
- `assets/css/main.scss`: all site styles.
- `assets/js/site.js`: theme and mobile menu behavior.

## Preview

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

## Validate

```sh
bundle exec jekyll build --strict_front_matter
```

The GitHub Actions workflow runs the same build for pushes and pull requests.
