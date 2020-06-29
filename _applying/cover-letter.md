# Cover Letters

The cover letter is the least important element, but if you get it wrong
your entire application may be mistakenly misfiled and not considered. The
key points to cover include who you are, what you are applying for (include
any special numbers) and what you are including. If someone on the inside
told you to apply, mention that. Here are concrete examples:

{% if site.data.people %}
{% assign sorted_id = site.data.people | sort: 'id' %}
{%- for dossier in sorted_id -%}
{% for item in dossier.cover %}
{%- capture src -%}/assets/materials/{{ dossier.id | uri_escape }}/{{ item.file | uri_escape }}{%- endcapture -%}
{%- assign url = src | relative_url -%}
- [{{dossier.display}} Cover Letter {% if item.description %}({{ item.description | strip }}){% endif %}]({{ url }})
{% endfor %}
{%- endfor -%}
{% endif %}
