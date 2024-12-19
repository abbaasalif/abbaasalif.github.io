---
layout: default
title: Publications
permalink: /publications/
---
<style>
.publication-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
}
.publication-image {
    width: 55%;
    height: auto;
}
.publication-content h3 {
    margin: 0;
    font-size: 1.2em;
}
.publication-content p {
    margin: 5px 0;
}

</style>
<p>A full list of publications can be seen on my <a href="https://scholar.google.com/citations?user=m322lP4AAAAJ&hl=en">Google Scholar author page</a>.</p>

{% assign grouped_pubs = site.data.publications | group_by: "category" %}
{% for category in grouped_pubs %}
## {{ category.name }}

{% for pub in category.items %}
<div class="publication-item">
    <img src="{{ pub.image }}" alt="{{ pub.title }}" class="publication-image" />
    <div class="publication-content">
        <h3><a href="{{ pub.link }}">{{ pub.title }}</a></h3>
        <p>
            {% assign authors = pub.authors | split: ", " %}
            {% for author in authors %}
                {% if author contains "Abbaas Nishar" %}
                    <strong>{{ author }}</strong>{% if forloop.last == false %}, {% endif %}
                {% else %}
                    {{ author }}{% if forloop.last == false %}, {% endif %}
                {% endif %}
            {% endfor %}
        </p>
        <p><em>{{ pub.venue }}</em>, {{ pub.year }}</p>
    </div>
</div>
{% endfor %}
{% endfor %}
