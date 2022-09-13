---
layout: funders
title: Our team
order: 2
image: https://fitz-cms-images.s3.eu-west-2.amazonaws.com/anastasia_bai-copy.jpg
caption: "Principal Investigator: Anastasia Christophilopoulou"
cards: true
---

<div class="container mb-3">
  <div class="row">
{% assign rows = site.team.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
{% assign offset = forloop.index0 | times: 2 %}
{% assign sorted = site.team | sort:"order" %}
    {% for article in sorted limit:2 offset:offset %}
    <div class="col-md-4 mb-3">
      <div class="card h-100" >
        <a href="{{ article.url }}" class="stretched-link">
        {% if article.image != blank %}
          <img class="card-img-top" src="{{site.baseurl}}{{article.image}}" alt="A profile image of {{article.title}}" />
        {% else %}
          <img class="card-img-top" src="https://data.fitzmuseum.cam.ac.uk/imagestore/ant/ant39/preview_GR_19_1917_20_281_29.jpg" alt="A stand in image for a missing profile" />
        {% endif %}
        </a>
        <div class="card-body">
          <h3 class="lead mt-2">
            <a href="{{ article.url }}" class="stretched-link">{{article.title}}</a>
          </h3>
          {% if article.job-title %}
          <p class="text-muted">{{ article.job-title}}</p>
          {% endif %}
          {% if article.institution %}
            <p>Institution: {{ article.institution}}</p>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  {% endfor %}
  </div>
</div>
