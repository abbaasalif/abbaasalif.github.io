---
layout: default
title: Projects
permalink: /projects/
---
{% capture repo_name %}abbaasalif/drl_project{% endcapture %}
{% assign repo = site.github.public_repositories | where: "name", repo_name | first %}

{{ repo.name }}

{{ repo.description }}

[Visit on GitHub]({{ repo.html_url }})

## README
{% assign readme_url = "https://raw.githubusercontent.com/" | append: repo_name | append: "/main/README.md" %}
{% capture readme_content %}
{{ readme_url | http | markdownify }}
{% endcapture %}
{{ readme_content }}
