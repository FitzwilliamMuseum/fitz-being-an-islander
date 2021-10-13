---
title: Our research
layout: news
permalink: /research/
cards: true
---
<div class="container mb-3">
  <div class="row">
{% assign rows = site.research.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
{% assign offset = forloop.index0 | times: 2 %}
{% assign sorted = site.research | sort:"order" %}
    {% for article in sorted limit:2 offset:offset %}
    <div class="col-md-4 mb-3">
      <div class="card h-100" >
        <a href="{{ article.url }}" class="stretched-link">
          <img class="card-img-top" src="{{site.baseurl}}{{article.image}}" alt="Card image cap" />
        </a>
        <div class="card-body">
          <h3 class="lead mt-2">
            <a href="{{ article.url }}" class="stretched-link">{{article.title}}</a>
          </h3>
        </div>
      </div>
    </div>
    {% endfor %}
  {% endfor %}
  </div>
</div>
